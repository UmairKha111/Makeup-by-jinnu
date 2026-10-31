
import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export interface EditorialImageProps {
  src: string;
  alt: string;
  aspectRatio?: "3:4" | "4:3" | "16:9" | "1:1" | "auto";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  objectPosition?: string;
  fallbackLabel?: string;
}

const aspectClasses: Record<
  NonNullable<EditorialImageProps["aspectRatio"]>,
  string
> = {
  "3:4": "aspect-[3/4]",
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-[16/9]",
  "1:1": "aspect-square",
  auto: "",
};

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  aspectRatio = "3:4",
  className = "",
  imgClassName = "",
  priority = false,
  objectPosition = "center center",
  fallbackLabel,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [loadedSrc, setLoadedSrc] = useState("");
  const [fallbackForSrc, setFallbackForSrc] = useState("");
  const [errorSrc, setErrorSrc] = useState("");

  // Determine the image currently being displayed
  const currentSrc =
    fallbackForSrc === src
      ? `/images/${src.split("/").pop()?.split("?")[0]}`
      : src;

  const isLoaded = loadedSrc === currentSrc;
  const hasError = errorSrc === currentSrc;

  // Handle cached images and already completed requests
  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      setLoadedSrc(currentSrc);
    }
  }, [currentSrc]);

  // Handle successful image loading
  const handleLoad = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    if (event.currentTarget.naturalWidth > 0) {
      setLoadedSrc(currentSrc);
    }
  };

  // Handle image loading errors
  const handleError = () => {
    if (currentSrc === src && !src.startsWith("/images/")) {
      const filename = src.split("/").pop()?.split("?")[0];

      if (filename) {
        setFallbackForSrc(src);
        return;
      }
    }

    setErrorSrc(currentSrc);
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#E8D8CB]/40 ${
        aspectClasses[aspectRatio]
      } ${className}`}
    >
      {!hasError ? (
        <>
          {!isLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#FAF6F0] via-[#E8D8CB]/60 to-[#D8BE9A]/30 animate-pulse"
            />
          )}

          <img
            ref={imageRef}
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            style={{ objectPosition }}
            onLoad={handleLoad}
            onError={handleError}
            className={`relative block w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imgClassName}`}
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF6F0] via-[#E8D8CB] to-[#D8BE9A]/40 border border-[#D8BE9A]/40">
          <Sparkles className="w-6 h-6 text-[#B89A62] mb-3 stroke-[1.25]" />

          <p className="font-serif-editorial text-lg text-[#29211E] tracking-wide">
            {fallbackLabel || alt}
          </p>

          <span className="mt-1 text-xs text-[#29211E]/60">
            Jinnu Makeup Artist · Portfolio Archive
          </span>
        </div>
      )}
    </div>
  );
};
