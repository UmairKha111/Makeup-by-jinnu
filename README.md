# Jinnu Makeup Artist — Luxury Bridal Makeup & Hairstyling Website

Official website for **Jinnu Makeup Artist** (`@makeupby_jinnu`), a certified professional makeup artist and hairstylist based in **Jodhpur, Rajasthan, India** with **5 years of experience** and **worldwide availability**.

---

## 1. Key Features

- **Editorial Luxury Brand Design**: Crafted with a Warm Ivory (`#FAF6F0`), Champagne Beige (`#D8BE9A`), Deep Espresso (`#29211E`), Soft Nude (`#E8D8CB`), Antique Gold (`#B89A62`), and Muted Rose (`#B88783`) palette paired with `Cormorant Garamond` and `Plus Jakarta Sans`.
- **Complete Multi-Page Architecture**:
  - `/` — **Home**: Editorial hero, verified credentials strip, artist introduction, featured services, filterable featured portfolio with full-screen lightbox, studio standards, and final WhatsApp booking section.
  - `/about` — **About**: Artist profile, philosophy, verified 5 years of certified experience, and studio visual showcase.
  - `/services` — **Services**: Comprehensive breakdown of Bridal Makeup, Soft Glam Makeup, Engagement Makeup, Reception Makeup, Party & Occasion Makeup, Bridal Hairstyling, and Destination Wedding Makeup.
  - `/portfolio` — **Portfolio**: Filterable editorial lookbook (`Bridal`, `Soft Glam`, `Engagement`, `Reception`, `Party Makeup`, `Hairstyling`) with keyboard-accessible full-screen lightbox (`ArrowLeft`, `ArrowRight`, `Escape`).
  - `/hairstyles` — **Hairstyle Gallery**: Dedicated gallery for bridal floral buns, mogra chignons, Hollywood waves, braids, and traditional veil styling.
  - `/contact` — **Contact & Booking**: Validated event enquiry builder that formats client details (Name, Contact, Service, Date, Location, Notes) into a pre-filled WhatsApp conversation (`https://wa.me/918890799231`).
  - `/client-gallery` — **Private Client Gallery & Proofing Portal**: Suite code login for private bridal photo delivery, lookbook proofing, favorite selection, and direct WhatsApp feedback submission.
- **Local & Global SEO**: Semantic HTML, dynamic route-level `<title>`, `<meta name="description">`, Open Graph, Twitter Cards, canonical URLs, `public/sitemap.xml`, `public/robots.txt`, and verified Schema.org `BeautySalon` structured data.

---

## 2. Getting Started

### Installation

```bash
bun install
# or
npm install
```

### Run Development Server

```bash
npm run dev
```

The development server starts on `http://localhost:3000`.

### Type-Check & Production Build

```bash
npm run lint
npm run build
```

---

## 3. Centralized Configuration (`src/data/siteConfig.ts`)

All business details—including brand name, Instagram handle (`@makeupby_jinnu`), WhatsApp phone number (`918890799231`), calling phone number (`9119188433`), email (`jj0412119@gmail.com`), stated experience (`5 years`), exact studio address (`Near Somani College, Jodhpur, Rajasthan, India`), and service availability (`Worldwide`)—are managed in a single file:

- `src/data/siteConfig.ts`
- `src/data/services.ts`
- `src/data/portfolio.ts`
- `src/data/testimonials.ts`
- `src/utils/whatsapp.ts`

---

## 4. How to Replace Temporary AI-Generated Images with Real Portfolio Photographs

During initial development, temporary editorial images are stored locally inside `src/assets/images/` and referenced exclusively through the `IMAGE_ASSETS` object in `src/data/siteConfig.ts` and the portfolio items in `src/data/portfolio.ts`. No image URLs are scattered across JSX components.

### Step-by-Step Image Replacement Guide

1. **Place your real photographs** (`.jpg`, `.webp`, or `.png`) in `src/assets/images/` or `public/images/`.
2. **Open `src/data/siteConfig.ts`** and locate the `IMAGE_ASSETS` map at the top of the file:

```ts
export const IMAGE_ASSETS = {
  heroBridalMakeup: "/src/assets/images/hero_bridal_makeup_1791960670674.jpg",
  bridalLook01: "/src/assets/images/bridal_look_royal_1791960672167.jpg",
  softGlamMakeup: "/src/assets/images/soft_glam_makeup_1791960671260.jpg",
  engagementMakeup: "/src/assets/images/engagement_makeup_look_1791960672445.jpg",
  bridalHairstyle01: "/src/assets/images/bridal_hairstyle_updo_1791960673559.jpg",
  hairstyleHollywoodWaves: "/src/assets/images/hairstyle_hollywood_waves_1791960672768.jpg",
  makeupApplication: "/src/assets/images/makeup_application_studio_1791960673484.jpg",
  destinationWeddingBride: "/src/assets/images/destination_wedding_bride_1791960674452.jpg",
} as const;
```

3. **Update the paths** in `IMAGE_ASSETS` to point to Jinnu's authentic bridal and hairstyling photographs. Every hero banner, service card, and about image across the website will update automatically.
4. **Add or edit individual portfolio items** in `src/data/portfolio.ts` (`portfolioData` and `clientGalleryAlbums`) to expand the gallery with additional client looks.
