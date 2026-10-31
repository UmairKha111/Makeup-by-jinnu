/**
 * CENTRALIZED BUSINESS & BRAND CONFIGURATION
 *
 * Update this file to modify business contact details, social links,
 * stated experience, and hero/section image paths across the entire website.
 */

import heroBridalMakeup from "../assets/images/Elegant Indian Bride in Red and Gold.png";
import bridalLook01 from "../assets/images/Serene Maroon South Asian Bride.png";
import softGlamMakeup from "../assets/images/Emerald-Adorned Bridal Portrait.png";
import engagementMakeup from "../assets/images/Floral Glamour Beauty Portrait.png";
import bridalHairstyle01 from "../assets/images/Pastel Emerald Bridal Elegance.png";
import hairstyleHollywoodWaves from "../assets/images/Elegant Indian Bridal Portrait.png";
import makeupApplication from "../assets/images/makeup_application_studio_1791960673484.jpg";
import destinationWeddingBride from "../assets/images/destination_wedding_bride_1791960674452.jpg";
import artistPortrait from "../assets/images/Ornate Floral Bridal Portrait.png";
import artistPortrait1 from "../assets/images/Glamorous Traditional Bridal Portrait.png";
import artistPortrait11 from "../assets/images/Radiant Indian Bridal Portrait.png";

export const IMAGE_ASSETS = {
  /** Primary Hero Bridal Portrait (3:4 vertical editorial crop) */
  heroBridalMakeup,
  /** Traditional Royal Rajasthani Bridal Look (3:4 vertical crop) */
  bridalLook01,
  /** Luminous Dewy Soft Glam Look (4:3 beauty close-up) */
  softGlamMakeup,
  /** Candlelit Engagement & Reception Look (4:3 editorial portrait) */
  engagementMakeup,
  /** Intricate Bridal Bun with Fresh Jasmine Mogra & Gold Pins (3:4 crop) */
  bridalHairstyle01,
  /** Sculpted Hollywood Waves & Crown Braid (4:3 crop) */
  hairstyleHollywoodWaves,
  /** Behind-the-Scenes Studio Makeup Application (4:3 crop) */
  makeupApplication,
  /** Jodhpur Palace Courtyard Destination Wedding Portrait (16:9 wide crop) */
  destinationWeddingBride,
  /** Certified Makeup Artist & Hairstylist Jinnu Portrait */
  artistPortrait,
  artistPortrait1,artistPortrait11,
} as const;

export type ImageAssetKey = keyof typeof IMAGE_ASSETS;

