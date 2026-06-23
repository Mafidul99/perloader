import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import ChairmanMessage from "./pages/About/ChairmanMessage";
import OurStory from "./pages/About/OurStory";
import MissionVision from "./pages/About/MissionVission";
import OurTeam from "./pages/About/OurTeam";
import SavingsAccount from "./pages/Accounts/SavingsAccount";
import CurrentAccount from "./pages/Accounts/CurrentAccount";
import FixedDeposit from "./pages/Accounts/FixedDeposit";
import PersonalLoan from "./pages/Loans/PersonalLoan/PersonalLoan";
import BusinessLoan from "./pages/Loans/BusinessLoan/BusinessLoan";
import EducationLoan from "./pages/Loans/EducationLoan/EducationLoan";
import GoldLoan from "./pages/Loans/GoldLoan/GoldLoan";
import AutoLoan from "./pages/Loans/AutoLoan/AutoLoan";
import HomeLoan from "./pages/Loans/HomeLoan/HomeLoan";
import MobileBanking from "./pages/DigitalServices/MobileBanking";
import InternetBanking from "./pages/DigitalServices/InternetBanking";
import UpiQrPay from "./pages/DigitalServices/UpiQrPay";
import WhatsappBanking from "./pages/DigitalServices/WhatsappBanking";
import SmsBanking from "./pages/DigitalServices/SmsBanking";
import Contact from "./pages/Contact";
import FDInterestRates from "./pages/Deposit/FDInterestRates";
import RDInterestRate from "./pages/Deposit/RDInterestRate";
import NRIServices from "./pages/NRIServices/NRIServices";
import AboutUs from "./pages/About/AboutUs";
import Accounts from "./pages/Accounts/Accounts";
import Loans from "./pages/Loans/Loans";
import DigitalServices from "./pages/DigitalServices/DigitalServices";
import Schemes from "./pages/Schemes/Schemes";
import MainLayout from "./components/Layout/MainLayout";
import Disclaimer from "./pages/FooterPages/Disclaimer";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy";
import TermsConditions from "./pages/FooterPages/TermsConditions";
import Sitemap from "./pages/FooterPages/Sitemap";
import FAQ from "./pages/FooterPages/FAQ";
import CustomerReviews from "./pages/FooterPages/CustomerReviews";
import Careers from "./pages/FooterPages/Careers";
import IFSCCode from "./pages/FooterPages/IFSCCode";
import BankHolidays from "./pages/FooterPages/BankHolidays";
import BranchesAtms from "./pages/FooterPages/BranchesAtms";
import SupportTicket from "./pages/SupportTicket";
import Services from "./pages/Services/Services";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MainLayout>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="loans" element={<Loans />} />
          <Route path="services" element={<Services />} />
          <Route path="digital-services" element={<DigitalServices />} />
          <Route path="schemes" element={<Schemes />} />
          <Route path="chirman-message" element={<ChairmanMessage />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="mission-vission" element={<MissionVision />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="savings-account" element={<SavingsAccount />} />
          <Route path="current-account" element={<CurrentAccount />} />
          <Route path="fixed-deposit" element={<FixedDeposit />} />
          <Route path="personal-loan" element={<PersonalLoan />} />
          <Route path="business-loan" element={<BusinessLoan />} />
          <Route path="education-loan" element={<EducationLoan />} />
          <Route path="gold-loan" element={<GoldLoan />} />
          <Route path="auto-loan" element={<AutoLoan />} />
          <Route path="home-loan" element={<HomeLoan />} />
          <Route path="mobile-banking" element={<MobileBanking />} />
          <Route path="internet-banking" element={<InternetBanking />} />
          <Route path="upiqr-pay" element={<UpiQrPay />} />
          <Route path="whatsapp-banking" element={<WhatsappBanking />} />
          <Route path="sms-banking" element={<SmsBanking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="fixed-Interest" element={<FDInterestRates />} />
          <Route path="recurring-deposit" element={<RDInterestRate />} />
          <Route path="nri-services" element={<NRIServices />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="support-ticket" element={<SupportTicket />} />
          <Route path="reviews" element={<CustomerReviews />} />
          <Route path="careers" element={<Careers />} />
          <Route path="ifsc-codes" element={<IFSCCode />} />
          <Route path="bank-holidays" element={<BankHolidays />} />
          <Route path="branches" element={<BranchesAtms />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
