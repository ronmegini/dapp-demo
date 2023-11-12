import * as React from "react";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import InvestorContext from "../../context/InvestorContext";

export default function RegistrationCompleted() {
  const { data } = useContext(InvestorContext);
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {data.success ? "Registration Completed" : "Registration Failed"}
      </Typography>
      <Typography variant="subtitle1">
        {data.success ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://mumbai.polygonscan.com/address/${data.contractAddress}#writeProxyContract`}
          >
            Get stocks here
          </a>
        ) : (
          <p>
            Please verify that you have entered the details correctly. If so,
            please contact the administrator.
          </p>
        )}
      </Typography>
    </React.Fragment>
  );
}
