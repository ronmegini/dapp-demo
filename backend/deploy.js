const deployContract = require('./methods/deployContract')
const deployMetadata = require('./methods/deployMetadata')
const verifyContract = require('./methods/verifyContract')
const fs = require("fs");
const hre = require("hardhat");
require('dotenv').config()

const CONTRACT_NAME = "Freediving Animal";
const CONTRACT_SYMBOL="FDA";
const DESCRIPTION = "Freediving animal";
const MAX_SUPPLY = 30
const IMAGE_URI = "https://i.ibb.co/0DY8JRM/freediving-Animal.png";
const INITIAL_OWNER = process.env.WALLET_PUBLIC_KEY;



// Deploy metadata to nft.storage
async function metadata(contractName, description, imageURI) {
    try {
        const uri = await deployMetadata(contractName, description, imageURI);
        console.log('Contract Metadata Uploaded Successfully');
        return uri;
    }
    catch(e) {
        throw new Error(`ERROR: Metadata upload failed for ${contractName} with: ${e.message}`);
    }
}  

// Compile the contract with Hardhat
async function compile(contractName) {
    try {
        await hre.run("compile");
    }
    catch(e) {
        throw new Error(`ERROR: Contract compilation failed for ${contractName} with: ${e.message}`);
    }
}

// Deploy the contract to the blockchain
async function deploy(contractSymbol, contractInitURI, maxSupply) {
    try {
        const contractAddress = await deployContract(contractSymbol, contractInitURI, maxSupply, INITIAL_OWNER);
        return(contractAddress);
    }
    catch(e) {
        throw new Error(`ERROR: Contract upload failed for ${CONTRACT_NAME} with: ${e.message}`);
    }
}

    // Issue the company as stock on the blockchain
async function main() {
    try {
        console.log(`Start deployment of contract: ${CONTRACT_NAME}`);
        // Deploy metadata
        contractInitURI = await metadata(CONTRACT_NAME, DESCRIPTION, IMAGE_URI);
        // Compile the contract
        await compile(CONTRACT_NAME);
        // Deploy contract
        contractAddress = await deploy(CONTRACT_SYMBOL, contractInitURI, MAX_SUPPLY);
        await new Promise(resolve => setTimeout(resolve, 20000));
        // Verify contract
        await verifyContract(contractAddress, CONTRACT_NAME, CONTRACT_SYMBOL, contractInitURI, MAX_SUPPLY, INITIAL_OWNER);
        return(contractAddress);
    }
    catch(e){
        console.error(e);
    }
}

main();