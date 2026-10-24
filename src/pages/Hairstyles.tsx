import React, { useState, useMemo } from "react";
import { Expand, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  portfolioData,
  hairstyleCategories,
  HairstyleCategory,
} from "../data/portfolio";
import { siteConfig } from "../data/siteConfig";
import { getLookWhatsAppUrl, getServiceWhatsAppUrl } from "../utils/whatsapp";
import { EditorialImage } from "../components/ui/EditorialImage";
import { LightboxModal } from "../components/gallery/LightboxModal";
import { SEOHead } from "../components/ui/SEOHead";

export const Hairstyles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<HairstyleCategory>("All Hairstyles");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hairstyleItems = useMemo(() => {
    const allHairstyles = portfolioData.filter(
      (item) => item.isHairstyleShowcase
    );
    if (selectedCategory === "All Hairstyles") return allHairstyles;
    return allHairstyles.filter(
      (item) => item.hairstyleCategory === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <>
      <SEOHead
        title="Bridal Hairstyling Gallery | Jinnu Makeup Artist Jodhpur"
        description="Explore bridal buns with fresh mogra jasmine, sculpted Hollywood waves, braided updos, and traditional veil styling by Jinnu Makeup Artist in Jodhpur."
      />

      {/* Page Header */}
      <section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-medium">
              <span>Bridal &amp; Occasion Hair Architecture</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.instagramHandle}</span>
            </div>
            <h1 className="mt-4 font-serif-editorial text-4xl sm:text-5xl text-[#29211E] text-balance leading-tight">
              Professional Bridal Hairstyling Gallery
            </h1>
            <p className="mt-4 text-base text-[#29211E]/80 leading-relaxed">
              From traditional low chignons adorned with fresh jasmine mogra and antique gold pins
              to glossy Hollywood waves and secure matha patti framing—each hairstyle is crafted to
              hold gracefully through hours of celebration.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-10 pt-6 border-t border-[#29211E]/10 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter hairstyles by style"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E8D8CB]/50 border border-[#29211E]/10"
            >
              {hairstyleCategories.map((category) => {
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

            <span className="text-xs text-[#29211E]/60 tabular-nums">
              {hairstyleItems.length} hairstyling{" "}
              {hairstyleItems.length === 1 ? "study" : "studies"}
            </span>
          </div>
        </div>
      </section>

      {/* Hairstyle Gallery Grid */}
      <section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairstyleItems.map((item, index) => (
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
                    aria-label={`Inspect ${item.title} hairstyle in full screen`}
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
                        View Hair Detail
                      </span>
                      <Expand className="w-4 h-4 text-[#FAF6F0]" />
                    </div>
                  </button>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#B89A62]">
                      <span>{item.hairstyleCategory || "Bridal Hairstyling"}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#29211E]/60">{item.occasion}</span>
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
                    className="text-xs uppercase tracking-widest text-[#29211E]/70 hover:text-[#29211E] transition-colors cursor-pointer"
                  >
                    Full View
                  </button>
                  <a
                    href={getLookWhatsAppUrl(item.title, "Bridal Hairstyling")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Request This Style</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Preparation & Accessory Guidance */}
      <section className="py-16 md:py-20 bg-[#E8D8CB]/35 border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                Bridal Hair Consultation
              </p>
              <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl text-[#29211E] text-balance">
                Designed for Dupattas, Matha Patti &amp; Fresh Florals
              </h2>
              <p className="mt-3 text-sm text-[#29211E]/75 leading-relaxed">
                During your consultation on WhatsApp, we coordinate hair texture preparation,
                floral adornment choices, and head jewelry anchoring so your hairstyle feels
                weightless and secure.
              </p>
              <div className="mt-6">
                <a
                  href={getServiceWhatsAppUrl("Bridal Hairstyling")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Enquire About Bridal Hairstyling</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-[#FAF6F0] border border-[#29211E]/10">
                <span className="text-xs font-medium text-[#B89A62] tabular-nums">01.</span>
                <h3 className="mt-2 font-serif-editorial text-xl text-[#29211E]">
                  Floral Integration
                </h3>
                <p className="mt-2 text-xs text-[#29211E]/75 leading-relaxed">
                  Custom placement for fresh jasmine mogra garlands, roses, and delicate baby&apos;s
                  breath.
                </p>
              </div>
              <div className="p-6 bg-[#FAF6F0] border border-[#29211E]/10">
                <span className="text-xs font-medium text-[#B89A62] tabular-nums">02.</span>
                <h3 className="mt-2 font-serif-editorial text-xl text-[#29211E]">
                  Jewelry Anchoring
                </h3>
                <p className="mt-2 text-xs text-[#29211E]/75 leading-relaxed">
                  Hidden structural pinning for matha patti, maang tikka, borla, and passa ornaments.
                </p>
              </div>
              <div className="p-6 bg-[#FAF6F0] border border-[#29211E]/10">
                <span className="text-xs font-medium text-[#B89A62] tabular-nums">03.</span>
                <h3 className="mt-2 font-serif-editorial text-xl text-[#29211E]">
                  Veil &amp; Dupatta Support
                </h3>
                <p className="mt-2 text-xs text-[#29211E]/75 leading-relaxed">
                  Balanced crown volume and foundation support for heavy embroidered bridal veils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LightboxModal
        items={hairstyleItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
