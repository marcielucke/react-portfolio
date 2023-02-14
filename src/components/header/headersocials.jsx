import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'


const HeaderSocials = () => {
    return (
        <div className='headerSocials'> 
        <a href="https://www.linkedin.com/in/marcella-lucke" target="blank"> <SlSocialLinkedin/></a>
        <a href="https://github.com/marcielucke" target="blank"> <AiFillGithub/> </a>
        <a href="luckemarcella@gmail.com" target="blank"> <AiOutlineMail/> </a>
        </div>
    )
}

export default HeaderSocials