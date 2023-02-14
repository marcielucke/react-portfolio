import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsBookshelf} from 'react-icons/bs'
import {FaEnvelopeOpenText} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
    return ( 
        <nav>
            <a href="#home" onClick={ () => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}> <AiOutlineHome/></a>
            <a href="#about" onClick={ () => setActiveNav('#about')} className={activeNav === 'about' ? 'active' : ''}> <SiAboutdotme/></a>
            <a href="#experience" onClick={ () => setActiveNav('#experience')} className={activeNav === 'experience' ? 'active' : ''}> <BsBookshelf/></a>
            <a href="#contact" onClick={ () => setActiveNav('#contact')} className={activeNav === 'contact' ? 'active' : ''}> <FaEnvelopeOpenText/></a>
        </nav>
    )
}
 
export default Nav