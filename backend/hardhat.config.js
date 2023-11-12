require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ALCHEMY_TEST_URL = process.env.ALCHEMY_TEST_URL;
const ALCHEMY_PROD_URL = process.env.ALCHEMY_PROD_URL;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  defaultNetwork: "polygonMumbai",
  networks: {
    polygonMumbai: {
      url: ALCHEMY_TEST_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
    Main: {
      url: ALCHEMY_PROD_URL,
      accounts: [WALLET_PRIVATE_KEY]
    },
  },
  solidity: "0.8.20",
  etherscan: {
    apiKey: POLYGONSCAN_KEY
  }
};
