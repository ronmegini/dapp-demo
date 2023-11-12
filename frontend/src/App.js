import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";

import './App.css';

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BrowserProvider } from "ethers";
import metamasklogo from "./metamask.png";


function App() {

  const [provider, setProvider] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const connectMetamask = async ({ address }) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new BrowserProvider(window.ethereum);
        setProvider(provider);
        const accounts = await provider.listAccounts();
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
    <React.Fragment>

        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    DApp Demo Application
                </Typography>
            </Toolbar>
        </AppBar>

      
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center" sx={{ mb: 5 }}>
            Mint Page
          </Typography>
          <form className="form flex-col">
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Connect Metamask Wallet
                </Typography>
              </Grid>
              <Grid item xs={12} >
                <Box display="flex" justifyContent="center">
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
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default App;
