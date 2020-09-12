import React from 'react';
import {  Card } from "react-bootstrap";

const PlayersPrint = (players) =>
  players.map((player, key) => (
    <Card
      key={key}
      style={{
        width: "10rem",
        display: "inline-block",
        margin: "0.5rem",
      }}
    >
      <Card.Img
        style={{ height: "158px" }}
        variant="top"
        src={
          player.threeBoxAvatar
            ? `https://ipfs.infura.io/ipfs/${player.threeBoxAvatar}`
            : `https://robohash.org/${player.address}`
        }
      />
      <Card.Body>
        <Card.Text>
          {player.threeBoxName
            ? player.threeBoxName
            : `${player.address.slice(0, 7)}...`}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  export default PlayersPrint;