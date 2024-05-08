import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateLayout from "../Layout/PrivateLayout";
import DailyWorkRecord from "../Pages/DailyWorkRecord";
import MobileNavbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SafetyComplaint from "../Pages/SafetyComplaint";
import IncedentReport from "../Pages/IncidentReport"
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
          <MobileNavbar />
            <DailyWorkRecord />
          <Footer />
          </div>
        }
      />
      <Route
        path="/safety-complaint"
        element={
          <div>
          <MobileNavbar />
            <SafetyComplaint />
          <Footer />
          </div>
        }
      />
      <Route
        path="/incident-report"
        element={
          <div>
          <MobileNavbar />
            <IncedentReport />
          <Footer />
          </div>
        }
      />
    </Routes>
  ); 
}

export default AllRoutes;
