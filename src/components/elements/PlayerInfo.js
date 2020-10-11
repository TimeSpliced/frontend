import React from "react";
import { PlayerImage } from "./../elements/PrintPlayers";
import AddEmail from "./AddEmail";
import { weiToERC20 } from "./../../utils/utilities";

const PlayerInfo = (props) => {
  const humanMostRecentSegmentPaid =
    parseInt(props.playerInfo.mostRecentSegmentPaid) + 1;
  const getPlayerFromPlayers = () =>
    props.players.filter((player) => {
      return (
        player.address.toLowerCase() === props.playerInfo.addr.toLowerCase()
      );
    });
  const valueStyle = {
    backgroundColor: "white",
    marginLeft: "20px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "3px",
    fontFamily: "monospace",
    fontSize: "0.85rem",
    marginLeft: "0px",
  };
  return (
    <div
      className="tiles-item-inner"
      style={{
        flexBasis: "500px",
        maxWidth: "500px",
        margin: "auto",
        textAlign: "left",
        fontFamily: "monserrat !important",
        backgroundColor: "#F6F8FE",
        padding: "28px",
        position: "relative",
        // boxShadow: "0 32px 64px rgba(43,43,82,0.24)",
      }}
    >
      <h3>Your Profile</h3>
      <div
        style={{
          height: "100px",
          position: "absolute",
          right: "26px",
          top: "0px",
          zIndex: "0",
        }}
        className="illustration-element-05 gg-image"
      >
        {getPlayerFromPlayers()[0] && (
          <PlayerImage
            i={1}
            player={getPlayerFromPlayers()[0]}
            style={{
              backgroundColor: "white",
              boxShadow: "0 32px 64px rgba(43, 43, 82, 0.24)",
            }}
          />
        )}
      </div>
      <div>
        <div>
          <span
            className="sans_serif"
            style={{ fontWeight: "600", fontSize: "0.85rem" }}
          >
            {" "}
            ETH address{" "}
          </span>{" "}
          : <span style={valueStyle}>{props.playerInfo.addr}</span>
        </div>
        <div>
          <span
            className="sans_serif"
            style={{ fontWeight: "600", fontSize: "0.85rem" }}
          >
            Amount Paid:
          </span>{" "}
          <span style={valueStyle}>
            {weiToERC20(props.playerInfo.amountPaid)} DAI
          </span>
        </div>
        <div>
          <span
            className="sans_serif"
            style={{ fontWeight: "600", fontSize: "0.85rem" }}
          >
            Most Recent Segment Paid:
          </span>{" "}
          <span style={valueStyle}>{humanMostRecentSegmentPaid}</span>
        </div>
        <div>
          <span
            className="sans_serif"
            style={{ fontWeight: "600", fontSize: "0.85rem" }}
          >
            Players Status:
          </span>{" "}
          <span style={valueStyle}>
            {props.playerInfo.isStillInGame
              ? "live 🎉"
              : "sorry you missed a payment 😢"}
          </span>
        </div>
      </div>

      <AddEmail addr={props.playerInfo.addr} />
    </div>
  );
};

export default PlayerInfo;
