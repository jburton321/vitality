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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const availableIndices = Array.from({ length: images.length }, (_, i) => i);
      const newIndices: number[] = [];

      for (let i = 0; i < 3; i++) {
        const remaining = availableIndices.filter(idx => !newIndices.includes(idx));
        const randomIndex = Math.floor(Math.random() * remaining.length);
        newIndices.push(remaining[randomIndex]);
      }

      setNextIndices(newIndices);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndices(newIndices);
        setIsTransitioning(false);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
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
              opacity: isTransitioning ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
            }}
          />
        </div>
      ))}
    </div>
  );
};
