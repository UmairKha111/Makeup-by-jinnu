import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
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
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null || items.length === 0) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelectIndex(prevIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null || items.length === 0) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onSelectIndex(nextIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  const touchStartXRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#29211E]/95 backdrop-blur-sm p-3 sm:p-4 md:p-8"
          onClick={onClose}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] sm:text-xs tracking-widest uppercase text-[#FAF6F0]/80 tabular-nums bg-[#29211E]/60 px-2.5 py-1 backdrop-blur-xs border border-white/10">
              <span>{String((currentIndex ?? 0) + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-[#D8BE9A]">/</span>
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery viewer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium tracking-wider uppercase text-[#FAF6F0] bg-[#FAF6F0]/15 hover:bg-[#FAF6F0]/25 border border-[#D8BE9A]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[#D8BE9A] cursor-pointer shadow-sm"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Previous Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous look"
              className="absolute left-1 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-[#FAF6F0] bg-[#29211E]/80 hover:bg-[#B89A62] border border-[#D8BE9A]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[#D8BE9A] cursor-pointer shadow-lg"
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
              className="absolute right-1 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-[#FAF6F0] bg-[#29211E]/80 hover:bg-[#B89A62] border border-[#D8BE9A]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[#D8BE9A] cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Main Content Container */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-[#FAF6F0] border border-[#D8BE9A]/40 overflow-hidden max-h-[85vh]"
          >
            <div className="lg:col-span-7 bg-[#29211E] flex items-center justify-center overflow-hidden max-h-[52vh] lg:max-h-[82vh]">
              <EditorialImage
                src={currentItem.image}
                alt={currentItem.imageAlt}
                aspectRatio="auto"
                priority
                className="w-full h-full flex items-center justify-center"
                imgClassName="max-h-[52vh] lg:max-h-[82vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto bg-[#FAF6F0] text-[#29211E]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#29211E]/65 tracking-wide">
                  <span>{currentItem.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentItem.occasion}</span>
                </div>

                <h3 className="mt-3 font-serif-editorial text-2xl md:text-3xl font-normal text-[#29211E] text-balance">
                  {currentItem.title}
                </h3>

                <div className="mt-5 pt-5 border-t border-[#29211E]/10">
                  <p className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                    Styling &amp; Artistry Notes
                  </p>
                  <p className="mt-2 text-sm md:text-base text-[#29211E]/80 leading-relaxed">
                    {currentItem.styleNotes}
                  </p>
                </div>

                {currentItem.hairstyleCategory && (
                  <div className="mt-4 text-xs text-[#29211E]/65">
                    <span>Hair Architecture: {currentItem.hairstyleCategory}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#29211E]/10 flex flex-col gap-3">
                <a
                  href={getLookWhatsAppUrl(currentItem.title, currentItem.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Enquire About This Look</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-[#29211E]/55 text-center">
                  Opens WhatsApp with this look pre-selected for consultation
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
