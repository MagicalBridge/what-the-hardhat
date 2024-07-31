import { ethers, upgrades } from "hardhat";
import "dotenv/config";

async function main() {
  const CounterUpgradeableV2 = await ethers.getContractFactory(
    "ReturnNameUpgradeableV2"
  );
  console.log("Upgrading CounterUpgradeable...");

  await upgrades.upgradeProxy(
    process.env.PROXY_ADDRESS_TRANSPARENT as string,
    CounterUpgradeableV2
  );

  console.log("CounterUpgradeableV2 upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
