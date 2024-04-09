import React from 'react'

import ContactUs from '../Components/MainPageComponents/ContactUs'
import About from '../Components/MainPageComponents/About'
import Hero from '../Components/MainPageComponents/Hero'
import Services from '../Components/MainPageComponents/Services'

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <ContactUs />
        </div>
    )
}

export default Home
