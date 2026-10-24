import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Instagram, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "../../data/siteConfig";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  // Scroll detection to adapt shadow and padding smoothly
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer whenever location/route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 
        FIXED HEADER: Anchored permanently to the top of the viewport across all pages and scroll depths.
        Note: We use standard <header> without motion.header transforms to guarantee position:fixed stability.
      */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#29211E]/12 shadow-[0_4px_24px_rgba(41,33,30,0.08)] py-2.5 sm:py-3"
            : "bg-[#FAF6F0]/98 backdrop-blur-sm border-b border-[#29211E]/10 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-2.5 sm:gap-6 px-3 sm:px-6 md:px-8">
          {/* Brand Wordmark: Displays FULL name 'Jinnu Makeup Artist & Hairstylist' prominently */}
          <Link
            to="/"
            className="group flex flex-col justify-center shrink min-w-0 focus-visible:outline-2 focus-visible:outline-[#B89A62]"
            aria-label={`${siteConfig.brandName} - Home`}
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-serif-editorial text-[13px] xs:text-base sm:text-xl md:text-2xl lg:text-[1.55rem] font-semibold tracking-tight text-[#29211E] group-hover:text-[#B89A62] transition-colors leading-tight truncate">
                {siteConfig.brandName}
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#B89A62] shrink-0" />
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.18em] text-[#29211E]/65 font-medium leading-tight mt-0.5 truncate">
              Luxury Bridal &amp; Editorial · {siteConfig.location.city}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 px-3 py-1.5 bg-[#E8D8CB]/35 rounded-full border border-[#29211E]/8 shadow-inner shrink-0"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {siteConfig.navigation.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = hoveredPath === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  className={`relative px-3.5 py-2 text-xs xl:text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap z-10 ${
                    isActive
                      ? "text-[#FAF6F0] font-semibold"
                      : "text-[#29211E]/80 hover:text-[#29211E]"
                  }`}
                >
                  {/* Motion Active Indicator Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#29211E] rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Motion Hover Indicator */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverNavIndicator"
                      className="absolute inset-0 bg-[#D8BE9A]/40 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}

                  <span>{item.label}</span>
                </NavLink>
              );
            })}

            {/* Direct Instagram Link in Nav */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredPath("instagram")}
              className="relative px-3 py-2 text-xs xl:text-[13px] font-medium tracking-wide text-[#29211E]/80 hover:text-[#29211E] transition-colors flex items-center gap-1.5 z-10"
              title="Visit @makeupby_jinnu on Instagram"
            >
              {hoveredPath === "instagram" && (
                <motion.div
                  layoutId="hoverNavIndicator"
                  className="absolute inset-0 bg-[#D8BE9A]/40 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Instagram className="w-3.5 h-3.5 text-[#B89A62]" />
              <span>Instagram</span>
            </a>
          </nav>

          {/* Primary Action Button (No phone number in navbar as requested) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Booking CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest text-[#FAF6F0] bg-[#29211E] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-[#B89A62]"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D8BE9A]" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden font-semibold">Book</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </motion.a>

            {/* Accessible Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#29211E] bg-white/80 border border-[#29211E]/15 hover:border-[#29211E]/40 transition-colors cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Accessible Staggered Mobile Menu Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#29211E]/40 backdrop-blur-xs z-[90] lg:hidden"
              aria-hidden="true"
            />

            {/* Slide Down Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[56px] sm:top-[68px] left-0 right-0 z-[95] max-h-[calc(100vh-70px)] overflow-y-auto bg-[#FAF6F0] border-b border-[#29211E]/15 shadow-2xl lg:hidden"
            >
              <div className="max-w-[1280px] mx-auto px-5 py-6 flex flex-col space-y-4">
                <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#29211E]/8">
                  {siteConfig.navigation.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.035 }}
                      >
                        <NavLink
                          to={item.path}
                          end={item.path === "/"}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between py-3.5 text-base sm:text-lg font-serif-editorial tracking-wide transition-colors ${
                            isActive
                              ? "text-[#B89A62] font-semibold pl-2 border-l-2 border-[#B89A62]"
                              : "text-[#29211E] hover:text-[#B89A62]"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#29211E]/40" />
                        </NavLink>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.22 }}
                  >
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-serif-editorial tracking-wide text-[#29211E] hover:text-[#B89A62]"
                    >
                      <span className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-[#B89A62]" />
                        Instagram ({siteConfig.instagramHandle})
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#29211E]/40" />
                    </a>
                  </motion.div>
                </nav>

                <div className="pt-4 border-t border-[#29211E]/10 flex flex-col gap-2.5">
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium uppercase tracking-widest text-[#FAF6F0] bg-[#29211E] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D8BE9A]" />
                    <span>Book on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="pt-2 text-center text-xs text-[#29211E]/65 space-y-1">
                    <p className="font-medium text-[#29211E]">{siteConfig.location.display}</p>
                    <p>Certified Makeup Artist &amp; Hairstylist · Jodhpur &amp; Worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
