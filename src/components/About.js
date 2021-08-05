import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";
import { AiFillApi } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { SiBootstrap, SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiRails, SiReact, SiRedux, SiRuby, SiVisualstudio } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';



const About = () => {
    const width = window.innerWidth 
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    const [windowWidth, setWindowWidth] = useState(width)


    useEffect(() => {
        window.addEventListener('resize', () => calculateWidth())
        window.scroll(0, 0)
        return () => {window.removeEventListener('resize', calculateWidth)}
    }, [])

    const calculateWidth = () => {
        const newWidth = window.innerWidth 
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        setWindowWidth(newWidth)
    }

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end">
            <h2>About Me</h2>
            <div className="about-me">
                <div className="bio">
                    <h3>Hello!</h3> 
                    {windowWidth < 769 ? <img src="http://placekitten.com/g/200/300" alt="pic of Marc Rodriguez"/> : null}
                    <h3>I'm Marc Rodriguez.</h3> 
                    <p>I'm a Full Stack Developer with experience using frontend and backend technologies. <a href="#skills">see full list of skills</a></p>
                    <p>I am a recent graduate of Flatiron School.</p>

                    <p>I was introduced to programming by a close friend, a web developer. I was looking for a career change that would challenge me and at the same time be rewarding. I started with some free courses online and quickly fell in love with the problem solving aspects of programming. I now try to code everyday to learn new things and to improve my skills.</p>

                    <p>I have a passion for traveling and have lived abroad. This experience gave me the opportunity to work in multiple different sectors.</p>

                    <p>With my background as an English teacher abroad, I am experienced working on a cross cultural team. I am passionate about learning new things and helping others learn.</p>

                    <p>With my background in merchandising, I prioritize completing tasks under pressure, meeting deadlines and delivering quality products that are accurate.</p>

                </div>
                <div className="tech-skills">
                    {windowWidth >= 769 ? <img src="http://placekitten.com/g/200/300" alt="pic of Marc Rodriguez"/> : null}
                    <h3>When I am not coding:</h3>            

                    <p>Music has always been an important part of my life. I studied music technology at University. I have also played the drums for most of my life. I have recently been exploring the intersection of audio and programming.</p> 

                    <p>The Pacific Northwest is a great place to walk about. I enjoy hiking, camping, reading comic books, playing table top games, cooking and traveling.</p>
                </div>
                <div className="about-skills">
                    <h3 id="skills">Skills:</h3>
                    <div className="skill-icons">
                        <div className="icon-and-name" >
                            <SiHtml5 color="#e54b20"/>
                            <span className="icon-name" >HTML</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiCss3 color="#264de4"/>
                            <span className="icon-name" >CSS</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiJavascript color="#1f4ece"/>
                            <span className="icon-name" >JavaScript</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiReact color="#61d9fb"/>
                            <span className="icon-name" >React</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiRedux color="#764abc"/>
                            <span className="icon-name" >Redux</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiRuby color="#bc1c0a"/>
                            <span className="icon-name" >Ruby</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiRails color="#c42f23"/>
                            <span className="icon-name" >Rails</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiFirebase color="#039be5"/>
                            <span className="icon-name" >Firebase</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiJsonwebtokens color="#06f1e6"/>
                            <span className="icon-name" >JWT</span>
                        </div>
                        <div className="icon-and-name" >
                            <AiFillApi color="#f05c2b"/>
                            <span className="icon-name" >API</span>
                        </div>
                        <div className="icon-and-name" >
                            <VscJson color="skyblue"/>
                            <span className="icon-name" >JSON</span>
                        </div>
                        <div className="icon-and-name" >
                            <DiSqllite color="#034a62"/>
                            <span className="icon-name" >SQLite</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiBootstrap color="#7852b2"/>
                            <span className="icon-name" >Bootstrap</span>
                        </div>
                        <div className="icon-and-name" >
                            <SiVisualstudio color="##21a5f1"/>
                            <span className="icon-name" >VS Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About