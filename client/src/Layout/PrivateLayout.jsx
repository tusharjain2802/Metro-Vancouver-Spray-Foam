import PropTypes from "prop-types";
import FooterComponent from "../Components/Footer/Footer";
// import Navbar from "../Components/Header/Navbar";
import FooterTesting from '../Components/Footer/FooterTesting'
import MobileNavbar from "../Components/Header/MobileNavbar";
const PrivateLayout = ({ children }) => {
  return (
    <div>
      <MobileNavbar />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

// Here's the prop validation for children
PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateLayout;
