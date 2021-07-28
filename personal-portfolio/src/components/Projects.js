import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";
import { SiFirebase, SiRails, SiReact, SiRedux, SiRuby } from 'react-icons/si';

const Projects = () => {

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Project Name</h3>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <p>Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                    <div className="links">
                        <a href="">Github</a>
                        <a href="">Demo</a>
                    </div>
                    <div className="skill-used">
                        <SiReact />
                        <SiRedux />
                        <SiRuby />
                        <SiRails />
                        <SiFirebase />
                    </div>
                </div>
                <div className="project-card">
                    <h3>Project Name</h3>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <p>Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                    <div className="links">
                        <a href="">Github</a>
                        <a href="">Demo</a>
                    </div>
                    <div className="skill-used">
                        <SiReact />
                        <SiRedux />
                        <SiRuby />
                        <SiRails />
                        <SiFirebase />
                    </div>
                </div>
                <div className="project-card">
                    <h3>Project Name</h3>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <p>Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                    <div className="links">
                        <a href="">Github</a>
                        <a href="">Demo</a>
                    </div>
                    <div className="skill-used">
                        <SiReact />
                        <SiRedux />
                        <SiRuby />
                        <SiRails />
                        <SiFirebase />
                    </div>
                </div>
                <div className="project-card">
                    <h3>Project Name</h3>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <p>Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                    <div className="links">
                        <a href="">Github</a>
                        <a href="">Demo</a>
                    </div>
                    <div className="skill-used">
                        <SiReact />
                        <SiRedux />
                        <SiRuby />
                        <SiRails />
                        <SiFirebase />
                    </div>
                </div>
                <div className="project-card">
                    <h3>Project Name</h3>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <p>Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                    <div className="links">
                        <a href="">Github</a>
                        <a href="">Demo</a>
                    </div>
                    <div className="skill-used">
                        <SiReact />
                        <SiRedux />
                        <SiRuby />
                        <SiRails />
                        <SiFirebase />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects