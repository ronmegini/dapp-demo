// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract FDA is ERC1155, Ownable, Pausable, ERC1155Supply {
    uint256 public constant id = 1;
    uint256 public maxSupply;

    constructor(string memory initURI, uint256 initMaxSupply) ERC1155(initURI) {
        setMaxSupply(initMaxSupply);
    }

    function setMaxSupply(uint256 newSupply) public onlyOwner {
        maxSupply = newSupply;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint() public whenNotPaused {
        require(totalSupply(id) < maxSupply, "Max supply reached");
        _mint(msg.sender, id, 1, "");
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) whenNotPaused {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
