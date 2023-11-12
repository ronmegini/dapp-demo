import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Terms() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Terms of use
      </Typography>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          The registration details are used for stock creation. Any given
          information will be public during the issuing process.
          BlockchainStocks perform the minting process for you but the ownership
          of the contract is exclusively yours.
        </Paper>
      </Container>
    </React.Fragment>
  );
}
