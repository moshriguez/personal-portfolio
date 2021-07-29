import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";
import { AiFillApi } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { FaVideo } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiRails, SiReact, SiRedux, SiRuby } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

const ProjectCard = ({ project }) => {
    const {name, description, image, frontend, backend, github, demo, tools} = project

    console.log(project)

    const renderIcon = (name, i) => {
        switch(name) {
            case "api":
                return <AiFillApi key={i} color="#f05c2b"/>
            case "sqlite":
                return <DiSqllite key={i} color="#034a62"/>
            case "bootstrap":
                return <SiBootstrap key={i} color="#7852b2"/>
            case "css":
                return <SiCss3 key={i} color="#264de4"/>
            case "firebase":
                return <SiFirebase key={i} color="#039be5"/>
            case "html":
                return <SiHtml5 key={i} color="#e54b20"/>
            case "javascript":
                return <SiJavascript key={i} color="#1f4ece"/>
            case "webtoken":
                return <SiJsonwebtokens key={i} color="#06f1e6"/>
            case "rails":
                return <SiRails key={i} color="#c42f23"/>
            case "react":
                return <SiReact key={i} color="#61d9fb"/>
            case "redux":
                return <SiRedux key={i} color="#764abc"/>
            case "ruby":
                return <SiRuby key={i} color="#bc1c0a"/>
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
                            <a href={backend}>Backend <SiGithub /></a>
                        </>
                    )
                }
                <a href={demo}>Demo <FaVideo /></a>
            </div>
            <div className="skill-icons">
                {renderAllIcons()}
            </div>
        </div>
    )
}

export default ProjectCard