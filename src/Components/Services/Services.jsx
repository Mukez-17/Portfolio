import React from 'react';
import './Services.scss';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div className='services'>
        <div className="textContainer">
            <p>
                I focus on helping your brand grow<br /> and move forward
            </p>
            <hr />
        </div>
        <div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Bussiness
                </h1>
                <button>WHAT I DO?</button>
            </div>
        </div>
        <div className="aboutContainer">
            <div className="about">
                As a creative freelance web developer, I'm passionate about crafting 
                one-of-a-kind online experiences that help businesses stand out from 
                the crowd. I don't rely on templates or cookie-cutter solutions. 
                Instead, I work closely with each client to understand their brand, 
                vision, and goals - then build a fully customized website from scratch.
            </div>
            <div className="container">
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Custom Website Design</h2>
                    <p>I'll design a visually stunning and distinct website that captures your business's unique brand identity and personality.</p>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Responsive Design</h2>
                    <p>Your website will provide an optimal viewing and user experience across all devices - desktops, tablets, and mobiles.</p>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>CMS Integration</h2>
                    <p>I can integrate a user-friendly content management system, enabling you to easily update your site's content.</p>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>E-Commerce Solutions</h2>
                    <p>Need to sell products online? I'll build a secure, conversion-optimized e-commerce platform.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Services