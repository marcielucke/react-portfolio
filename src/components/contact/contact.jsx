import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsChatText} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ht7xyqf', 'template_v9tzah9', form.current, 'E5tOm975L8Z0-Owk_')
      
      e.target.reset()
    };

    return (
        <section id="contact">
            <h5> Get In Touch</h5>
            <h2> Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <AiOutlineMail className='contact_option-icon'/>
                        <h4> Email</h4>
                        <h5> luckemarcella@gmail.com</h5>
                        <a href="mailto:luckemarcella@gmail.com" > Send A Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsChatText className='contact_option-icon'/>
                        <h4> Text</h4>
                        <h5> 630-272-3988</h5>
                    </article>
                    <article className='contact_option'>
                        <FiFacebook className='contact_option-icon'/>
                        <h4> Messenger</h4>
                        <h5> </h5>
                        <a href="https://m.me/marcie.lucke"> Send A Message</a>
                    </article>
                    
                </div>
                <form ref={form} onSubmit= {sendEmail}>
                    <input type="text" name="name" placeholder='Marcella Lucke' required />
                    <input type="email" name="email" placeholder='luckemarcella@gmail.com' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'> Send Message</button>


                </form>


            </div>

        </section>
    )
}

export default Contact