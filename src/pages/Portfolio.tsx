import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Expand, ArrowUpRight, Instagram } from "lucide-react";
import { motion } from "motion/react";
import {
  portfolioData,
  portfolioCategories,
  PortfolioCategory,
} from "../data/portfolio";
import { siteConfig } from "../data/siteConfig";
import { getLookWhatsAppUrl, getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { EditorialImage } from "../components/ui/EditorialImage";
import { LightboxModal } from "../components/gallery/LightboxModal";
import { SEOHead } from "../components/ui/SEOHead";

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return portfolioData;
    return portfolioData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEOHead
        title="Bridal Makeup & Hairstyling Portfolio | Jinnu Makeup Artist Jodhpur"
        description="Browse the bridal makeup, soft glam, engagement, reception, and hairstyling portfolio of Jinnu Makeup Artist (@makeupby_jinnu) in Jodhpur, Rajasthan."
      />

      {/* Page Header */}
      <section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                <span>Editorial Lookbook</span>
                <span aria-hidden="true">·</span>
                <span>{siteConfig.instagramHandle}</span>
              </div>
              <h1 className="mt-4 font-serif-editorial text-4xl sm:text-5xl text-[#29211E] text-balance leading-tight">
                Bridal, Occasion &amp; Editorial Portfolio
              </h1>
              <p className="mt-4 text-base text-[#29211E]/80 leading-relaxed">
                Explore curated makeup and hairstyling looks across traditional Rajasthani wedding
                ceremonies, luminous soft glam evenings, engagements, and destination celebrations.
                Click any portrait to inspect styling details in full screen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#29211E] bg-[#E8D8CB]/60 border border-[#D8BE9A] hover:bg-[#D8BE9A]/40 transition-colors whitespace-nowrap shrink-0"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B89A62]" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
              <span className="text-xs text-[#29211E]/60 tabular-nums">
                Showing {filteredItems.length} curated{" "}
                {filteredItems.length === 1 ? "look" : "looks"}
              </span>
            </div>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="mt-10 pt-6 border-t border-[#29211E]/10 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Portfolio categories"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E8D8CB]/50 border border-[#29211E]/10"
            >
              {portfolioCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(category);
                      setLightboxIndex(null);
                    }}
                    className={`px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#29211E] text-[#FAF6F0]"
                        : "text-[#29211E]/75 hover:text-[#29211E]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Editorial Grid */}
      <section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="group bg-white/70 border border-[#29211E]/10 flex flex-col justify-between"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`View ${item.title} in full-screen lightbox`}
                    className="relative block w-full text-left overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B89A62]"
                  >
                    <EditorialImage
                      src={item.image}
                      alt={item.imageAlt}
                      aspectRatio="3:4"
                      imgClassName="group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#29211E]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-5">
                      <span className="text-xs uppercase tracking-widest text-[#FAF6F0]">
                        Open Fullscreen Lightbox
                      </span>
                      <Expand className="w-4 h-4 text-[#FAF6F0]" />
                    </div>
                  </button>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#29211E]/60">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.occasion}</span>
                    </div>

                    <h2 className="mt-2 font-serif-editorial text-2xl text-[#29211E]">
                      {item.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-[#29211E]/75 leading-relaxed">
                      {item.styleNotes}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#29211E]/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="text-xs uppercase tracking-widest text-[#29211E]/70 hover:text-[#29211E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Inspect Look
                  </button>

                  <a
                    href={getLookWhatsAppUrl(item.title, item.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Booking Callout */}
      <section className="py-16 md:py-20 bg-[#29211E] text-[#FAF6F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D8BE9A]">
              Custom Look Consultation
            </p>
            <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl text-[#FAF6F0] text-balance">
              Inspired by a Specific Bridal or Occasion Look?
            </h2>
            <p className="mt-2 text-sm text-[#FAF6F0]/75 max-w-xl">
              Send your outfit photographs and preferred reference looks on WhatsApp to plan your
              personalized styling session.
            </p>
          </div>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-widest bg-[#D8BE9A] text-[#29211E] hover:bg-[#FAF6F0] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
