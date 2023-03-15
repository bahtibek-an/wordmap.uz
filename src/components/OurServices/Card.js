import React from 'react'
import './Card.css'

import {RiTranslate} from 'react-icons/ri'
import {MdOutlineBusinessCenter, MdConstruction, MdOutlineLocalPhone} from 'react-icons/md'
import {TiFlowParallel} from 'react-icons/ti'
import {FaGlobe} from 'react-icons/fa'

const Card = ({id, name, info}) => {
    return (
        <div className='card'>
            {
                id === 1 ? <RiTranslate color='#00bdfe' size={25}/> : 
                id === 2 ? <MdConstruction color='#00bdfe' size={25}/> : 
                id === 3 ? <MdOutlineBusinessCenter color='#00bdfe' size={25}/> :
                id === 4 ? <FaGlobe color='#00bdfe' size={25}/> :
                id === 5 ? <MdOutlineLocalPhone color='#00bdfe' size={25}/> : 
                <TiFlowParallel color='#00bdfe' size={25}/>
            }
            
            <h2>{name}</h2>
            <p>
                {info}
            </p>
        </div>
    )
}

export default Card