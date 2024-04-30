import ContactUs from "../Components/MainPageComponents/ContactUs";
import About from "../Components/MainPageComponents/About";
import Hero from "../Components/MainPageComponents/Hero";
import Stats from "../Components/MainPageComponents/Stats";
import Services from "../Components/MainPageComponents/Services";
import Gallery from "../Components/MainPageComponents/Gallery";
import MapSection from "../Components/MainPageComponents/Map";
import ScrollUpButton from "../Components/MainPageComponents/ScrollUpButton";
import RotatingPopUp from "../Components/common/RotatingPopUp";
import { Toaster } from 'react-hot-toast';
const Home = () => {
  return (
    <div>
      <RotatingPopUp />
      <Hero />
      <Gallery />
      <Stats />
      <MapSection />
      <Services />
      <About /> 
      <ContactUs />
      <ScrollUpButton />
      <Toaster />
    </div>
  );
};

export default Home;
