import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      
      )
  
}

export default Navigation