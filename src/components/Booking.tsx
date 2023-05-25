import moment from "moment";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CurrentSection } from "../types";
import { motion } from "framer-motion";

type Props = {
  setCurrentSection: (value: CurrentSection) => void;
}

export default function Booking({ setCurrentSection }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <section id="booking">
      <motion.div onViewportEnter={() => setCurrentSection(CurrentSection['Booking'])}>
      <div className="booking">
      <Container>
        <Row>
          <Col sm={10}>
            <h2 className="mt-3 mb-4 text-white" id="booking">Booking</h2>
            <form className="row">
              <Row className="mb-5">
                <Col sm={6}>
                <label>Select Your Dates</label>
                  <DatePicker
                    selectsRange={true}
                    selected={startDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    withPortal
                    minDate={new Date()}
                    startDate={startDate}
                    endDate={endDate}
                    isClearable
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <label className="col-sm-2 col-form-label"></label>
                <Col sm={4}>
                  <Button type="submit" variant="success">Submit</Button>
                </Col>
              </Row>
            </form>
            <Col>
            {startDate && endDate && (
              <p>You have booked this room from {moment(startDate).format("MMMM Do YYYY")}{" "} to {moment(endDate).format("MMMM Do YYYY")}.</p>)}
            </Col>
          </Col>
        </Row>
      </Container>
      </div>
      </motion.div>
    </section>
  );
}