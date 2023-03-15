import React from 'react'

// import AboutUs from '../../assets/AboutUs.jpg'
import AboutUs from '../../assets/AboutUs.png'
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className='aboutus'>
            <h2 className='title'>About Us</h2>
            <div className='container'>
                <div className='image-container'>
                    <img src={AboutUs} alt="About us"/>
                </div>
                <div className='text-container'>
                    <h2>Distinctive features of technical texts are complexity with field-specific
                        terminology and sentence structure unordinary for a language speaker.<br/><br/>
                        Not every native speaker can sort them out. When dealing with such
                        materials, a translator is required to have a perfect knowledge of the
                        two languages and, of course, a knowledge in the field of the described
                        realities. That is, one must have both linguistic and technical education.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Aboutus