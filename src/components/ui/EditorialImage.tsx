import React, { useState, useEffect } from "react";
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

const aspectClasses: Record<NonNullable<EditorialImageProps["aspectRatio"]>, string> = {
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
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (!hasTriedFallback) {
      setHasTriedFallback(true);
      // Try to extract filename and use public /images/ folder as secondary fallback
      const filename = currentSrc.split("/").pop()?.split("?")[0] || "";
      if (filename && !currentSrc.startsWith("/images/")) {
        setCurrentSrc(`/images/${filename}`);
        return;
      }
    }
    setHasError(true);
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#E8D8CB]/40 ${aspectClasses[aspectRatio]} ${className}`}
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
            src={currentSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            referrerPolicy="no-referrer"
            style={{ objectPosition }}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
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
