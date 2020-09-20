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
      <div className={`team-item-image mb-24 illustration-element-0${(key % 3)+ 3} gg-image`}>
        <Image
          width={100}
          height={100}
          src={
            player.threeBoxAvatar
              ? `https://ipfs.infura.io/ipfs/${player.threeBoxAvatar}`
              : `https://robohash.org/${player.address}`
          }
        />
      </div>
      <p className="sans_serif text-color-primary fw-500 text-xxs tt-u">
        {player.threeBoxName
          ? player.threeBoxName
          : `${player.id.slice(0, 7)}...`}
      </p>
    </div>
  ));

export default PlayersPrint;
