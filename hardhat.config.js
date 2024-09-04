require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHEREUM_SEPOLIA_RPC_URL = process.env.METIS_SEPOLIA_RPC_URL;
const METIS_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL;

const config = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    ethereumSepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
    metisSepolia: {
      url: METIS_SEPOLIA_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 59902,
    },
  },
  typechain: {
    externalArtifacts: ["./abi/*.json"],
  },
};

// Export the config
module.exports = config;
