import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
    return (
        <section id='services'>
            <h5> What I Offer</h5>
            <h2> Services</h2>
            <div className=" container services_container">
                <article className='service'>
                    <div className='service_head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service_list'>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> User research and analysis</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p>Wireframing and prototyping</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p>Visual design</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Front-end development</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Front End Design</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Backend Database Building</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Web hosting and maintenance</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> E-commerce development</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service_list'>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Education Blog Post Writing</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Educational Video production</p>
                        </li>
                        <li> <AiOutlineCheck className='service_list-icon'/>
                        <p> Content strategy and planning</p>
                        </li>
                      
                    </ul>
                </article>
                </div> 


        </section>
    )
}

export default Services