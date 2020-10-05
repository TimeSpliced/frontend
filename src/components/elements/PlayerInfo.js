import React from "react";

const PlayerInfo = (props) => {
  const humanMostRecentSegmentPaid =
    parseInt(props.playerInfo.mostRecentSegmentPaid) + 1;
  return (
    <div
      style={{
        width: "24rem",
        margin: "auto",
        textAlign: "left",
        fontFamily: "monserrat !important",
        backgroundColor: "#F6F8FE",
        padding: "28px",
        boxShadow: "0 32px 64px rgba(43,43,82,0.24)",
      }}
    >
      <h3>Your Profile</h3>
      <div>
        <div>
          <span style={{ fontWeight: "600" }}> ETH address </span> :{" "}
          {props.playerInfo.addr}
        </div>
        <div>
          <span style={{ fontWeight: "600" }}>Amount Paid:</span>{" "}
          {props.playerInfo.amountPaid}
        </div>
        <div>
          <span style={{ fontWeight: "600" }}>Most Recent Segment Paid:</span>{" "}
          {humanMostRecentSegmentPaid}
        </div>
        <div>
          <span style={{ fontWeight: "600" }}>Players Status:</span>{" "}
          {props.playerInfo.isStillInGame
            ? "live 🎉"
            : "sorry you missed a payment 😢"}
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
