import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#29211E] text-[#FAF6F0] border-t border-[#D8BE9A]/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#FAF6F0]/10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif-editorial text-2xl md:text-3xl font-normal tracking-wide text-[#FAF6F0]"
            >
              {siteConfig.brandName}
            </Link>
            <p className="mt-2 text-xs tracking-wider uppercase text-[#D8BE9A]">
              {siteConfig.profession} · {siteConfig.location.city}, {siteConfig.location.state}
            </p>
            <p className="mt-4 text-sm text-[#FAF6F0]/75 max-w-sm leading-relaxed">
              Professional bridal makeup and hairstyling studio with{" "}
              {siteConfig.credentials.experienceYears} years of certified experience. Based in
              Jodhpur, Rajasthan and available worldwide for weddings and special celebrations.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-widest bg-[#D8BE9A] text-[#29211E] hover:bg-[#FAF6F0] transition-colors whitespace-nowrap shrink-0"
              >
                <span>WhatsApp Booking</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wider text-[#FAF6F0] border border-[#D8BE9A]/35 hover:border-[#D8BE9A] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Instagram {siteConfig.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-widest text-[#D8BE9A] font-medium">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#FAF6F0]/80">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D8BE9A] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D8BE9A] hover:text-[#FAF6F0] transition-colors"
                >
                  <span>Instagram Feed ({siteConfig.instagramHandle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Enquiries & Location */}
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-widest text-[#D8BE9A] font-medium">
              Studio Location &amp; Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#FAF6F0]/80">
              <p>
                <span className="text-[#FAF6F0]/50 block text-xs">Studio Location</span>
                <span className="text-[#FAF6F0] font-medium">{siteConfig.location.exactAddress}</span>
                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-xs text-[#D8BE9A] hover:text-[#FAF6F0] transition-colors"
                >
                  View on Google Maps (Somani College, Jodhpur) &rarr;
                </a>
              </p>
              <p>
                <span className="text-[#FAF6F0]/50 block text-xs">Service Availability</span>
                {siteConfig.location.serviceAvailability} (Bridal &amp; Destination Events)
              </p>
              <p>
                <span className="text-[#FAF6F0]/50 block text-xs">WhatsApp Booking</span>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D8BE9A] transition-colors tabular-nums font-medium text-[#FAF6F0]"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </p>
              <p>
                <span className="text-[#FAF6F0]/50 block text-xs">Direct Call / Phone</span>
                <a
                  href={`tel:+${siteConfig.phoneNumber}`}
                  className="hover:text-[#D8BE9A] transition-colors tabular-nums font-medium text-[#FAF6F0]"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-[#FAF6F0]/50 block text-xs">Email ID</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#D8BE9A] transition-colors font-medium text-[#FAF6F0]"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="text-[#FAF6F0]/50 block text-xs">Instagram</span>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D8BE9A] transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAF6F0]/55">
          <p>
            &copy; {currentYear} {siteConfig.brandName} ({siteConfig.instagramHandle}). All rights
            reserved.
          </p>
          <p>
            Jodhpur, Rajasthan, India · Available Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};
