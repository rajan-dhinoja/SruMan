"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Sparkles, Heart } from "lucide-react";

interface HubBridgeProps {
  current: "engagement" | "wedding";
}

export default function HubBridge({ current }: HubBridgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-4 left-4 sm:left-6 z-50 flex items-center gap-2 select-none"
    >
      {/* SruMan Hub Button */}
      <Link
        href="/"
        className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-stone-950/85 hover:bg-stone-900 text-[#fbf9fb] border border-amber-400/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:border-amber-400"
        title="Return to SruMan Master Hub"
      >
        <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center text-stone-950 text-xs shadow-inner font-bold">
          ✦
        </span>
        <span className="font-serif text-xs sm:text-sm tracking-wider text-amber-200 group-hover:text-amber-100 font-medium">
          SruMan Hub
        </span>
      </Link>

      {/* Switch between Portals */}
      {current === "engagement" ? (
        <Link
          href="/wedding"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#2d142c]/90 via-[#44133e]/90 to-[#2d142c]/90 text-amber-200 border border-amber-400/50 backdrop-blur-md shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.45)] transition-all duration-300 hover:scale-105"
          title="Visit The Royal Wedding Portal"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="font-serif text-xs sm:text-sm tracking-wider font-semibold text-amber-100">
            The Royal Wedding →
          </span>
        </Link>
      ) : (
        <Link
          href="/engagement"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#1a0525]/90 via-[#2d142c]/90 to-[#1a0525]/90 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:border-amber-400"
          title="Relive The Engagement Memories"
        >
          <Heart className="w-3.5 h-3.5 text-rose-300" />
          <span className="font-serif text-xs sm:text-sm tracking-wider text-amber-200 group-hover:text-amber-100">
            💍 Engagement
          </span>
        </Link>
      )}
    </motion.div>
  );
}
