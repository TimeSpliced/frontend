import React from "react";
import { status, isNotEmptyObj, displaySegment } from "../../utils/utilities";
import PlayersPrint from "./../elements/PrintPlayers";
import Button from "./../elements/Button";
import PlayerInfo from "../elements/PlayerInfo";
import GameStats from "./GameStats";

// const GameStats = (props) => (
//   <div>
//     <p>Game Started on {props.gameInfo.firstSegmentStart.toString()}</p>
//   </div>
// );

export default (props) => (
  <>
    <GameStats
      hasBgColor
      className="illustration-section-07"
      gameInfo={props.gameInfo}
      players={props.players}
    />

    <div style={{ justifyContent: "center" }}>{props.connectToWallet()}</div>
    <>
      {props.userStatus === status.registered && (
        <RegisteredPlayer
          gameInfo={props.gameInfo}
          playerInfo={props.playerInfo}
          makeDeposit={props.makeDeposit}
        />
      )}

      <div style={{ justifyContent: "center" }}>
        {props.players && PlayersPrint(props.players)}
      </div>
      {props.userStatus === status.unregistered && <UnRegisteredPlayer />}
    </>
  </>
);

const RegisteredPlayer = (props) => {
  return (
    <>
      {isNotEmptyObj(props.playerInfo) && (
        <PlayerInfo playerInfo={props.playerInfo} />
      )}
      {props.playerInfo.mostRecentPaid > props.gameInfo.currentSegment && (
        <div>
          <Button
            tag="a"
            color="primary"
            wideMobile
            onClick={props.makeDeposit}
          >
            Deposit {props.gameInfo.segmentPayment} DAI
          </Button>
        </div>
      )}
      {/* {isNotEmptyObj(props.gameInfo) && <GameStats gameInfo={props.gameInfo} />} */}
    </>
  );
};

const UnRegisteredPlayer = (props) => (
  <>
    <p>Too bad you missed out, sign up to be the first to join the next one</p>
  </>
);
