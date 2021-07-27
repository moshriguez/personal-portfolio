import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {

    return (
        <div className="watercolour-container">
            <h2>Contact Me</h2>
            <div className="link-icons">
                <a href="" >   
                    <FontAwesomeIcon icon={faLinkedin} /> 
                    <span>LinkedIn</span>
                </a>
                <a href="" >
                    <FontAwesomeIcon icon={faGithub} /> 
                    <span>GitHub</span>
                </a>
                <a href="" >
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <span>Email</span>
                </a>
            </div>
        </div>
    )
}

export default Contact