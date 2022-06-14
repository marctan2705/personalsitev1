import './App.css';
import Contact from './Components/Contact';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Timeline from './Components/Timeline';
import Projects from './Components/Projects';
import ProjectsList from './Components/ProjectsList';
import ProjectCompiled from './Components/ProjectCompiled';
import { useEffect, useRef, useState } from 'react';
function App() {

  return (
    <div className='overall-app'>
    <Navbar />
    <Intro id="intro"/>
    <div data-aos="fade-down" className='section-header' id="education">Education</div>
    <Timeline />
    <div data-aos="fade-down" className='section-header-blue' id="skills">Background and Skills</div>

    <Skills />
    <div data-aos="fade-down" className='section-header' id="projects">Projects</div>
    <ProjectCompiled />
    <Contact id = "contact"/>
    </div>
  );
}

export default App;
