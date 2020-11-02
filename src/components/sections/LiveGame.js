import React from "react";
import { status, isNotEmptyObj, displaySegment } from "../../utils/utilities";
import PlayersPrint from "./../elements/PrintPlayers";
import Button from "./../elements/Button";
import PlayerInfo from "../elements/PlayerInfo";
import GameStats from "./GameStats";
import Loading from "./../../assets/loading.svg";
import dayjs from "dayjs";
import CheckBox from "react-animated-checkbox";

export default (props) => (
  <>
    {console.log("live game ", props)}
    <GameStats
      hasBgColor
      className="illustration-section-07"
      gameInfo={props.gameInfo}
      players={props.players}
    />

    <div style={{ justifyContent: "center", marginTop: "3em " }}>
      {props.connectToWallet()}
    </div>
    <>
      {props.userStatus === status.registered && (
        <RegisteredPlayer
          gameInfo={props.gameInfo}
          playerInfo={props.playerInfo}
          makeDeposit={props.makeDeposit}
          players={props.players}
          withdraw={props.withdraw}
          loadingState={props.loadingState}
          redeem={props.redeem}
        />
      )}

      {!props.gameInfo.isGameCompleted && (
        <div style={{ justifyContent: "center", marginTop: "3em " }}>
          {props.playerInfo.address && <h4> The Competition</h4>}
          {props.players &&
            PlayersPrint(props.players, props.playerInfo.address).length <
              1 && (
              <p>
                Your have elimated the competition
                <span role="img" aria-label="muscle emoji">
                  💪
                </span>
              </p>
            )}
          {props.players &&
            PlayersPrint(props.players, props.playerInfo.address)}
        </div>
      )}
      {props.gameInfo.isGameCompleted && (
        <div style={{ justifyContent: "center", marginTop: "3em " }}>
          {props.playerInfo.address && <h4>The Winners! 🥳</h4>}
          {props.players && PlayersPrint(props.players)}
        </div>
      )}
      {props.userStatus === status.unregistered && <UnRegisteredPlayer />}
    </>
  </>
);

const RegisteredPlayer = (props) => {
  const hasNotPaidThisSegment =
    props.playerInfo.mostRecentSegmentPaid !== props.gameInfo.currentSegment;
  const didNotMissPreviousSegment =
    props.playerInfo.mostRecentSegmentPaid > props.gameInfo.currentSegment - 2;
  {
    console.log("Registered players", props);
  }

  return (
    <div>
      {isNotEmptyObj(props.playerInfo) && (
        <PlayerInfo
          playerInfo={props.playerInfo}
          players={props.players}
          isGameCompleted={props.gameInfo.isGameCompleted}
          lastSegment={props.gameInfo.lastSegment}
        />
      )}
      {/* <AddEmail addr={props.playerInfo.address} /> */}
      {hasNotPaidThisSegment &&
        didNotMissPreviousSegment &&
        !props.gameInfo.isGameCompleted && (
          <div style={{ marginTop: "20px" }}>
            <Button
              tag="a"
              color="primary"
              wideMobile
              onClick={props.makeDeposit}
            >
              {props.loadingState.makeDeposit ? (
                <>
                  {" "}
                  Loading{" "}
                  <img
                    src={Loading}
                    alt="loading"
                    className="loading-img-button"
                    style={{ width: "28px", paddingLeft: "10px" }}
                  />
                </>
              ) : (
                ` Deposit ${props.gameInfo.segmentPayment} DAI`
              )}
            </Button>
          </div>
        )}
      {props.gameInfo.isGameCompleted && (
        <>
          <p> {!props.gameInfo.redeemed && <span>Call this first</span>}</p>
          <p>
            <Button
              style={{ margin: "20px" }}
              tag="a"
              color={props.gameInfo.redeemed ? "hjsdgf" : "secondary"}
              wideMobile
              onClick={props.redeem}
            >
              Redeem
            </Button>

            <CheckBox
              checked={props.gameInfo.redeemed}
              checkBoxStyle={{
                checkedColor: "#8E79FC",
                size: 20,
                unCheckedColor: "#b8b8b8",
              }}
              duration={400}
            />
          </p>
        </>
      )}
      {props.gameInfo.isGameCompleted && !props.playerInfo.withdrawn && (
        <Button
          style={{ margin: "20px" }}
          tag="a"
          color="primary"
          wideMobile
          onClick={props.withdraw}
        >
          {props.loadingState.withdraw ? (
            <>
              {" "}
              Loading{" "}
              <img
                src={Loading}
                alt="loading"
                className="loading-img-button"
                style={{ width: "28px", paddingLeft: "10px" }}
              />
            </>
          ) : (
            `Withdraw your funds`
          )}
        </Button>
      )}
      {!props.gameInfo.isGameCompleted && (
        <p>
          Time to next payment interval{" "}
          {dayjs().to(props.gameInfo.nextSegmentEnd)}
        </p>
      )}
      {/* {isNotEmptyObj(props.gameInfo) && <GameStats gameInfo={props.gameInfo} />} */}
    </div>
  );
};

const UnRegisteredPlayer = (props) => (
  <>
    <p>Too bad you missed out, sign up to be the first to join the next one</p>
  </>
);
