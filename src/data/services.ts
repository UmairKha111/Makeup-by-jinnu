import { IMAGE_ASSETS } from "./siteConfig";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  suitableOccasions: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  aspectRatio: "3:4" | "4:3" | "16:9";
  whatsappSubject: string;
}

/**
 * CENTRALIZED SERVICES DATA
 *
 * Per business guidelines, no unverified prices or package figures are published here.
 * Clients enquire directly via WhatsApp for bespoke quotes based on event dates and requirements.
 */
export const servicesData: ServiceItem[] = [
  {
    id: "bridal-makeup",
    number: "01",
    title: "Bridal Makeup",
    shortDescription:
      "Timeless, luminous bridal makeup crafted to honor your wedding attire, jewelry, and personal style from ceremony to portraits.",
    fullDescription:
      "Designed for the modern and traditional bride alike, our signature bridal makeup focuses on refined skin preparation, long-wear dimensional radiance, and bespoke eye and lip artistry. Whether your vision is royal Rajasthani heritage in crimson and gold or contemporary champagne minimalism, every detail is balanced for both natural daylight and wedding photography.",
    suitableOccasions: [
      "Wedding Ceremony & Pheras",
      "Traditional Rajasthani Bridal Looks",
      "Daytime & Evening Bridal Portraits",
      "Complete Bridal Dupatta & Jewelry Setting",
    ],
    highlights: [
      "Custom skin preparation and undertone matching",
      "Photography-ready, crease-resistant complexion finish",
      "Harmonized eye and lip palette tailored to bridal couture",
    ],
    image: IMAGE_ASSETS.heroBridalMakeup,
    imageAlt: "Luxury Indian bridal makeup look in champagne gold bridal lehenga",
    aspectRatio: "3:4",
    whatsappSubject: "Bridal Makeup",
  },
  {
    id: "soft-glam-makeup",
    number: "02",
    title: "Soft Glam Makeup",
    shortDescription:
      "Effortless, skin-focused radiance with soft neutral sculpting, feathered brows, and luminous champagne highlights.",
    fullDescription:
      "Our Soft Glam Makeup celebrates fresh, breathable skin paired with subtle contour definition, softly blended neutral or rose-gold eyeshadows, and a polished satin or glossy lip. Ideal for clients who want to look like an elevated, radiant version of themselves without heavy layers.",
    suitableOccasions: [
      "Sangeet & Cocktail Evenings",
      "Roka & Intimate Ceremonies",
      "Pre-Wedding Editorial Shoots",
      "Milestone Celebrations",
    ],
    highlights: [
      "Dewy, second-skin complexion finish",
      "Softly diffused eyeshadow and natural lash enhancement",
      "Balanced monochromatic nude, rose, or peach tones",
    ],
    image: IMAGE_ASSETS.softGlamMakeup,
    imageAlt: "Close-up editorial portrait of luminous soft glam makeup",
    aspectRatio: "4:3",
    whatsappSubject: "Soft Glam Makeup",
  },
  {
    id: "engagement-makeup",
    number: "03",
    title: "Engagement Makeup",
    shortDescription:
      "Romantic, camera-ready beauty styling tailored for ring ceremonies, pastel couture, and modern engagement celebrations.",
    fullDescription:
      "Engagement celebrations call for a distinctive look that sets the tone for your wedding festivities while remaining distinct from your main bridal look. We create luminous, expressive styling that pairs effortlessly with contemporary gowns, pastel lehengas, and statement diamond or polki jewelry.",
    suitableOccasions: [
      "Ring Ceremony & Engagement",
      "Formal Family Introductions",
      "Couple Portrait Sessions",
      "Evening Soirées",
    ],
    highlights: [
      "Tailored to pastel, champagne, and jewel-toned couture",
      "Romantic eye definition with dimensional shimmer or matte tones",
      "Coordinated modern hairstyling options",
    ],
    image: IMAGE_ASSETS.engagementMakeup,
    imageAlt: "Elegant engagement makeup look with pastel rose-gold lehenga",
    aspectRatio: "4:3",
    whatsappSubject: "Engagement Makeup",
  },
  {
    id: "reception-makeup",
    number: "04",
    title: "Reception Makeup",
    shortDescription:
      "Sophisticated evening glamour with refined smoky eyes, sculpted cheekbones, and velvet or glossy statement lips.",
    fullDescription:
      "For grand evening receptions under chandelier and stage lighting, we craft high-sophistication glamour. Whether transitioning quickly from a daytime ceremony or starting fresh for an evening banquet, reception styling emphasizes polished structure, expressive eye artistry, and enduring freshness.",
    suitableOccasions: [
      "Wedding Reception Banquet",
      "Post-Wedding Formal Dinner",
      "Black-Tie & Couture Galas",
      "Evening Stage & Portrait Sessions",
    ],
    highlights: [
      "Balanced for warm indoor and stage lighting",
      "Refined smoky or gilded eye looks",
      "Seamless look transition support between wedding events",
    ],
    image: IMAGE_ASSETS.bridalLook01,
    imageAlt: "Regal evening reception and bridal portrait with intricate eye makeup",
    aspectRatio: "3:4",
    whatsappSubject: "Reception Makeup",
  },
  {
    id: "party-occasion-makeup",
    number: "05",
    title: "Party & Occasion Makeup",
    shortDescription:
      "Polished, personalized makeup for bridesmaids, family members, festive gatherings, and special celebrations.",
    fullDescription:
      "Designed for wedding guests, sisters of the bride and groom, mothers, and women attending special social occasions. We customize the intensity from understated daytime elegance to festive evening glamour so you feel confident and camera-ready.",
    suitableOccasions: [
      "Bridesmaids & Family of the Couple",
      "Mehendi, Haldi & Festive Functions",
      "Anniversaries & Formal Parties",
      "Editorial & Personal Portraits",
    ],
    highlights: [
      "Customized for all age groups and skin types",
      "Coordinated styling for bridal party groups",
      "Long-lasting comfort through multi-hour events",
    ],
    image: IMAGE_ASSETS.makeupApplication,
    imageAlt: "Professional studio makeup application for special occasions",
    aspectRatio: "4:3",
    whatsappSubject: "Party & Occasion Makeup",
  },
  {
    id: "bridal-hairstyling",
    number: "06",
    title: "Bridal Hairstyling",
    shortDescription:
      "Architectural bridal buns, fresh floral mogra adornment, sculpted Hollywood waves, and intricate braided updos.",
    fullDescription:
      "Great hairstyling frames the face and anchors the entire bridal silhouette. With five years of dedicated hairstyling and makeup artistry, Jinnu creates structured traditional buns engineered to support heavy bridal dupattas, fresh jasmine and rose florals, matha patti/maang tikka placement, as well as fluid Hollywood waves and contemporary textured braids.",
    suitableOccasions: [
      "Bridal Ceremony Updos & Floral Buns",
      "Sangeet Braids & Half-Up Styles",
      "Reception Hollywood Waves",
      "Hair Accessory & Veil Pinning",
    ],
    highlights: [
      "Secure structural pinning for matha patti, passa, and veils",
      "Fresh floral (mogra, roses, baby's breath) and gold hair accessory integration",
      "Frizz-controlled, humidity-resistant finish",
    ],
    image: IMAGE_ASSETS.bridalHairstyle01,
    imageAlt: "Intricate Indian bridal hairstyle bun adorned with jasmine mogra and antique gold pins",
    aspectRatio: "3:4",
    whatsappSubject: "Bridal Hairstyling",
  },
  {
    id: "destination-wedding-makeup",
    number: "07",
    title: "Destination Wedding Makeup",
    shortDescription:
      "On-location bridal makeup and hairstyling across Rajasthan's heritage palaces, India, and worldwide wedding destinations.",
    fullDescription:
      "Based in Jodhpur—home to some of India's most iconic heritage wedding venues—and available worldwide, Jinnu provides dedicated on-location beauty styling for multi-day destination weddings. Enjoy a cohesive lookbook planned across your Mehendi, Sangeet, Haldi, Wedding Ceremony, and Reception right in your bridal suite.",
    suitableOccasions: [
      "Palace & Fort Weddings in Jodhpur & Rajasthan",
      "Multi-Day Destination Celebrations Across India",
      "International Destination Weddings Worldwide",
      "Private Bridal Suite On-Location Styling",
    ],
    highlights: [
      "Available worldwide for travel directly to your venue",
      "Multi-event lookbook planning for cohesive bridal transitions",
      "Climate-adapted formulas for desert sun, palace courtyards, or coastal venues",
    ],
    image: IMAGE_ASSETS.destinationWeddingBride,
    imageAlt: "Destination wedding bride in a heritage sandstone palace courtyard in Jodhpur",
    aspectRatio: "16:9",
    whatsappSubject: "Destination Wedding Makeup & Hairstyling",
  },
];
