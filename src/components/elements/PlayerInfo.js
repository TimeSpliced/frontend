import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PlayerInfo = (props) => {
  return (
    <Card
      style={{
        width: "24rem",
        margin: "auto",
        textAlign: "left",
        fontFamily: "monserrat !important",
      }}
    >
      <Card.Body>
        <Card.Title>Your Profile</Card.Title>
        <ListGroup>
          <ListGroup.Item>
            <span style={{ fontWeight: "600" }}> ETH address </span> :{" "}
            {props.playerInfo.addr}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={{ fontWeight: "600" }}>Amount Paid:</span>{" "}
            {props.playerInfo.amountPaid}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={{ fontWeight: "600" }}>Most Recent Segment Paid:</span>{" "}
            {props.playerInfo.mostRecentSegmentPaid}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={{ fontWeight: "600" }}>Players Status:</span>{" "}
            {props.playerInfo.isStillInGame
              ? "live 🎉"
              : "sorry you missed a payment 😢"}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PlayerInfo;
