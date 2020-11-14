import React from "react";
import Button from "./../elements/Button";
import PlayersPrint from "./../elements/PrintPlayers";
import { status, isNotEmptyObj, brandColors } from "../../utils/utilities";
import PlayerInfo from "../elements/PlayerInfo";
import dayjs from "dayjs";
import SignupForm from "./SignupForm";
import SectionHeader from "./partials/SectionHeader";
import AddEmail from "./../elements/AddEmail";
import GameStats from "./GameStats";
import Loading from "./../../assets/loading.svg";
import EmergencyWithdraw from "./../elements/EmergencyWithdraw";
import KovanFaucet from "./../elements/KovanFaucet";
import KovanFauctet from "./../elements/KovanFaucet";
// import CountdownContainer from "./../elements/countdown-container";

const JoinableGame = (props) => (
  <div>
    {/* <SectionHeader
      tag="h1"
      data={{
        title: "Our saving pool closes",
        paragraph: dayjs().to(props.gameInfo.firstSegmentEnd),
      }}
      headerStyle={{ paddingBottom: "20px" }}
      className="center-content"
    /> */}

    {/* <CountdownContainer
      timeTillDate="08 16 2020 , 6:00 am"
      timeFormat="MM DD YYYY, h:mm a"
    /> */}
    {props.userStatus === status.registered && (
      <AddEmail addr={props.playerInfo.addr} bannerStyle={true} />
    )}

    {props.gameInfo && props.players && (
      <GameStats
        hasBgColor
        className="illustration-section-07"
        gameInfo={props.gameInfo}
        players={props.players}
        hidePlayersStatus={true}
        isJoinable={true}
      />
    )}

    {props.usersAddress && props.userStatus === status.unregistered && (
      <>
        {props.usersAddress && props.userStatus !== status.registered && (
          <>
            <Button tag="a" color="primary" wideMobile onClick={props.joinGame}>
              {props.loadingState.joinGame ? (
                <>
                  Loading{" "}
                  <img
                    src={Loading}
                    alt="loading"
                    className="loading-img-button"
                    style={{ width: "28px", paddingLeft: "10px" }}
                  />
                </>
              ) : (
                "Join Game *"
              )}
            </Button>
            <p
              style={{
                maxWidth: "200px",
                margin: "auto",
                marginTop: "10px",
                fontSize: "0.9rem",
              }}
            >
              *You will be asked to sign two requests in your wallet.
            </p>
          </>
        )}
        {props.success.joinGame && <h1>🎉 Success</h1>}
      </>
    )}
    {isNotEmptyObj(props.playerInfo) && (
      <PlayerInfo
        playerInfo={props.playerInfo}
        players={props.players}
        lastSegment={props.gameInfo.lastSegment}
      />
    )}
    {props.players && isNotEmptyObj(props.gameInfo) && (
      <>
        {props.gameInfo.firstSegmentStart && (
          <p className="cardo" style={{ marginTop: "10px" }}>
            Game launched :{" "}
            <span>
              {`${props.gameInfo.firstSegmentStartArr[2]} . ${
                props.gameInfo.firstSegmentStartArr[1] + 1
              } . ${props.gameInfo.firstSegmentStartArr[0]}`}
            </span>
          </p>
        )}
        {/* {props.gameInfo.firstSegmentEnd && (
          <p>Join by: {props.gameInfo.firstSegmentEnd.toString()}</p>
        )} */}
        {/* {props.gameInfo.segmentLength && props.gameInfo.segmentPayment && (
          <p>
            Deposit {props.gameInfo.segmentPayment} DAI every{" "}
            {props.gameInfo.segmentLength.asDays()} days
          </p>
        )} */}
        <p>
          Time left to{" "}
          {props.userStatus === status.registered
            ? "the next payment window."
            : "join"}
          : {dayjs().to(props.gameInfo.firstSegmentEnd)}
        </p>
        {props.userStatus === status.registered && (
          <EmergencyWithdraw
            emergencyWithdraw={props.emergencyWithdraw}
            loadingState={props.loadingState}
          />
        )}

        <div className="connect-to-wallet" style={{ margin: "20px" }}>
          {props.connectToWallet()}
        </div>
        <h5 className="cardo">Players in the game</h5>
        <p style={{ fontSize: "0.7rem" }}>
          Customize your avatar at{" "}
          <a href="https://3box.io/hub" target="_blank" rel="noopen">
            {" "}
            3Box Hub
          </a>
        </p>
        {props.players && PlayersPrint(props.players)}
        <KovanFauctet />
      </>
    )}
  </div>
);

export default JoinableGame;
