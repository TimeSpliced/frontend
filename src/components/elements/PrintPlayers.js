import React from "react";
import Image from "./Image";

const PlayersPrint = (players) =>
  players.map((player, key) => (
    <div
      key={key}
      style={{
        width: "10rem",
        display: "inline-block",
        margin: "0.5rem",
      }}
    >
      <PlayerImage i={key} player={player} />
      <p className="sans_serif text-color-primary fw-500 text-xxs tt-u">
        {player.threeBoxName
          ? player.threeBoxName
          : `${player.id.slice(0, 7)}...`}
      </p>
    </div>
  ));

export default PlayersPrint;

export const PlayerImage = (props) => {
  return (
    <div
      className={`team-item-image mb-24 illustration-element-0${
        (parseInt(props.i) % 3) + 3
      } gg-image`}
    >
      <Image
        style={props.style}
        width={100}
        height={100}
        src={
          props.player.threeBoxAvatar
            ? `https://ipfs.infura.io/ipfs/${props.player.threeBoxAvatar}`
            : `https://robohash.org/${props.player.address}`
        }
      />
    </div>
  );
};
