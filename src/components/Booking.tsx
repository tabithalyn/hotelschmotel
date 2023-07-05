import { motion } from "framer-motion";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

export default function Booking() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <div id="booking" className="bg-zinc-200 w-full h-screen">
        <motion.div
          className="flex flex-col justify-center items-center w-full h-full"
          whileInView={{ x: ["-100%", "0%" ]}}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <motion.div
            whileInView={{ x: ["-100%", "0%" ]}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-w-[1000px] w-full grid grid-cols-2"
          >
            <motion.p
              variants={variants}
              className="text-4xl font-bold inline border-b-4 border-pink-600 pl-2"
            >Booking</motion.p>
          </motion.div>
          <motion.div whileInView={{ x: ["-100%", "0%" ]}}
            transition={{ duration: 0.3, delay: 0.1 }} className="max-w-[1000px] w-full grid sm:grid-cols-2">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.2 }}
              className="sm:text-right text-4xl font-bold"
            >
              <motion.i className="text-2xl mr-5">Enjoy your stay. Or else.</motion.i>
              {startDate && endDate && (
              <motion.p className="py-20 text-xl" variants={variants}>You have selected dates from<br /><span className="text-blue-600">{moment(startDate).format("MMMM Do YYYY")}{" "}</span> to <span className="text-blue-800">{moment(endDate).format("MMMM Do YYYY")}</span>.</motion.p>)}
            </motion.div>
            <motion.div whileInView={{ x: ["-100%", "0%" ]}} transition={{ duration: 0.2, delay: 0.05 }} className="p-5 flex w-full justify-center flex-wrap">
              <motion.div variants={variants} className="flex flex-wrap w-full items-center justify-center -mt-10 bg-slate-400">
                <label className="w-full text-center p-4">Select Your Dates</label>
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
                  <button className="w-full p-5" type="submit">Submit</button>
                </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}