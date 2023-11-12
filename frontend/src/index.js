import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import ForgotPassword from './ForgotPassword';
import Privacy from './Privacy';
import Terms from './Terms';
import InvestorRegistration from './InvestorRegistration';
import CompanyRegistration from './CompanyRegistration';

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="investor-registration" element={<InvestorRegistration/>} />
            <Route path="company-registration" element={<CompanyRegistration/>} />
            <Route path="terms" element={<Terms/>} />
            <Route path="privacy" element={<Privacy/>} />
            <Route path="forgot-password" element={<ForgotPassword/>} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


