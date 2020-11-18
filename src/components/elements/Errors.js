import React from "react";

export const NoWeb3 = () => (
  <>
    <h2>Our prototype requires MetaMask to run.</h2>
    <p>
      Install{" "}
      <a
        href="https://metamask.io/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        MetaMask
      </a>{" "}
      and refresh your browser*.
    </p>
    <p style={{ fontStyle: "italic", fontSize: "0.7rem" }}>
      *Works best on chrome.
    </p>
  </>
);

export const NotKovan = () => (
  <>
    {" "}
    <h2>Our prototype runs on Kovan.</h2>
    <p>Switch networks in MetaMask* and refresh your needToAWeb3Browser</p>
    <p style={{ fontStyle: "italic", fontSize: "0.7rem" }}>
      *We will be integrating with other wallets soon.
    </p>
  </>
);
