import { ethers } from "hardhat"

async function main() {
  try {
    console.log("Deploying MyToken contract...")

    const MyToken = await ethers.getContractFactory("MyToken")

    const initialSupply = ethers.parseEther("1000000")

    console.log(`Initial supply: ${ethers.formatEther(initialSupply)} tokens`)

    const myToken = await MyToken.deploy(initialSupply)

    await myToken.waitForDeployment()

    console.log("MyToken deployed to:", await myToken.getAddress())
  } catch (error) {
    console.error("Error deploying contract:", error)
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error("Unhandled error:", error)
  process.exitCode = 1
})
