import { motion } from "framer-motion";
import { CurrentSection } from "../types";

type Props = {
  setCurrentSection: (value: CurrentSection) => void;
}

export default function Contact({ setCurrentSection }: Props) {
  return (
    <section id="contact">
      <motion.div onViewportEnter={() => setCurrentSection(CurrentSection['Contact'])}>
        <h1>Contact</h1>
      </motion.div>
    </section>
  );
}