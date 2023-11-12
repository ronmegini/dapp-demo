import PersonalDetails from "./PersonalDetails";
import PaymentForm from "./WalletAddress";
import Terms from "./Terms";
import RegistrationCompleted from "./RegistrationCompleted";
import { useContext } from "react";
import InvestorContext from "../../context/InvestorContext";

const RegistrationInputs = () => {
  const { step } = useContext(InvestorContext);
  const display = {
    0: <PersonalDetails />,
    1: <PaymentForm />,
    2: <Terms />,
    3: <RegistrationCompleted />,
  };

  const content = <div className="form-inputs flex-col">{display[step]}</div>;

  return content;
};
export default RegistrationInputs;
