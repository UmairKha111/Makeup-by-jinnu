
import React, { useEffect, useCallback, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioItem } from "../../data/portfolio";
import { getLookWhatsAppUrl } from "../../utils/whatsapp";
import { EditorialImage } from "../ui/EditorialImage";

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen =
    currentIndex !== null &&
    currentIndex >= 0 &&
    currentIndex < items.length;

  const currentItem = isOpen ? items[currentIndex] : null;
  const touchStartXRef = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    if (currentIndex === null || items.length <= 1) return;
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null || items.length <= 1) return;
    onSelectIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  // Keyboard navigation and body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;

    const diff =
      touchStartXRef.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }

    touchStartXRef.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${currentItem.title}`}
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
            fixed inset-0 z-[100]
            bg-[#29211E]/95 backdrop-blur-sm
            flex flex-col
            overflow-y-auto
            overscroll-contain
            px-3 pt-16 pb-4
            sm:px-5 sm:pt-16
            lg:px-20 lg:py-16
            lg:items-center lg:justify-center
          "
        >
          {/* Top Navigation */}
          <div
            className="
              fixed top-3 left-3 right-3
              sm:top-4 sm:left-5 sm:right-5
              lg:top-5 lg:left-8 lg:right-8
              z-[110]
              flex items-center justify-between
              pointer-events-none
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Back to Gallery */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Back to gallery"
              className="
                pointer-events-auto
                inline-flex items-center gap-2
                px-3 py-2.5
                bg-[#FAF6F0]
                text-[#29211E]
                border border-[#D8BE9A]
                text-[10px] sm:text-xs
                uppercase tracking-widest font-medium
                hover:bg-[#B89A62]
                transition-colors
                shadow-lg
              "
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Gallery</span>
            </button>

            {/* Image Counter and Close */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <div className="
                hidden sm:block
                px-3 py-2
                text-xs tracking-widest
                text-[#FAF6F0]
                bg-[#29211E]/90
                border border-white/20
                tabular-nums
              ">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-[#D8BE9A]">/</span>
                {String(items.length).padStart(2, "0")}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close gallery viewer"
                className="
                  flex items-center gap-2
                  px-3 py-2.5
                  bg-[#29211E]
                  text-[#FAF6F0]
                  border border-[#D8BE9A]/50
                  text-[10px] sm:text-xs
                  uppercase tracking-widest
                  hover:bg-[#B89A62]
                  transition-colors
                  shadow-lg
                "
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Viewer */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full max-w-6xl
              mx-auto
              bg-[#FAF6F0]
              border border-[#D8BE9A]/40
              shadow-2xl
              flex flex-col

              lg:grid lg:grid-cols-12
              lg:h-[min(78vh,760px)]
              lg:max-h-[760px]
              lg:min-h-[480px]
              lg:overflow-hidden
              lg:flex-none
            "
          >
            {/* Image Panel */}
            <div className="
              w-full
              h-[38dvh]
              min-h-[230px]
              max-h-[420px]
              shrink-0

              bg-[#29211E]
              flex items-center justify-center
              overflow-hidden

              lg:col-span-7
              lg:h-full
              lg:min-h-0
              lg:max-h-none
            ">
              <EditorialImage
                src={currentItem.image}
                alt={currentItem.imageAlt}
                aspectRatio="auto"
                priority
                className="
                  w-full h-full
                  !aspect-auto
                "
                imgClassName="
                  !w-full
                  !h-full
                  !max-h-full
                  !object-contain
                  !object-center
                "
              />
            </div>

            {/* Details Panel */}
            <div className="
              w-full
              lg:col-span-5
              min-w-0
              bg-[#FAF6F0]
              text-[#29211E]

              flex flex-col
              justify-between

              p-5
              sm:p-7
              lg:p-8
              xl:p-10

              lg:h-full
              lg:min-h-0
              lg:overflow-y-auto
              lg:overscroll-contain
            ">
              {/* Details */}
              <div>
                <div className="
                  flex flex-wrap items-center gap-2
                  text-xs sm:text-sm
                  tracking-wide
                  text-[#29211E]/65
                ">
                  <span>{currentItem.category}</span>
                  <span>·</span>
                  <span>{currentItem.occasion}</span>
                </div>

                <h3 className="
                  mt-3
                  font-serif-editorial
                  text-2xl sm:text-3xl
                  xl:text-4xl
                  font-normal
                  leading-snug
                  text-[#29211E]
                  text-balance
                ">
                  {currentItem.title}
                </h3>

                <div className="
                  mt-6 pt-5
                  border-t border-[#29211E]/10
                ">
                  <p className="
                    text-xs uppercase
                    tracking-widest
                    text-[#B89A62]
                    font-medium
                  ">
                    Styling &amp; Artistry Notes
                  </p>

                  <p className="
                    mt-3
                    text-sm sm:text-base
                    text-[#29211E]/80
                    leading-relaxed
                  ">
                    {currentItem.styleNotes}
                  </p>
                </div>

                {currentItem.hairstyleCategory && (
                  <div className="
                    mt-5
                    text-xs sm:text-sm
                    text-[#29211E]/65
                    leading-relaxed
                  ">
                    Hair Architecture: {currentItem.hairstyleCategory}
                  </div>
                )}
              </div>

              {/* WhatsApp Enquiry */}
              <div className="
                mt-8 pt-6
                border-t border-[#29211E]/10
                flex flex-col gap-3
                shrink-0
              ">
                <a
                  href={getLookWhatsAppUrl(
                    currentItem.title,
                    currentItem.category
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    inline-flex items-center
                    justify-center gap-2
                    px-4 py-4
                    text-xs font-medium
                    uppercase tracking-widest
                    bg-[#29211E]
                    text-[#FAF6F0]
                    hover:bg-[#B89A62]
                    hover:text-[#29211E]
                    transition-colors
                    text-center
                  "
                >
                  <span>Enquire About This Look</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <p className="
                  text-[11px]
                  text-[#29211E]/55
                  text-center
                  leading-relaxed
                ">
                  Opens WhatsApp with this look pre-selected for consultation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Previous Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous look"
              className="
                fixed left-1 sm:left-3
                lg:left-5
                top-1/2 -translate-y-1/2
                z-[105]
                w-9 h-9 sm:w-11 sm:h-11
                flex items-center justify-center
                text-[#FAF6F0]
                bg-[#29211E]/90
                hover:bg-[#B89A62]
                border border-[#D8BE9A]/50
                transition-colors
                shadow-lg
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next look"
              className="
                fixed right-1 sm:right-3
                lg:right-5
                top-1/2 -translate-y-1/2
                z-[105]
                w-9 h-9 sm:w-11 sm:h-11
                flex items-center justify-center
                text-[#FAF6F0]
                bg-[#29211E]/90
                hover:bg-[#B89A62]
                border border-[#D8BE9A]/50
                transition-colors
                shadow-lg
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
