import React from "react";
import Loading from './../elements/Loading';
import { Button, Badge, Row  } from "react-bootstrap";
import PlayersPrint from "./../elements/PrintPlayers";
import {status, isNotEmptyObj, brandColors} from '../../utils/utilities';
import PlayerInfo from '../elements/PlayerInfo';
import dayjs from "dayjs";


const JoinableGame = (props) => (
  <>
    <div>
      <h5>Rules</h5>
      <p>Only on kovan at the moment.</p>

    </div>
  
    {/* TODO add bac in when reading iterable players from the graph */}
    {/* {props.usersAddress && props.userStatus === status.unregistered && ( */}
      {true && (
      <>
        {!props.loadingState.joinGame && (
          <Button className="montserrat" onClick={props.joinGame}>Join Game</Button>
        )}
        {props.loadingState.joinGame && <Loading></Loading>}
        {props.success.joinGame && <h1>🎉 Success</h1>}
      </>
    )}
    {isNotEmptyObj(props.playerInfo) && <PlayerInfo playerInfo={props.playerInfo}/> }
    {props.players && isNotEmptyObj(props.gameInfo)&&(
      <>

          <Row style={{ justifyContent: "center" }}>
      <h3>Game is <Badge variant="primary">launching soon! </Badge></h3>
    </Row>
        <h5 className="cardo">Players in the game</h5>
        {props.gameInfo.firstSegmentStart && (
          <p className="cardo">Game launched :{`${props.gameInfo.firstSegmentStartArr[2]} . ${props.gameInfo.firstSegmentStartArr[1]} . ${props.gameInfo.firstSegmentStartArr[0]}`}</p>
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
        <p>Time left to {props.userStatus === status.registered ? "your first deposit" : "join"}: {dayjs().to(props.gameInfo.firstSegmentEnd)}</p>
        {props.players && PlayersPrint(props.players)}
        {props.connectToWallet()}
      </>
    )}
  </>
);

export default JoinableGame;