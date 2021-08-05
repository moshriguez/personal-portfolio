import React, { useState } from "react";
import { AiFillApi } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { FaVideo } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiRails, SiReact, SiRedux, SiRuby } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

const ProjectCard = ({ project }) => {
    const {name, description, image, frontend, backend, github, demo, tools} = project
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    const renderIcon = (name, i) => {
        switch(name) {
            case "api":
                return (<>
                <AiFillApi key={i} color="#f05c2b"/>
                <span className="icon-name" >API</span>
                </>)
            case "sqlite":
                return (<>
                <DiSqllite key={i} color="#034a62"/>
                <span className="icon-name" >SQLite</span>
                </>)
            case "bootstrap":
                return (<>
                <SiBootstrap key={i} color="#7852b2"/>
                <span className="icon-name" >Bootstrap</span>
                </>)
            case "css":
                return (<>
                <SiCss3 key={i} color="#264de4"/>
                <span className="icon-name" >CSS</span>
                </>)
            case "firebase":
                return (<>
                <SiFirebase key={i} color="#039be5"/>
                <span className="icon-name" >Firebase</span>
                </>)
            case "html":
                return (<>
                <SiHtml5 key={i} color="#e54b20"/>
                <span className="icon-name" >HTML</span>
                </>)
            case "javascript":
                return (<>
                <SiJavascript key={i} color="#1f4ece"/>
                <span className="icon-name" >JavaScript</span>
                </>)
            case "webtoken":
                return (<>
                <SiJsonwebtokens key={i} color="#06f1e6"/>
                <span className="icon-name" >JWT</span>
                </>)
            case "rails":
                return (<>
                <SiRails key={i} color="#c42f23"/>
                <span className="icon-name" >Rails</span>
                </>)
            case "react":
                return (<>
                <SiReact key={i} color="#61d9fb"/>
                <span className="icon-name" >React</span>
                </>)
            case "redux":
                return (<>
                <SiRedux key={i} color="#764abc"/>
                <span className="icon-name" >Redux</span>
                </>)
            case "ruby":
                return (<>
                <SiRuby key={i} color="#bc1c0a"/>
                <span className="icon-name" >Ruby</span>
                </>)
            case "json":
                return (<>
                <VscJson key={i} color="skyblue"/>
                <span className="icon-name" >JSON</span>
                </>)
                default:
                return
        }
    }

    const renderAllIcons = () => {
        return (
            <>
            {tools.map((tool, i) => {
                return (
                    <div className="icon-and-name">
                        {renderIcon(tool, i)}
                    </div> )})}
            </>
        )
    }

    return (
        <div className="project-card" onClick={handleClick} >
            <div className={`project-card-inner ${isFlipped ? 'is-flipped' : null}`}>
                <div className="card-face-front" >
                    <h3>{name}</h3>
                    <img src={image} alt="{name} screenshot" />
                    <p>{description}</p>
                </div>
                <div className="card-face-back" >
                    <div className="links">
                        {!!github ? <a href={github}><SiGithub /> Github</a> : (
                                <>
                                    <a href={frontend}><SiGithub /> Frontend</a>
                                    <a href={backend}><SiGithub /> Backend</a>
                                </>
                            )
                        }
                        <a href={demo}><FaVideo /> Demo</a>
                    </div>
                    <div className="skill-icons">
                        {renderAllIcons()}
                    </div>
                </div>
                </div>
        </div>
    )
}

export default ProjectCard