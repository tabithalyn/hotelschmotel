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
      staggerChildren: 0.08,
      duration: 0.2
    }
  }
}

export default function Information() {
  return (
    <>
      <div id="information" className="w-full h-screen bg-[#d0cab4] text-[#8e2828]">
        <motion.div
          className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
          whileInView={{ x: ["-100%", "0%" ]}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div variants={variants} initial="hidden" whileInView="visible">
            <motion.p variants={variants} className="text-5xl font-semibold inline font-abril">Information</motion.p>
            <motion.p variants={variants} className="py-4 font-bodoni italic text-[#482318]">About The Hotel</motion.p>
          </motion.div>
          <motion.div
            className="w-full text-center py-8"
            variants={variants} initial="hidden" whileInView="visible"
          >
            <motion.div variants={variants} className="shadow-md shadow-[#938a6a] text-neutral-900 bg-stone-100 p-20 font-didact">
              <p>Phasellus pellentesque nulla a bibendum faucibus. Nam turpis ex, suscipit id nibh eget, aliquet consequat libero. Nulla mattis scelerisque velit sit amet tincidunt.</p>
              <p>Fusce bibendum ultricies nibh, et porttitor dolor porta vitae. Cras mattis finibus purus id interdum. Phasellus mollis lectus ante, eget aliquam nisl efficitur at.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}