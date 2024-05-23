import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateLayout from "../Layout/PrivateLayout";
import DailyWorkRecord from "../Pages/DailyWorkRecord";
import MobileNavbar from "../Components/Header/Navbar";
import Navbar from '../Components/Header/MobileNavbar'
import Footer from "../Components/Footer/Footer";
import SafetyComplaint from "../Pages/SafetyComplaint";
import IncedentReport from "../Pages/IncidentReport"
import Services from '../Components/MainPageComponents/Services'
import TermsAndConditions from "../Components/Pdf/TermsAndConditions";
import ExposurePlan from "../Components/Pdf/ExposurePlan";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateLayout>
            <Home />
          </PrivateLayout>
        }
      />
      <Route
        path="/work-record"
        element={
          <div>
            <Navbar />
            <DailyWorkRecord />
            <Footer />
          </div>
        }
      />
      <Route
        path="/safety-complaint"
        element={
          <div>
            <Navbar />
            <SafetyComplaint />
            <Footer />
          </div>
        }
      />
      <Route
        path="/incident-report"
        element={
          <div>
            <Navbar />
            <IncedentReport />
            <Footer />
          </div>
        }
      />
      <Route
        path="/services/:Id"
        element={
          <div>
            <Navbar />
            <Services />
            <Footer />
          </div>
        }
      />
      <Route
        path="/terms-conditions"
        element={
          <div>
            <Navbar />
            <TermsAndConditions />
            <Footer />
          </div>
        }
      />
      <Route
        path="/exposure-plan"
        element={
          <div>
            <Navbar />
            <ExposurePlan />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
