// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ReturnNameUpgradeable is Initializable {
    string public name;
    address public owner;

    function initialize() public initializer {
        name = "ReturnName";
        owner = msg.sender;
    }

    function setName(string memory _name) public {
        require(msg.sender == owner, "Not owner");
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}
