import React from 'react';
import { motion } from 'framer-motion';

function Togglebutton({setOpen}) {
  return (
    <button onClick={()=>{setOpen(prev => !prev)}}>
      <svg width="35px" height="35px" viewBox="-1 -2.5 19 19">
        <motion.path
          stroke="#000000" 
          stroke-width="2" 
          stroke-linecap="round" 
          variants={{
            closed : {d:"M 2 2.5 L 20 2.5"},
            open : {d:"M 3 16.5 L 17 2.5"}
          }}
        /> 
        <motion.path 
          d="M 2 8 L 20 8" 
          stroke="#000000" 
          stroke-width="2" 
          stroke-linecap="round"
          variants={{
            closed : {opacity:1},
            open : {opacity:0}
          }}
        /> 
        <motion.path  
          stroke="#000000" 
          stroke-width="2" 
          stroke-linecap="round" 
          variants={{
            closed : {d:"M 2 13.5 L 20 13.5"},
            open : {d:"M 3 2.5 L 17 16.346"}
          }}
          /> 
      </svg>
    </button>
  )
}

export default Togglebutton