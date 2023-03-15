import React from 'react'
import './OurServices.css';

import Carousel from "react-elastic-carousel";
import Card from './Card';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Data = [
    {
        id: 1,
        name: "Technical Translations",
        info: "Translation agency 'WORDMAP' offers translations of all types of technical and project documentation." 
    },
    {
        id: 2,
        name: "Development and Integration",
        info: "Manuals and instructions for installation, equipment, processes and technologies." 
    },
    {
        id: 3,
        name: "Business Development",
        info: "Documents related to the registration of a legal entity and necessary for obtaining state licenses and certifications." 
    },
    {
        id: 4,
        name: "Localization",
        info: "Our professional linguists can help you bring your business anywhere and make you understood worldwide." 
    },
    {
        id: 5,
        name: "Video and Phone Interpretation",
        info: "We provide a professional, on-demand video or telephone interpreting services for your business." 
    },
    {
        id: 6,
        name: "Simultaneous Translation",
        info: "Simultaneous interpreting is the ideal solution for international conferences or congresses." 
    },
]

const Services = () => {
    return (
        <div className='services'>
            <h2 className='title'>Our Services</h2>
            <div className='container'>
            <Carousel breakPoints={breakPoints}>
                {Data.map((item, index) => (
                    <Card
                        id={item.id}
                        name={item.name}
                        info={item.info}
                    />
                ))}
            </Carousel>
            </div>
        </div>
    )
}

export default Services