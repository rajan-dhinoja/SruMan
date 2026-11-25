"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Crown,
  Music,
  Flame,
  Sun,
  CalendarHeart,
} from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";
import HubBridge from "@/components/HubBridge";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  en: {
    title: "SruMan | Coming Soon • The Royal Wedding",
    preloaderSubtitle: "Coming Soon",
    eyebrow: "The Royal Wedding",
    couple: "Srushti & Aman",
    tagline: "Two souls, two families, bound by sacred vows & eternal love.",
    comingSoon: "Coming Soon",
    cardSubtitle:
      "Our grand wedding celebration portal is being crafted with royal elegance.",
    chaptersLabel: "Festivities in Preparation",
    chapters: [
      { label: "Mandap Muhurat", icon: Sun },
      { label: "Haldi & Mehendi", icon: Sparkles },
      { label: "Sangeet Night", icon: Music },
      { label: "Baarat & Pheras", icon: Flame },
      { label: "Royal Reception", icon: Crown },
    ],
    blessingBtn: "Shower Floral Blessings",
    blessingSent: "Blessings Showered",
    tapHint: "Tap the royal crest or button to shower floral blessings",
  },
  gu: {
    title: "SruMan | કમિંગ સૂન • ધ રોયલ વેડિંગ",
    preloaderSubtitle: "કમિંગ સૂન",
    eyebrow: "ધ રોયલ વેડિંગ",
    couple: "સૃષ્ટિ & અમન",
    tagline: "બે આત્માઓ, બે પરિવારો, પવિત્ર ફેરા અને શાશ્વત પ્રેમના બંધનમાં.",
    comingSoon: "કમિંગ સૂન",
    cardSubtitle:
      "અમારા ભવ્ય લગ્નોત્સવનું પોર્ટલ શાહી અંદાજમાં તૈયાર થઈ રહ્યું છે.",
    chaptersLabel: "આગામી શુભ પ્રસંગો",
    chapters: [
      { label: "મંડપ મુહૂર્ત", icon: Sun },
      { label: "હલ્દી અને મહેંદી", icon: Sparkles },
      { label: "સંગીત સંધ્યા", icon: Music },
      { label: "જાન અને ફેરા", icon: Flame },
      { label: "ભવ્ય રિસેપ્શન", icon: Crown },
    ],
    blessingBtn: "પુષ્પવર્ષાથી આશીર્વાદ આપો",
    blessingSent: "આશીર્વાદ અર્પણ થયા",
    tapHint: "પુષ્પવર્ષા માટે લોગો અથવા બટન પર ક્લિક કરો",
  },
  hi: {
    title: "SruMan | कमिंग सून • द रॉयल वेडिंग",
    preloaderSubtitle: "कमिंग सून",
    eyebrow: "द रॉयल वेडिंग",
    couple: "सृष्टि & अमन",
    tagline: "दो आत्माएँ, दो परिवार, पवित्र वचनों और शाश्वत प्रेम के बंधन में।",
    comingSoon: "कमिंग सून",
    cardSubtitle:
      "हमारे भव्य विवाह समारोह का पोर्टल शाही अंदाज़ में तैयार हो रहा है।",
    chaptersLabel: "आगामी शुभ उत्सव",
    chapters: [
      { label: "मंडप मुहूर्त", icon: Sun },
      { label: "हल्दी और मेहंदी", icon: Sparkles },
      { label: "संगीत संध्या", icon: Music },
      { label: "बारात और फेरे", icon: Flame },
      { label: "शाही रिसेप्शन", icon: Crown },
    ],
    blessingBtn: "पुष्पवर्षा से आशीर्वाद दें",
    blessingSent: "आशीर्वाद प्राप्त हुए",
    tapHint: "पुष्पवर्षा के लिए लोगो या बटन पर क्लिक करें",
  },
} as const;

