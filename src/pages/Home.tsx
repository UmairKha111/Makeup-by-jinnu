import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Expand, Instagram, Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { servicesData } from "../data/services";
import {
  portfolioData,
  portfolioCategories,
  PortfolioCategory,
} from "../data/portfolio";
import {
  getGeneralWhatsAppUrl,
  getServiceWhatsAppUrl,
} from "../utils/whatsapp";
import { EditorialImage } from "../components/ui/EditorialImage";
import { LightboxModal } from "../components/gallery/LightboxModal";
import { SEOHead } from "../components/ui/SEOHead";
import { HeroSlideshow } from "../components/home/HeroSlideshow";
import { InstagramSection } from "../components/instagram/InstagramSection";

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioData.filter((item) => item.featuredOnHome);
    }
    return portfolioData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="Jinnu Makeup Artist | Luxury Bridal Makeup & Hairstyling in Jodhpur"
        description="Professional bridal makeup artist and hairstylist in Jodhpur, Rajasthan with 5 years of certified experience. Available worldwide for bridal celebrations, soft glam, and destination weddings."
      />

      {/* 1. ADVANCED THREE-IMAGE HERO SLIDESHOW */}
      <HeroSlideshow />

      {/* 2. ARTIST INTRODUCTION */}
      <section className="py-16 md:py-24 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="border border-[#D8BE9A]/50 p-2.5 bg-white/50 shadow-sm">
                <EditorialImage
                  src={siteConfig.about.images.primary}
                  alt={siteConfig.about.images.primaryAlt}
                  aspectRatio="4:3"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                About the Artist · {siteConfig.instagramHandle}
              </p>
              <h2 className="mt-3 font-serif-editorial text-3xl md:text-4xl lg:text-5xl text-[#29211E] text-balance leading-tight">
                {siteConfig.about.headline}
              </h2>
              <div className="mt-5 space-y-4 text-sm md:text-base text-[#29211E]/80 leading-relaxed">
                {siteConfig.about.introduction.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#29211E]/10 flex flex-wrap items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#29211E] hover:text-[#B89A62] transition-colors"
                >
                  <span>Read Full Artist Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[#29211E]/25" aria-hidden="true">
                  |
                </span>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#B89A62] hover:text-[#29211E] transition-colors"
                >
                  <span>Discuss Your Event on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BESPOKE SERVICES */}
      <section className="py-16 md:py-24 bg-[#E8D8CB]/30 border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#29211E]/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                Bespoke Beauty Offerings
              </p>
              <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl lg:text-5xl text-[#29211E] text-balance">
                Signature Makeup &amp; Hairstyling Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#29211E] hover:text-[#B89A62] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Detailed Service Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <article
                key={service.id}
                className="bg-[#FAF6F0] border border-[#29211E]/10 flex flex-col justify-between transition-all hover:border-[#B89A62] hover:shadow-md"
              >
                <div>
                  <EditorialImage
                    src={service.image}
                    alt={service.imageAlt}
                    aspectRatio="4:3"
                    className="border-b border-[#29211E]/10"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#B89A62] tabular-nums font-semibold">
                      <span>{service.number}.</span>
                      <span>{service.suitableOccasions[0]}</span>
                    </div>
                    <h3 className="mt-2 font-serif-editorial text-2xl text-[#29211E]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#29211E]/75 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#29211E]/10 flex items-center justify-between gap-4">
                  <a
                    href={getServiceWhatsAppUrl(service.whatsappSubject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#29211E] hover:text-[#B89A62] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs text-[#29211E]/60 hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURATED LOOKBOOK & EDITORIAL PORTFOLIO */}
      <section className="py-16 md:py-24 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                Curated Lookbook
              </p>
              <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl lg:text-5xl text-[#29211E] text-balance">
                Selected Bridal &amp; Editorial Works
              </h2>
            </div>

            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter portfolio by category"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E8D8CB]/50 border border-[#29211E]/10"
            >
              {portfolioCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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

          {/* Editorial Portfolio Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white/70 border border-[#29211E]/10 flex flex-col justify-between hover:border-[#B89A62] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open full-screen view of ${item.title}`}
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
                      Inspect Look
                    </span>
                    <Expand className="w-4 h-4 text-[#FAF6F0]" />
                  </div>
                </button>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#29211E]/60">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.occasion}</span>
                  </div>
                  <h3 className="mt-1.5 font-serif-editorial text-xl text-[#29211E]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Clean action bar without private gallery references */}
          <div className="mt-10 pt-8 border-t border-[#29211E]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Complete Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/hairstyles"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#29211E] hover:text-[#B89A62] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Hairstyle Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <a
              href="#instagram"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#29211E]/80 hover:text-[#B89A62] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#B89A62]" />
              <span>See Instagram Reels ({siteConfig.instagramHandle})</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM REELS & LOOKBOOK POSTS */}
      <InstagramSection />

      {/* 6. WHY CHOOSE JINNU & EXPERIENCE SECTION */}
      <section className="py-16 md:py-24 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                The Studio Standard
              </p>
              <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl text-[#29211E] text-balance leading-tight">
                Five Years of Dedicated Bridal &amp; Occasion Artistry
              </h2>
              <p className="mt-4 text-sm md:text-base text-[#29211E]/75 leading-relaxed">
                {siteConfig.credentials.certificateDescription} Based near Somani College in Jodhpur,
                Rajasthan and traveling worldwide, every booking is handled with personalized care from
                your initial WhatsApp enquiry to the final veil pinning.
              </p>

              <div className="mt-8 p-6 bg-[#E8D8CB]/40 border border-[#D8BE9A]/60">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif-editorial text-5xl text-[#29211E] tabular-nums font-semibold">
                    {siteConfig.credentials.experienceYears}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                    Years of Experience
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#29211E]/75 leading-relaxed">
                  Verified professional profile ({siteConfig.instagramHandle}) · Certified in
                  Makeup &amp; Hairstyling · Serving brides in Jodhpur and worldwide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteConfig.whyChoose.map((reason) => (
                <div
                  key={reason.index}
                  className="p-6 bg-white/70 border border-[#29211E]/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#B89A62] tabular-nums">
                      {reason.index}.
                    </span>
                    <h3 className="mt-2 font-serif-editorial text-2xl text-[#29211E]">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#29211E]/75 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL BOOKING SECTION */}
      <section className="py-16 md:py-24 bg-[#29211E] text-[#FAF6F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-[#D8BE9A] font-semibold">
                Bridal &amp; Event Enquiries · {siteConfig.location.city} &amp; Worldwide
              </p>
              <h2 className="mt-3 font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] text-balance leading-tight">
                {siteConfig.finalCta.headline}
              </h2>
              <p className="mt-4 text-sm md:text-base text-[#FAF6F0]/75 max-w-xl leading-relaxed">
                {siteConfig.finalCta.subtext}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#FAF6F0]/65">
                <span>📍 {siteConfig.location.exactAddress}</span>
                <span>·</span>
                <span>📞 {siteConfig.phoneDisplay}</span>
                <span>·</span>
                <span>✉️ {siteConfig.email}</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-widest bg-[#D8BE9A] text-[#29211E] hover:bg-[#FAF6F0] transition-colors whitespace-nowrap shrink-0 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#29211E]" />
                <span>{siteConfig.finalCta.buttonText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-widest text-[#FAF6F0] border border-[#D8BE9A]/40 hover:border-[#D8BE9A] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Custom Event Enquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LightboxModal
        items={portfolioData}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
