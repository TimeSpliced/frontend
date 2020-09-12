import React from "react";
import { status, isNotEmptyObj } from '../../utils/utilities';
import PlayersPrint from "./../elements/PrintPlayers";
import { Row, Button, Badge } from "react-bootstrap";
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
    <Row style={{ justifyContent: "center" }}>
      <h3 className="cardo">This game is : <Badge style={{fontFamily: "montserrat", fontWeight : "400"}} variant="success">live </Badge></h3>
    </Row>
    <Row style={{ justifyContent: "center" }}>
      <p className="cardo"> Game Timeframe : {props.gameInfo.currentSegment}</p>
    </Row>
    <Row style={{ justifyContent: "center" }}>{props.connectToWallet()}</Row>
    <>
      {props.userStatus === status.registered && (
        <RegisteredPlayer 
          gameInfo={props.gameInfo} 
          playerInfo={props.playerInfo} 
          makeDeposit={props.makeDeposit}/>
      )}
      <Row style={{ justifyContent: "center" }}>
        {props.players && PlayersPrint(props.players)}
      </Row>
      {props.userStatus === status.unregistered && <UnRegisteredPlayer />}
    </>
  </div>
);

const RegisteredPlayer = (props) => {
  return (
    <>
      {isNotEmptyObj(props.playerInfo) && (
        <PlayerInfo playerInfo={props.playerInfo}  />
      )}
      { true && <Row> <Button style={{marginLeft : "auto", marginRight : "auto", marginTop : "20px",  marginBottom : "20px"}} onClick={props.makeDeposit}>Deposit {props.gameInfo.segmentPayment} DAI</Button></Row>}
      {isNotEmptyObj(props.gameInfo) && <GameStats gameInfo={props.gameInfo} />}
      
    </>
  );
};

const UnRegisteredPlayer = (props) => (
  <>
    <p>Too bad you missed out, sign up to be the first to join the next one</p>
  </>
);
