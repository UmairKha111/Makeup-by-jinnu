import { IMAGE_ASSETS } from "./siteConfig";

export interface InstagramReelItem {
  id: string;
  image: string;
  imageAlt: string;
  caption: string;
  tag: string;
  likes: string;
  comments: string;
  postUrl: string;
  type: "reel" | "post";
}

/**
 * INSTAGRAM REELS & POSTS DATA
 *
 * Click destination for each item points directly to the verified
 * Instagram profile or specific reel URL.
 * Update image paths or captions here to refresh the gallery.
 */
export const instagramReelsData: InstagramReelItem[] = [
  {
    id: "reel-1",
    image: IMAGE_ASSETS.heroBridalMakeup,
    imageAlt: "Royal Rajasthani bridal glam reel by Jinnu Makeup Artist",
    caption:
      "Royal Rajasthani bridal glam in champagne gold & Kundan jewelry. Flawless skin-first luminosity crafted for the pheras. ✨ #JodhpurBride #BridalMakeup",
    tag: "Royal Bridal",
    likes: "2,480",
    comments: "142",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
  {
    id: "reel-2",
    image: IMAGE_ASSETS.bridalLook01,
    imageAlt: "Traditional red & gold heritage veil bridal styling",
    caption:
      "Traditional red & gold veil styling with precision matha patti placement. Heritage beauty that transcends time. 👑 #RajasthaniBride #HeritageMakeup",
    tag: "Heritage Veil",
    likes: "1,940",
    comments: "89",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "post",
  },
  {
    id: "reel-3",
    image: IMAGE_ASSETS.softGlamMakeup,
    imageAlt: "Dewy champagne wash soft glam for cocktail sangeet",
    caption:
      "Dewy champagne wash on eyelids, feathery brows & soft nude-rose lips for Sangeet night. Effortless modern glam. 💫 #SoftGlam #CocktailLook",
    tag: "Dewy Glam",
    likes: "3,120",
    comments: "176",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
  {
    id: "reel-4",
    image: IMAGE_ASSETS.bridalHairstyle01,
    imageAlt: "Intricate bridal bun with fragrant mogra jasmine flowers",
    caption:
      "Intricate bridal updo wrapped in fresh fragrant mogra (jasmine) buds & antique gold pins. Engineered to stay in place all night. 🌸 #BridalHairstyle",
    tag: "Mogra Chignon",
    likes: "2,210",
    comments: "94",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
  {
    id: "reel-5",
    image: IMAGE_ASSETS.destinationWeddingBride,
    imageAlt: "Destination wedding bride in Jodhpur heritage palace courtyard",
    caption:
      "Destination wedding magic in a heritage sandstone courtyard in Jodhpur. Available worldwide for royal destination brides. 🏰 #DestinationWedding",
    tag: "Palace Wedding",
    likes: "4,350",
    comments: "215",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
  {
    id: "reel-6",
    image: IMAGE_ASSETS.hairstyleHollywoodWaves,
    imageAlt: "Sculpted Hollywood waves and pearl crown twist",
    caption:
      "Sculpted Hollywood waves accented with delicate pearls & crown twist for reception glam. Hollywood meets royalty. 💎 #HollywoodWaves",
    tag: "Sculpted Waves",
    likes: "1,880",
    comments: "73",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
  {
    id: "reel-7",
    image: IMAGE_ASSETS.engagementMakeup,
    imageAlt: "Candlelit rose-gold engagement soft smoky eye",
    caption:
      "Candlelit rose-gold engagement look. Soft smoky eye with luminous lit-from-within glow. 💕 #EngagementMakeup #PastelBride",
    tag: "Pastel Glam",
    likes: "2,630",
    comments: "118",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
  {
    id: "reel-8",
    image: IMAGE_ASSETS.makeupApplication,
    imageAlt: "Behind the scenes bridal suite skin preparation",
    caption:
      "Behind the scenes in the bridal suite! Skin preparation, hydration layers, and delicate brushwork before the grand entrance. 💄 #BTS #BridalPrep",
    tag: "BTS Studio",
    likes: "3,890",
    comments: "164",
    postUrl: "https://www.instagram.com/makeupby_jinnu/",
    type: "reel",
  },
];
