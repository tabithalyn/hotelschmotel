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
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.2
    }
  }
}

export default function Header() {

  return (
  <>
    <div id="home" className="w-full h-screen bg-[#798caa] pt-40">
      <motion.div
        className="max-w-[1000px] mx-auto px-8 flex-col justify-center h-full"
        whileInView={{ x: ["-100%", "0%" ]}}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
      <motion.div variants={variants} initial="hidden" whileInView="visible">
        <motion.p variants={variants} className="text-pink-600">Welcome to</motion.p>
        <motion.h1 variants={variants} className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          The Hotel
        </motion.h1>
        <motion.h2 variants={variants} className="text-4xl sm:text-7xl font-bold text-[#596589]">
          No one ever checks out.
        </motion.h2>
        <motion.p variants={variants} className="text-[#414a63] py-4 max-w-[700px]">
        Sed vestibulum nisl efficitur, tristique diam eu, dictum diam. Maecenas semper vestibulum sapien nec efficitur. Nulla mattis velit in tempor malesuada. Curabitur eget dignissim erat. Phasellus fermentum turpis libero, vitae imperdiet nulla condimentum id. Integer vitae vulputate nunc.
        </motion.p>
      </motion.div>
      <motion.div variants={{
        first: { x: "-100vw" },
        then: { x: 0,
          transition: {
            duration: 0.4,
            delay: 0.5
          }
        },
      }} initial="first" animate="then">
        <motion.button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          Enter
          <span className="group-hover:rotate-90 duration-300">
          <i className="fa-solid fa-arrow-right ml-3"></i>
          </span>
        </motion.button>
      </motion.div>
      </motion.div>
    </div>
  </>
  );
}
