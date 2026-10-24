import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { servicesData } from "../data/services";
import { getServiceWhatsAppUrl, getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { EditorialImage } from "../components/ui/EditorialImage";
import { SEOHead } from "../components/ui/SEOHead";

export const Services: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Makeup & Hairstyling Services | Jinnu Makeup Artist Jodhpur"
        description="Explore bridal makeup, soft glam, engagement, reception, party makeup, bridal hairstyling, and destination wedding beauty services by Jinnu Makeup Artist in Jodhpur and worldwide."
      />

      {/* Page Header */}
      <section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-medium">
              <span>Bespoke Beauty Services</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.location.city} &amp; Worldwide</span>
            </div>
            <h1 className="mt-4 font-serif-editorial text-4xl sm:text-5xl text-[#29211E] text-balance leading-tight">
              Tailored Makeup &amp; Hairstyling for Every Wedding Milestone
            </h1>
            <p className="mt-4 text-base text-[#29211E]/80 leading-relaxed">
              Every event carries its own lighting, attire palette, and emotional rhythm. We
              customize each service around your personal preferences and schedule—available at our
              Jodhpur studio or on-location worldwide.
            </p>
          </div>

          {/* Quick Jump Anchor Navigation */}
          <div className="mt-8 pt-6 border-t border-[#29211E]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#29211E]/75">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-[#B89A62] transition-colors whitespace-nowrap shrink-0 tabular-nums"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="bg-[#FAF6F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 divide-y divide-[#29211E]/10">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                id={service.id}
                className="py-14 md:py-20 scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              >
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="border border-[#D8BE9A]/50 p-2.5 bg-white/60">
                    <EditorialImage
                      src={service.image}
                      alt={service.imageAlt}
                      aspectRatio={service.aspectRatio === "16:9" ? "4:3" : service.aspectRatio}
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-medium tabular-nums">
                    <span>Service {service.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{siteConfig.brandName}</span>
                  </div>

                  <h2 className="mt-2 font-serif-editorial text-3xl md:text-4xl text-[#29211E]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm md:text-base text-[#29211E]/80 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#29211E]/10">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                        Suitable Occasions
                      </h3>
                      <ul className="mt-2.5 space-y-1.5 text-sm text-[#29211E]/80">
                        {service.suitableOccasions.map((occ) => (
                          <li key={occ}>{occ}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                        Service Focus
                      </h3>
                      <ul className="mt-2.5 space-y-1.5 text-sm text-[#29211E]/80">
                        {service.highlights.map((hl) => (
                          <li key={hl}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#29211E]/10 flex flex-wrap items-center gap-4">
                    <a
                      href={getServiceWhatsAppUrl(service.whatsappSubject)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Enquire About {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#29211E] border border-[#29211E]/25 hover:border-[#29211E] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Include in Event Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation Callout */}
      <section className="py-16 md:py-20 bg-[#E8D8CB]/40 border-t border-[#29211E]/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
              Custom Multi-Event Bookings
            </p>
            <h2 className="mt-2 font-serif-editorial text-3xl text-[#29211E] text-balance">
              Planning Multiple Wedding Functions or a Destination Celebration?
            </h2>
            <p className="mt-2 text-sm text-[#29211E]/75 leading-relaxed">
              Share your wedding itinerary, dates, and location on WhatsApp to receive availability
              details tailored to your events.
            </p>
          </div>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Itinerary on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
};
