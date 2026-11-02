import { IMAGE_ASSETS } from "./siteConfig";

export type PortfolioCategory =
  | "All"
  | "Bridal"
  | "Soft Glam"
  | "Engagement"
  | "Reception"
  | "Party Makeup"
  | "Hairstyling";

export type HairstyleCategory =
  | "All Hairstyles"
  | "Bridal Buns & Mogra"
  | "Hollywood Waves"
  | "Braids & Half-Up"
  | "Traditional & Veil Styling";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  hairstyleCategory?: Exclude<HairstyleCategory, "All Hairstyles">;
  occasion: string;
  styleNotes: string;
  image: string;
  imageAlt: string;
  aspectRatio: "3:4" | "4:3" | "16:9";
  featuredOnHome: boolean;
  isHairstyleShowcase: boolean;
}

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Bridal",
  "Soft Glam",
  "Engagement",
  "Reception",
  "Party Makeup",
  "Hairstyling",
];

export const hairstyleCategories: HairstyleCategory[] = [
  "All Hairstyles",
  "Bridal Buns & Mogra",
  "Hollywood Waves",
  "Braids & Half-Up",
  "Traditional & Veil Styling",
];

export const portfolioData: PortfolioItem[] = [
{
  id: "look-lavender-glam-bridal",
  title: "Lavender Pearl Glamour Look",
  category: "Reception",
  hairstyleCategory: "Modern Bridal Updo & Curls",
  occasion: "Engagement & Reception",
  styleNotes:
    "Soft luminous complexion, pink-toned glam makeup, defined eyes, glossy rose lips, and voluminous half-up high ponytail with delicate pearl hair accents. Styled with a lavender embellished outfit and statement diamond jewelry.",
  image: IMAGE_ASSETS.artistPortrait5,
  imageAlt:
    "Lavender bridal makeup look with pearl-accented high ponytail, diamond jewelry, and soft pink glam makeup",
  aspectRatio: "3:4",
  featuredOnHome: true,
  isHairstyleShowcase: true,
},

{
  id: "look-champagne-ivory-couture",
  title: "Champagne & Ivory Couture Bridal",
  category: "Bridal",
  hairstyleCategory: "Traditional & Veil Styling",
  occasion: "Royal Wedding Ceremony",
  styleNotes:
    "Luminous warm complexion, soft bronze-gilded eyelids, dramatic winged eyeliner, muted rose lip tint, and traditional bridal styling with an ivory dupatta, intricate Kundan and pearl head jewelry, and elegant gold embroidery.",
  image: IMAGE_ASSETS.artistPortrait4,
  imageAlt:
    "Indian bride in champagne ivory embroidered bridal outfit with Kundan jewelry, pearl headpiece, and elegant bridal makeup",
  aspectRatio: "3:4",
  featuredOnHome: true,
  isHairstyleShowcase: true,
},
{
  id: "look-peach-floral-glam",
  title: "Peach Floral Glamour Look",
  category: "Soft Glam",
  hairstyleCategory: "Braided Updo & Floral Styling",
  occasion: "Engagement & Wedding Celebration",
  styleNotes:
    "Fresh luminous complexion, soft peach blush, shimmering rose-gold eyeshadow, defined lashes, and nude pink lips. Finished with an elegant braided updo, delicate floral hair accessories, antique gold statement jewelry, and a richly embroidered peach outfit.",
  image: IMAGE_ASSETS.artistPortrait2,
  imageAlt:
    "Indian bridal peach makeup look with floral braided hairstyle, antique gold jewelry, and embroidered peach outfit",
  aspectRatio: "3:4",
  featuredOnHome: true,
  isHairstyleShowcase: true,
},
  {
    id: "look-champagne-bridal",
    title: "Champagne & Ivory Couture Bridal",
    category: "Hairstyling",
    hairstyleCategory: "Traditional & Veil Styling",
    occasion: "Royal Wedding Ceremony",
    styleNotes:
      "Luminous warm complexion, soft bronze-gilded eyelids, muted rose lip tint, and structured bridal updo with traditional head jewelry and floral accents.",
    image: IMAGE_ASSETS.artistPortrait3,
    imageAlt:
      "Indian bridal look in champagne gold lehenga with Kundan jewelry and luminous makeup",
    aspectRatio: "3:4",
    featuredOnHome: true,
    isHairstyleShowcase: true,
  },
  {
    id: "look-rajasthani-royal-bridal",
    title: "Regal Marwar Heritage Bride",
    category: "Bridal",
    hairstyleCategory: "Traditional & Veil Styling",
    occasion: "Traditional Jodhpur Ceremony",
    styleNotes:
      "Classic kohl-rimmed bridal eyes, radiant golden-hour skin finish, and precision matha patti framing beneath an embroidered crimson-and-gold veil.",
    image: IMAGE_ASSETS.bridalLook01,
    imageAlt:
      "Traditional Rajasthani bridal close-up with gold matha patti and sheer crimson veil",
    aspectRatio: "3:4",
    featuredOnHome: true,
    isHairstyleShowcase: true,
  },
  {
    id: "look-luminous-soft-glam",
    title: "Dewy Champagne Soft Glam",
    category: "Soft Glam",
    occasion: "Cocktail & Sangeet Soirée",
    styleNotes:
      "Second-skin satin finish, champagne shimmer wash across the lids, feathered natural brows, and a glossy rosewood lip.",
    image: IMAGE_ASSETS.softGlamMakeup,
    imageAlt:
      "Close-up beauty portrait featuring dewy soft glam makeup and champagne eye shimmer",
    aspectRatio: "4:3",
    featuredOnHome: true,
    isHairstyleShowcase: false,
  },
  {
    id: "look-jasmine-mogra-chignon",
    title: "Artisanal Mogra & Antique Gold Bun",
    category: "Hairstyling",
    hairstyleCategory: "Bridal Buns & Mogra",
    occasion: "Bridal Ceremony & Pheras",
    styleNotes:
      "Intricate braided low chignon encircled with fresh ivory jasmine mogra buds and heritage gold-and-pearl hair ornaments.",
    image: IMAGE_ASSETS.bridalHairstyle01,
    imageAlt:
      "Back profile of intricate Indian bridal hair bun with jasmine flowers and antique gold pins",
    aspectRatio: "3:4",
    featuredOnHome: true,
    isHairstyleShowcase: true,
  },
  {
    id: "look-candlelit-engagement",
    title: "Rose-Gold Palace Engagement",
    category: "Engagement",
    hairstyleCategory: "Braids & Half-Up",
    occasion: "Ring Ceremony & Engagement Dinner",
    styleNotes:
      "Soft rose-gold smoky eyes, lit-from-within cheekbone highlight, and romantic face-framing waves accented with delicate baby's breath.",
    image: IMAGE_ASSETS.engagementMakeup,
    imageAlt:
      "Bride in pastel rose-gold couture at a candlelit engagement celebration",
    aspectRatio: "4:3",
    featuredOnHome: true,
    isHairstyleShowcase: true,
  },
  {
    id: "look-hollywood-waves-crown",
    title: "Sculpted Waves & Pearl Crown Braid",
    category: "Hairstyling",
    hairstyleCategory: "Hollywood Waves",
    occasion: "Reception & Sangeet",
    styleNotes:
      "Glossy, structured S-waves paired with a dimensional halo braid woven with pearl clusters and botanical gold leaves.",
    image: IMAGE_ASSETS.hairstyleHollywoodWaves,
    imageAlt:
      "Bridal hairstyle featuring glossy waves and a twisted crown braid with pearl pins",
    aspectRatio: "4:3",
    featuredOnHome: true,
    isHairstyleShowcase: true,
  },
  {
    id: "look-destination-palace-reception",
    title: "Sandstone Courtyard Reception Look",
    category: "Reception",
    hairstyleCategory: "Traditional & Veil Styling",
    occasion: "Destination Palace Wedding in Jodhpur",
    styleNotes:
      "Golden-hour warm contour, defined eyes engineered for sunset-to-evening transitions, and secure veil pinning for open courtyard breezes.",
    image: IMAGE_ASSETS.destinationWeddingBride,
    imageAlt:
      "Wide editorial portrait of a bride in a heritage sandstone courtyard in Jodhpur",
    aspectRatio: "16:9",
    featuredOnHome: false,
    isHairstyleShowcase: true,
  },
  {
    id: "look-studio-occasion-prep",
    title: "Bridal Suite Luminosity & Prep",
    category: "Party Makeup",
    hairstyleCategory: "Braids & Half-Up",
    occasion: "Bridal Suite & Occasion Styling",
    styleNotes:
      "Layered cream and powder illumination with soft lace hair adornment for pre-wedding mornings and intimate gatherings.",
    image: IMAGE_ASSETS.artistPortrait11,
    imageAlt:
      "Makeup artist applying highlighter with brush during bridal preparation session",
    aspectRatio: "4:3",
    featuredOnHome: false,
    isHairstyleShowcase: true,
  },
  {
    id: "look-studio-occasion-prep",
    title: "Bridal Suite Luminosity & Prep",
    category: "Party Makeup",
    hairstyleCategory: "Braids & Half-Up",
    occasion: "Bridal Suite & Occasion Styling",
    styleNotes:
      "Layered cream and powder illumination with soft lace hair adornment for pre-wedding mornings and intimate gatherings.",
    image: IMAGE_ASSETS.artistPortrait1,
    imageAlt:
      "Makeup artist applying highlighter with brush during bridal preparation session",
    aspectRatio: "4:3",
    featuredOnHome: false,
    isHairstyleShowcase: true,
  },
];

