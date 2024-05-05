import ContactUs from "../Components/MainPageComponents/ContactUs";
import About from "../Components/MainPageComponents/About";
import Hero from "../Components/MainPageComponents/Hero";
import Stats from "../Components/MainPageComponents/Stats";
import Services from "../Components/MainPageComponents/Services";
import Gallery from "../Components/MainPageComponents/Gallery";
import MapSection from "../Components/MainPageComponents/Map";
import ScrollUpButton from "../Components/MainPageComponents/ScrollUpButton";
import RotatingPopUp from "../Components/common/RotatingPopUp";
import Types from '../Components/MainPageComponents/Types'
import { Toaster } from 'react-hot-toast';
import Chemicals from "../Components/MainPageComponents/Chemicals";
const Home = () => {
  return (
    <div className="w-full">
      <RotatingPopUp />
      <Hero />
      <Gallery />
      <Services />
      {/* Type of Chemicals */}
      <Chemicals />
      <Types />
      <About />
      <Stats />
      <ContactUs />
      <ScrollUpButton />
      
      <Toaster />
      
    </div>
  );
};

export default Home;
