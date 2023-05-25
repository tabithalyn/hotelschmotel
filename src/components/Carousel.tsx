/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion, wrap } from "framer-motion";
import { useRef } from "react";

type Props = {
  direction: number;
  currentImage: number;
  setCurrentImage: (arg0: number, arg1: unknown) => void;
}

const xOffset = 100;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0
  })
};

const images = [0, 1, 2, 3, 4, 5];

export default function Carousel({ currentImage, setCurrentImage, direction}: Props) {
  const hasMoved = useRef(false);

  function detectMoveGesture(e: unknown, { offset }: any) {
    if (hasMoved.current) return;
    let newImage = currentImage;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      newImage = currentImage + 1;
    } else if (offset.x > threshold) {
      newImage = currentImage - 1;
    }

    if (newImage !== currentImage) {
      hasMoved.current = true;
      newImage = wrap(0, images.length, newImage);
      setCurrentImage(newImage, offset.x < 0 ? 1 : -1);
    }
  }

  return (
    <div className="slider-container">
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentImage}
          className="slide"
          data-page={currentImage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectMoveGesture}
          onDragStart={() => (hasMoved.current = false)}
          onDragEnd={() => (hasMoved.current = true)}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          custom={direction}
        />
      </AnimatePresence>
    </div>
  );
}