import { ethers, upgrades } from "hardhat"

async function main() {
  const CounterUpgradeable = await ethers.getContractFactory(
    "CounterUpgradeable"
  )
  console.log("Deploying CounterUpgradeable...")

  const counter = await upgrades.deployProxy(CounterUpgradeable, [], {
    kind: "uups",
  })

  await counter.waitForDeployment()

  const deploymentTx = counter.deploymentTransaction()

  console.log("CounterUpgradeable deployed to:", await counter.getAddress())

  if (deploymentTx) {
    console.log("Transaction Hash:", deploymentTx.hash)

    const txReceipt = await deploymentTx.wait()
    if (txReceipt) {
      console.log("Gas Used:", txReceipt.gasUsed.toString())
      console.log("Block Number:", txReceipt.blockNumber)
    }
  } else {
    console.log("Deployment transaction details not available.")
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