export interface SiteConfig {
  brandName: string;
  shortName: string;
  profession: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappDisplay: string;
  whatsappNumberInternational: string;
  whatsappBaseUrl: string;
  phoneDisplay: string;
  phoneNumber: string;
  email: string;
  location: {
    city: string;
    state: string;
    country: string;
    exactAddress: string;
    display: string;
    serviceAvailability: string;
    googleMapsUrl: string;
  };
  credentials: {
    experienceYears: number;
    experienceLabel: string;
    certificateLabel: string;
    certificateDescription: string;
  };
  hero: {
    locationTag: string;
    headline: string;
    supportingText: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    image: string;
    imageAlt: string;
  };
  about: {
    headline: string;
    subtitle: string;
    introduction: string[];
    philosophyTitle: string;
    philosophyPoints: {
      index: string;
      title: string;
      description: string;
    }[];
    images: {
      primary: string;
      primaryAlt: string;
      secondary: string;
      secondaryAlt: string;
    };
  };
  whyChoose: {
    index: string;
    title: string;
    description: string;
  }[];
  finalCta: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
  navigation: {
    label: string;
    path: string;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: "Jinnu Makeup Artist & Hairstylist",
  shortName: "Jinnu",
  profession: "Makeup Artist and Hairstylist",
  instagramHandle: "@makeupby_jinnu",
  instagramUrl: "https://www.instagram.com/makeupby_jinnu/",
  whatsappDisplay: "+91 88907 99231",
  whatsappNumberInternational: "918890799231",
  whatsappBaseUrl: "https://wa.me/918890799231",
  phoneDisplay: "+91 91191 88433",
  phoneNumber: "9119188433",
  email: "jj0412119@gmail.com",
  location: {
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India",
    exactAddress: "Near Somani College, Jodhpur, Rajasthan, India",
    display: "Near Somani College, Jodhpur, Rajasthan",
    serviceAvailability: "Available Worldwide",
    googleMapsUrl: "https://maps.google.com/?q=Somani+College+Jodhpur+Rajasthan",
  },
  credentials: {
    experienceYears: 5,
    experienceLabel: "5 Years of Professional Experience",
    certificateLabel: "Certified Makeup & Hairstyling Professional",
    certificateDescription:
      "Backed by 5 years of dedicated professional experience and certified training in bridal makeup and hairstyling artistry.",
  },
  hero: {
    locationTag: "Jodhpur, Rajasthan · Available Worldwide",
    headline: "Beauty That Makes Every Moment Unforgettable.",
    supportingText:
      "Professional makeup and hairstyling for bridal celebrations, special occasions, and destination weddings.",
    primaryCtaText: "Book Your Look",
    secondaryCtaText: "Explore Portfolio",
    image: IMAGE_ASSETS.heroBridalMakeup,
    imageAlt:
      "Editorial luxury bridal makeup and hairstyling look in champagne and gold tones",
  },
  about: {
    headline: "Refined Bridal Artistry Rooted in Jodhpur, Available Worldwide.",
    subtitle: "Makeup Artist & Hairstylist · 5 Years of Experience",
    introduction: [
      "Jinnu Makeup Artist is a professional makeup and hairstyling studio based in Jodhpur, Rajasthan, bringing five years of dedicated experience and certified artistry to brides and occasion clients.",
      "Every appointment is approached with calm precision and individualized attention—harmonizing skin preparation, undertone matching, outfit color palettes, jewelry styling, and lighting environments so each look feels effortless and authentic.",
      "From traditional Rajasthani wedding ceremonies in Jodhpur to intimate engagements, receptions, and destination weddings worldwide, Jinnu combines modern skin-first beauty techniques with timeless hairstyling.",
    ],
    philosophyTitle: "The Artistry Philosophy",
    philosophyPoints: [
      {
        index: "01",
        title: "Skin-First Luminosity",
        description:
          "Thoughtful skin preparation and balanced complexion work that enhances natural features without feeling heavy, both in person and under high-resolution photography.",
      },
      {
        index: "02",
        title: "Occasion & Outfit Harmony",
        description:
          "Each eye, lip, and hair silhouette is tailored to complement your lehenga, saree, or couture gown, jewelry neckline, and event lighting from morning pheras to evening receptions.",
      },
      {
        index: "03",
        title: "Architectural Hairstyling",
        description:
          "From traditional floral mogra buns and veil-ready bridal updos to sculpted waves and textured braids engineered to hold gracefully through every celebration.",
      },
      {
        index: "04",
        title: "Seamless Worldwide Travel",
        description:
          "Based in Jodhpur and available for destination weddings and private celebrations across Rajasthan, India, and international venues.",
      },
    ],
    images: {
      primary: IMAGE_ASSETS.makeupApplication,
      primaryAlt:
        "Professional bridal makeup application in studio with soft brush technique",
      secondary: IMAGE_ASSETS.bridalLook01,
      secondaryAlt:
        "Traditional Rajasthani bridal makeup and matha patti styling portrait",
    },
  },
  whyChoose: [
    {
      index: "01",
      title: "Personalized Beauty Styling",
      description:
        "Looks are custom-designed around your facial structure, personal comfort level, attire palette, and ceremony timeline rather than a one-size-fits-all template.",
    },
    {
      index: "02",
      title: "Attention to Every Detail",
      description:
        "Cohesive execution across complexion finish, eye definition, lip balance, hair structure, hair accessories, and dupatta or veil placement.",
    },
    {
      index: "03",
      title: "5 Years Certified Experience",
      description:
        "Five years of hands-on makeup and hairstyling experience with certified training, ensuring calm, punctual, and organized preparation on your event day.",
    },
    {
      index: "04",
      title: "Direct WhatsApp Consultation",
      description:
        "Immediate, transparent communication via WhatsApp and Instagram (@makeupby_jinnu) to discuss dates, venue requirements, and look references.",
    },
  ],
  finalCta: {
    headline: "Your Special Day Deserves a Signature Look.",
    subtext:
      "Share your event dates, venue location, and preferred services on WhatsApp to check availability and discuss your customized beauty timeline.",
    buttonText: "Enquire on WhatsApp",
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Hairstyles", path: "/hairstyles" },
    { label: "Contact", path: "/contact" },
  ],
};
