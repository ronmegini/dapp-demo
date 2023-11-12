// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract FDA is ERC1155, Ownable, ERC1155Supply {
    uint256 public constant ID = 1;
    uint256 public maxSupply;

    constructor(
        string memory initURI,
        uint256 initMaxSupply,
        address initialOwner
    ) ERC1155(initURI) Ownable(initialOwner) {
        setMaxSupply(initMaxSupply);
    }

    function setMaxSupply(uint256 newSupply) public onlyOwner {
        maxSupply = newSupply;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mintStocks(address account, uint256 amount) public {
        require(totalSupply(ID) + amount <= maxSupply, "Max supply reached");
        _mint(msg.sender, ID, amount, "");
    }

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Supply) {
        super._update(from, to, ids, values);
    }
}
