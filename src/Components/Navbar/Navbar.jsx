import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Linkedin from '../../../public/Linkedin.png';
import github from '../../../public/github.png';
import Leetcode from '../../../public/Leetcode.png';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>dev</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/dev17122000/"><img src={Linkedin} alt="" /></a>
          <a href="https://github.com/Mukez-17"><img src={github} alt="" /></a>
          <a href="https://leetcode.com/u/Mukesh_17/"><img src={Leetcode} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
