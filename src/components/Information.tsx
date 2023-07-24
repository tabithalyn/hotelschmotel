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
            className="w-full text-center py-8 flex justify-center flex-wrap"
            variants={variants} initial="hidden" whileInView="visible"
          >
            <motion.div variants={variants} className="shadow-md shadow-[#938a6a] text-neutral-900 bg-stone-100 p-20 sm:p-10 xs:p-5 xs:text-sm sm:text-base md:text-base font-didact sm:w-5/6 md:5/6 xs:w-7/8">
              <h2 className="text-6xl text-[#eeebe0] font-bodoni font-black md:-mt-7 xs:-mt-6 xs:-mb-6 md:-mb-5 -mx-5 float-left align-text-top tracking-wide">est. 20?0?</h2>
              <p className="m-3 text-left">Phasellus pellentesque nulla a bibendum faucibus. Nam turpis ex, suscipit id nibh eget, aliquet consequat libero. Nulla mattis scelerisque velit sit amet tincidunt.</p>
              <p className="m-3 text-left">Fusce bibendum ultricies nibh, et porttitor dolor porta vitae. Cras mattis finibus purus id interdum. Phasellus mollis lectus ante, eget aliquam nisl efficitur at.</p>
              <p className="pb-4 pt-6 text-center text-sm w-full hover:cursor-default hover:text-[#5c504f] hover:tracking-wide hover:skew-x-2 transition-all">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="h-[1px] w-full before:content-none bg-gradient-to-r from-transparent via-[#721c1c] to-transparent"></div>
              <div className="border-x-[1px] w-7 h-2 bg-stone-100 border-[#721c1c] ml-[50%] -mt-1 z-20">
                <span className="font-biz text-4xl text-[#421212]">"</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}