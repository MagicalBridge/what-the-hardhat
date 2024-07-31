import { ethers, upgrades } from "hardhat";

async function main() {
  const ReturnNameUpgradeable = await ethers.getContractFactory(
    "ReturnNameUpgradeable"
  );
  console.log("Deploying ReturnNameUpgradeable...");

  const returnName = await upgrades.deployProxy(ReturnNameUpgradeable, [], {
    initializer: "initialize",
  });

  await returnName.waitForDeployment();

  const deploymentTx = returnName.deploymentTransaction();

  if (deploymentTx) {
    console.log("Transaction Hash:", deploymentTx.hash);

    const txReceipt = await deploymentTx.wait();
    if (txReceipt) {
      console.log("Gas Used:", txReceipt.gasUsed.toString());
      console.log("Block Number:", txReceipt.blockNumber);
    }
  } else {
    console.log("Deployment transaction details not available.");
  }

  console.log("ReturnNameUpgradeable deployed to:", returnName.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
