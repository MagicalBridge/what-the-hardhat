import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@openzeppelin/hardhat-upgrades"
import "dotenv/config"

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY_LOCAL = process.env.PRIVATE_KEY_LOCAL || ""
const LOCAL_RPC_URL = process.env.LOCAL_RPC_URL || "http://127.0.0.1:8545"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {
      "contracts/MyToken.sol": {
        version: "0.8.21",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
      "contracts/CounterUpgradeable.sol": {
        version: "0.8.24",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
    },
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    local: {
      url: LOCAL_RPC_URL,
      accounts: [PRIVATE_KEY_LOCAL],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
}

export default config
