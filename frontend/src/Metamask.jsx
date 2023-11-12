import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BrowserProvider } from "ethers";
import metamasklogo from "./metamask.png";
import Box from "@mui/material/Box";


function WalletCard({ handleClick }) {
  const [provider, setProvider] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const connectMetamask = async ({ address }) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new BrowserProvider(window.ethereum);
        setProvider(provider);
        const accounts = await provider.listAccounts();
        handleClick(accounts[0].address);
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrorMessage(
        "Metamask not found, please install it from: https://metamask.io/download/"
      );
    }
  };

  return (
    <div>
      {provider ? (
        <Button varient="contained" disabled>
          <img src={metamasklogo} width="64" height="64" alt="metamask-logo" />
          Connected
        </Button>
      ) : (
        <Button varient="contained" onClick={connectMetamask}>
          <img src={metamasklogo} width="64" height="64" alt="metamask-logo" />
          Connect to Metamask
        </Button>
      )}
      <p>{errorMessage}</p>
        <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="contained">
            Mint Token
            </Button>
      </Box>
    </div>
  );
}

export default WalletCard;