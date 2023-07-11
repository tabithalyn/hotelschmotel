import { motion } from "framer-motion";
import Carousel from "./Carousel";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.2
    }
  }
}

export default function Header() {

  return (
  <>
    <div id="home" className="w-full h-screen bg-[#d0cab4] pt-[120px]">
      <motion.div
        className="max-w-[1000px] mx-auto px-8 flex-col justify-center h-full"
        whileInView={{ x: ["-100%", "0%" ]}}
        transition={{ duration: 0.1, delay: 0.02 }}
      >
      <motion.div className="text-center" variants={variants} initial="hidden" whileInView="visible">
        <motion.p variants={variants} className="text-[#634141] text-xl font-didact">Welcome to the</motion.p>
        <motion.h1 variants={variants} className="text-5xl sm:text-7xl text-[#5a1d1d] font-limelight">
          Hotel Schmotel
        </motion.h1>
        <motion.div variants={variants} className="text-lg sm:text-2xl font-didact text-[#462323]">
          No one ever checks out.
        </motion.div>
        <motion.div variants={variants} className="py-4 w-full">
          <Carousel />
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  </>
  );
}
