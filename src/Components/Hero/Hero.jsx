import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:'-170%',
        transition:{
            repeat:Infinity,
            duration:20,
            repeatType:"mirror"
        }
    }
}

function Hero() {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2>Mukesh Dev</motion.h2>
                <motion.h1>Web developer</motion.h1>
                <motion.div className="buttons">
                    <button type='button'><a href="#Portfolio">See the Latest Works</a></button>
                    <button type='button'><a href="#Contact">Contact Me</a></button>
                </motion.div>
                <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Front End Developer and Java Developer
        </motion.div>
        <div className="imageContainer">
            <img src="/Mukesh.png" alt="" />
        </div>
    </div>
  )
}

export default Hero