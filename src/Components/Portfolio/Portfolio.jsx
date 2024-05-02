import React, { useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id:1,
        title:"Swirts - Casual Wear Shopping Website",
        img:"public/Swirts.png",
        desc:"Swirts, a trendy casual wear brand, approached me to design and develop a modern e-commerce website that would showcase their latest clothing collections and provide a seamless online shopping experience for their customers.",
        link:"https://mukez-17.github.io/Frontend-Task-Three/"
    },
    {
        id:2,
        title:"Custom Cart E-Commerce",
        img:"public/Custom_E_cart.png",
        desc:"I am designed and developing a fully customized e-commerce platform that would provide businesses with a tailored online shopping experience, catering to their unique requirements and branding needs.",
        link:"https://mukez-17.github.io/Frontend-Task-Five/"
    },
    {
        id:3,
        title:"Weather App",
        img:"public/Weather_app.png",
        desc:"A cross-platform mobile application called WeatherWise, designed to provide users with accurate and up-to-date weather information for their current location or any desired city worldwide.",
        link:"https://mukez-17.github.io/Weather_app/"
    },
    {
        id:4,
        title:"Tic Tac Toe Game",
        img:"public/Tic_Tac_Toe.png",
        desc:"A visually appealing and user-friendly implementation of the classic Tic Tac Toe game, aptly named TicTacToe Pro. The game offers a modern and engaging experience while retaining the simplicity and familiarity of the beloved pastime.",
        link:"https://mukez-17.github.io/Tic-Tac-Toe/"
    },
    {
        id:5,
        title:"Rick and Morty Character Wiki",
        img:"public/Rick_and_Morty.png",
        desc:`As an avid fan of the popular animated series "Rick and Morty," I embarked on a project to create a comprehensive online wiki dedicated to cataloging and documenting all the characters from the show's ever-expanding multiverse.`,
        link:"https://mukez-17.github.io/Rick-and-Morty/"
    }
]

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref});

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imgContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button type='button'><a href={item.link}>See Demo</a></button>
                </motion.div>
            </div>
        </div>
    </section>
};

function Portfolio() {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {stiffness:100, damping:30});

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio