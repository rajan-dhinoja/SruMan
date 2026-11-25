"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

interface HubBridgeProps {
  current: "engagement" | "wedding";
}

export default function HubBridge({ current }: HubBridgeProps) {
  return (
    <motion.nav
      aria-label="Portal Navigation"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-3 left-3 sm:top-5 sm:left-6 z-50 select-none pointer-events-auto max-w-[calc(100vw-24px)]"
    >
      {/* Royal Glassmorphic Floating Capsule */}
      <div className="relative group flex items-center p-1 sm:p-1.5 rounded-full bg-gradient-to-r from-[#14021c]/95 via-[#22052e]/95 to-[#14021c]/95 backdrop-blur-xl border border-amber-400/40 shadow-[0_8px_32px_rgba(10,1,15,0.6),_0_0_16px_rgba(212,175,55,0.18)] hover:border-amber-400/60 hover:shadow-[0_10px_38px_rgba(10,1,15,0.7),_0_0_24px_rgba(212,175,55,0.28)] transition-all duration-500 max-w-full overflow-x-auto no-scrollbar">
        {/* Subtle Ambient Golden Shimmer Beam */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        {/* 1. SruMan Master Hub Button */}
        <Link
          href="/"
          className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-black/40 hover:bg-black/60 text-[#fbf9fb] border border-amber-400/30 hover:border-amber-400/60 shadow-sm transition-all duration-300 group/hub hover:scale-[1.02]"
          title="Return to SruMan Master Hub"
        >
          {/* Ornate Gold Star Medallion */}
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-amber-600 via-[#fae4a8] to-amber-300 flex items-center justify-center text-[#23052d] text-[10px] sm:text-xs font-bold shadow-[0_0_10px_rgba(212,175,55,0.6)] group-hover/hub:rotate-45 transition-transform duration-500 flex-shrink-0">
            ✦
          </span>
          <span className="font-serif text-[11px] sm:text-xs md:text-sm tracking-wider font-semibold text-amber-200 group-hover/hub:text-amber-100 whitespace-nowrap">
            SruMan Hub
          </span>
        </Link>

        {/* Delicate Royal Filigree Divider */}
        <div className="flex items-center justify-center px-1 sm:px-1.5">
          <div className="w-[1px] h-4 sm:h-5 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent" />
        </div>

        {/* 2. Switch Between Portals (Wedding ↔ Engagement) */}
        {current === "engagement" ? (
          <Link
            href="/wedding"
            className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#3e0f4f]/90 via-[#56156e]/95 to-[#3e0f4f]/90 hover:from-[#4d1362] hover:via-[#691986] hover:to-[#4d1362] text-amber-200 border border-amber-400/50 hover:border-amber-300 shadow-[0_0_16px_rgba(212,175,55,0.22)] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] transition-all duration-300 group/portal hover:scale-[1.02]"
            title="Explore The Royal Wedding Portal"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse flex-shrink-0" />
            <span className="font-serif text-[11px] sm:text-xs md:text-sm tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#f7e4a9] to-amber-200 whitespace-nowrap">
              <span className="hidden sm:inline">The </span>Royal Wedding
            </span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300/80 group-hover/portal:text-amber-200 group-hover/portal:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        ) : (
          <Link
            href="/engagement"
            className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#290835]/90 via-[#400e52]/95 to-[#290835]/90 hover:from-[#360b46] hover:via-[#501267] hover:to-[#360b46] text-amber-200 border border-amber-400/45 hover:border-amber-300 shadow-[0_0_16px_rgba(212,175,55,0.2)] hover:shadow-[0_0_24px_rgba(212,175,55,0.38)] transition-all duration-300 group/portal hover:scale-[1.02]"
            title="Relive The Engagement Ceremony & Memories"
          >
            <span className="text-xs sm:text-sm animate-pulse flex-shrink-0">💍</span>
            <span className="font-serif text-[11px] sm:text-xs md:text-sm tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#f7e4a9] to-amber-200 whitespace-nowrap">
              <span className="hidden sm:inline">The </span>Engagement
            </span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300/80 group-hover/portal:text-amber-200 group-hover/portal:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
