import { useState, useEffect } from "react";

interface FadingImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  interval?: number;
  className?: string;
}

export const FadingImageGallery = ({
  images,
  interval = 3000,
  className = "",
}: FadingImageGalleryProps): JSX.Element => {
  const [currentIndices, setCurrentIndices] = useState<number[]>([0, 1, 2]);
  const [nextIndices, setNextIndices] = useState<number[]>([0, 1, 2]);
  const [transitioning, setTransitioning] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    [0, 1, 2].forEach((slotIndex) => {
      const delay = slotIndex * 1000;
      const timer = setTimeout(() => {
        const intervalTimer = setInterval(() => {
          const usedIndices = currentIndices.filter((_, i) => i !== slotIndex);
          const availableIndices = Array.from({ length: images.length }, (_, i) => i).filter(
            (idx) => !usedIndices.includes(idx)
          );
          const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];

          setNextIndices((prev) => {
            const newIndices = [...prev];
            newIndices[slotIndex] = randomIndex;
            return newIndices;
          });

          setTransitioning((prev) => {
            const newTransitioning = [...prev];
            newTransitioning[slotIndex] = true;
            return newTransitioning;
          });

          setTimeout(() => {
            setCurrentIndices((prev) => {
              const newIndices = [...prev];
              newIndices[slotIndex] = randomIndex;
              return newIndices;
            });

            setTransitioning((prev) => {
              const newTransitioning = [...prev];
              newTransitioning[slotIndex] = false;
              return newTransitioning;
            });
          }, 400);
        }, interval);

        timers.push(intervalTimer);
      }, delay);

      timers.push(timer);
    });

    return () => timers.forEach((timer) => clearTimeout(timer) || clearInterval(timer));
  }, [images.length, interval]);

  return (
    <div
      className={`bg-white bg-opacity-35 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-start w-full mt-3 sm:mt-4 ${className}`}
      style={{ backdropFilter: "blur(15px)" }}
    >
      {[0, 1, 2].map((slotIndex) => (
        <div
          key={slotIndex}
          className="rounded-lg sm:rounded-xl w-full sm:flex-1 aspect-destination relative overflow-hidden"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl"
            src={images[currentIndices[slotIndex]].src}
            alt={images[currentIndices[slotIndex]].alt}
          />
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl"
            src={images[nextIndices[slotIndex]].src}
            alt={images[nextIndices[slotIndex]].alt}
            style={{
              opacity: transitioning[slotIndex] ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
            }}
          />
        </div>
      ))}
    </div>
  );
};
