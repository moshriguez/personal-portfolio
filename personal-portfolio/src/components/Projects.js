import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";


const Projects = () => {

    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end">
            
        </motion.div>
    )
}

export default Projects