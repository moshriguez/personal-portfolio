import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";
import { AiFillApi } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { SiBootstrap, SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiRails, SiReact, SiRedux, SiRuby } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

import { projects } from "../helpers/projects";

const ProjectCard = () => {
    const [name, description, image, frontend, backend, github, demo, tools] = projects

    const renderIcon = (name, i) => {
        switch(name) {
            case "api":
                return <AiFillApi key={i} color="#61DBFB"/>
            case "sqlite":
                return <DiSqllite key={i} color="#F0DB4F"/>
            case "bootstrap":
                return <SiBootstrap key={i} color="#E31864"/>
            case "css":
                return <SiCss3 key={i} color="#CC0000"/>
            case "firebase":
                return <SiFirebase key={i} color="#013D57"/>
            case "html":
                return <SiHtml5 key={i} color="#764ABC"/>
            case "javascript":
                return <SiJavascript key={i} color="#0064A5"/>
            case "webtoken":
                return <SiJsonwebtokens key={i} color="#6CD5FD"/>
            case "rails":
                return <SiRails key={i} color="#673BB6"/>
            case "react":
                return <SiReact key={i} color="gold"/>
            case "redux":
                return <SiRedux key={i} color="skyblue"/>
            case "ruby":
                return <SiRuby key={i} color="skyblue"/>
            case "json":
                return <VscJson key={i} color="skyblue"/>
                default:
                return
        }
    }

    const renderAllIcons = () => {
        return (
            <>
            {tools.map((tool, i) => renderIcon(tool, i))}
            </>
        )
    }

    return (
        <div className="project-card">
            <h3>{name}</h3>
            <img src="https://picsum.photos/300/200" alt="placeholder" />
            <p>{description}</p>
            <div className="links">
                {!!github ? <a href={github}>Github <SiGithub /></a> : (
                        <>
                            <a href={frontend}>Frontend <SiGithub /></a>
                            <a href={backend}>Backend</a>
                        </>
                    )
                }
                <a href={demo}>Demo</a>
            </div>
            <div className="skill-icons">
                {renderAllIcons()}
            </div>
        </div>
    )
}

export default ProjectCard