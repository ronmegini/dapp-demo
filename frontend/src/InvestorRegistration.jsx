import InvestorRegistrationForm from "./modules/components/InvestorRegistration/InvestorRegistrationForm";
import withRoot from "./modules/withRoot";
import { InvestorProvider } from "./modules/context/InvestorContext";

function InvestorRegistration() {
  return (
    <InvestorProvider>
      <InvestorRegistrationForm />
    </InvestorProvider>
  );
}

export default withRoot(InvestorRegistration);