export default function WeddingPage() {
  const { language } = useLanguage();
  const [blessingCount, setBlessingCount] = useState(0);

  const t = CONTENT[language] ?? CONTENT.en;

  // Dynamic portal title
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = t.title;
    }
  }, [t.title]);

  // Flower Shower on clicking logo or blessing button
  const triggerCelebration = () => {
    setBlessingCount((prev) => prev + 1);
    try {
      const shapeFromText = (
        confetti as unknown as {
          shapeFromText?: (opts: { text: string }) => unknown;
        }
      ).shapeFromText;

      if (shapeFromText) {
        const flower1 = shapeFromText({ text: "🌸" });
        const flower2 = shapeFromText({ text: "🌹" });
        const flower3 = shapeFromText({ text: "🌼" });
        const star = shapeFromText({ text: "✨" });

        confetti({
          particleCount: 65,
          spread: 100,
          origin: { y: 0.5, x: 0.5 },
          shapes: [flower1, flower2, flower3, star] as confetti.Shape[],
          scalar: 2.1,
          zIndex: 999,
          gravity: 0.68,
        });
        return;
      }
    } catch {
      // Fallback below
    }

    confetti({
      particleCount: 65,
      spread: 100,
      origin: { y: 0.5, x: 0.5 },
      colors: ["#d4af37", "#f7e4a9", "#ff9999", "#8e35a7"],
      zIndex: 999,
    });
  };

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0e0214] via-[#1a0425] to-[#0a010f] text-[#fbf9fb] overflow-x-hidden select-none px-4 pt-24 pb-28 md:pt-24 md:pb-16">
        {/* Floating Canvas Particles */}
        <SparklesCanvas density={50} />

        {/* Global Navigation Hub Bridge */}
        <HubBridge current="wedding" />

        {/* Ambient Royal Backlight Halos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-gradient-to-tr from-amber-500/15 via-purple-600/20 to-transparent rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-amber-300/10 rounded-full filter blur-[100px] pointer-events-none" />

        {/* Subtle Rotating Ornamental Mandala Backdrop */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] sm:w-[700px] sm:h-[700px] pointer-events-none opacity-[0.07]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-amber-300">
            <circle
              cx="100"
              cy="100"
              r="94"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="2 3"
            />
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              strokeDasharray="4 2"
            />
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                <path
                  d="M100 6 Q108 26 100 40 Q92 26 100 6 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.45"
                />
                <circle cx="100" cy="14" r="1.2" fill="currentColor" />
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Main Center Content */}
        <main className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center text-center">
          {/* Interactive Royal Crest Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerCelebration}
            className="relative cursor-pointer group"
            title={t.tapHint}
          >
            {/* Outer Ambient Glow */}
            <div className="absolute -inset-5 rounded-full bg-gradient-to-tr from-amber-400/25 via-purple-600/35 to-amber-400/25 blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

            {/* Outer Rotating Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3.5 rounded-full border border-dashed border-amber-400/45 pointer-events-none"
            />

            {/* Inner Counter-Rotating Fine Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 rounded-full border border-dotted border-amber-200/30 pointer-events-none"
            />

            {/* White Background Logo Container */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-white p-3.5 sm:p-4 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.3),_0_15px_45px_rgba(0,0,0,0.65)] border-[3px] border-amber-400/70 group-hover:border-amber-300 transition-all duration-300 overflow-hidden">
              <img
                src="/logos/sruman-logo.png"
                alt="SruMan Logo"
                className="w-full h-full object-contain filter drop-shadow-sm relative z-10"
              />
              {/* Subtle Glass Gloss Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </div>
          </motion.div>

          {/* Eyebrow + Couple Names + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mt-6 sm:mt-7 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-200/90 text-[11px] sm:text-xs font-serif tracking-[0.25em] uppercase">
              <Crown className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.eyebrow}</span>
              <Crown className="w-3.5 h-3.5 text-amber-300" />
            </div>

            <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#fae4a8] to-amber-200 drop-shadow-[0_4px_24px_rgba(212,175,55,0.3)]">
              {t.couple}
            </h1>

            <p className="mt-2 max-w-md font-sans text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              {t.tagline}
            </p>
          </motion.div>

          {/* Royal Coming Soon Showcase Card */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="relative w-full mt-7 sm:mt-8 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-[#270933]/85 via-[#180422]/90 to-[#110218]/95 border border-amber-400/35 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6),_0_0_40px_rgba(212,175,55,0.12)] overflow-hidden"
          >
            {/* Subtle Card Ambient Corner Glows */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Delicate Top Ornamental Divider */}
            <div className="relative z-10 flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-400/60" />
              <CalendarHeart className="w-4 h-4 text-amber-300/90" />
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>

            {/* Prominent Coming Soon Pill */}
            <div className="relative z-10 inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-2 sm:px-10 sm:py-3 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-amber-500/15 border border-amber-300/50 shadow-[0_0_30px_rgba(212,175,55,0.25)] overflow-hidden max-w-full">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse flex-shrink-0" />
              <span className="font-serif text-base sm:text-2xl md:text-3xl font-bold tracking-[0.16em] sm:tracking-[0.28em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#fae4a8] to-amber-300 uppercase text-center">
                {t.comingSoon}
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse flex-shrink-0" />
            </div>

            <p className="relative z-10 mt-4 font-sans text-xs sm:text-sm text-stone-200/85 max-w-lg mx-auto leading-relaxed">
              {t.cardSubtitle}
            </p>

            {/* Festivities Preview Strip */}
            <div className="relative z-10 mt-6 pt-5 border-t border-amber-400/15">
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.22em] uppercase text-amber-300/80 mb-3.5">
                {t.chaptersLabel}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {t.chapters.map((chapter, idx) => {
                  const Icon = chapter.icon;
                  return (
                    <motion.button
                      key={chapter.label}
                      type="button"
                      onClick={triggerCelebration}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.45 + idx * 0.07 }}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-amber-400/15 border border-amber-400/25 hover:border-amber-300/60 text-xs font-sans text-amber-100/90 transition-colors duration-200 cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-amber-300/90" />
                      <span>{chapter.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Blessing Action */}
            <div className="relative z-10 mt-6 flex flex-col items-center gap-2">
              <motion.button
                type="button"
                onClick={triggerCelebration}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e4a9] to-[#d4af37] text-[#23052d] font-sans text-xs sm:text-sm font-bold tracking-wide shadow-[0_6px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] transition-shadow duration-300 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#23052d]/20" />
                <span>{t.blessingBtn}</span>
                {blessingCount > 0 && (
                  <span className="ml-0.5 px-2 py-0.5 rounded-full bg-[#23052d]/15 text-[11px] font-bold">
                    ✨ {blessingCount}
                  </span>
                )}
              </motion.button>
              <span className="text-[11px] text-purple-200/55 font-sans">
                {blessingCount > 0 ? `${t.blessingSent} ✨` : t.tapHint}
              </span>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}
