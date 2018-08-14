import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4dEE28A4Bfa20AB7A3e43B58Aa0b3ceDF38018c7"
);

export default instance;
