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
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            carouselRef.current.goTo(Data.length);
        }
    };

    return (
        <div className='services' id="services">
            <h2 className='title'>Our Services</h2>
            <div className='container'>
            <Carousel
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Data.map((item, index) => (
                    <Card
                        key={item.id}
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