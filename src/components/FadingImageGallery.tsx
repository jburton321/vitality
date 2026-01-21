import { useState, useEffect } from "react";

interface FadingImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  interval?: number;
  className?: string;
}

export const FadingImageGallery = ({
  images,
  interval = 4000,
  className = "",
}: FadingImageGalleryProps): JSX.Element => {
  const [currentIndices, setCurrentIndices] = useState<number[]>([0, 1, 2]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentIndices((prev) => {
          const availableIndices = Array.from({ length: images.length }, (_, i) => i);
          const newIndices: number[] = [];

          for (let i = 0; i < 3; i++) {
            const remaining = availableIndices.filter(idx => !newIndices.includes(idx));
            const randomIndex = Math.floor(Math.random() * remaining.length);
            newIndices.push(remaining[randomIndex]);
          }

          return newIndices;
        });
        setOpacity(1);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      className={`bg-white bg-opacity-35 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-start w-full mt-3 sm:mt-4 ${className}`}
      style={{ backdropFilter: "blur(15px)" }}
    >
      {currentIndices.map((imageIndex, idx) => (
        <img
          key={idx}
          className="rounded-lg sm:rounded-xl w-full sm:flex-1 aspect-destination object-cover"
          src={images[imageIndex].src}
          alt={images[imageIndex].alt}
          style={{
            opacity,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};
