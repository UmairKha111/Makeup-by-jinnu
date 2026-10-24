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
    accentQuote: "Flawless skin-first luminosity engineered for 14+ hours of ceremony lighting.",
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
    accentQuote: "Weightless complexion work that enhances natural bone structure without heaviness.",
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
    accentQuote: "Punctual, stress-free bridal suite styling wherever your love story takes place.",
  },
];

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

export const HeroSlideshow: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const touchStartXRef = useRef<number | null>(null);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-play timer with live progress tracking
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now();
    setProgress(0);

    const interval = 50; // update progress every 50ms
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const nextProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(nextProgress);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        startTimeRef.current = Date.now();
        setProgress(0);
      }
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlideIndex, isPlaying]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext(); // swiped left
      } else {
        handlePrev(); // swiped right
      }
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
      className="relative bg-[#FAF6F0] border-b border-[#29211E]/10 overflow-hidden"
    >
      {/* Editorial Decorative Background Grid Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#29211E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-10 pb-8 sm:pb-12 md:pb-14 relative z-10">
        {/* Main Hero Split Content (Editorial showcase bar and detail focus thumbnail removed as requested) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left Column: Typographic Details with Motion */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Location & Tag Pill */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#D8BE9A]/30 border border-[#D8BE9A] text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#29211E]">
                    <Sparkles className="w-3 h-3 text-[#B89A62]" />
                    {activeSlide.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-[#29211E]/65">
                    <MapPin className="w-3 h-3 text-[#B89A62]" />
                    Jodhpur · Worldwide
                  </span>
                </div>

                {/* Editorial Headline */}
                <h1 className="mt-3 sm:mt-5 font-serif-editorial text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.14] sm:leading-[1.08] font-normal text-[#29211E] text-balance">
                  {activeSlide.headline}
                </h1>

                {/* Supporting Description */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#29211E]/80 leading-relaxed max-w-xl">
                  {activeSlide.supportingText}
                </p>

                {/* Editorial Quote Box */}
                <div className="mt-4 sm:mt-5 pl-3 sm:pl-4 border-l-2 border-[#B89A62] py-1 bg-white/40">
                  <p className="text-xs sm:text-sm italic text-[#29211E]/75 font-serif-editorial">
                    "{activeSlide.accentQuote}"
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B89A62] font-semibold">
                    — {siteConfig.brandName} · {activeSlide.highlightTag}
                  </p>
                </div>

                {/* Dual Action CTAs: Responsive full width on mobile, inline on desktop */}
                <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shadow-sm text-center"
                  >
                    <span>Book on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-xs font-medium uppercase tracking-widest text-[#29211E] border border-[#29211E]/30 hover:border-[#29211E] bg-white/60 hover:bg-white transition-colors whitespace-nowrap text-center"
                  >
                    <span>Explore Lookbook</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Presentation (Clean, without the inset thumbnail card) */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative">
              {/* Primary Large Editorial Image Box */}
              <div className="relative border border-[#D8BE9A]/60 bg-white/70 p-2 sm:p-3 shadow-lg">
                <div className="relative aspect-[4/5] sm:aspect-[4/5] max-h-[460px] sm:max-h-none overflow-hidden bg-[#FAF6F0]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide.primaryImage}
                      src={activeSlide.primaryImage}
                      alt={activeSlide.primaryAlt}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes("/images/")) {
                          target.src = "/images/hero_bridal_makeup_1791960670674.jpg";
                        }
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>

                  {/* Gradient Vignette Overlay for Editorial Feel */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#29211E]/65 via-transparent to-black/10" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2 bg-[#29211E]/85 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#FAF6F0] border border-[#FAF6F0]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8BE9A]" />
                    <span>Look {activeSlide.number} · {activeSlide.tag}</span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between text-white">
                    <div>
                      <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#D8BE9A]">
                        Signature Look
                      </p>
                      <p className="font-serif-editorial text-sm sm:text-xl font-normal leading-tight text-white drop-shadow-sm">
                        {activeSlide.highlightTag}
                      </p>
                    </div>
                    <span className="text-[9px] sm:text-[11px] text-[#FAF6F0]/70 font-mono">
                      {siteConfig.instagramHandle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Slide Switcher (Pills on Mobile, Rich Cards on Tablet/Desktop) */}
        <div className="mt-6 sm:mt-10 pt-5 sm:pt-7 border-t border-[#29211E]/10">
          {/* Mobile Compact Indicators (< md) */}
          <div className="md:hidden flex items-center justify-between gap-2">
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`flex-1 relative py-2 px-2.5 border transition-all text-left cursor-pointer ${
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
                        transition={{ ease: "linear" }}
                      />
                    )}
                  </div>
                  <p className="text-[9px] font-mono text-[#B89A62] font-semibold">{slide.number}</p>
                  <p className="text-[11px] font-serif-editorial font-medium text-[#29211E] truncate">
                    {slide.tag}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Desktop Rich Thumbnails (md+) */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlideIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`group relative text-left p-3.5 transition-all border cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#B89A62] shadow-sm"
                      : "bg-[#FAF6F0]/70 border-[#29211E]/10 hover:border-[#29211E]/30 hover:bg-white/60"
                  }`}
                >
                  {/* Active Progress Bar Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#29211E]/10 overflow-hidden">
                    {isSelected && (
                      <motion.div
                        className="h-full bg-[#B89A62]"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={slide.primaryImage}
                      alt={slide.tag}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes("/images/")) {
                          target.src = "/images/hero_bridal_makeup_1791960670674.jpg";
                        }
                      }}
                      className="w-12 h-14 object-cover border border-[#29211E]/15 shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between text-[11px] text-[#29211E]/60 mb-1">
                        <span className="font-mono text-[#B89A62] font-semibold">
                          {slide.number}
                        </span>
                        <span>{slide.tag}</span>
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

        {/* Verified Credentials Banner Strip */}
        <div className="mt-6 sm:mt-8 pt-5 border-t border-[#29211E]/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-xs text-[#29211E]/75">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Award className="w-4 h-4 text-[#B89A62] shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[11px] sm:text-xs truncate">5 Years Experience</p>
              <p className="text-[10px] sm:text-[11px] text-[#29211E]/60 truncate">Certified Professional</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <Globe2 className="w-4 h-4 text-[#B89A62] shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[11px] sm:text-xs truncate">Worldwide Travel</p>
              <p className="text-[10px] sm:text-[11px] text-[#29211E]/60 truncate">Destination Weddings</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <MapPin className="w-4 h-4 text-[#B89A62] shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[11px] sm:text-xs truncate">Somani College Area</p>
              <p className="text-[10px] sm:text-[11px] text-[#29211E]/60 truncate">Jodhpur, Rajasthan</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <Sparkles className="w-4 h-4 text-[#B89A62] shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-[#29211E] text-[11px] sm:text-xs truncate">Personalized Trials</p>
              <p className="text-[10px] sm:text-[11px] text-[#29211E]/60 truncate">Bridal &amp; Occasions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
