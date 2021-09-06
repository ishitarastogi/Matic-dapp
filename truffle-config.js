const HDWalletProvider = require('@truffle/hdwallet-provider');
const path = require('path');
const MNENOMIC="broom clump orphan negative brave unique end win axis taste panda foam"
module.exports = {
  contracts_build_directory: path.join(__dirname, "client/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    matic: {
      provider: () => new HDWalletProvider(MNENOMIC, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.7.4'
    }
  }
}

//https://mumbai.polygonscan.com/tx/0xb234be6e0cc94ffb1a995e0fe1985936ee0aa258873f476e8bce4a88d3af8161