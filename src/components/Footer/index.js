import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import {FaPhoneAlt, FaGlobe, FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'>
                <div className='col'>
                    <img src={Logo}/>
                </div>
                <div className='_col-2'>
                    {/* <h3>Company</h3> */}
                    <span><FaPhoneAlt className='icon' size={20}/><p><a href="tel:+998909380911">+998(90) 938-09-11</a></p></span>
                    
                    {/* <span><FaGlobe className='icon' size={20}/><p><a target="_blank" href="http://www.wordmap.uz/">www.wordmap.uz</a></p></span> */}
                    
                    <span><MdEmail className='icon' size={20}/><p>info@wordmap.uz, biz.dep@wordmap.uz</p></span>
                    <span><FaMapMarkerAlt className='icon' size={20}/><p>Legal address: 56, M.Ulugbek str., M.Ulugbek district, Tashkent city, 100007, Uzbekistan</p></span>
                    <span><FaMapMarkerAlt className='icon' size={20}/><p>Postal address: 29, Nukus str., Mirabad district, Tashkent city, 100015, Uzbekistan</p></span>
                </div>
                {/*<div className='col'>*/}
                {/*    /!* <h3>Subscribe for Newsletter</h3> *!/*/}
                {/*    <div className='input-areas'>*/}
                {/*        <form>*/}
                {/*            <input*/}
                {/*                className='footer-input'*/}
                {/*                name='email'*/}
                {/*                type='email'*/}
                {/*                placeholder='Your Email'*/}
                {/*            />*/}
                {/*            <Button buttonStyle='btn--outline'>Subscribe</Button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className='created'>
                <p>&#169; Wordmap LLC {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer