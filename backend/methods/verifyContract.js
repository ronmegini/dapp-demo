const hre = require("hardhat");
require("dotenv").config();

// Deploy contract to the blockchain
async function verifyContract(contractAddress, contractName, contractSymbol, contractInitURI, maxSupply, initialOwner) {
    // Verify contract
    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: [contractInitURI, maxSupply, initialOwner]
            });
        console.log(contractName + ' (' + contractSymbol + ') verified at: ' + contractAddress);
        
    } catch(e) {
        console.error("Contract verifying for " + contractName + " failed with: ", e.message);
    }
    
}

module.exports = verifyContract;