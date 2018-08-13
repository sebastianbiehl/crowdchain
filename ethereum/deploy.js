const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
const fs = require("fs");

const provider = new HDWalletProvider(
  "forest addict split vacuum december arrow garden cushion misery inspire same gaze",
  "https://rinkeby.infura.io/v3/901165aeddc1444b96031f8555bc994b"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy contract from account ${accounts[0]}`);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: `0x${compiledFactory.bytecode}` })
    .send({ gas: "1000000", from: accounts[0] });

  fs.appendFileSync(
    "deploy.txt",
    `Contract successfully deployed to ${result.options.address}`
  );
};

deploy();
