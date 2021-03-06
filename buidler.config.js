usePlugin("@nomiclabs/buidler-waffle");
usePlugin("buidler-gas-reporter");
usePlugin("@nomiclabs/buidler-etherscan");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  // for (const account of accounts) {
  //   console.log(await account.getAddress());
  // }
});

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
const accounts = [
  "0xd0a71bb97a36d787517a6858bbfdebd0d371f9883e632c14d6d05ea10912066d",
];
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  defaultNetwork: "localMainnet",
  networks: {
    buidlerevm: {
    },
    localMainnet: {
      url: "http://127.0.0.1:8545",
      accounts: accounts,
      gasMultiplier: 1.1,
      gasPrice: 100000000000,
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY",
      accounts,
      gasMultiplier: 1.1,
      gasPrice: 100000000000,
    }
  },
  solc: {
    version: "0.6.8",
    optimizer: { enabled: true, runs: 200 }
  },
  mocha: {
    timeout: 100000
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  }
};
