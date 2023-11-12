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
          The registration allows you to hold stocks as blockchain entities. The
          stock itself managed by the company exclusively and we have no side on
          that. The company allowed to stop the trading of the stocks at any
          time. The company allowed to decide whether to split dividend or not
          and the amount of them.
        </Paper>
      </Container>
    </React.Fragment>
  );
}
