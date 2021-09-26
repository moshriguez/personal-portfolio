import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { CgLoadbarDoc } from 'react-icons/cg';


import { risingDiv } from "../helpers/animation";
import Form from "./Form";

const Contact = () => {

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end" >
            <h2>Contact Me</h2>
            <p className="call-to-action">
                I'm currently looking for a full time developer position.<br/>
                Please feel free to reach out if you would like to discuss my work or a possible opportunity.
            </p>
            <div className="link-icons">
                <a href="https://www.linkedin.com/in/marc-herman-rodriguez" target="_blank" rel="noopener noreferrer">   
                    <FontAwesomeIcon icon={faLinkedin} /> 
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/moshriguez" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faGithub} /> 
                    <span>GitHub</span>
                </a>
                {/* <a href="mailto:marc.herman.rodriguez@gmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <span>Email</span>
                </a> */}
                <a href={process.env.PUBLIC_URL + "/resume.pdf"} >
                    <CgLoadbarDoc />
                    <span>Resume</span>
                </a>
            </div>
            <Form />
        </motion.div>
    )
}

export default Contact