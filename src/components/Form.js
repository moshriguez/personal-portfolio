import React, {useState} from "react";

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
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailContent)
        }
        fetch('http://localhost:3000/', config)
        .then(res => res.json())
        .then(console.log)
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
            <input type="textarea" name="message" onChange={handleChange} value={contactForm.message} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default Form