import React from "react";
import { PlayerImage } from "./../elements/PrintPlayers";

const PlayerInfo = (props) => {
  const humanMostRecentSegmentPaid =
    parseInt(props.playerInfo.mostRecentSegmentPaid) + 1;
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
          zIndex: "1",
        }}
        className="illustration-element-05 gg-image"
      >
        <PlayerImage
          i={1}
          player={props.playerInfo}
          style={{
            backgroundColor: "white",
            boxShadow: "0 32px 64px rgba(43, 43, 82, 0.24)",
          }}
        />
      </div>
      <div>
        <div>
          <span className="sans_serif" style={{ fontWeight: "600" }}>
            {" "}
            ETH address{" "}
          </span>{" "}
          :{" "}
          <span className="sans_serif" style={{ fontSize: "0.8rem" }}>
            {props.playerInfo.addr}
          </span>
        </div>
        <div>
          <span className="sans_serif" style={{ fontWeight: "600" }}>
            Amount Paid:
          </span>{" "}
          <span className="sans_serif" style={{ fontSize: "0.8rem" }}>
            {props.playerInfo.amountPaid}
          </span>
        </div>
        <div>
          <span className="sans_serif" style={{ fontWeight: "600" }}>
            Most Recent Segment Paid:
          </span>{" "}
          <span className="sans_serif" style={{ fontSize: "0.8rem" }}>
            {humanMostRecentSegmentPaid}
          </span>
        </div>
        <div>
          <span className="sans_serif" style={{ fontWeight: "600" }}>
            Players Status:
          </span>{" "}
          <span className="sans_serif" style={{ fontSize: "0.8rem" }}>
            {props.playerInfo.isStillInGame
              ? "live 🎉"
              : "sorry you missed a payment 😢"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
