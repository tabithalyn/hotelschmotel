import { motion } from "framer-motion";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement('#root');

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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
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

export default function Booking() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setDateRange("");
  }

  return (
    <>
      <div id="booking" className="bg-[#d0cab4] w-full h-screen">
        <motion.div
          className="flex flex-col justify-center items-center w-full h-full pt-12"
          whileInView={{ x: ["-100%", "0%" ]}}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <motion.div
            whileInView={{ x: ["-100%", "0%" ]}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-w-[1000px] w-full grid grid-cols-2 pl-5"
          >
            <motion.p
              variants={variants}
              className="text-5xl inline text-[#8e2828] pl-2 font-abril font-semibold tracking-wide"
            >Booking</motion.p>
          </motion.div>
          <motion.div whileInView={{ x: ["-100%", "0%" ]}}
            transition={{ duration: 0.3, delay: 0.1 }} className="max-w-[1000px] w-full grid sm:grid-cols-2">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.2 }}
              className="sm:text-left text-xl pl-2 pt-2"
            >
              <motion.i className="text-base font-bodoni text-[#482318] pl-6">Enjoy your stay. Or else.</motion.i>
              {startDate && endDate && (
              <motion.p className="pt-4 md:pt-10 text-center font-didact xs:text-base md:text-lg" variants={variants}><span className="text-red-600 font-abril px-2">{moment(startDate).format("MMMM Do YYYY")}{" "}</span> to <span className="text-red-800 font-abril px-2">{moment(endDate).format("MMMM Do YYYY")}</span></motion.p>)}
            </motion.div>
            <motion.div whileInView={{ x: ["-100%", "0%" ]}} transition={{ duration: 0.2, delay: 0.05 }} className="p-5 flex w-full justify-center flex-wrap">
              <motion.div variants={variants} className="flex flex-wrap w-full items-center justify-center md:-mt-10 bg-[#f8f4e3] shadow-md shadow-[#938a6a]">
                <label className="w-full text-lg text-center p-4 font-abril font-semibold">Select Your Dates</label>
                  <DatePicker
                    selectsRange={true}
                    selected={startDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    minDate={new Date()}
                    startDate={startDate}
                    endDate={endDate}
                    isClearable
                    className="bg-stone-100 w-full px-20 py-5"
                    inline
                    showDisabledMonthNavigation
                  />
                  <button className="w-full p-5 font-didact hover:skew-y-3 hover:tracking-wide hover:text-cyan-800 transition-all" onClick={() => setIsOpen(true)}>Book It</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                  >
                    <button onClick={closeModal} className="float-right mx-2">
                      <i className="fa-solid fa-times"></i>
                    </button>
                    <div className="text-didact text-sm py-5 px-8 -ml-4">
                      {startDate && endDate ? (
                        <>
                          <p>You have successfully booked this room for</p>
                          <p><b>{moment(startDate).format("MMMM Do YYYY")}</b> to <b>{moment(endDate).format("MMMM Do YYYY")}</b></p>
                          <p className="w-full py-3 text-lg hover:scale-125 hover:px-10 hover:cursor-default transition-all hover:skew-x-6 hover:text-[#a9a79d]">Good luck.</p>
                        </>
                      ) : (
                        <p>Please select some dates.</p>
                      )}
                    </div>
                  </Modal>
                </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}