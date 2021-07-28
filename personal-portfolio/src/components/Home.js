import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    const risingSun = {
        start: {
            opacity: 1,
            y: 500
        },
        end: {
            y: 0,
            opacity: 1, 
            transition: {duration: 3, delay: 2}
        }
    }

    return (
        <motion.div className="home" variants={risingSun} initial="start" animate="end">
            <h1>Marc</h1>
            <h1>Rodriguez</h1>
        </motion.div>
    )
}

export default Home