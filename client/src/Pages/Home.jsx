import ContactUs from "../Components/MainPageComponents/ContactUs";
import About from "../Components/MainPageComponents/About";
import Hero from "../Components/MainPageComponents/Hero";
import Stats from "../Components/MainPageComponents/Stats";
import Services from "../Components/MainPageComponents/Services";
import Gallery from "../Components/MainPageComponents/Gallery";
import MapSection from "../Components/MainPageComponents/Map";
import ScrollUpButton from "../Components/MainPageComponents/ScrollUpButton";
import RotatingPopUp from "../Components/common/RotatingPopUp";
import useAlert from '../Components/hooks/useAlert'
import Alert from '../Components//Components/Alert'
const Home = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  return (
    <div>
      <div className="sticky top-10 z-50">
        {alert.show && <Alert {...alert} />}
      </div>
      <RotatingPopUp />
      <Hero />
      <Gallery />
      <Stats />
      <MapSection />
      <Services />
      <About />
      <ContactUs alert={alert} showAlert={showAlert} hideAlert={hideAlert} />
      <ScrollUpButton />
    </div>
  );
};

export default Home;
