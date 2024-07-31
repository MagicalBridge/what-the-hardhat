import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY_LOCAL = process.env.PRIVATE_KEY_LOCAL || ""
const LOCAL_RPC_URL = process.env.LOCAL_RPC_URL || "http://127.0.0.1:8545"

console.log()

const config: HardhatUserConfig = {
  solidity: "0.8.24",
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
}

export default config
