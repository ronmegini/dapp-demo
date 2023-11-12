import CompanyDetails from "./CompanyDetails";
import WalletAddress from "./WalletAddress";
import Terms from "./Terms";
import RegistrationCompleted from "./RegistrationCompleted";
import { useContext } from "react";
import CompanyContext from "../../context/CompanyContext";

const RegistrationInputs = () => {
  const { step } = useContext(CompanyContext);
  const display = {
    0: <CompanyDetails />,
    1: <WalletAddress />,
    2: <Terms />,
    3: <RegistrationCompleted />,
  };

  const content = <div className="form-inputs flex-col">{display[step]}</div>;

  return content;
};
export default RegistrationInputs;
