import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig, IMAGE_ASSETS } from "../data/siteConfig";
import { verifiedStudioStandards } from "../data/testimonials";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { EditorialImage } from "../components/ui/EditorialImage";
import { SEOHead } from "../components/ui/SEOHead";

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Jinnu Makeup Artist | Certified Bridal Makeup & Hairstylist in Jodhpur"
        description="Meet Jinnu (@makeupby_jinnu), a certified professional makeup artist and hairstylist in Jodhpur, Rajasthan with 5 years of experience serving bridal and occasion clients worldwide."
      />

      {/* Page Header & Editorial Introduction */}
      <section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                  <span>Artist Profile</span>
                  <span aria-hidden="true">·</span>
                  <span>{siteConfig.instagramHandle}</span>
                </div>

                <h1 className="mt-4 font-serif-editorial text-4xl sm:text-5xl text-[#29211E] text-balance leading-tight">
                  {siteConfig.about.headline}
                </h1>

                <p className="mt-3 text-sm uppercase tracking-widest text-[#29211E]/60">
                  {siteConfig.about.subtitle}
                </p>

                <div className="mt-6 space-y-4 text-base text-[#29211E]/80 leading-relaxed">
                  {siteConfig.about.introduction.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#29211E]/10 flex flex-wrap items-center gap-4">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Book Consultation on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-[#29211E] border border-[#29211E]/25 hover:border-[#29211E] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Follow {siteConfig.instagramHandle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-5"
            >
              <div className="border border-[#D8BE9A]/50 p-2.5 bg-white/60">
                <EditorialImage
                  src={IMAGE_ASSETS.artistPortrait || siteConfig.about.images.secondary}
                  alt="Jinnu Makeup Artist - Certified Professional in Jodhpur"
                  aspectRatio="3:4"
                  priority
                />
                <div className="pt-2.5 px-1 flex items-center justify-between text-xs text-[#29211E]/65">
                  <span className="font-semibold text-[#29211E]">{siteConfig.brandName}</span>
                  <span>{siteConfig.location.display}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Verified Credentials Strip */}
          <div className="mt-12 pt-8 border-t border-[#29211E]/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedStudioStandards.map((item) => (
              <div key={item.id}>
                <span className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                  {item.label}
                </span>
                <p className="mt-1 font-serif-editorial text-2xl md:text-3xl text-[#29211E] tabular-nums">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-[#29211E]/65">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Makeup & Hairstyling Philosophy */}
      <section className="py-16 md:py-24 bg-[#E8D8CB]/30 border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
              Craft &amp; Technique
            </p>
            <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl text-[#29211E] text-balance">
              {siteConfig.about.philosophyTitle}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#29211E]/75 leading-relaxed">
              Every bride and occasion client receives an individualized approach—combining
              skin-first preparation with durable hairstyling designed for Indian wedding rituals
              and photography.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.about.philosophyPoints.map((point) => (
              <div
                key={point.index}
                className="p-7 bg-[#FAF6F0] border border-[#29211E]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-[#B89A62] tabular-nums">
                    {point.index}.
                  </span>
                  <h3 className="mt-2 font-serif-editorial text-2xl text-[#29211E]">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#29211E]/75 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Visual Triptych */}
      <section className="py-16 md:py-24 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#29211E]/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                Visual Signature
              </p>
              <h2 className="mt-2 font-serif-editorial text-3xl text-[#29211E]">
                Makeup Artistry &amp; Hair Architecture
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#29211E] hover:text-[#B89A62] transition-colors"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="border border-[#29211E]/10 bg-white/60 p-2.5">
              <EditorialImage
                src={IMAGE_ASSETS.makeupApplication}
                alt="Professional studio makeup application technique"
                aspectRatio="4:3"
              />
              <p className="mt-2.5 text-xs text-[#29211E]/70 px-1">
                Precision Complexion &amp; Highlighting
              </p>
            </div>
            <div className="border border-[#29211E]/10 bg-white/60 p-2.5">
              <EditorialImage
                src={IMAGE_ASSETS.softGlamMakeup}
                alt="Luminous soft glam makeup finish"
                aspectRatio="4:3"
              />
              <p className="mt-2.5 text-xs text-[#29211E]/70 px-1">
                Dewy Skin-First Soft Glam
              </p>
            </div>
            <div className="border border-[#29211E]/10 bg-white/60 p-2.5">
              <EditorialImage
                src={IMAGE_ASSETS.hairstyleHollywoodWaves}
                alt="Sculpted bridal waves and braided hairstyling"
                aspectRatio="4:3"
              />
              <p className="mt-2.5 text-xs text-[#29211E]/70 px-1">
                Contemporary Bridal Hairstyling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-20 bg-[#29211E] text-[#FAF6F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D8BE9A]">
              Direct Booking · Jodhpur &amp; Worldwide
            </p>
            <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl text-[#FAF6F0] text-balance">
              Plan Your Bridal or Occasion Look with Jinnu
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-widest bg-[#D8BE9A] text-[#29211E] hover:bg-[#FAF6F0] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-[#FAF6F0] border border-[#D8BE9A]/40 hover:border-[#D8BE9A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Event Enquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
