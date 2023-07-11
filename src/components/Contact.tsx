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
            <motion.p
              variants={variants}
              className="text-5xl inline text-[#8e2828] pl-2 font-abril font-semibold tracking-wide"
            >Contact</motion.p>
            <motion.i variants={variants} className="text-base font-bodoni text-[#482318] ml-4">Submit by form, email, or telepathy.</motion.i>
          </motion.div>
          <motion.div variants={variants} initial="hidden" whileInView="visible" className="flex flex-col max-w-[600px] w-full text-neutral-950">
            <motion.input variants={variants} className="bg-stone-100 p-2" type="text" placeholder="Name" name="name" />
            <motion.input variants={variants} className="my-4 p-2 bg-stone-100" type="email" name="email" placeholder="Email" />
            <motion.textarea variants={variants} className="bg-stone-100 p-2" name="message" rows={6} placeholder="Message"></motion.textarea>
            <motion.button transition={{ duration: 0.5, delay: 0.5 }} className="text-stone-100 border-2 border-red-900 bg-red-950 hover:rotate-180 transition-all hover:bg-red-800 hover:border-red-700 px-4 py-3 my-8 mx-auto flex items-center font-abril font-semibold tracking-wide" onClick={() => alert("Thank you for your submission.")}>Send ?</motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}