import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className='navbar'>
            <div className='_container'>
                <span>
                    <img src={Logo} />
                    <h2 className='first'>Word<h2 className='second'>Map</h2></h2>
                </span>
                <button className='hamburger' onClick={() => { setClick(!click) }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <ul>
                        <li>
                            <Link onClick={() => {
                                setClick(false);
                                scrollToTop();
                            }} to="">Home</Link>
                        </li>
                        <li><a onClick={handleClick} href="#about">About</a></li>
                        <li><a onClick={handleClick} href="#services">Services</a></li>
                        <li><a onClick={handleClick} href="#expertise">Expertise</a></li>
                        <li><a onClick={handleClick} href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navbar