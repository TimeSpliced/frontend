import parseErr from "parse-err";
import getRevertReason from "eth-revert-reason";
import web3 from "web3";
export const status = {
  unloaded: "unloaded",
  registered: "registered",
  unregistered: "unregistered",
};

export const isNotEmptyObj = (myObject) => !!Object.keys(myObject).length;

export const daiAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD";
export const goodGhostingAdress = "0xded83e22be86e1201d4df0b9f9a2b1ee06818f01"; // short demo game
// export const goodGhostingAdress = '0x79C01423De3Ca5c436dF4996c9B16d796c871370' //1800 secs
// export const goodGhostingAdress = "0x839f2F25216621D01D0567646c459d960abD6267";

export const brandColors = {
  darkBlue: "#5680e9",
  lightBlue: "#84ceeb",
  mediumBlue: "#5ab9ea",
  lilac: "#c1c8e4",
  purple: "#8860d0",
};

export const gqlErrors = {
  players: "gql players request failed",
  game: "gql game request failed",
};

export const gameNumber = 0;

export const parseRevertError = async (error) => {
  const errorToString = parseErr(error).stack.toString();
  const transactionHash = errorToString
    .split('transactionHash": ')[1]
    .slice(1, 67);
  const reason = await getRevertReason(transactionHash, "kovan");
  return reason;
};

export const weiToERC20 = (wei) => {
  const BN = web3.utils.BN;
  let weiBN = new BN(wei);
  return web3.utils.fromWei(weiBN);
};
// current segment counts from 0 and is a string
export const displaySegment = (raw) => parseInt(raw) + 1;
