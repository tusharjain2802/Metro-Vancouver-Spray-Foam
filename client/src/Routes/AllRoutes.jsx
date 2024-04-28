import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateLayout from "../Layout/PrivateLayout";
import DailyWorkRecord from "../Pages/DailyWorkRecord";

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
          <PrivateLayout>
            <DailyWorkRecord />
          </PrivateLayout>
        }
      />
    </Routes>
  ); 
}

export default AllRoutes;
