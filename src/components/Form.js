import React, {useState} from "react";

import Modal from "./Modal";

const Form = () => {
    const [contactForm, setContactForm] = useState({name: '', message: '', email: '', subject: ''})
    const [errors, setErrors] = useState([])
    const [sending, setSending] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState('Your message is being sent...')

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
    }

    const validateForm = () => {
        const {name, message, email, subject} = contactForm
        const newErrors = []
        if (!name) {
            newErrors.push('Please enter your name.')
        }
        if (!message) {
            newErrors.push('Please enter a message.')
        }
        if (!email) {
            newErrors.push('Please enter your email.')
        }
        if (!subject) {
            newErrors.push('Please enter a subject.')
        }
        if (newErrors.length) {
            console.log(newErrors)
            setErrors(newErrors)
        } else {
            handleFetch()
            setSending(true)
            setErrors(newErrors)
            console.log('no errors')
        }
        return !errors.length
    }

    const handleFetch = () => {
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
        fetch('https://radiant-island-38686.herokuapp.com/', config)
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            setPopUpMessage(res.message)
            resetForm()
        })
        .catch(err => setErrors([...errors, err]))
    }

    const resetForm = () => {
        setContactForm({name: '', message: '', email: '', subject: ''})
    }

    const renderErrors = (regexStr) => {
        const regex = new RegExp(regexStr)
        if (errors.length > 0) {
            const errorMessage = errors.find(error => regex.test(error))
            if (errorMessage) {
                return <span>{errorMessage}</span>
            }
        }
    }
    
    const errorOutline = (regexStr) => {
        const regex = new RegExp(regexStr)
        if (errors) {
            return errors.some(error => regex.test(error))
        }
    }

    const renderModal = () => {
        if (sending) {
            return <Modal 
                message={popUpMessage} 
                resetForm={resetForm} 
                setSending={setSending} 
                errors={errors} 
                />
        } else {
            return null
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name="name" 
                onChange={handleChange} 
                className={errorOutline('name') ? 'error' : 'none'}
                value={contactForm.name} />
            {renderErrors('name')}
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                name="email" 
                onChange={handleChange} 
                className={errorOutline('email') ? 'error' : 'none'}
                value={contactForm.email} />
            {renderErrors('email')}
            <label htmlFor="subject">Subject</label>
            <input 
                type="text" 
                name="subject" 
                onChange={handleChange} 
                className={errorOutline('subject') ? 'error' : 'none'}
                value={contactForm.subject} />
            {renderErrors('subject')}
            <label htmlFor="message">Message</label>
            <textarea 
                type="textarea" 
                name="message" 
                onChange={handleChange} 
                className={errorOutline('message') ? 'error' : 'none'}
                value={contactForm.message} />
            {renderErrors('message')}
            <input type="submit" value="Submit" />
        </form>
        {renderModal()}
        </>
    )
}

export default Form