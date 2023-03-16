import React from 'react'
import './WhyUs.css'

import {GiStairsGoal} from 'react-icons/gi'
import {FaHourglassStart, FaFlag, FaLock} from 'react-icons/fa'

const WhyUs = () => {
    return (
        <div className='choose'>
            <h2 className='title'>Why Choose Us</h2>
            <div className='container'>
                <div className='window-container'>
                    <div className='window'>
                        <h4>Our Team of Professional Translators has</h4>
                        <h1>15+</h1>
                        <h4>Years of Experience</h4>
                    </div>
                </div>
                <div className='info-container'>
                    <div className="info">
                        <FaHourglassStart color='#00bdfe' size={20}/>
                        <h2>Our Strategy</h2>
                        <p>WORDMAP translation agency patiently and carefully
                            selects professional translators.
                        </p>
                    </div>
                    <div className="info">
                        <FaFlag color='#00bdfe' size={20}/>
                        <h2>Our Tactics</h2>
                        <p>
                            To give each of our clients a feeling of complete
                            satisfaction.
                        </p>
                    </div>
                    <div className="info">
                        <GiStairsGoal color='#00bdfe' size={20}/>
                        <h2>Our Goals</h2>
                        <p>
                            High quality translation for our partners.
                        </p>
                    </div>  
                    <div className="info">
                        <FaLock color='#00bdfe' size={20}/>
                        <h2>Our Confidentiality</h2>
                        <p>
                            WORDMAP translation agency guarantees security and
                            confidentiality of information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs