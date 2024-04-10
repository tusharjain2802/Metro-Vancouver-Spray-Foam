import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateLayout from "../Layout/PrivateLayout";
import ContactUs from "../Components/MainPageComponents/ContactUs";
import Services from "../Components/MainPageComponents/Services";
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
    </Routes>
  );
}

export default AllRoutes;
