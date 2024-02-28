import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

function About() {

    function openNewTab(url) {
        window.open(url, '_blank').focus()
    }


    return (
        <div id="about">
            <div>

                <h1>About Me</h1>
                <p>I graduated from Flatiron School's bootcamp for software engineering in February 2024. I chose to do this bootcamp because I was in dire need of a career change. Previously, I was a medical secretary (officially "office clerk") at Monroe Community Hospital for three years. While I loved the MCH community, I wanted a career with technical challenges and room to grow. So, I researched careers and concluded that software engineering suits me best. Now I am seeking my first job creating software.</p>

                <p>What sets me apart from other software engineers is my education in physics. I have a bachelor's from SUNY Geneseo and I completed some coursework towards a PhD at UC Santa Barbara. I simultaneously worked as a teaching assistant. During that time, I honed my skills in math, science, analytical problem solving, and communication. </p>

                <p>I am always happy to discuss programming, among other things. Message me on LinkedIn to start a conversation.</p>
            </div>
            <div id='about-linkedin-icon-row'>

                <div className='icon clickable linkedin' onClick={() => openNewTab('https://www.linkedin.com/in/evan-losh/')}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='whitespace'></div>
            </div>
        </div>
    )
}

export default About