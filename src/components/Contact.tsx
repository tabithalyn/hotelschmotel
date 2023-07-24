import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";
import Modal from "react-modal";

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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '40%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(252, 251, 242)',
    borderColor: 'rgb(208, 202, 180)',
    color: 'rgb(51, 19, 19)',
    zIndex: '1'
  },
  overlay: {
    backgroundColor: 'rgba(218, 202, 180, 0.2)'
  }
};

export default function Contact() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    window.addEventListener("scroll", () => {
      setIsOpen(false);
    });
  }

  const closeModal = () => {
    setIsOpen(false);
    setMessage("");
    setNameInput("");
    setEmailInput("");
  }

  const setMessageValue = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setMessage(e.target.value);
  }
  const setNameValue = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setNameInput(e.target.value);
  }
  const setEmailValue = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setEmailInput(e.target.value);
  }

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
            <motion.i variants={variants} className="text-base font-bodoni text-[#482318] ml-4 block mt-4">Submit by form, email, or telepathy.</motion.i>
          </motion.div>
          <motion.div variants={variants} initial="hidden" whileInView="visible" className="flex flex-col max-w-[600px] w-full text-neutral-950">
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
                openModal();
              }}
              variants={variants}
              className="flex flex-wrap"
            >
              <motion.input variants={variants} value={nameInput} onChange={setNameValue} className="bg-stone-100 w-full p-2" type="text" placeholder="Name" name="name" required />
              <motion.input variants={variants} value={emailInput} onChange={setEmailValue} className="my-4 w-full p-2 bg-stone-100" type="email" name="email" placeholder="Email" required />
              <motion.textarea variants={variants} className="bg-stone-100 p-2 w-full" name="message" rows={6} placeholder="Message" value={message} onChange={setMessageValue} required></motion.textarea>
              <motion.button
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-stone-100 border-2 border-red-900 bg-red-950 hover:rotate-180 transition-all hover:bg-red-800 hover:border-red-700 px-4 py-3 my-8 mx-auto flex items-center font-abril font-semibold tracking-wide"
                type="submit"
              >Send ?</motion.button>
            </motion.form>
              {isSubmitted ? (
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  <button onClick={closeModal} className="float-right mx-2">
                    <i className="fa-solid fa-times"></i>
                  </button>
                    <div className="text-didact text-lg text-center py-5 px-8 -ml-4 w-full">
                    Thank you for your <p className="w-full text-lg hover:scale-125 hover:pl-10 hover:cursor-default transition-all hover:skew-x-6 hover:text-[#a9a79d]">submission.</p>
                    </div>
                </Modal>
              ) : null}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}