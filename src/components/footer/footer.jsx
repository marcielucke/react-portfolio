import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {BsSpotify} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer_logo">
                MLUCKE
            </a>

            <ul className='permalinks'>
                <li><a href="#home"> Home</a></li>
                <li><a href="#about"> About</a></li>
                <li><a href="#experience"> Experience</a></li>
                <li><a href="#portfolio"> Portfolio</a></li>
                <li><a href="#contact"> Contact</a> </li>

            </ul>

            <div className='footers_social'>
                <a href="https://instagram"> <FiFacebook/></a>
                <a href="https://facebook"> <FiInstagram/></a>
                <a href="https://spotify"> <BsSpotify/></a>
            </div>

        </footer>
    )
}

export default Footer