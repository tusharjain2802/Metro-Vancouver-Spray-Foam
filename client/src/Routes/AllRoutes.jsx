import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateLayout from "../Layout/PrivateLayout";
import DailyWorkRecord from "../Pages/DailyWorkRecord";
import MobileNavbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

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
    </Routes>
  ); 
}

export default AllRoutes;
