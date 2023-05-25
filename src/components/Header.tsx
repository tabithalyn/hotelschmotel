import { AnimatePresence, PanInfo, motion } from "framer-motion";
import { useState } from "react";
import images from './image-data';
import { wrap } from "@popmotion/popcorn";

const variants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1},
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 0.3,
  ease: [0.56, 0.03, 0.12, 1.04]
}

export default function Header() {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImgIndex = wrap(0, images.length, imageCount);

  const swipeToImg = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  }

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImg(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImg(1);
    }
  }

  const skipToImg = (imageId: number) => {
    let changeDirection = 1;
    if (imageId > activeImgIndex) {
      changeDirection = 1;
    } else if (imageId < activeImgIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  }

  return (
    <header className="header">
      <div className="slider-container">
        <div className="slider">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${images[activeImgIndex].imgSrc})`
              }}
              custom={direction}
              variants={variants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>

        <div className="buttons">
          <button onClick={() => swipeToImg(-1)}>PREV</button>
          <button onClick={() => swipeToImg(1)}>NEXT</button>
        </div>

        <div className="thumbnails">
          {images.map(image => (
            <div key={image.id} onClick={() => skipToImg(image.id)} className="thumbnail-container">
              <img src={image.imgSrc} alt="" />
              <div className={`active-indicator ${image.id === activeImgIndex ? "active" : null}`}></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
