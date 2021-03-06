import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navLink, risingNavBar } from "../helpers/animation";



const Navigation = () => {

    return (
        <motion.ul className="menu" variants={risingNavBar} initial="start" animate="end">
            <motion.li variants={navLink}><NavLink to="/about">about</NavLink></motion.li>
            <motion.li variants={navLink}><NavLink to="/projects">projects</NavLink></motion.li>
            <motion.li variants={navLink}><NavLink to="/blogs">blogs</NavLink></motion.li>
            <motion.li variants={navLink}><NavLink to="/contact">contact</NavLink></motion.li>
        </motion.ul>
      
      )
  
}

export default Navigation