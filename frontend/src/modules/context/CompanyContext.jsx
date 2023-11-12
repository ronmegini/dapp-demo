import { createContext, useState } from "react";

const CompanyContext = createContext({});

export const CompanyProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    symbol: "",
    description: "",
    country: "",
    number: "",
    imageURL: "",
    maxSupply: "",
    mintPrice: "",
    walletAddress: "",
    email: "",
    contractAddress: "",
  });

  return (
    <CompanyContext.Provider value={{ step, setStep, data, setData }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
