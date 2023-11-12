import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import WalletCard from "./Metamask";
import { useState, useContext } from "react";
import InvestorContext from "../../context/InvestorContext";

export default function PaymentForm() {
  const [typedAddress, setTypedAddress] = useState(null);
  const [metamaskAddress, setMetamaskAddress] = useState(null);

  const { data, setData } = useContext(InvestorContext);

  const handleTypedAddress = (e) => {
    setTypedAddress(e.target.value);
    const name = e.target.name;
    if (data["walletAddress"] === "") {
      const value = e.target.value;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleMetamask = (_address) => {
    setMetamaskAddress(_address);
    const name = "walletAddress";
    const value = _address;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Enter your web3 address
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <WalletCard handleClick={handleMetamask} />
        </Grid>
        <Grid item xs={1}>
          <p>or</p>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            name="walletAddress"
            id="walletAddress"
            label="Wallet Public Address"
            fullWidth
            variant="standard"
            onChange={handleTypedAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Your address</Typography>
          <TextField
            required
            id="finalAddress"
            name="finalAddress"
            value={
              metamaskAddress
                ? metamaskAddress
                : typedAddress
                ? typedAddress
                : "undefined"
            }
            fullWidth
            variant="filled"
            disabled
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
