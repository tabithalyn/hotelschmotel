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
      staggerChildren: 0.08,
      duration: 0.2
    }
  }
}

export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full h-screen flex justify-center items-center p-4 mb-30 font-didact bg-[#d0cab4]">
        <motion.div
          className="flex flex-col max-w-[600px] w-full pt-20"
          whileInView={{ x: ["-100%", "0%"] }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div
            className="pb-8"
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ duration: 0.3, delay: 0.01 }}
          >
            <motion.p variants={variants} className="text-4xl inline border-b-4 border-pink-600 text-gray-800 font-abril font-extrabold">Contact</motion.p>
            <motion.p variants={variants} className="text-gray-600 py-4">Submit by form, email, or telepathy.</motion.p>
          </motion.div>
          <motion.div variants={variants} initial="hidden" whileInView="visible" className="flex flex-col max-w-[600px] w-full">
            <motion.input variants={variants} className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
            <motion.input variants={variants} className="my-4 p-2 bg-[#ccd6f6]" type="email" name="email" placeholder="Email" />
            <motion.textarea variants={variants} className="bg-[#ccd6f6] p-2" name="message" rows={6} placeholder="Message"></motion.textarea>
            <motion.button transition={{ duration: 0.5, delay: 0.5 }} className="text-white border-2 bg-indigo-950 hover:rotate-180 transition-all hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center font-abril font-semibold tracking-wide" onClick={() => alert("Thank you for your submission.")}>Send ?</motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}