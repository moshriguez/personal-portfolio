import React, {useState} from "react";

const Form = () => {
    const [contactForm, setContactForm] = useState({name: '', message: '', email: '', subject: ''})
    const [errors, setErrors] = useState([])

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
            // handleFetch()
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
            resetForm()
        })
        .catch(err => setErrors([...errors, err]))
    }

    const resetForm = () => {
        setContactForm({name: '', message: '', email: '', subject: ''})
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
            <textarea type="textarea" name="message" onChange={handleChange} value={contactForm.message} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form