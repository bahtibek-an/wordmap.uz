import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Aboutus from "../components/Aboutus"
import Expertise from "../components/Expertise"
import Services from "../components/OurServices"
import WhyUs from "../components/WhyUs"
import Footer from "../components/Footer"
import Information from "../components/Information"

import Header from "../components/Header"
import ContactUs from "../components/ContactUs";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Aboutus/>
            <Services/>
            <Expertise/>
            <WhyUs/>
            <Information/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home