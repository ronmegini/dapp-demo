import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import CompanyContext from "../../context/CompanyContext";

export default function RegistrationCompleted() {
  const { data } = useContext(CompanyContext);

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Registration completed
      </Typography>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="subtitle1">
          <b>Contract Name:</b> {data.name} stock <br />
          <b>Contract Address: </b> <br />
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "main.dark" }}
            href={`https://mumbai.polygonscan.com/address/${data.contractAddress}`}
          >
            {data.contractAddress}
          </a>
        </Typography>
      </Paper>
    </React.Fragment>
  );
}
