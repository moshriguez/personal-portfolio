import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { risingDiv } from "../helpers/animation";

const Contact = () => {

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end" >
            <h2>Contact Me</h2>
            <div className="link-icons">
                <a href="https://www.linkedin.com/in/marc-herman-rodriguez" target="_blank">   
                    <FontAwesomeIcon icon={faLinkedin} /> 
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/moshriguez" target="_blank" >
                    <FontAwesomeIcon icon={faGithub} /> 
                    <span>GitHub</span>
                </a>
                <a href="mailto:marc.herman.rodriguez@gmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <span>Email</span>
                </a>
            </div>
        </motion.div>
    )
}

export default Contact