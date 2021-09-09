import e from "express";
import { name } from "file-loader";
import React, {useState} from "react";
import emailjs from "emailjs-com"

const USER_ID = process.env.REACT_APP_USER_ID

const Form = () => {
    const [contactForm, setContactForm] = useState({name: '', message: '', email: '', subject: ''})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, message, email, subject} = contactForm
        const emailContent = {
            from_name: name,
            from_email: email,
            subject,
            message
        }
        emailjs.send(
            'default_service',
            'template_rltdtcs',
            emailContent,
            USER_ID
        )
        resetForm()
    }

    const resetForm = () => {
        setContactForm({name: '', message: '', email: '', subject: ''})
    }

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        })
    }



    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} value={contactForm.name} />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange} value={contactForm.email} />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" onChange={handleChange} value={contactForm.subject} />
            <label htmlFor="message">Message</label>
            <input type="text" name="message" onChange={handleChange} value={contactForm.message} />

        </form>
    )
}

export default Form