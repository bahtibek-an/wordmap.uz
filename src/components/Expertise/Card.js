import React from 'react'
import './Card.css';

const Card = (props) => {
    return (
        <li className='cards__item'>
            <div className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img
                        className='cards__item__img'
                        alt='Expertise'
                        src={props.src}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </div>
        </li>
    )
}

export default Card