import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";
import { AiFillApi } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { SiBootstrap, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiJsonwebtokens, SiRails, SiReact, SiRedux, SiRuby, SiVisualstudio } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

import { projects } from "../helpers/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

    const renderCard = () => {
        return projects.map(project => {
            return <ProjectCard project={project}/>
        })
    }

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end">
            <h2>Projects</h2>
            <div className="projects-container">
                {renderCard()}
            </div>
        </motion.div>
    )
}

export default Projects