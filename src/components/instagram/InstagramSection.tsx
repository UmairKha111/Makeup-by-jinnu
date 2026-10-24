import React, { useRef } from "react";
import {
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Film,
} from "lucide-react";
import { siteConfig, IMAGE_ASSETS } from "../../data/siteConfig";
import { instagramReelsData } from "../../data/instagramGallery";

export const InstagramSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="instagram"
      aria-label="Latest Instagram Reels and Transformations"
      className="py-12 sm:py-16 md:py-20 bg-[#FAF6F0] border-b border-[#29211E]/10 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header: Luxury editorial presentation (Pause and arrow buttons removed as requested) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-7 border-b border-[#29211E]/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B89A62]" />
              <span>Follow Us On Instagram · {siteConfig.instagramHandle}</span>
            </div>
            <h2 className="mt-2 font-serif-editorial text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#29211E] text-balance leading-tight">
              Latest Reels &amp; Real-Time Transformations
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-[#29211E]/75 leading-relaxed">
              Explore our verified bridal reveals, live ceremony moments, and hair styling reels. Tap any reel below to watch directly on Instagram.
            </p>
          </div>

          <div className="shrink-0 pt-1 sm:pt-0">
            {/* Primary Instagram Follow CTA */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-medium uppercase tracking-widest bg-[#29211E] text-[#FAF6F0] hover:bg-[#B89A62] hover:text-[#29211E] transition-colors whitespace-nowrap shadow-sm"
              title="Open @makeupby_jinnu on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8BE9A]" />
              <span>Follow {siteConfig.instagramHandle}</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>

        {/* 
          CONTINUOUS MOVING REELS STRIP
          - When someone clicks on ANY image or reel, they go directly to Instagram
          - Smooth seamless marquee animation with hover-pause
          - Native touch scrollable on mobile
        */}
        <div className="mt-6 sm:mt-8">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex items-stretch gap-3.5 sm:gap-5 transition-transform duration-300 w-max animate-marquee-infinite">
              {/* Duplicate list twice to create seamless loop */}
              {[...instagramReelsData, ...instagramReelsData].map((reel, index) => (
                <a
                  key={`${reel.id}-${index}`}
                  href={reel.postUrl || siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[250px] xs:w-[275px] sm:w-[315px] md:w-[330px] bg-white border border-[#29211E]/12 flex flex-col justify-between shadow-sm group hover:border-[#B89A62] hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer text-left block focus-visible:outline-2 focus-visible:outline-[#B89A62]"
                  title={`Click to watch this ${reel.tag} reel on Instagram @makeupby_jinnu`}
                >
                  {/* Top Bar: Profile avatar, username, verified badge, and reel icon */}
                  <div className="p-3 sm:p-3.5 flex items-center justify-between border-b border-[#29211E]/8 bg-[#FAF6F0]/40">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shrink-0">
                        <img
                          src={IMAGE_ASSETS.artistPortrait || IMAGE_ASSETS.heroBridalMakeup}
                          alt="Jinnu"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes("/images/")) {
                              target.src = "/images/Sunlit-Rooftop-Terrace-Portrait.png.png";
                            }
                          }}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#29211E] truncate flex items-center gap-1 group-hover:text-[#B89A62] transition-colors">
                          <span className="truncate">{siteConfig.instagramHandle}</span>
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3897F0] shrink-0 fill-[#3897F0]/15" />
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-[#29211E]/55 truncate">
                          {siteConfig.location.city}, Rajasthan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                      <span className="p-1 bg-[#FAF6F0] rounded text-[#B89A62] flex items-center gap-1 text-[9px] sm:text-[10px] font-medium" title="Instagram Reel">
                        <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="hidden sm:inline">Reel</span>
                      </span>
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#29211E]/40 group-hover:text-[#B89A62] transition-colors" />
                    </div>
                  </div>

                  {/* Visual Reel Thumbnail with 9:16 vertical ratio and Instagram overlay */}
                  <div className="relative aspect-[4/5] sm:aspect-[4/5] bg-[#29211E] overflow-hidden">
                    <img
                      src={reel.image}
                      alt={reel.imageAlt}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes("/images/")) {
                          target.src = "/images/hero_bridal_makeup_1791960670674.jpg";
                        }
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                    {/* Occasion / Service Tag Pill */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black/60 backdrop-blur-md rounded-full text-[9px] sm:text-[10px] font-medium text-white border border-white/15">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D8BE9A]" />
                      <span>{reel.tag}</span>
                    </div>

                    {/* Duration / Audio Indicator */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 px-1.5 sm:px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] sm:text-[10px] text-white/90 font-mono flex items-center gap-1">
                      <Film className="w-2.5 h-2.5 text-[#D8BE9A]" />
                      <span>Reel</span>
                    </div>

                    {/* Bottom In-Image Caption & Direct Link Prompt */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 text-white">
                      <p className="text-xs sm:text-sm font-medium line-clamp-2 leading-snug drop-shadow-sm group-hover:text-[#D8BE9A] transition-colors">
                        {reel.caption}
                      </p>
                      <p className="mt-1 text-[9px] sm:text-[10px] text-white/70 flex items-center gap-1">
                        <Instagram className="w-3 h-3 text-[#D8BE9A]" />
                        <span>Tap to watch reel on Instagram</span>
                      </p>
                    </div>

                    {/* Hover Center Play Reel Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Engagement & Footer Info */}
                  <div className="p-3 sm:p-3.5 bg-white border-t border-[#29211E]/8">
                    <div className="flex items-center justify-between text-[#29211E]">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs">
                        <span className="flex items-center gap-1 text-[#29211E]/80 group-hover:text-[#DD2A7B] transition-colors">
                          <Heart className="w-3.5 h-3.5 fill-rose-500/10 text-rose-500" />
                          <span className="font-medium text-[11px] sm:text-xs">{reel.likes}</span>
                        </span>
                        <span className="flex items-center gap-1 text-[#29211E]/80">
                          <MessageCircle className="w-3.5 h-3.5 text-[#29211E]/60" />
                          <span className="font-medium text-[11px] sm:text-xs">{reel.comments}</span>
                        </span>
                        <Share2 className="w-3.5 h-3.5 text-[#29211E]/50 hidden xs:inline" />
                      </div>
                      <Bookmark className="w-3.5 h-3.5 text-[#29211E]/50 group-hover:text-[#B89A62] transition-colors" />
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#29211E]/6 flex items-center justify-between text-[10px] text-[#29211E]/60">
                      <span className="truncate">Bridal Suite, Jodhpur</span>
                      <span className="font-medium text-[#B89A62] group-hover:underline flex items-center gap-0.5 shrink-0">
                        Watch Reel ↗
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Bottom Touch Hint on Mobile */}
        <div className="mt-3 flex items-center justify-center sm:hidden text-[10px] text-[#29211E]/50 gap-1.5">
          <Instagram className="w-3 h-3 text-[#B89A62]" />
          <span>Swipe horizontally or tap any reel to watch on Instagram</span>
        </div>
      </div>
    </section>
  );
};
