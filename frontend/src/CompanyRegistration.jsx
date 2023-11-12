import CompanyRegistrationForm from "./modules/components/CompanyRegistration/CompanyRegistrationForm";
import withRoot from "./modules/withRoot";
import { CompanyProvider } from "./modules/context/CompanyContext";

function CompanyRegistration() {
  return (
    <CompanyProvider>
      <CompanyRegistrationForm />
    </CompanyProvider>
  );
}

export default withRoot(CompanyRegistration);
