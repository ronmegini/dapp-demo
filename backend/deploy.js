const deployContract = require('./methods/deployContract');
const deployMetadata = require('./methods/deployMetadata');
const verifyContract = require('./methods/verifyContract');
const fs = require('fs');
const hre = require('hardhat');
require('dotenv').config();

const CONTRACT_NAME = 'Freediving Animal';
const CONTRACT_SYMBOL = 'FDA';
const DESCRIPTION = 'Freediving animal';
const MAX_SUPPLY = 30;
const IMAGE_URI = 'https://i.ibb.co/0DY8JRM/freediving-Animal.png';

// Deploy metadata to nft.storage
async function uploadMetadata(contractName, description, imageURI) {
    try {
        const uri = await deployMetadata(contractName, description, imageURI);
        console.log('Contract Metadata Uploaded Successfully');
        return uri;
    } catch (error) {
        throw new Error(`Metadata upload failed for ${contractName}: ${error.message}`);
    }
}

// Compile the contract with Hardhat
async function compileContract(contractName) {
    try {
        await hre.run('compile');
    } catch (error) {
        throw new Error(`Contract compilation failed for ${contractName}: ${error.message}`);
    }
}

// Deploy the contract to the blockchain
async function deployContractToBlockchain(symbol, initialURI, supply) {
    try {
        const contractAddress = await deployContract(symbol, initialURI, supply);
        return contractAddress;
    } catch (error) {
        throw new Error(`Contract deployment failed for ${CONTRACT_NAME}: ${error.message}`);
    }
}

// Main deployment function
async function main() {
    try {
        console.log(`Starting deployment of contract: ${CONTRACT_NAME}`);
        const contractInitialURI = await uploadMetadata(CONTRACT_NAME, DESCRIPTION, IMAGE_URI);
        await compileContract(CONTRACT_NAME);
        const deployedContractAddress = await deployContractToBlockchain(CONTRACT_SYMBOL, contractInitialURI, MAX_SUPPLY);
        await new Promise(resolve => setTimeout(resolve, 20000));
        await verifyContract(deployedContractAddress, CONTRACT_NAME, CONTRACT_SYMBOL, contractInitialURI, MAX_SUPPLY, INITIAL_OWNER);
        console.log(`Contract deployed at address: ${deployedContractAddress}`);
    } catch (error) {
        console.error(`Deployment error: ${error.message}`);
    }
}

main();
