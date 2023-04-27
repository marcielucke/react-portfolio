import React from 'react'
import './about.css'
import ME from '../../assets/bubbles2.png'
import {FiAward} from 'react-icons/fi'

const About = () => {
    return (
        <section id='about'>
        <h5> Get To Know</h5>
        <h2> About Me</h2>
        <div className='container about_container'>
            <div className="about_me">
                <div className="about_me-image">
                    <img src={ME} alt='me'/>
                </div>
                
            </div>
            <div className="about_content">
                <div className="about-cards">
                    <article className='about_card'>
                        <FiAward className='about_icon'/>
                        <h5> Experience</h5>
                        <small> Full-Stack Bootcamp Graduate</small>
                    </article>
                    <article className='about_card'>
                        <FiAward className='about_icon'/>
                        <h5> Clients</h5>
                        <small> Feel free to reach out!</small>
                    </article>
                    <article className='about_card'>
                        <FiAward className='about_icon'/>
                        <h5> Projects</h5>
                        <small> 30+ projects completed</small>
                    </article>

                </div>
                <p>
                    
                    My name is Marcie Lucke, and I'm a Full Stack Web Developer. My passion for technology started when I dipped my toes in the world of coding through self teaching.
                     From here I attended the Full Stack Coding Bootcamp at UT Austin in 2022, and have been refining my skills on both front and back end ever since. I love taking on any and all projects
                     to provide both users and clients a seamless experience. My background in healthcare has provided me both the critical thinking and communication skills to create trusting relationships 
                     with my teams! Please reach out, and feel free to check out some of my past projects below.
                </p>
                <a href='#contact'className='btn btn-primry'> Let's Talk! </a>
            </div>
        </div>
        </section>
    )
}

export default About