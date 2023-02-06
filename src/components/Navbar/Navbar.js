import React from 'react';
import './Navbar.css';
import logo from './LOGO.png'
export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className='NavbarDiv'>
        <div className='NavbarLogo'>
            <img src={logo} className='logoImg' />
        </div>
        <div className='NavbarLinks'>
            <div>Home</div>
            <div>About Me</div>
            <div>Services</div>
            <div>Portfolio</div>
            <div>Contact Me</div>
        </div>
        </div>
    </div>
  )
}
