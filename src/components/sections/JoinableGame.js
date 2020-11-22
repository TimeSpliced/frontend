import React from "react";
import Button from "./../elements/Button";
import PlayersPrint from "./../elements/PrintPlayers";
import { status, isNotEmptyObj, brandColors } from "../../utils/utilities";
import PlayerInfo from "../elements/PlayerInfo";
import dayjs from "dayjs";
import AddEmail from "./../elements/AddEmail";
import GameStats from "./GameStats";
import Loading from "./../../assets/loading.svg";
import EmergencyWithdraw from "./../elements/EmergencyWithdraw";
import KovanFaucet from "./../elements/KovanFaucet";
import Schedule from "./../elements/Schedule";
import classNames from "classnames";
import { JoinError } from "./../elements/Errors";
import SuccessModal from "./../elements/SuccessModal";
// import CountdownContainer from "./../elements/countdown-container";

const JoinableGame = (props) => (
  <div>
    <SuccessModal
      close={props.toggleSuccess.bind(null, "joinGame")}
      show={props.success.joinGame}
    />
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
                maxWidth: "300px",
                margin: "auto",
                marginTop: "10px",
                fontSize: "0.9rem",
              }}
            >
              *You will need Kovan{" "}
              <a
                className="kovan-link"
                style={{ textDecoration: "none" }}
                href="https://kovan.faucet.enjin.io/"
                target="blank"
                rel="noopener noreferrer nofollow"
              >
                ETH
              </a>{" "}
              and{" "}
              <a
                className="kovan-link"
                style={{ textDecoration: "none" }}
                href="https://testnet.aave.com/faucet"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                DAI
              </a>
              . Requires two signatures from your wallet.
            </p>
          </>
        )}
        {props.errors.joinGame && <JoinError />}
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
    <div className="connect-to-wallet" style={{ margin: "20px" }}>
      {props.connectToWallet()}
    </div>
    {props.players && isNotEmptyObj(props.gameInfo) && (
      <div>
        {props.gameInfo.firstSegmentStart && (
          <p className="cardo" style={{ marginTop: "10px" }}>
            Game launched on{" "}
            <span>
              {`${props.gameInfo.firstSegmentStartArr[2]} . ${
                props.gameInfo.firstSegmentStartArr[1] + 1
              } . ${props.gameInfo.firstSegmentStartArr[0]}`}
            </span>
          </p>
        )}
        <h3 style={{ fontSize: "2rem" }}>
          Pool Closes {dayjs().to(props.gameInfo.firstSegmentEnd)}
        </h3>
        {props.userStatus === status.registered && (
          <EmergencyWithdraw
            emergencyWithdraw={props.emergencyWithdraw}
            loadingState={props.loadingState}
          />
        )}

        <Schedule gameInfo={props.gameInfo} />
        <section style={{ paddingTop: "80px" }}>
          <h3>Players in the game</h3>
          <p style={{ fontSize: "0.7rem" }}>
            Customize your avatar at{" "}
            <a href="https://3box.io/hub" target="_blank" rel="noopen">
              {" "}
              3Box Hub
            </a>
          </p>
          {props.players && PlayersPrint(props.players)}
        </section>
        <KovanFaucet />
      </div>
    )}
  </div>
);

export default JoinableGame;
