const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "d3034546405040859692a027863a8ff9";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim(); // gitignore

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,// rinkeby's id
        gas: 5500000, // rinkeby has a lower block limit than mainnet
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true,
    }
  }
};