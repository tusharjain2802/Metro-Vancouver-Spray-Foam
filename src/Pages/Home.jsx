import ContactUs from '../Components/MainPageComponents/ContactUs'
import About from '../Components/MainPageComponents/About'
import Hero from '../Components/MainPageComponents/Hero'
import Services from '../Components/MainPageComponents/Services'
import Gallery from '../Components/MainPageComponents/Gallery'
const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Gallery />
            <About />
            <ContactUs />
        </div>
    )
}

export default Home
