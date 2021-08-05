import React from "react";
import { motion } from "framer-motion";
import { risingName } from "../helpers/animation";

const Home = () => {

    return (
        <motion.div className="home" variants={risingName} initial="start" animate="end">
            <h1>Marc</h1>
            <h1>Rodriguez</h1>
        </motion.div>
    )
}

export default Home