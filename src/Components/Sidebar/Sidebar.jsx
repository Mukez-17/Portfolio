import {React, useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import './Sidebar.scss';
import Links from './Links/Links';
import Togglebutton from './Togglebutton/Togglebutton';

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
  
      const listener = () => {
        setMatches(media.matches);
      };
  
      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", listener);
      } else {
        media.addEventListener(listener);
      }
  
      return () => {
        if (typeof media.removeEventListener === "function") {
          media.removeEventListener("change", listener);
        } else {
          media.removeEventListener(listener);
        }
      };
    }, [matches, query]);  
    return matches;
}

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const isSmall = useMediaQuery("(max-width:480px)");

    const variants = {
        open : {
            clipPath : "circle(1200px at 40px 40px)",
            transistion : {
                delay: .5,
                type : "spring",
                stiffness: 400,
                damping : 40
            }
        },

        closed : {
            clipPath : isSmall ? "circle(17.5px at 35px 35px)" : "circle(25px at 40px 40px)",
            transistion : {
                delay : 0.5,
                type : 'spring',
                stiffness : 400,
                damping : 40
            }
        }
    }

  return (
    <motion.div className='sidebar' whileInView={isSmall} await animate = { open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar;