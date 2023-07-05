import { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
      duration: 0.1
    }
  }
}

export default function NavMenu() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-20">
        <motion.ul className="hidden md:flex w-full" variants={variants} initial="hidden" whileInView="visible">
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-cyan-300 h-full w-1/4 text-center"><Link to="home" smooth={true} duration={200}>Home</Link></motion.li>
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-cyan-300 h-full w-1/4 text-center"><Link to="information" smooth={true} duration={200}>Information</Link></motion.li>
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-cyan-300 h-full w-1/4 text-center"><Link to="booking" smooth={true} duration={200}>Booking</Link></motion.li>
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-cyan-300 h-full w-1/4 text-center"><Link to="contact" smooth={true} duration={200}>Contact</Link></motion.li>
        </motion.ul>
        <motion.div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <i className="fa-solid fa-bars hover:cursor-pointer hover:text-cyan-400"></i> : <i className="fa-solid fa-times hover:cursor-pointer hover:text-cyan-400"></i>}
        </motion.div>
        <motion.ul className={
          !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        } variants={variants} initial="hidden" whileInView="visible">
          <motion.li variants={variants} className="py-6 text-4 xl">
            <Link to="home" onClick={handleClick} smooth={true} duration={200} className="hover:cursor-pointer hover:text-cyan-300">Home</Link>
          </motion.li>
          <motion.li variants={variants} className="py-6 text-4 xl">
            {" "}
            <Link to="information" smooth={true} duration={200} className="hover:cursor-pointer hover:text-cyan-300">Information</Link>
          </motion.li>
          <motion.li variants={variants} className="py-6 text-4 xl">
            {" "}
            <Link to="booking" smooth={true} duration={200} className="hover:cursor-pointer hover:text-cyan-300">Booking</Link>
          </motion.li>
          <motion.li variants={variants} className="py-6 text-4 xl">
            {" "}
            <Link to="contact" smooth={true} duration={200} className="hover:cursor-pointer hover:text-cyan-300">Contact</Link>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
}