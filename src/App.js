import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './App.css';

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./containers/Projects";
import Blogs from "./containers/Blogs";
import Contact from "./components/Contact";

function App() {
  useEffect(()=> {
    //* background gradient updates based on time of day
    // const now = new Date('6/13/2018 21:27:00')
    const now = new Date()
    const nowHour = now.getHours()
    const bodyClasses = document.body.classList
    if (nowHour >= 21 || nowHour < 4) {
      document.body.classList.remove(...bodyClasses)
      document.body.classList.add('night-time')
    }
    if (nowHour >= 4 && nowHour < 8) {
      document.body.classList.remove(...bodyClasses)
      document.body.classList.add('early-sunrise')
    }
    if (nowHour >= 8 && nowHour < 10) {
      document.body.classList.remove(...bodyClasses)
      document.body.classList.add('light-day-time')
    }
    if (nowHour >= 10 && nowHour < 17) {
      document.body.classList.remove(...bodyClasses)
      document.body.classList.add('pleasant-day-time')
    }
    if (nowHour >= 17 && nowHour < 21) {
      document.body.classList.remove(...bodyClasses)
      document.body.classList.add('vivid-sunset')
    }
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/about' render={() => <About />} />
        <Route exact path='/projects' render={() => <Projects />} />
        <Route exact path='/blogs' render={() => <Blogs />} />
        <Route exact path='/contact' render={() => <Contact />} />
      </Switch>
      <img className="trees" src={process.env.PUBLIC_URL + "/trans-tree-sil-mirror-crop-new.png"} alt="tree silouette bottom border"/>
    </div>
  );
}

export default App;
