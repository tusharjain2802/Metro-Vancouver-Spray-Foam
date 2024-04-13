import ContactUs from '../Components/MainPageComponents/ContactUs'
import About from '../Components/MainPageComponents/About'
import Hero from '../Components/MainPageComponents/Hero'
import Stats from '../Components/MainPageComponents/Stats'
import Services from '../Components/MainPageComponents/Services'
import Gallery from '../Components/MainPageComponents/Gallery'
import MapSection from '../Components/MainPageComponents/Map'
const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Stats />
            <MapSection />
            <Gallery />
            <About />
            <ContactUs />
        </div>
    )
}

export default Home
