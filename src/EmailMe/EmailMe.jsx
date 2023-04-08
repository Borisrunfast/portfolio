import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useAnimation from '../hooks/useAnimation'


function EmailMe() {
    // Send Form
    const [formData, setFormData] = useState(JSON.parse(window.localStorage.getItem('formData')) || {user_name: '', user_email: '', user_subject: '', message: ''})
    const form = useRef()
    const [ref, animate] = useAnimation()

    function updateForm(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    window.localStorage.setItem('formData', JSON.stringify(formData))


    function sendEmail(e) {
      e.preventDefault()
  
      emailjs.sendForm('service_tgb4y29', 'template_x0syeha', form.current, 'mHJ3BbYol3VfBm0qU')
        .then((result) => {
            if (!result.ok) {
                window.alert('Message was send successfully!')
            }
            setFormData({user_name: '', user_email: '', user_subject: '', message: ''})
        }, (error) => {
            console.log(error)
            window.alert('Something went wrong, try again later')
        })
    }


    return (
        <div ref={ref} className={'w-screen h-screen flex flex-col justify-center items-center' + animate} style={{animationDuration: '2s'}}>
            <div className='div-decor w-7/12 h-fit flex flex-col    max-lg:w-11/12'>
                <h2 className='pb-8'>CONTACT ME</h2>
                <form className='form-decor flex flex-col' ref={form} onSubmit={sendEmail}>
                    
                    <input id="name" name='user_name' maxLength="20" minLength="3" placeholder='Name...' value={formData.user_name} onChange={(e) => updateForm(e)} required/>
                    <input id="email" name='user_email' maxLength="30" minLength="5" placeholder='Email...' value={formData.user_email} onChange={(e) => updateForm(e)} required/> 
                    <input id="subject" name='user_subject' maxLength="100" minLength="3" placeholder='Subject...' value={formData.user_subject} onChange={(e) => updateForm(e)} required/>
                    
                    <textarea rows='5' id='textarea' name='message' maxLength="250" minLength="10" placeholder='Message...' value={formData.message} onChange={(e) => updateForm(e)} required />
                    <button className='button-decor ' type='submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}

export default EmailMe