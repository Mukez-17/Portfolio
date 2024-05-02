import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>dev</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/dev17122000/"><img src="public\Linkedin.png" alt="" /></a>
          <a href="https://github.com/Mukez-17"><img src="public/github.png" alt="" /></a>
          <a href="https://leetcode.com/u/Mukesh_17/"><img src="public/Leetcode.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
