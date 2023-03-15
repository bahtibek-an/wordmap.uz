import React from 'react'
import './Information.css'
import Card from './Card'

const Data = [
    {
        id: 1,
        paragraph: "All texts translated in the agency comply with quality standards.",
        heading: "Quality"
    },
    {
        id: 2,
        paragraph: "Our translation agency is engaged in the professional translation of documents of all volumes.",
        heading: "Scalability"
    },
    {
        id: 3,
        paragraph: "Order a translation from us, and we will fulfill the order at short notice..",
        heading: "Promptness"
    },
]

const Information = () => {
    return (
        <div className='information'>
            <h2 className='title'>Confidentiality and Information Security</h2>
            <div className='container'>
                {
                    Data.map((item) => (
                        <Card
                            paragraph={item.paragraph}
                            heading={item.heading}
                        />
                    ))
                }   
            </div>
        </div>
    )
}

export default Information