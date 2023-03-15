import React from 'react'
import './Card.css'

const Card = ({paragraph, heading}) => {
    return (
        <div className='card'>
            <div className='heading-container'>
                <h2>{heading}</h2>
            </div>
            <div className='paragraph-container'>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default Card