import { motion } from "framer-motion";
import { CurrentSection } from "../types";

type Props = {
  setCurrentSection: (value: CurrentSection) => void;
}

export default function Information({ setCurrentSection }: Props) {
  return (
    <section id="information">
      <motion.div onViewportEnter={() => setCurrentSection(CurrentSection['Information'])}>
        <h1>Information</h1>
      </motion.div>
    </section>
  );
}