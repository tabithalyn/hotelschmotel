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
      duration: 0.3
    }
  }
}

export default function Footer() {
  return (
    <>
      <div className="bg-red-950">
      <motion.footer
        className="flex justify-stretch w-full py-10 bg-red-950 text-neutral-300"
        whileInView={{ x: "0%" }}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <motion.div className="w-1/3 p-5">
          <div className="text-xl font-abril font-black">The Hotel</div>
          <span className="font-didact font-normal">Your stay is eternal.</span>
        </motion.div>
        <motion.div variants={variants} initial="hidden" whileInView="visible" className="w-1/3 p-5">
          <motion.div variants={variants} className="text-xl font-abril font-black">Contact
            <motion.ul variants={variants} className="text-base font-didact font-normal">
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div variants={variants} initial="hidden" whileInView="visible" className="w-1/3 p-5">
          <motion.div variants={variants} className="text-xl font-abril font-black">Other Links
            <motion.ul variants={variants} className="text-base font-didact font-normal">
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
              <motion.li variants={variants}>Link</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.footer>
      </div>
    </>
  );
}