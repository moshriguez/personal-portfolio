import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <ul className="menu">
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/blogs">blogs</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
      
      )
  
}

export default Navigation