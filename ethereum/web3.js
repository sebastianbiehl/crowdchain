import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //Browser and MetaMask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //Server or no Metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/901165aeddc1444b96031f8555bc994b"
  );
  web3 = new Web3(provider);
}

export default web3;
