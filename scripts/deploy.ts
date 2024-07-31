import { ethers } from "hardhat"

async function main() {
  console.log("Preparing to deploy MyToken contract...")

  try {
    console.log("Deploying MyToken contract...")

    const MyToken = await ethers.getContractFactory("MyToken")
    const initialSupply = ethers.parseEther("1000000")

    console.log(
      `Deploying with initial supply: ${ethers.formatEther(
        initialSupply
      )} tokens`
    )

    const myToken = await MyToken.deploy(initialSupply)

    console.log("Waiting for deployment to be confirmed...")

    await myToken.waitForDeployment()

    const deploymentTx = myToken.deploymentTransaction()

    console.log("MyToken deployed to:", myToken.getAddress())

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
  } catch (error) {
    console.error("Deployment Error:", error)
    process.exitCode = 1
  }
}

main().catch((error) => {
  process.exitCode = 1
})
