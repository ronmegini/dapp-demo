import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import CompanyContext from "../../context/CompanyContext";

export default function CompanyDetails() {
  const { data, setData } = useContext(CompanyContext);
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
        Company Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Company Name"
            fullWidth
            variant="standard"
            checked={data.name}
            value={data.name}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="symbol"
            name="symbol"
            label="Company Symbol"
            fullWidth
            variant="standard"
            checked={data.symbol}
            value={data.symbol}
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
            variant="standard"
            checked={data.country}
            value={data.country}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="number"
            name="number"
            label="Number"
            fullWidth
            variant="standard"
            checked={data.number}
            value={data.number}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            variant="standard"
            checked={data.description}
            value={data.description}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="imageURL"
            name="imageURL"
            label="Image Link"
            fullWidth
            variant="standard"
            checked={data.imageURL}
            value={data.imageURL}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="maxSupply"
            name="maxSupply"
            label="Max Supply"
            fullWidth
            variant="standard"
            checked={data.maxSupply}
            value={data.maxSupply}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mintPrice"
            name="mintPrice"
            label="Mint Price"
            fullWidth
            variant="standard"
            checked={data.mintPrice}
            value={data.mintPrice}
            onChange={dataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Contact Email"
            fullWidth
            variant="standard"
            checked={data.email}
            value={data.email}
            onChange={dataChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
