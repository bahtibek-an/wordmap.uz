import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <span>
                    <img src={Logo} />
                    {/* <h2 className='first'>Word<h2 className='second'>Map</h2></h2> */}
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
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>About</a></li>
                        <li><a>Expertise</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navbar