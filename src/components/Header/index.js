import React from 'react'
import './Header.css'

import Logo from '../../assets/logo.png'
import Navbar from '../Navbar'
import Hero from '../Hero'

const Header = () => {

    return (
        // <div class="header">
        //     <div className='container'>
                
        //             <div class="navbar">
        //                 <div class="logo">
        //                     <img src={Logo} alt="logo" width="125px" />
        //                 </div>
        //                 <nav>
        //                     <ul id="MenuItems">
        //                         <li><a href="">Home</a></li>
        //                         <li><a href="">Services</a></li>
        //                         <li><a href="">About</a></li>
        //                         <li><a href="">Contact</a></li>
        //                         <li><a href="">Expertise</a></li>
        //                     </ul>
        //                 </nav>
        //             </div>
        //             <div class="row">
        //                 <div class="col-2">
        //                     <h1>Give Your Workout <br /> A New Style!</h1>
        //                     <p>Success isn't always about greatness. It's about consistency. Consistent <br />hardwork gains success. Greatness will come.</p>
        //                     <a href="" class="btn">Explore Now &#8594;</a>
        //                 </div>
        //                 <div class="col-2">
                            
        //                 </div>
        //             </div>
                
        //     </div>
        // </div>
        <div className='header'>
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default Header