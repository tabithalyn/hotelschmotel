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
      <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#d0cab4] text-[#997138] z-20 font-didact tracking-wider">
        <motion.ul className="hidden md:flex w-full rounded-2xl" variants={variants} initial="hidden" whileInView="visible">
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-[#9e2b2b] h-full w-1/4 text-center hover:drop-shadow-lg transition-all"><Link to="home" smooth={true} duration={200}>Home</Link></motion.li>
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-[#9e2b2b] h-full w-1/4 text-center hover:drop-shadow-lg transition-all"><Link to="information" smooth={true} duration={200}>Information</Link></motion.li>
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-[#9e2b2b] h-full w-1/4 text-center hover:drop-shadow-lg transition-all"><Link to="booking" smooth={true} duration={200}>Booking</Link></motion.li>
          <motion.li variants={variants} className="p-3 hover:cursor-pointer hover:text-[#9e2b2b] h-full w-1/4 text-center hover:drop-shadow-lg transition-all"><Link to="contact" smooth={true} duration={200}>Contact</Link></motion.li>
        </motion.ul>
        <motion.div onClick={handleClick} className="md:hidden z-10 absolute left-8">
          {!nav ? <i className="fa-solid fa-bars hover:cursor-pointer hover:text-amber-800"></i> : <i className="fa-solid fa-times hover:cursor-pointer hover:text-amber-400 transition-all"></i>}
        </motion.div>
        <motion.ul className={
          !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-red-950 flex flex-col justify-center items-center"
        } variants={variants} initial="hidden" whileInView="visible">
          <motion.li variants={variants} className="py-6 text-4 xl">
            <Link to="home" onClick={handleClick} smooth={true} duration={200} className="p-5 hover:text-amber-500 hover:cursor-pointer bg-gradient-to-r from-amber-400 to-amber-400 bg-growing-underline">Home</Link>
          </motion.li>
          <motion.li variants={variants} className="py-6 text-4 xl">
            {" "}
            <Link to="information" smooth={true} duration={200} className="p-5 hover:text-amber-500 hover:cursor-pointer bg-gradient-to-r from-amber-400 to-amber-400 bg-growing-underline" onClick={handleClick}>Information</Link>
          </motion.li>
          <motion.li variants={variants} className="py-6 text-4 xl">
            {" "}
            <Link to="booking" smooth={true} duration={200} className="p-5 hover:text-amber-500 hover:cursor-pointer bg-gradient-to-r from-amber-400 to-amber-400 bg-growing-underline" onClick={handleClick}>Booking</Link>
          </motion.li>
          <motion.li variants={variants} className="py-6 text-4 xl">
            {" "}
            <Link to="contact" smooth={true} duration={200} className="p-5 hover:text-amber-500 hover:cursor-pointer bg-gradient-to-r from-amber-400 to-amber-400 bg-growing-underline" onClick={handleClick}>Contact</Link>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
}