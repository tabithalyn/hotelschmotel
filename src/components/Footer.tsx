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
    <motion.footer
      whileInView={{ x: "0%" }}
      initial={{ x: "-100%" }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex justify-stretch w-full"
    >
      <div className="w-1/3 p-5">
        <motion.div className="font-abril text-xl">Hotel Schmotel</motion.div>
        A hotel.
      </div>
      <motion.div variants={variants} initial="hidden" whileInView="visible" className="w-1/3 p-5">
        <motion.div variants={variants} className="font-abril text-xl">Contact
        <motion.ul variants={variants} className="font-didact text-base">
          <motion.li variants={variants}>Link</motion.li>
          <motion.li variants={variants}>Link</motion.li>
          <motion.li variants={variants}>Link</motion.li>
          <motion.li variants={variants}>Link</motion.li>
        </motion.ul></motion.div>
      </motion.div>
      <motion.div variants={variants} initial="hidden" whileInView="visible" className="w-1/3 p-5">
        <motion.div variants={variants} className="font-abril text-xl">Other Links
        <motion.ul variants={variants} className="font-didact text-base">
          <motion.li variants={variants}>Link</motion.li>
          <motion.li variants={variants}>Link</motion.li>
          <motion.li variants={variants}>Link</motion.li>
          <motion.li variants={variants}>Link</motion.li>
        </motion.ul></motion.div>
      </motion.div>
    </motion.footer>
  );
}