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
