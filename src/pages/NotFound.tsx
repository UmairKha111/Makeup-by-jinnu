import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { SEOHead } from "../components/ui/SEOHead";

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Jinnu Makeup Artist Jodhpur"
        description="Return to Jinnu Makeup Artist homepage or explore the bridal makeup and hairstyling portfolio."
      />

      <section className="py-24 md:py-32 bg-[#FAF6F0] text-center px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B89A62] font-medium">
            404 · Page Not Found
          </p>
          <h1 className="mt-3 font-serif-editorial text-4xl sm:text-5xl text-[#29211E]">
            This Page Could Not Be Found
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#29211E]/75 leading-relaxed">
            The page you are looking for may have moved. Explore our bridal makeup and hairstyling
            portfolio or connect directly on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#29211E] border border-[#29211E]/25 hover:border-[#29211E] transition-colors"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
