const { ethers } = require("ethers");
const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-wallet");

task(
  "DummyAccounts",
  "prints the new accounts generated by hardhat",
  async () => {
    const accounts = await ethers.getSigners();

    for (const account of DummyAccounts) {
      console.log(account.address);
    }
  }
);
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.7.3",

  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-mainnet.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      accounts: [privateKey1, privateKey2, ...]
    }
  },
  solidity: {
    version: "0.5.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: ".defi-sdk/contracts/**/**",
    tests: ".defi-sdk/test/**/**",
    cache: ".defi-sdk/cache",
    artifacts: ".defi-sdk/contracts/artifacts"
  },
  mocha: {
    timeout: 20000
  }

};
