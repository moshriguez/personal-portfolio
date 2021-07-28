import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";


const About = () => {

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end">
            <h2>About Me</h2>
            <h3>Hello!</h3> 
            <h3>I'm Marc Rodriguez.</h3> 
            <p>I'm a Full Stack Developer with experience using frontend and backend technologies. <a href="#skills">see full list of skills</a></p>
            <p>I am a recent graduate of Flatiron School.</p>

            <p>I was introduced to programming by a close friend, a web developer. I was looking for a career change that would challenge me and at the same time be rewarding. I started with some free courses online and quickly fell in love with the problem solving aspects of programming. I now try to code everyday to learn new things and to improve my skills.</p>

            <p>I have a passion for traveling and have lived abroad. This experience gave me the opportunity to work in multiple different sectors.</p>

            <p>With my background as an English teacher abroad, I am experienced working on a cross cultural team. I am passionate about learning new things and helping others learn.</p>

            <p>With my background in merchandising, I prioritize completing tasks under pressure, meeting deadlines and delivering quality products that are accurate.</p>

            <h3>When I am not coding:</h3>            

            <p>Music has always been an important part of my life. I studied music technology at University. I have also played the drums for most of my life. I have recently been exploring the intersection of audio and programming.</p> 

            <p>The Pacific Northwest is a great place to walk about. I enjoy hiking, camping, reading comic books, playing table top games, cooking and traveling.</p>
            
            <h3 id="skills">Skills:</h3>

        </motion.div>
    )
}

export default About