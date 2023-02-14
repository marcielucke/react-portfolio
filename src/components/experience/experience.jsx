import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'



const Experience = () => {
    return (
        <section id="experience">
        <h5> What Skills I have</h5>
        <h2> My Experience</h2>

        <div className='container experience_container'>
            <div className='experience_frontend'>
                <h3> Frontend Development</h3>
                <div className='experience_content'>
                <article className='experience_details'> <AiOutlineCheckCircle/>
                <h4>HTML</h4>
                </article>
                <article className='experience_details'> <AiOutlineCheckCircle/>
                <h4>CSS</h4>
                </article>
                <article className='experience_details'> <AiOutlineCheckCircle/>
                <h4>JavaScript</h4>
                </article>
                <article className='experience_details'> <AiOutlineCheckCircle/>
                <h4>React</h4>
                </article>
                <article className='experience_details'> <AiOutlineCheckCircle/>
                <h4>BootStrap</h4>
                </article>
                
                </div>
                
            </div>
            <div className='experience_backend'>
            <h3> Backend Development</h3>
            <div className='experience_content'>
            <article className='experience_details'> <AiOutlineCheckCircle/>
            <h4> MySQL</h4>
            </article>
            <article className='experience_details'> <AiOutlineCheckCircle/>
            <h4> MongoDB</h4>
            </article>
            <article className='experience_details'> <AiOutlineCheckCircle/>
            <h4> Mongoose</h4>
            </article>
            <article className='experience_details'> <AiOutlineCheckCircle/>
            <h4>Node JS</h4>
            </article>
            
                </div>
            </div>
        </div>

        </section>
    )
}

export default Experience