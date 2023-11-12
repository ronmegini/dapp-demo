import { createContext, useState } from "react";

const InvestorContext = createContext({});

export const InvestorProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    bDate: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    country: "",
    walletAddress: "",
    contractAddress: "",
    success: false,
  });

  return (
    <InvestorContext.Provider value={{ step, setStep, data, setData }}>
      {children}
    </InvestorContext.Provider>
  );
};

export default InvestorContext;
