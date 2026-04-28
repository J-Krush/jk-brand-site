import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const AUTO_ADVANCE_MS = 4000;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function AIProfileCarousel({ images, alt = "J-Krush AI Profile" }) {
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next) => {
      setState(([current]) => {
        const wrapped = (next + images.length) % images.length;
        const dir = wrapped === current ? 0 : wrapped > current ? 1 : -1;
        return [wrapped, dir];
      });
    },
    [images.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setState(([current]) => [(current + 1) % images.length, 1]);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[3/4] w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              className="h-full w-full rounded-2xl object-cover"
              src={images[index]}
              alt={alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-dark/50 p-2 text-light backdrop-blur-sm transition hover:bg-dark/75 dark:bg-light/50 dark:text-dark dark:hover:bg-light/75"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-dark/50 p-2 text-light backdrop-blur-sm transition hover:bg-dark/75 dark:bg-light/50 dark:text-dark dark:hover:bg-light/75"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-light" : "w-1.5 bg-light/60 hover:bg-light/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
