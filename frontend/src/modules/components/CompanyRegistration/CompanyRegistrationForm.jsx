import * as React from "react";
import { useContext } from "react";
import CompanyContext from "../../context/CompanyContext";
import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppAppBar from "../../views/AppAppBar";
import AppFooter from "../../views/AppFooter";
import RegistrationInputs from "./RegistrationInputs";
import { CircularProgress } from "@mui/material";

const CompanyRegistrationForm = () => {
  const title = ["Company Details", "Wallet", "Terms", "Completed"];
  const { step, setStep, data, setData } = useContext(CompanyContext);
  const [loading, setLoading] = React.useState(false);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const updateContractAddress = (address) => {
    const name = "contractAddress";
    const value = address;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyObject = JSON.stringify(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    axios
      .post("http://localhost:4000/api/contract", companyObject, config)
      .then((res) => {
        updateContractAddress(res.data.contractAddress);
        nextStep();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const disablePrev =
    step === 0 || step === Object.keys(title).length - 1 || loading;
  const disableNext =
    step === Object.keys(title).length - 2 ||
    step === Object.keys(title).length - 1 ||
    loading;
  const disableSubmit = step !== 2 || loading;

  return (
    <React.Fragment>
      <AppAppBar />
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Company Registration
          </Typography>
          <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
            {title.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form className="form flex-col" onSubmit={handleSubmit}>
            <React.Fragment>
              <RegistrationInputs />
              <Box>
                {loading && (
                  <CircularProgress
                    size={80}
                    sx={{
                      color: "main.dark",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="button"
                  variant="contained"
                  disabled={disablePrev}
                  onClick={prevStep}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  disabled={disableNext}
                  onClick={nextStep}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={disableSubmit}
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </React.Fragment>
          </form>
        </Paper>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
};

export default CompanyRegistrationForm;
