const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    // -------------- TESTNET ---------------------
    mumbai: {
      provider: () =>
        new HDWalletProvider(PRIVATE_KEY, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    polygon: {
      provider: () =>
        new HDWalletProvider(PRIVATE_KEY, `https://polygon-rpc.com/`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },

  api_keys: {
    polygonscan: process.env.POLYGONSCAN_API_KEY,

  },
  plugins: ['truffle-plugin-verify']
};
