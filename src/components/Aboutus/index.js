import React from 'react'

// import AboutUs from '../../assets/AboutUs.jpg'
import AboutUs from '../../assets/AboutUs.png'
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className='aboutus' id="about">
            <h2 className='title'>About Us</h2>
            <div className='container'>
                <div className='image-container'>
                    <img src={AboutUs} alt="About us"/>
                </div>
                <div className='text-container'>
                    <h2>WORDMAP is committed to providing the finest translation services to your esteemed company in a professional and timely manner.<br/>
                        We work with clients to assess their translation needs and customize the best solution for them. Our pool of linguists consists of more than 30 professionals who specialize in different industries.<br/>
                        We respect the valuable time of our clients and emphasize the creation of a translation plan that has a minimal impact on a company’s daily operations.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Aboutus