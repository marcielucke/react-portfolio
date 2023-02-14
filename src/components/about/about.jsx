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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corrupti possimus amet placeat libero maxime laudantium ipsa molestiae! Corporis, corrupti. Veniam eius ratione quasi magnam, distinctio ullam harum provident laudantium.
                </p>
                <a href='#contact'className='btn btn-primry'> Let's Talk! </a>
            </div>
        </div>
        </section>
    )
}

export default About