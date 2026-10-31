
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  MapPin,
  Award,
  Globe2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig, IMAGE_ASSETS } from "../../data/siteConfig";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export interface HeroSlide {
  id: string;
  number: string;
  tag: string;
  headline: string;
  supportingText: string;
  highlightTag: string;
  primaryImage: string;
  primaryAlt: string;
  secondaryImage: string;
  secondaryLabel: string;
  accentQuote: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "royal-bridal",
    number: "01",
    tag: "Royal Heritage Bridal",
    headline: "Beauty That Makes Every Moment Unforgettable.",
    supportingText:
      "Signature royal Rajasthani bridal makeup, veil coordination, and intricate mogra hair artistry tailored for grand heritage ceremonies in Jodhpur and destination palaces worldwide.",
    highlightTag: "Couture Pheras & Wedding Ceremony",
    primaryImage: IMAGE_ASSETS.heroBridalMakeup,
    primaryAlt: "Editorial luxury Indian bridal makeup in champagne gold couture",
    secondaryImage: IMAGE_ASSETS.bridalLook01,
    secondaryLabel: "Heritage Veil & Matha Patti",
    accentQuote:
      "Flawless skin-first luminosity engineered for 14+ hours of ceremony lighting.",
  },
  {
    id: "soft-glam",
    number: "02",
    tag: "Dewy Soft Glam & Sangeet",
    headline: "Luminous Modern Glamour Engineered to Radiate.",
    supportingText:
      "Featherlight, breathable skin prep and champagne shimmer paired with sculpted Hollywood waves—designed to glow effortlessly under party flash and golden-hour chandeliers.",
    highlightTag: "Cocktail, Sangeet & Reception",
    primaryImage: IMAGE_ASSETS.softGlamMakeup,
    primaryAlt: "Close-up editorial soft glam beauty portrait with luminous dewy skin",
    secondaryImage: IMAGE_ASSETS.hairstyleHollywoodWaves,
    secondaryLabel: "Sculpted Waves & Crown Braid",
    accentQuote:
      "Weightless complexion work that enhances natural bone structure without heaviness.",
  },
  {
    id: "destination-weddings",
    number: "03",
    tag: "Destination Palaces & Worldwide",
    headline: "Bespoke Artistry for Celebrations Worldwide.",
    supportingText:
      "Based in Jodhpur, Rajasthan—home to India's most prestigious palace weddings—and traveling worldwide to deliver calm, punctual, and couture bridal preparation for your entire celebration.",
    highlightTag: "Available Worldwide for Multi-Day Events",
    primaryImage: IMAGE_ASSETS.destinationWeddingBride,
    primaryAlt: "Indian bride in champagne couture at a grand heritage sandstone courtyard",
    secondaryImage: IMAGE_ASSETS.bridalHairstyle01,
    secondaryLabel: "Fresh Mogra Low Chignon",
    accentQuote:
      "Punctual, stress-free bridal suite styling wherever your love story takes place.",
  },
];

const SLIDE_DURATION = 6500;

