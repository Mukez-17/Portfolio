import React, { useRef } from 'react';
import './About.scss';
import { motion } from 'framer-motion';

const variants = {
    initial:{
        y:-500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}

function About() {
    const ref = useRef();

  return (
    <motion.div className="About" ref={ref} variants={variants} initial="initial" whileInView='animate'>
        <div className="about_container">
            <div className="title">Skills</div>
            <div className="skills">
                <span className="skills_title">HTML</span>
                <div className="skills_bar">
                    <div className="skills_per html">
                        <span className="tooltip">90%</span>
                    </div>
                </div>
            </div>
            <div className="skills">
                <span className="skills_title">CSS</span>
                <div className="skills_bar">
                    <span className="skills_per css">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skills">
                <span className="skills_title">JavaScript</span>
                <div className="skills_bar">
                    <span className="skills_per javascript">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
            <div className="skills">
                <span className="skills_title">React.js</span>
                <div className="skills_bar">
                    <span className="skills_per react">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skills">
                <span className="skills_title">Mongodb</span>
                <div className="skills_bar">
                    <span className="skills_per mongodb">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skills">
                <span className="skills_title">Node.js</span>
                <div className="skills_bar">
                    <span className="skills_per node">
                        <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>
            <div className="skills">
                <span className="skills_title">Java</span>
                <div className="skills_bar">
                    <span className="skills_per java">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About