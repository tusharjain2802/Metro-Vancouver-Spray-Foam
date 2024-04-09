import PropTypes from 'prop-types';
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import MobileNavbar from '../Components/Header/MobileNavbar';
const PrivateLayout = ({ children }) => {
  return (
    <div>
      <div className='hidden lg:block md:block'>
        <Navbar />
      </div>
      <div className='flex lg:hidden md:flex sm:flex'>
        <MobileNavbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Here's the prop validation for children
PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateLayout;
