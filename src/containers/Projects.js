import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";

import { projects } from "../helpers/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

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