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
<section className="py-12 md:py-24 bg-[#E8D8CB]/30 border-b border-[#29211E]/10">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">

    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-7 md:pb-10 border-b border-[#29211E]/10">
      <div>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
          Bespoke Beauty Offerings
        </p>

        <h2 className="mt-2 font-serif-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#29211E] text-balance">
          Signature Makeup &amp; Hairstyling Services
        </h2>
      </div>

      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-[#29211E] hover:text-[#B89A62] transition-colors whitespace-nowrap shrink-0"
      >
        <span>View Detailed Service Guide</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    {/* Services Grid */}
    <div className="mt-7 md:mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start lg:items-stretch gap-3 sm:gap-5 lg:gap-8">

      {servicesData.map((service) => (
        <article
          key={service.id}
          className="min-w-0 h-auto lg:h-full bg-[#FAF6F0] border border-[#29211E]/10 flex flex-col transition-all duration-300 hover:border-[#B89A62] hover:shadow-md"
        >

          {/* Service Image */}
          <div className="w-full h-[110px] sm:h-40 md:h-52 lg:h-64 shrink-0 overflow-hidden border-b border-[#29211E]/10 bg-[#FAF6F0]">
            <div className="w-full h-full [&_img]:!w-full [&_img]:!h-full [&_img]:!max-h-none [&_img]:!object-cover [&_img]:!object-top">
              <EditorialImage
                src={service.image}
                alt={service.imageAlt}
                aspectRatio="4:3"
              />
            </div>
          </div>

          {/* Service Information */}
          <div className="p-3 sm:p-5 md:p-6 flex-1 min-w-0">

            <div className="flex items-start gap-1.5 text-[9px] sm:text-xs text-[#B89A62] tabular-nums font-semibold leading-relaxed">
              <span className="shrink-0">{service.number}.</span>
              <span className="line-clamp-2">
                {service.suitableOccasions[0]}
              </span>
            </div>

            <h3 className="mt-1.5 sm:mt-2 font-serif-editorial text-base sm:text-xl md:text-2xl text-[#29211E] leading-snug line-clamp-2">
              {service.title}
            </h3>

            <p className="mt-2 sm:mt-2.5 text-[11px] sm:text-sm text-[#29211E]/75 leading-relaxed line-clamp-3">
              {service.shortDescription}
            </p>

          </div>

          {/* Card Footer */}
          <div className="mt-3 lg:mt-auto px-3 sm:px-5 md:px-6 py-2.5 sm:py-4 border-t border-[#29211E]/10 flex items-center justify-between gap-1.5">

            <a
              href={getServiceWhatsAppUrl(service.whatsappSubject)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] md:text-xs font-medium uppercase tracking-wide sm:tracking-wider text-[#29211E] hover:text-[#B89A62] transition-colors whitespace-nowrap"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 shrink-0" />
            </a>

            <Link
              to={`/services#${service.id}`}
              className="text-[9px] sm:text-xs text-[#29211E]/60 hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
            >
              Details →
            </Link>

          </div>

        </article>
      ))}

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
