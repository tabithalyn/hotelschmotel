import moment from "moment";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CurrentSection } from "../types";
import { motion } from "framer-motion";

type Props = {
  setCurrentSection: (value: CurrentSection) => void;
}

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

export default function Booking({ setCurrentSection }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <motion.section id="booking"
    className="h-screen bg-stone-200"
    whileInView={{ x: ["-100%", "0%"] }}
    transition={{ duration: 0.1, delay: 0.05 }}>
      <motion.div
        onViewportEnter={() => setCurrentSection(CurrentSection['Booking'])}
        whileInView={{ x: ["-100%", "0%"] }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-wrap place-content-center w-full h-full"
      >
      <motion.div variants={variants} initial="hidden" whileInView="visible" className="w-2/5 flex justify-center">
        <motion.div variants={variants} className="p-10 w-full bg-red-700 rounded-xl">
          <motion.div variants={variants}>
            <h2 className="p-2 text-center text-5xl text-white font-abril" id="booking">Booking</h2>
            <motion.form variants={variants} className="p-2 w-full flex flex-wrap justify-center">
              <motion.div variants={variants} className="p-5 flex w-full justify-center flex-wrap">
                <motion.div variants={variants}>
                <label className="font-bodoni">Select Your Dates</label>
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
                    className="bg-stone-100 w-full"
                    popperPlacement="bottom-end"
                    popperModifiers={[
                      {
                        name: "offset",
                        options: {
                          offset: [5, 0],
                        },
                      },
                      {
                        name: "preventOverflow",
                        options: {
                          rootBoundary: "viewport",
                          tether: false,
                          altAxis: true,
                        },
                      },
                    ]}
                  />
                </motion.div>
                <Button className="font-bodoni w-full p-5" type="submit" variant="success">Submit</Button>
              </motion.div>
              
            </motion.form>
            <motion.div variants={variants}>
            {startDate && endDate && (
              <p>You have booked this room from {moment(startDate).format("MMMM Do YYYY")}{" "} to {moment(endDate).format("MMMM Do YYYY")}.</p>)}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      </motion.div>
    </motion.section>
  );
}