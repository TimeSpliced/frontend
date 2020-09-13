import React, { useState, useEffect } from "react";
import GoodGhostingABI from "../ABIs/ABI-goodghosting";
import DaiABI from "../ABIs/ABI-dai";
import Web3 from "web3";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import toArray from "dayjs/plugin/toArray";
import relativeTime from "dayjs/plugin/relativeTime";
import { Button } from "react-bootstrap";
import { useAlert } from "react-alert";
// import parseErr  from 'parse-err';
// import ErrorStackParser from 'error-stack-parser';

import JoinableGame from "./../components/sections/JoinableGame";
import Loading from "../components/elements/Loading";
import LiveGame from "../components/sections/LiveGame";
import {
  status,
  isNotEmptyObj,
  goodGhostingAdress,
  daiAddress,
  getRevertReason,
  parseRevertError,
} from "../utils/utilities";
import RoboHashCredit from "../components/elements/RoboHashCredit";
// import getRevertReason from "eth-revert-reason";

const GamePage = () => {
  const [players, setPlayers] = useState([]);
  const [usersAddress, setUsersAddress] = useState(false);
  const [goodGhostingContract, setGoodGhostingContract] = useState({});
  const [loadingState, setLoadingState] = useState({});
  const [success, setSuccessState] = useState({});
  const [userStatus, setUserStatus] = useState(status.unloaded);
  const [playerInfo, setPlayerInfo] = useState({});
  const [getPlayersStatus, setGetPlayersStatus] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  const [web3, setWeb3] = useState({});

  // const alert = useAlert(); // 🚨 TODO fix

  const getPlayers = async () => {
    const players = await goodGhostingContract.methods.getPlayers().call();
    var playersArr = [];
    for (let key in players) {
      await fetch(`https://ipfs.3box.io/profile?address=${players[key]}`)
        .then((response) => response.json())
        .then((data) => {
          const player = {
            address: players[key].toLowerCase(),
            threeBoxName: data.name,
            threeBoxAvatar: data.image ? data.image[0].contentUrl["/"] : null,
          };
          playersArr.push(player);
        });
    }
    setGetPlayersStatus(true);
    setPlayers(playersArr);
  };

  const getGameInfo = async () => {
    const firstSegmentStart = await goodGhostingContract.methods
      .firstSegmentStart()
      .call();
    const segmentLength = await goodGhostingContract.methods
      .segmentLength()
      .call();
    dayjs.extend(duration);
    dayjs.duration(segmentLength, "s");
    const segmentPayment = await goodGhostingContract.methods
      .segmentPayment()
      .call();
    dayjs.extend(relativeTime);
    dayjs.extend(toArray);

    const currentSegment = await goodGhostingContract.methods
      .getCurrentSegment()
      .call();

    const gameInfo = {
      firstSegmentStart: dayjs.unix(firstSegmentStart),
      firstSegmentStartArr: dayjs.unix(firstSegmentStart).toArray(),
      segmentPayment: segmentPayment / 10 ** 18,
      rawSegmentPayment: segmentPayment,
      segmentLengthInSecs: segmentLength,
      segmentLength: dayjs.duration(segmentLength * 1000),
      currentSegment,
      firstSegmentEnd: dayjs.unix(firstSegmentStart).add(segmentLength, "s"),
      // currentSegmentEnd : dayjs.unix(firstSegmentStart).add(segmentLength * , "s")
    };

    setGameInfo(gameInfo);
  };

  const makeDeposit = async () => {
    if (!isNotEmptyObj(web3)) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    }
    const daiContract = new web3.eth.Contract(DaiABI, daiAddress);
    await daiContract.methods
      .approve(goodGhostingAdress, gameInfo.rawSegmentPayment)
      .send({ from: usersAddress });

    await goodGhostingContract.methods
      .makeDeposit()
      .send({ from: usersAddress })
      .catch(async (error) => {
        const reason = await parseRevertError(error);
        //   alert.show(reason);
      });
  };

  const setUp = () => {
    const web3 = new Web3(window.ethereum);
    const goodGhostingContract = new web3.eth.Contract(
      GoodGhostingABI,
      goodGhostingAdress
    );
    setGoodGhostingContract(goodGhostingContract);
    setWeb3(web3);
  };

  useEffect(() => {
    if (isNotEmptyObj(goodGhostingContract)) {
      // getPlayers();
      getGameInfo();
    }
  }, [goodGhostingContract]);

  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {
    setUserStatus(checkUserStatus());
  }, [usersAddress, players, getPlayersStatus]);

  useEffect(() => {
    getPlayerInfo();
  }, [userStatus]);

  const joinGame = async () => {
    if (!isNotEmptyObj(web3)) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    }

    const daiContract = new web3.eth.Contract(DaiABI, daiAddress);
    await daiContract.methods
      .approve(goodGhostingAdress, gameInfo.rawSegmentPayment)
      .send({ from: usersAddress });

    setLoadingState({ joinGame: true });
    await goodGhostingContract.methods.joinGame().send({ from: usersAddress });
    setSuccessState({ joinGame: true });
    setLoadingState({ joinGame: false });
    setUserStatus(status.registered);

    setTimeout(() => {
      // getPlayers();
      setSuccessState({ joinGame: false });
    }, 2000);
  };

  const getPlayerInfo = async () => {
    if (goodGhostingContract && userStatus == status.registered) {
      const playerInfo = await goodGhostingContract.methods
        .players(usersAddress)
        .call();
      playerInfo.isStillInGame =
        playerInfo.mostRecentSegmentPaid + 1 >= gameInfo.currentSegment;
      setPlayerInfo(playerInfo);
    }
  };

  //🚨TODO replace this with portis or alternative wallet connection
  const getAddressFromMetaMask = async () => {
    if (typeof window.ethereum == "undefined") {
      this.setState({ needToAWeb3Browser: true });
    } else {
      window.ethereum.autoRefreshOnNetworkChange = false; //silences warning about no autofresh on network change
      const accounts = await window.ethereum.enable();
      const address = accounts[0];
      setUsersAddress(address);
    }
  };

  const checkUserStatus = () => {
    if (!usersAddress) {
      return status.unloaded;
    }
    if (!getPlayersStatus) {
      return status.unloaded;
    }
    const isInGame = !!players.filter(
      (player) => player.address === usersAddress
    ).length;
    return isInGame ? status.registered : status.unregistered;
  };

  const connectToWallet = () =>
    !usersAddress && (
      <Button onClick={getAddressFromMetaMask}>Connect MetaMask</Button>
    );

  const isFirstSegment = () => {
    return gameInfo.firstSegmentEnd.valueOf() > Date.now();
  };

  return (
    <main className="site-content">
      <div className="section center-content illustration-section-04">
        {!isNotEmptyObj(gameInfo) && <Loading />}
        {isNotEmptyObj(gameInfo) && (
          <>
            {isFirstSegment() && (
              <JoinableGame
                usersAddress={usersAddress}
                getAddressFromMetaMask={getAddressFromMetaMask}
                players={players}
                loadingState={loadingState}
                joinGame={joinGame}
                success={success}
                userStatus={userStatus}
                connectToWallet={connectToWallet}
                playerInfo={playerInfo}
                gameInfo={gameInfo}
              />
            )}
            {!isFirstSegment() && (
              <LiveGame
                usersAddress={usersAddress}
                players={players}
                userStatus={userStatus}
                connectToWallet={connectToWallet}
                players={players}
                playerInfo={playerInfo}
                gameInfo={gameInfo}
                makeDeposit={makeDeposit}
              />
            )}
            <RoboHashCredit />
          </>
        )}
      </div>
    </main>
  );
};

export default GamePage;
