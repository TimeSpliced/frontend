import React from "react";
import Loading from "./../elements/Loading";
import Button  from "./../elements/Button";
import PlayersPrint from "./../elements/PrintPlayers";
import { status, isNotEmptyObj, brandColors } from "../../utils/utilities";
import PlayerInfo from "../elements/PlayerInfo";
import dayjs from "dayjs";
import SignupForm from './SignupForm';
import SectionHeader from './partials/SectionHeader';
import CountdownContainer from './../elements/countdown-container';

const JoinableGame = (props) => (
  <div className="section-inner">
        <SectionHeader
              tag="h1"
              data={{
                title: "Our saving pool closes in"
                // paragraph : "Don't miss out, sign up."
              }}
              className="center-content"
            />
            <CountdownContainer
              timeTillDate="08 16 2020 , 6:00 am"
              timeFormat="MM DD YYYY, h:mm a"
            />
    {console.log(props)}
    <div>
      <h5>Rules</h5>
      <p>Only on kovan at the moment.</p>
    </div>

    {/* TODO add bac in when reading iterable players from the graph */}
    {/* {props.usersAddress && props.userStatus === status.unregistered && ( */}
    {true && (
      <>
        {props.usersAddress && props.userStatus !== status.registered && (
          <Button tag="a" color="primary"  wideMobile onClick={props.joinGame}>
            Join Game
          </Button>
        )}
        {props.loadingState.joinGame && <Loading></Loading>}
        {props.success.joinGame && <h1>🎉 Success</h1>}
      </>
    )}
    {isNotEmptyObj(props.playerInfo) && (
      <PlayerInfo playerInfo={props.playerInfo} />
    )}
    {props.players && isNotEmptyObj(props.gameInfo) && (
      <>

        <h5 className="cardo">Players in the game</h5>
        {props.gameInfo.firstSegmentStart && (
          <p className="cardo">
            Game launched :
            {`${props.gameInfo.firstSegmentStartArr[2]} . ${props.gameInfo.firstSegmentStartArr[1]} . ${props.gameInfo.firstSegmentStartArr[0]}`}
          </p>
        )}
        {/* {props.gameInfo.firstSegmentEnd && (
          <p>Join by: {props.gameInfo.firstSegmentEnd.toString()}</p>
        )} */}
        {props.gameInfo.segmentLength && props.gameInfo.segmentPayment && (
          <p>
            Deposit {props.gameInfo.segmentPayment} DAI every{" "}
            {props.gameInfo.segmentLength.asDays()} days
          </p>
        )}
        <p>
          Time left to{" "}
          {props.userStatus === status.registered
            ? "your first deposit"
            : "join"}
          : {dayjs().to(props.gameInfo.firstSegmentEnd)}
        </p>
        <p>Customize your avatar at <a href="https://3box.io/hub" target="_blank" rel="noopen"> 3Box Hub</a></p>

        {props.players && PlayersPrint(props.players)}
        {props.connectToWallet()}
      </>
    )}
  </div>
);

export default JoinableGame;
