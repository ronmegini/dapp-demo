const hre = require("hardhat");
require("dotenv").config();

// Deploy contract to the blockchain
async function deployContract(contractSymbol, contractInitURI, maxSupply, initialOwner) {
    console.log("Deploying Contract")
    // Get contract
    const contract = await hre.ethers.getContractFactory(contractSymbol);
    // Upload to the blockchain
    const contractInstance = await contract.deploy(contractInitURI, maxSupply, initialOwner);
    // Wait until deployed
    await contractInstance.deployed();
    // Save contract address as varible
    const contractAddress = contractInstance.address
    // Print log
    let deployMsg = 'Contract deployed to: ';
    console.log(deployMsg, contractAddress);
    return contractAddress;
}

module.exports = deployContract;