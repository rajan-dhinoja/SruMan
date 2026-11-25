"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export interface PreloaderProps {
  /** Text shown below the monogram */
  text?: string;
  /** Translation key for the loading text (takes precedence over text) */
  textKey?: string;
  /** Optional secondary subtitle or mantra */
  subtitle?: string;
  /** Translation key for the subtitle (takes precedence over subtitle) */
  subtitleKey?: string;
  /** Whether the preloader covers the viewport (fixed) or fills container (absolute) */
  fullScreen?: boolean;
  /** Callback fired when minimum display duration finishes */
  onComplete?: () => void;
  /** Minimum display duration in milliseconds (default 800ms) */
  minDuration?: number;
  /** Custom z-index (defaults to 60) */
  zIndex?: number;
}

export default function Preloader({
  text,
  textKey,
  subtitle,
  subtitleKey,
  fullScreen = true,
  onComplete,
  minDuration = 800,
  zIndex = 60,
}: PreloaderProps) {
  const { t } = useLanguage();
  const [canComplete, setCanComplete] = useState(false);

  const resolvedText = textKey ? t(textKey) : text || t("preloader.defaultText");
  const resolvedSubtitle = subtitleKey
    ? t(subtitleKey)
    : subtitle !== undefined
    ? subtitle
    : t("preloader.defaultSubtitle");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanComplete(true);
      if (onComplete) {
        onComplete();
      }
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ zIndex }}
      className={`${
        fullScreen ? "fixed inset-0" : "absolute inset-0"
      } flex flex-col items-center justify-center bg-[#12021c] select-none overflow-hidden`}
    >
      {/* Soft Ambient Radial Lights (Gold & Royal Purple) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,rgba(94,31,112,0.18)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Decorative Ornate Corner Highlights */}
      <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-amber-400/30 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-amber-400/30 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-7 h-7 border-b border-l border-amber-400/30 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-amber-400/30 rounded-br-lg pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm w-full px-6 text-center z-10">
        {/* Central Royal Medallion with Celestial Rotating Rings */}
        <motion.div
          animate={{ opacity: [0.8, 1, 0.8], scale: [0.97, 1.03, 0.97] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center"
        >
          {/* Ambient Monogram Backlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/25 via-purple-600/30 to-amber-300/20 rounded-full filter blur-xl opacity-75 animate-pulse pointer-events-none" />

          {/* Outer Rotating Celestial Ring with 8 Gold Nodes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#d4af37]" strokeWidth="1">
              {[...Array(8)].map((_, i) => (
                <circle key={i} cx="50" cy="8" r="2.2" fill="#d4af37" transform={`rotate(${i * 45} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="42" strokeDasharray="4,8" opacity="0.6" />
            </svg>
          </motion.div>

          {/* Counter-rotating Inner Orbit Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dotted border-amber-300/40"
          />

          {/* Central White Medallion with SruMan Logo */}
          <div className="absolute inset-3 rounded-full border-2 border-amber-400/60 flex items-center justify-center bg-white p-2 shadow-[0_0_25px_rgba(212,175,55,0.45)] overflow-hidden">
            <img
              src="/logos/sruman-logo.png"
              alt="SruMan Logo"
              className="w-full h-full object-contain scale-110 drop-shadow-sm"
            />
          </div>
        </motion.div>

        {/* SruMan Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#f7e4a9] to-amber-200 uppercase mb-2 drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
        >
          SruMan
        </motion.h1>

        {/* Shimmering Gold Light Divider */}
        <div className="w-36 sm:w-44 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent relative overflow-hidden mb-3.5">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-full bg-gradient-to-r from-transparent via-amber-200 to-transparent"
          />
        </div>

        {/* Animated Loading Text */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="font-serif text-xs sm:text-sm tracking-[0.28em] uppercase text-amber-300/90 text-center font-medium"
        >
          {resolvedText}
        </motion.div>

        {/* Optional Subtitle / Mantra */}
        {resolvedSubtitle && (
          <div className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] text-amber-200/60 uppercase mt-1.5 font-light">
            {resolvedSubtitle}
          </div>
        )}
      </div>
    </motion.div>
  );
}
