import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, AlertCircle, CheckCircle2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { servicesData } from "../data/services";
import {
  getBookingFormWhatsAppUrl,
  getGeneralWhatsAppUrl,
} from "../utils/whatsapp";
import { SEOHead } from "../components/ui/SEOHead";

interface FormErrors {
  name?: string;
  service?: string;
  eventDate?: string;
  eventLocation?: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(
    preselectedService || servicesData[0].title
  );
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("Jodhpur, Rajasthan");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsAppReadyUrl, setWhatsAppReadyUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const validateForm = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!service.trim()) {
      nextErrors.service = "Please select a service.";
    }
    if (!eventDate.trim()) {
      nextErrors.eventDate = "Please select or enter your event date.";
    }
    if (!eventLocation.trim() || eventLocation.trim().length < 2) {
      nextErrors.eventLocation = "Please enter the event city or venue.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setWhatsAppReadyUrl(null);
      return;
    }

    const url = getBookingFormWhatsAppUrl({
      name,
      phone,
      service,
      eventDate,
      eventLocation,
      message,
    });

    setWhatsAppReadyUrl(url);
  };

  return (
    <>
      <SEOHead
        title="Contact & Bridal Booking Enquiry | Jinnu Makeup Artist Jodhpur"
        description="Enquire about bridal makeup, soft glam, and hairstyling availability with Jinnu Makeup Artist in Jodhpur, Rajasthan via WhatsApp (+91 88907 99231) or Instagram (@makeupby_jinnu)."
      />

      <section className="py-14 md:py-20 bg-[#FAF6F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Details & Booking Etiquette */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-medium">
                <span>Direct Enquiries</span>
                <span aria-hidden="true">·</span>
                <span>{siteConfig.location.city} &amp; Worldwide</span>
              </div>

              <h1 className="mt-4 font-serif-editorial text-4xl sm:text-5xl text-[#29211E] text-balance leading-tight">
                Check Availability &amp; Discuss Your Look
              </h1>

              <p className="mt-4 text-base text-[#29211E]/80 leading-relaxed">
                All bridal and event consultations are handled directly via WhatsApp and Instagram
                direct messages. Complete the enquiry details to prepare a prefilled WhatsApp
                message with your event requirements.
              </p>

              <div className="mt-8 pt-8 border-t border-[#29211E]/10 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-medium block">
                    WhatsApp Booking &amp; Enquiries
                  </span>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 font-serif-editorial text-2xl md:text-3xl text-[#29211E] hover:text-[#B89A62] transition-colors tabular-nums"
                  >
                    <MessageCircle className="w-5 h-5 text-[#B89A62]" />
                    <span>{siteConfig.whatsappDisplay}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#29211E]/40" />
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-medium block">
                    Direct Call / Consultation
                  </span>
                  <a
                    href={`tel:+${siteConfig.phoneNumber}`}
                    className="mt-1 inline-flex items-center gap-2 font-serif-editorial text-2xl md:text-3xl text-[#29211E] hover:text-[#B89A62] transition-colors tabular-nums"
                  >
                    <Phone className="w-5 h-5 text-[#B89A62]" />
                    <span>{siteConfig.phoneDisplay}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#29211E]/40" />
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-medium block">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-flex items-center gap-2 font-serif-editorial text-xl md:text-2xl text-[#29211E] hover:text-[#B89A62] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#B89A62]" />
                    <span>{siteConfig.email}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#29211E]/40" />
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-medium block">
                    Exact Studio Location
                  </span>
                  <p className="mt-1 text-sm text-[#29211E] font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B89A62] shrink-0" />
                    <span>{siteConfig.location.exactAddress}</span>
                  </p>
                  <p className="mt-1 text-xs text-[#29211E]/65">
                    Landmark: Somani College, Jodhpur · {siteConfig.location.serviceAvailability}
                  </p>
                  <a
                    href={siteConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#B89A62] hover:text-[#29211E] font-medium transition-colors"
                  >
                    <span>View Location on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-medium block">
                    Instagram Profile &amp; DMs
                  </span>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 font-serif-editorial text-2xl text-[#29211E] hover:text-[#B89A62] transition-colors"
                  >
                    <span>{siteConfig.instagramHandle}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#29211E]/40" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Validated WhatsApp Enquiry Builder Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 border border-[#D8BE9A]/60 p-6 sm:p-8 md:p-10">
                <h2 className="font-serif-editorial text-2xl md:text-3xl text-[#29211E]">
                  Prepare Your WhatsApp Booking Enquiry
                </h2>
                <p className="mt-1.5 text-xs text-[#29211E]/65">
                  Fill in your event details below to generate a structured WhatsApp enquiry
                  directly to {siteConfig.brandName}.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-xs uppercase tracking-wider text-[#29211E] font-medium"
                      >
                        Your Full Name <span className="text-[#B88783]">*</span>
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g., Priya Rathore"
                        className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#29211E]/20 text-[#29211E] focus:outline-none focus:border-[#B89A62]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B88783]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="client-phone"
                        className="block text-xs uppercase tracking-wider text-[#29211E] font-medium"
                      >
                        Contact Number (Optional)
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., +91 98765 43210"
                        className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#29211E]/20 text-[#29211E] focus:outline-none focus:border-[#B89A62]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="selected-service"
                        className="block text-xs uppercase tracking-wider text-[#29211E] font-medium"
                      >
                        Selected Service <span className="text-[#B88783]">*</span>
                      </label>
                      <select
                        id="selected-service"
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          if (errors.service) setErrors({ ...errors, service: undefined });
                        }}
                        className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#29211E]/20 text-[#29211E] focus:outline-none focus:border-[#B89A62]"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Multiple Bridal & Wedding Events">
                          Multiple Bridal &amp; Wedding Events
                        </option>
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B88783]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="event-date"
                        className="block text-xs uppercase tracking-wider text-[#29211E] font-medium"
                      >
                        Event Date <span className="text-[#B88783]">*</span>
                      </label>
                      <input
                        id="event-date"
                        type="date"
                        value={eventDate}
                        onChange={(e) => {
                          setEventDate(e.target.value);
                          if (errors.eventDate) setErrors({ ...errors, eventDate: undefined });
                        }}
                        className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#29211E]/20 text-[#29211E] focus:outline-none focus:border-[#B89A62]"
                      />
                      {errors.eventDate && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B88783]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.eventDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="event-location"
                      className="block text-xs uppercase tracking-wider text-[#29211E] font-medium"
                    >
                      Event Location / Venue <span className="text-[#B88783]">*</span>
                    </label>
                    <input
                      id="event-location"
                      type="text"
                      value={eventLocation}
                      onChange={(e) => {
                        setEventLocation(e.target.value);
                        if (errors.eventLocation)
                          setErrors({ ...errors, eventLocation: undefined });
                      }}
                      placeholder="e.g., Jodhpur Palace Venue or Destination City"
                      className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#29211E]/20 text-[#29211E] focus:outline-none focus:border-[#B89A62]"
                    />
                    {errors.eventLocation && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B88783]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.eventLocation}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="event-message"
                      className="block text-xs uppercase tracking-wider text-[#29211E] font-medium"
                    >
                      Additional Details (Number of Looks, Timing, Outfit Notes)
                    </label>
                    <textarea
                      id="event-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your ceremony timing, outfit colors, or if additional family/party makeup is needed..."
                      className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#29211E]/20 text-[#29211E] focus:outline-none focus:border-[#B89A62]"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Prepare WhatsApp Enquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-[#29211E] border border-[#29211E]/25 hover:border-[#29211E] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Message on Instagram</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </form>

                {/* Validated WhatsApp Launch Box */}
                {whatsAppReadyUrl && (
                  <div className="mt-6 p-5 bg-[#FAF6F0] border border-[#B89A62]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B89A62] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#29211E]">
                          Your enquiry message is formatted and ready to send on WhatsApp
                        </p>
                        <p className="mt-1 text-xs text-[#29211E]/70 leading-relaxed">
                          Because bookings are personally coordinated by Jinnu on WhatsApp, click
                          the button below to open WhatsApp with your event details pre-filled for{" "}
                          <span className="font-medium tabular-nums">
                            {siteConfig.whatsappDisplay}
                          </span>
                          .
                        </p>
                        <div className="mt-4">
                          <a
                            href={whatsAppReadyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors"
                          >
                            <span>Open WhatsApp &amp; Send Enquiry</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
