import React from 'react'
import './Expertise.css';

import Card from './Card';

import Power from '../../assets/expertise/Power.png'
import OilandGas from '../../assets/expertise/Oil and Gas.png'
import Agriculture from '../../assets/expertise/Agriculture.png'
import Automotive from '../../assets/expertise/Automotive and Metallurgy.png'
// import Chemicals from '../../assets/expertise/Chemicals.png'
import Chemicals from '../../assets/expertise/Chemistry.png'
// import Technology from '../../assets/expertise/Information Technology.png'
import Technology from '../../assets/expertise/Technology.png'
// import Utility from '../../assets/expertise/Utility Systems.png'
import Utility from '../../assets/expertise/Utilities.png'

const Expertise = () => {
  return (
    <div className='expertise'>
      <h2 className='title'>Our Expertise</h2>
      <div className='expertises'>
        <Card
          src={Power}
          text='Power'
        
        />
        <Card
          src={OilandGas}
          text='Oil and Gas'
          
        />
        <Card
          src={Agriculture}
          text='Agriculture'
        
        />
        <Card
          src={Automotive}
          text='Automotive'
         
        />
      </div>
      <div className='_expertises'>
      <Card
          src={Chemicals}
          text='Chemicals'
        
        />
        <Card
          src={Technology}
          text='Technology'
         
        />
        <Card
          src={Utility}
          text='Utility'
         
        />
      </div>
    </div>
  )
}

export default Expertise