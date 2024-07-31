// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract CounterUpgradeable is
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable
{
    uint256 public countNum;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        countNum = 0;
    }

    function add() public {
        countNum += 1;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
