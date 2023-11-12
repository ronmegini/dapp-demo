import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext } from "react";
import InvestorContext from "../../context/InvestorContext";

export default function PersonalDetails() {
  const { data, setData } = useContext(InvestorContext);
  const dataChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            checked={data.firstName}
            value={data.firstName}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            checked={data.lastName}
            value={data.lastName}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idNumber"
            name="idNumber"
            label="Identity number"
            fullWidth
            autoComplete="id"
            variant="standard"
            checked={data.idNumber}
            value={data.idNumber}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              required
              id="bDate"
              name="bDate"
              label="Birth date"
              autoComplete="bday"
              variant="standard"
              checked={data.bDate}
              value={data.dDate}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
            autoComplete="tel"
            variant="standard"
            checked={data.phoneNumber}
            value={data.phoneNumber}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            checked={data.email}
            value={data.email}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address-line1"
            variant="standard"
            checked={data.address}
            value={data.address}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
            variant="standard"
            checked={data.city}
            value={data.city}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
            variant="standard"
            checked={data.country}
            value={data.country}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="contractAddress"
            name="contractAddress"
            label="Contract Address"
            fullWidth
            variant="standard"
            checked={data.contractAddress}
            value={data.contractAddress}
            onChange={dataChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
