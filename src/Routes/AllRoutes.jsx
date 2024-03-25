import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateLayout from "../Layout/PrivateLayout";
import ContactUs from "../Pages/ContactUs";
import Services from "../Pages/Services";
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
        path="/contactus"
        element={
          <PrivateLayout>
            <ContactUs />
          </PrivateLayout>
        }
      />
      <Route
        path="/services"
        element={
          <PrivateLayout>
            <Services />
          </PrivateLayout>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