export const HeroSlideshow: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const touchStartXRef = useRef<number | null>(null);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  // Slideshow autoplay
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now();
    setProgress(0);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const nextProgress = Math.min(
        (elapsed / SLIDE_DURATION) * 100,
        100
      );

      setProgress(nextProgress);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      }
    }, 50);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlideIndex, isPlaying]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;

    const diff =
      touchStartXRef.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }

    touchStartXRef.current = null;
  };

  return (
    <section
      aria-label="Hero Highlights Slideshow"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-full overflow-hidden bg-[#FAF6F0] border-b border-[#29211E]/10"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#29211E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-3 sm:px-6 md:px-8 pt-5 sm:pt-7 md:pt-10 pb-7 sm:pb-12 md:pb-14">

        {/* MAIN HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center min-w-0">

          {/* IMAGE COLUMN */}
          <div className="w-full min-w-0 lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full border border-[#D8BE9A]/60 bg-white/70 p-1.5 sm:p-3 shadow-lg">

              {/* Responsive Image Container */}
              <div className="relative w-full h-[min(112vw,430px)] sm:h-auto sm:aspect-[4/5] sm:max-h-[600px] overflow-hidden bg-[#FAF6F0]">

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide.primaryImage}
                    src={activeSlide.primaryImage}
                    alt={activeSlide.primaryAlt}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;

                      if (!target.src.includes("/images/")) {
                        target.src =
                          "/images/hero_bridal_makeup_1791960670674.jpg";
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </AnimatePresence>

                {/* Image Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#29211E]/65 via-transparent to-black/10" />

                {/* Top Badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 max-w-[calc(100%-16px)] flex items-center gap-1.5 bg-[#29211E]/85 backdrop-blur-md px-2 py-1.5 sm:px-3 sm:py-2 text-[8px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#FAF6F0] border border-[#FAF6F0]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8BE9A] shrink-0" />
                  <span className="truncate">
                    Look {activeSlide.number} · {activeSlide.tag}
                  </span>
                </div>

                {/* Bottom Image Details */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between gap-2 text-white">

                  <div className="min-w-0">
                    <p className="text-[8px] sm:text-[10px] tracking-widest uppercase text-[#D8BE9A]">
                      Signature Look
                    </p>

                    <p className="mt-0.5 font-serif-editorial text-sm sm:text-xl leading-tight text-white drop-shadow-sm">
                      {activeSlide.highlightTag}
                    </p>
                  </div>

                  <span className="text-[8px] sm:text-[11px] text-[#FAF6F0]/80 font-mono whitespace-nowrap shrink-0">
                    {siteConfig.instagramHandle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="w-full min-w-0 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.38,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col min-w-0"
              >

                {/* Location & Tag */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#D8BE9A]/30 border border-[#D8BE9A] text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#29211E]">
                    <Sparkles className="w-3 h-3 text-[#B89A62] shrink-0" />
                    {activeSlide.tag}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] uppercase tracking-wider text-[#29211E]/65">
                    <MapPin className="w-3 h-3 text-[#B89A62] shrink-0" />
                    Jodhpur · Worldwide
                  </span>
                </div>

                {/* Headline */}
                <h1 className="mt-3 sm:mt-5 font-serif-editorial text-[27px] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] sm:leading-[1.08] font-normal text-[#29211E] text-balance">
                  {activeSlide.headline}
                </h1>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm md:text-base text-[#29211E]/80 leading-[1.75] max-w-xl">
                  {activeSlide.supportingText}
                </p>

                {/* Quote */}
                <div className="mt-4 sm:mt-5 pl-3 sm:pl-4 border-l-2 border-[#B89A62] py-2 bg-white/40">
                  <p className="text-[12px] sm:text-sm italic text-[#29211E]/75 font-serif-editorial leading-relaxed">
                    "{activeSlide.accentQuote}"
                  </p>

                  <p className="mt-2 text-[9px] sm:text-[11px] leading-relaxed uppercase tracking-wider sm:tracking-widest text-[#B89A62] font-semibold">
                    — {siteConfig.brandName} · {activeSlide.highlightTag}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-7 py-3.5 text-[11px] sm:text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors shadow-sm"
                  >
                    <span>Book on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </motion.a>

                  <Link
                    to="/portfolio"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-7 py-3.5 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-[#29211E] border border-[#29211E]/30 hover:border-[#29211E] bg-white/60 hover:bg-white transition-colors"
                  >
                    <span>Explore Lookbook</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* SLIDE SWITCHER */}
        <div className="mt-6 sm:mt-10 pt-5 sm:pt-7 border-t border-[#29211E]/10">

          {/* Mobile Indicators */}
          <div className="md:hidden grid grid-cols-3 gap-2">
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlideIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`relative min-w-0 py-2.5 px-2 border transition-all text-left ${
                    isSelected
                      ? "bg-white border-[#B89A62] shadow-sm"
                      : "bg-[#FAF6F0] border-[#29211E]/10"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#29211E]/10 overflow-hidden">
                    {isSelected && (
                      <motion.div
                        className="h-full bg-[#B89A62]"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>

                  <p className="text-[9px] font-mono text-[#B89A62] font-semibold">
                    {slide.number}
                  </p>

                  <p className="text-[10px] sm:text-[11px] font-serif-editorial font-medium text-[#29211E] truncate">
                    {slide.tag}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Desktop Thumbnails */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlideIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`group relative min-w-0 text-left p-3.5 transition-all border ${
                    isSelected
                      ? "bg-white border-[#B89A62] shadow-sm"
                      : "bg-[#FAF6F0]/70 border-[#29211E]/10 hover:border-[#29211E]/30 hover:bg-white/60"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#29211E]/10 overflow-hidden">
                    {isSelected && (
                      <motion.div
                        className="h-full bg-[#B89A62]"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={slide.primaryImage}
                      alt={slide.tag}
                      className="w-12 h-14 object-cover border border-[#29211E]/15 shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 text-[11px] text-[#29211E]/60 mb-1">
                        <span className="font-mono text-[#B89A62] font-semibold">
                          {slide.number}
                        </span>
                        <span className="truncate">{slide.tag}</span>
                      </div>

                      <p className="text-xs sm:text-sm font-serif-editorial font-medium text-[#29211E] truncate group-hover:text-[#B89A62] transition-colors">
                        {slide.headline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CREDENTIALS */}
        <div className="mt-6 sm:mt-8 pt-5 border-t border-[#29211E]/10 grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 sm:gap-6 text-xs text-[#29211E]/75">

          <div className="flex items-start gap-2 sm:gap-2.5 min-w-0">
            <Award className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[10px] sm:text-xs">
                5 Years Experience
              </p>
              <p className="text-[9px] sm:text-[11px] text-[#29211E]/60">
                Certified Professional
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-2.5 min-w-0">
            <Globe2 className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[10px] sm:text-xs">
                Worldwide Travel
              </p>
              <p className="text-[9px] sm:text-[11px] text-[#29211E]/60">
                Destination Weddings
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-2.5 min-w-0">
            <MapPin className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[10px] sm:text-xs">
                Somani College Area
              </p>
              <p className="text-[9px] sm:text-[11px] text-[#29211E]/60">
                Jodhpur, Rajasthan
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-2.5 min-w-0">
            <Sparkles className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[10px] sm:text-xs">
                Personalized Trials
              </p>
              <p className="text-[9px] sm:text-[11px] text-[#29211E]/60">
                Bridal &amp; Occasions
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
