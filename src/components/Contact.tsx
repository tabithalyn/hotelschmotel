import { motion } from "framer-motion";
import { CurrentSection } from "../types";

type Props = {
  setCurrentSection: (value: CurrentSection) => void;
}

export default function Contact({ setCurrentSection }: Props) {
  return (
    <section id="contact" className="h-screen w-full bg-stone-600">
      <motion.div onViewportEnter={() => setCurrentSection(CurrentSection['Contact'])}>
        <h1>Contact</h1>
      </motion.div>
    </section>
  );
}