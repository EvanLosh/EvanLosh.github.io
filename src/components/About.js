import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {

    function openNewTab(url) {
        window.open(url, '_blank').focus()
    }


    return (
        <div id="about">
            <div>

                <h1>About Me</h1>

                <p>Hi, I'm Evan! 👋</p>

                <p> As a passionate software engineer, I thrive on building full-stack web applications using Python, JavaScript, and React. My biggest project is CommEd, a forum and typesetting tool for math education. But let me share a bit more about my journey: </p>

                <h2>Educational background</h2>

                <p>I earned a BA in Physics, which honed my analytical thinking and problem-solving skills. Physics taught me to break down complex concepts into manageable pieces—a valuable asset in software development.</p>

                <h2>Diverse experience</h2>

                <p>
                    I've had the privilege of being a university teaching assistant and a tutor. Guiding students, demystifying intricate topics, and witnessing their “aha” moments fueled my desire to contribute to education.
                    <br></br>
                    When I worked as a healthcare office clerk, I honed my communication and customer service skills daily while assisting patients, their families, nurses, doctors, therapists, dieticians, social workers, administrators and others.
                </p>

                <h2>Why software?</h2>

                <p>To me, creating software is a way to impact people, empower people, and enrich the lives of people wherever they are in the world, and that's what I would like to do. I also enjoy building things, learning new skills, overcoming mathematical and technical challenges, and taking part in skilled and driven teams to build things I couldn't build alone.</p>

                <p>I embarked on an adventure with Flatiron School's software engineering bootcamp. For three months, I was immersed in learning skills for building projects, actually building projects, and collaborating with people who shared my interests. It was exhilirating! </p>

                <h2>Contact me</h2>

                <p>So, here I am—ready to learn, code, collaborate, and make a difference. Message me on LinkedIn, and let's build something remarkable! 🚀💻✨</p>


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