import React from 'react'
import './header.css'
import CTA from './CTA' 
import Me from '../../assets/marc.png'
import HeaderSocials from './headersocials'
 

const Header = () => {
    return (
       <header id="home">
        <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Marcie Lucke</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>


        <div className='me'>
            <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'> Scroll Down</a>
        </div>
        
       </header>
    )
}

export default Header