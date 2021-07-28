import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Navigation = () => {
    const risingSun = {
        start: {
            opacity: 0
        },
        end: {
            opacity: 1, 
            transition: {
                staggerChildren: 0.5,
                delayChildren: 4
            }
        }
    }
    const variant = {
        start: {
            y: 100
        }, 
        end: {
            y: 0,
            transition: {
                duration: 2
            }        
        }
    }

    return (
        <motion.ul className="menu" variants={risingSun} initial="start" animate="end">
            <motion.li variants={variant}><NavLink to="/">home</NavLink></motion.li>
            <motion.li variants={variant}><NavLink to="/about">about</NavLink></motion.li>
            <motion.li variants={variant}><NavLink to="/projects">projects</NavLink></motion.li>
            <motion.li variants={variant}><NavLink to="/blogs">blogs</NavLink></motion.li>
            <motion.li variants={variant}><NavLink to="/contact">contact</NavLink></motion.li>
        </motion.ul>
      
      )
  
}

export default Navigation