require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ALCHEMY_TEST_URL = 'https://polygon-mumbai.g.alchemy.com/v2/' + process.env.ALCHEMY_TEST_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  defaultNetwork: "polygonMumbai",
  networks: {
    polygonMumbai: {
      url: ALCHEMY_TEST_URL,
      accounts: [WALLET_PRIVATE_KEY],
    }
  },
  solidity: "0.8.20",
  etherscan: {
    apiKey: POLYGONSCAN_KEY
  }
};
