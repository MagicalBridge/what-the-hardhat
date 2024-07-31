// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ReturnNameUpgradeableV2 is Initializable {
    string public name;
    address public owner;
    bool public initFlag;

    function initialize() public initializer {
        name = "ReturnName";
        owner = msg.sender;
    }

    function setName(string memory _name) public {
        require(msg.sender == owner, "Not owner");
        name = _name;
    }

    function getInitFlag() public view returns (bool) {
        return initFlag;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}
