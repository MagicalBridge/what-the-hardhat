import { ethers, upgrades } from "hardhat"
import "dotenv/config"
import { ContractAddressOrInstance } from "@openzeppelin/hardhat-upgrades/dist/utils/contract-types"

async function main() {
  const CounterUpgradeableV2 = await ethers.getContractFactory(
    "CounterUpgradeableV2"
  )
  console.log("Upgrading CounterUpgradeable...")

  await upgrades.upgradeProxy(
    process.env.PROXY_ADDRESS as string,
    CounterUpgradeableV2
  )

  console.log("CounterUpgradeable upgraded")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
