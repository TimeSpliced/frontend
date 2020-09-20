import React from "react";
import { status, isNotEmptyObj } from "../../utils/utilities";
import PlayersPrint from "./../elements/PrintPlayers";
import {  Badge } from "react-bootstrap";
import Button from "./../elements/Button";
import PlayerInfo from "../elements/PlayerInfo";

const GameStats = (props) => (
  <div>
    <p>Game Started on {props.gameInfo.firstSegmentStart.toString()}</p>
  </div>
);

export default (props) => (
  <div
    style={{ textAlign: "center", margin: "auto", justifyContent: "center" }}
  >
    <div style={{ justifyContent: "center" }}>
      <h3 className="cardo">
        This game is :{" "}
        <Badge
          style={{ fontFamily: "montserrat", fontWeight: "400" }}
          variant="success"
        >
          live{" "}
        </Badge>
      </h3>
    </div>
    <div style={{ justifyContent: "center" }}>
      <p className="cardo"> Game Timeframe : {props.gameInfo.currentSegment}</p>
    </div>
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
  </div>
);

const RegisteredPlayer = (props) => {
  return (
    <>
      {isNotEmptyObj(props.playerInfo) && (
        <PlayerInfo playerInfo={props.playerInfo} />
      )}
      {true && (
        <div>
          <Button
            tag="a" color="primary"  wideMobile 
            onClick={props.makeDeposit}
          >
            Deposit {props.gameInfo.segmentPayment} DAI
          </Button>
        </div>
      )}
      {isNotEmptyObj(props.gameInfo) && <GameStats gameInfo={props.gameInfo} />}
    </>
  );
};

const UnRegisteredPlayer = (props) => (
  <>
    <p>Too bad you missed out, sign up to be the first to join the next one</p>
  </>
);
