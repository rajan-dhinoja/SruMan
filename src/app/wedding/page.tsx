"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";
import HubBridge from "@/components/HubBridge";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Preloader from "@/components/Preloader";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

export default function WeddingPage() {
  const { language } = useLanguage();
  const [pageLoading, setPageLoading] = useState(true);

  // Dynamic portal title
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (language === "gu") {
        document.title = "SruMan | કમિંગ સૂન • ધ રોયલ વેડિંગ";
      } else if (language === "hi") {
        document.title = "SruMan | कमिंग सून • द रॉयल वेडिंग";
      } else {
        document.title = "SruMan | Coming Soon • The Royal Wedding";
      }
    }
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Flower Shower on clicking logo
  const triggerCelebration = () => {
    try {
      const flower1 = (confetti as any).shapeFromText({ text: "🌸" });
      const flower2 = (confetti as any).shapeFromText({ text: "🌹" });
      const flower3 = (confetti as any).shapeFromText({ text: "🌼" });
      const star = (confetti as any).shapeFromText({ text: "✨" });

      confetti({
        particleCount: 55,
        spread: 90,
        origin: { y: 0.45, x: 0.5 },
        shapes: [flower1, flower2, flower3, star],
        scalar: 2.2,
        zIndex: 999,
        gravity: 0.7,
      });
    } catch {
      confetti({
        particleCount: 60,
        spread: 90,
        origin: { y: 0.45, x: 0.5 },
        colors: ["#d4af37", "#f7e4a9", "#ff9999", "#8e35a7"],
        zIndex: 999,
      });
    }
  };

  const comingSoonText =
    language === "gu"
      ? "કમિંગ સૂન"
      : language === "hi"
      ? "कमिंग सून"
      : "COMING SOON";

  return (
    <>
      <AnimatePresence>
        {pageLoading && (
          <Preloader
            key="wedding-preloader"
            text="The Royal Wedding..."
            subtitle="Coming Soon"
            onComplete={() => setPageLoading(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0e0214] via-[#1a0425] to-[#0a010f] text-[#fbf9fb] overflow-hidden select-none px-4">
        {/* Floating Canvas Particles */}
        <SparklesCanvas density={45} />

        {/* Global Navigation Hub Bridge & Language Switcher */}
        <HubBridge current="wedding" />
        <LanguageSwitcher />

        {/* Ambient Royal Backlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/15 via-purple-600/18 to-transparent rounded-full filter blur-[140px] pointer-events-none" />

        {/* Main Center Content: Logo with White BG & Coming Soon Container */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Logo with White Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerCelebration}
            className="relative cursor-pointer group"
            title="Click for celebration!"
          >
            {/* Outer Ambient Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-400/25 via-purple-600/30 to-amber-400/25 blur-2xl group-hover:scale-115 transition-transform duration-700 pointer-events-none" />

            {/* Rotating Decorative Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-amber-400/40 pointer-events-none"
            />

            {/* White Background Logo Container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-white p-4 sm:p-5 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.35),_0_15px_45px_rgba(0,0,0,0.6)] border-4 border-amber-400/60 group-hover:border-amber-300 transition-all duration-300">
              <img
                src="/logos/sruman-logo.png"
                alt="SruMan Logo"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
          </motion.div>

          {/* Coming Soon Container Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <div className="relative px-8 py-3.5 sm:px-12 sm:py-4 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-amber-500/15 border border-amber-400/50 backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,0.3)] flex items-center gap-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse flex-shrink-0" />
              <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.25em] sm:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#fae4a8] to-amber-300 uppercase drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
                {comingSoonText}
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse flex-shrink-0" />
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}
