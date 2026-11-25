"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  Heart,
  ArrowRight,
  Globe,
  Phone,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Sparkle,
  ExternalLink,
  Lock,
  Copy,
  Check,
  Code2,
  Layers,
  Award,
  Landmark,
  BookOpen,
  MessageSquare,
  PartyPopper,
} from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";
import Preloader from "@/components/Preloader";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

interface EngagementTime {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  isOngoing: boolean;
}

// Helper to parse time string like "09:00 AM" into Date for the ceremony date (18th August 2026)
const parseCeremonyTime = (timeStr: string | undefined, defaultIso: string): Date => {
  if (!timeStr) return new Date(defaultIso);
  try {
    const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    if (!match) return new Date(defaultIso);
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const meridiem = match[3] ? match[3].toUpperCase() : null;
    if (meridiem === "PM" && hours < 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;
    const pad = (n: number) => String(n).padStart(2, "0");
    return new Date(`2026-08-18T${pad(hours)}:${pad(minutes)}:00+05:30`);
  } catch {
    return new Date(defaultIso);
  }
};

export default function SruManHub() {
  const { language, t, formatNumber } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [copiedContact, setCopiedContact] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Dynamic portal title management
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (language === "gu") {
        document.title = "SruMan | સેલિબ્રેશન પોર્ટલ • Srushti & Aman";
      } else if (language === "hi") {
        document.title = "SruMan | सेलिब्रेशन पोर्टल • Srushti & Aman";
      } else {
        document.title = "SruMan | Celebration Portal • Srushti & Aman";
      }
    }
  }, [language]);

  // Interactive 3D Crest Tilt & Royal Blessings
  const [blessingsCount, setBlessingsCount] = useState(108);
  const [showCrestRipple, setShowCrestRipple] = useState(false);
  const crestX = useMotionValue(0);
  const crestY = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 20 };
  const smoothX = useSpring(crestX, springConfig);
  const smoothY = useSpring(crestY, springConfig);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleCrestMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    crestX.set(xPct);
    crestY.set(yPct);
  };

  const handleCrestMouseLeave = () => {
    crestX.set(0);
    crestY.set(0);
  };

  const triggerRoyalBlessings = () => {
    setBlessingsCount((prev) => prev + 1);
    setShowCrestRipple(true);
    setTimeout(() => setShowCrestRipple(false), 900);

    try {
      confetti({
        particleCount: 55,
        spread: 75,
        origin: { y: 0.32 },
        colors: ["#ffd700", "#f7e4a9", "#c084fc", "#f43f5e", "#ffffff"],
        zIndex: 9999,
      });
      confetti({
        particleCount: 35,
        angle: 60,
        spread: 60,
        origin: { x: 0.3, y: 0.35 },
        colors: ["#ffd700", "#fbbf24", "#e879f9"],
        zIndex: 9999,
      });
      confetti({
        particleCount: 35,
        angle: 120,
        spread: 60,
        origin: { x: 0.7, y: 0.35 },
        colors: ["#ffd700", "#fbbf24", "#e879f9"],
        zIndex: 9999,
      });
    } catch {
      // fallback
    }
  };

  // Engagement Ceremony Muhurat Timings (Configured via Environment Variables)
  const muhuratStartTime = process.env.NEXT_PUBLIC_MUHURAT_START_TIME || "09:00 AM";
  const muhuratEndTime = process.env.NEXT_PUBLIC_MUHURAT_END_TIME || "02:00 PM";
  const muhuratTz = process.env.NEXT_PUBLIC_MUHURAT_TIMEZONE || "IST";
  const muhuratSeparator = process.env.NEXT_PUBLIC_MUHURAT_SEPARATOR || "to";

  // Formatted Muhurat label rendered in the Ceremony Fast Facts Bar
  const muhuratDisplay = useMemo(() => {
    const start = (muhuratStartTime || "").trim();
    const end = (muhuratEndTime || "").trim();

    const cleanStart = start.replace(new RegExp(`\\s*${muhuratTz}\\s*$`, "i"), "").trim();
    const cleanEnd = end ? end.replace(new RegExp(`\\s*${muhuratTz}\\s*$`, "i"), "").trim() : "";

    if (cleanStart && cleanEnd) {
      return `${cleanStart} ${muhuratSeparator} ${cleanEnd} ${muhuratTz}`;
    }
    if (cleanStart) {
      return `${cleanStart} ${muhuratTz}`;
    }
    return start || "09:00 AM IST";
  }, [muhuratStartTime, muhuratEndTime, muhuratTz, muhuratSeparator]);

  const targetEngagementDate = useMemo(() => {
    return parseCeremonyTime(muhuratStartTime, "2026-08-18T09:00:00+05:30");
  }, [muhuratStartTime]);

  const completionEngagementDate = useMemo(() => {
    return parseCeremonyTime(muhuratEndTime, "2026-08-18T14:00:00+05:30");
  }, [muhuratEndTime]);

  const [engagementTime, setEngagementTime] = useState<EngagementTime>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
    isOngoing: false,
  });

  useEffect(() => {
    setMounted(true);

    const calculateEngagementTime = () => {
      const now = +new Date();
      const differenceToStart = +targetEngagementDate - now;
      const differenceToCompletion = now - +completionEngagementDate;

      let isPast = false;
      let isOngoing = false;
      let absDiff = 0;

      if (differenceToStart > 0) {
        absDiff = differenceToStart;
      } else if (differenceToCompletion > 0) {
        isPast = true;
        absDiff = differenceToCompletion;
      } else {
        isOngoing = true;
        absDiff = 0;
      }

      const totalDays = Math.floor(absDiff / (1000 * 60 * 60 * 24));

      setEngagementTime({
        months: Math.floor(totalDays / 30),
        days: totalDays % 30,
        hours: Math.floor((absDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((absDiff / 1000 / 60) % 60),
        seconds: Math.floor((absDiff / 1000) % 60),
        isPast,
        isOngoing,
      });
    };

    calculateEngagementTime();
    const interval = setInterval(calculateEngagementTime, 1000);
    const loadTimer = setTimeout(() => {
      setPageLoading(false);
    }, 750);
    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
    };
  }, [targetEngagementDate, completionEngagementDate]);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#d4af37", "#f7e4a9", "#8e35a7", "#ffffff", "#ff80aa"],
        zIndex: 9999,
      });
    } catch {
      // Fallback
    }
  };

  const handleCopyContact = () => {
    const contactText =
      "DHINOJA OmniTech Resolutions (DOTR)\nWebsite: https://dotr.in\nPhone: +91 8200965524\nEmail: hello@dotr.in";
    navigator.clipboard.writeText(contactText);
    setCopiedContact(true);
    setTimeout(() => setCopiedContact(false), 2500);
  };

  const engagementFeatures = [
    {
      id: 0,
      icon: <Landmark className="w-5 h-5 text-amber-300" />,
      title: t("hub.engagementCard.features.gate.title"),
      subtitle: t("hub.engagementCard.features.gate.subtitle"),
      desc: t("hub.engagementCard.features.gate.desc"),
      badge: t("hub.engagementCard.features.gate.badge"),
    },
    {
      id: 1,
      icon: <MessageSquare className="w-5 h-5 text-amber-300" />,
      title: t("hub.engagementCard.features.blessings.title"),
      subtitle: t("hub.engagementCard.features.blessings.subtitle"),
      desc: t("hub.engagementCard.features.blessings.desc"),
      badge: t("hub.engagementCard.features.blessings.badge"),
    },
    {
      id: 2,
      icon: <BookOpen className="w-5 h-5 text-amber-300" />,
      title: t("hub.engagementCard.features.nimantrak.title"),
      subtitle: t("hub.engagementCard.features.nimantrak.subtitle"),
      desc: t("hub.engagementCard.features.nimantrak.desc"),
      badge: t("hub.engagementCard.features.nimantrak.badge"),
    },
    {
      id: 3,
      icon: <Globe className="w-5 h-5 text-amber-300" />,
      title: t("hub.engagementCard.features.trilingual.title"),
      subtitle: t("hub.engagementCard.features.trilingual.subtitle"),
      desc: t("hub.engagementCard.features.trilingual.desc"),
      badge: t("hub.engagementCard.features.trilingual.badge"),
    },
  ];

  return (
    <>
      <AnimatePresence>
        {pageLoading && (
          <Preloader
            key="hub-preloader"
            textKey="preloader.hubText"
            subtitleKey="preloader.hubSubtitle"
            onComplete={() => setPageLoading(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-gradient-to-b from-[#14031c] via-[#21072b] to-[#0a000f] text-[#fbf9fb] overflow-x-hidden select-none">
      {/* 60fps Ambient Gold Sparkles */}
      <SparklesCanvas />

      {/* Decorative Royal Corner Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 left-0 w-36 h-36 md:w-56 md:h-56 border-l-2 border-t-2 border-amber-400/40 rounded-tl-[120px] m-4 md:m-8" />
        <div className="absolute top-0 right-0 w-36 h-36 md:w-56 md:h-56 border-r-2 border-t-2 border-amber-400/40 rounded-tr-[120px] m-4 md:m-8" />
        <div className="absolute bottom-0 left-0 w-36 h-36 md:w-56 md:h-56 border-l-2 border-b-2 border-amber-400/40 rounded-bl-[120px] m-4 md:m-8" />
        <div className="absolute bottom-0 right-0 w-36 h-36 md:w-56 md:h-56 border-r-2 border-b-2 border-amber-400/40 rounded-br-[120px] m-4 md:m-8" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-500/10 via-purple-600/10 to-transparent rounded-full filter blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-20 flex flex-col items-center">
        {/* ============================================================ */}
        {/* DIVINE INVOCATION & DEITIES (AS IN ENGAGEMENT PORTAL)       */}
        {/* ============================================================ */}
        <div className="w-full max-w-5xl mx-auto mb-10 sm:mb-14">
          {/* Desktop View: 3-Column Grand Divine Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-14 items-center text-center">
            {/* Top Left: Lord Shreenathji */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="font-serif text-amber-300 text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] uppercase drop-shadow-[0_0_12px_rgba(212,175,55,0.7)] min-h-[32px] flex items-center justify-center">
                {t("welcome.shreenathjiMantra")}
              </span>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mt-3">
                <Image
                  src="/images/shreenathji.png"
                  alt="Lord Shreenathji"
                  fill
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 16px rgba(212,175,55,0.85)) drop-shadow(0 0 32px rgba(94,31,112,0.4))",
                  }}
                  priority
                />
              </div>
            </motion.div>

            {/* Top Center: Lord Ganesha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                <Image
                  src="/images/ChatGPT Image Jun 23, 2026, 12_21_15 AM.png"
                  alt="Lord Ganesha"
                  fill
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 18px rgba(212,175,55,0.9)) drop-shadow(0 0 35px rgba(94,31,112,0.45))",
                  }}
                  priority
                />
              </div>
              <span className="font-serif text-amber-300 text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_12px_rgba(212,175,55,0.7)] mt-3">
                {t("welcome.ganeshMantra")}
              </span>
            </motion.div>

            {/* Top Right: Goddess Kuldevi Mataji */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="font-serif text-amber-300 text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] uppercase drop-shadow-[0_0_12px_rgba(212,175,55,0.7)] min-h-[32px] flex items-center justify-center">
                {t("welcome.kuldeviMantra")}
              </span>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mt-3">
                <Image
                  src="/images/Mataji-removebg.png"
                  alt="Kuldevi Mataji"
                  fill
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 16px rgba(212,175,55,0.85)) drop-shadow(0 0 32px rgba(94,31,112,0.4))",
                  }}
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile View: 3 Distributed Columns Matching Engagement Portal */}
          <div className="md:hidden w-full flex justify-between items-start z-20 px-2 pt-2 relative">
            {/* Top Left: Lord Shreenathji */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center w-[31%]"
            >
              <span className="font-serif text-amber-300 text-[9px] font-bold text-center leading-tight min-h-[26px] flex items-center justify-center drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                {t("welcome.shreenathjiMantra")}
              </span>
              <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mt-1.5">
                <Image
                  src="/images/shreenathji.png"
                  alt="Lord Shreenathji"
                  fill
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 10px rgba(212,175,55,0.85)) drop-shadow(0 0 20px rgba(94,31,112,0.4))",
                  }}
                  priority
                />
              </div>
            </motion.div>

            {/* Top Center: Lord Ganesha */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center w-[35%] mt-6"
            >
              <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24">
                <Image
                  src="/images/ChatGPT Image Jun 23, 2026, 12_21_15 AM.png"
                  alt="Lord Ganesha"
                  fill
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 12px rgba(212,175,55,0.9)) drop-shadow(0 0 24px rgba(94,31,112,0.45))",
                  }}
                  priority
                />
              </div>
              <span className="font-serif text-amber-300 text-[9px] font-bold text-center leading-tight mt-1.5 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                {t("welcome.ganeshMantra")}
              </span>
            </motion.div>

            {/* Top Right: Goddess Kuldevi Mataji */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center w-[31%]"
            >
              <span className="font-serif text-amber-300 text-[9px] font-bold text-center leading-tight min-h-[26px] flex items-center justify-center drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                {t("welcome.kuldeviMantra")}
              </span>
              <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mt-1.5">
                <Image
                  src="/images/Mataji-removebg.png"
                  alt="Kuldevi Mataji"
                  fill
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 10px rgba(212,175,55,0.85)) drop-shadow(0 0 20px rgba(94,31,112,0.4))",
                  }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Grand Monogram Crest with 3D Tilt, Concentric Celestial Rings & Interactive Blessing Touch */}
        <div className="relative flex flex-col items-center">
          {/* Ambient Royal Nebula Backlight */}
          <div className="absolute -inset-10 sm:-inset-16 bg-gradient-to-tr from-amber-400/25 via-purple-600/30 to-amber-300/20 rounded-full filter blur-3xl opacity-75 animate-pulse pointer-events-none" />

          {/* Interactive 3D Tilt Stage */}
          <div
            style={{ perspective: 1000 }}
            className="relative flex items-center justify-center py-2"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleCrestMouseMove}
              onMouseLeave={handleCrestMouseLeave}
              onClick={() => triggerRoyalBlessings()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center rounded-full cursor-pointer group select-none"
              title={t("hub.tapCrestTitle")}
            >
              {/* Outer rotating celestial ring with cardinal diamond nodes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-amber-300/50"
              >
                {/* 4 Cardinal Diamond Nodes */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-amber-200 to-amber-500 rounded-sm rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-amber-200 to-amber-500 rounded-sm rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-amber-200 to-amber-500 rounded-sm rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-amber-200 to-amber-500 rounded-sm rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
              </motion.div>

              {/* Counter-rotating inner orbit ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 sm:inset-2.5 rounded-full border border-dotted border-amber-400/40"
              />

              {/* Shockwave ripple when tapped */}
              <AnimatePresence>
                {showCrestRipple && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 2.1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.9)] pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Central Glowing Medallion */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-amber-200 via-amber-500 to-amber-300 shadow-[0_0_35px_rgba(212,175,55,0.45)] group-hover:shadow-[0_0_55px_rgba(212,175,55,0.7)] transition-shadow duration-500 overflow-hidden flex items-center justify-center">
                {/* White inner plate */}
                <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border border-amber-400/50 shadow-inner">
                  {/* Subtle radial inner glow */}
                  <div className="absolute inset-0 bg-radial from-amber-100/40 via-transparent to-amber-900/10 pointer-events-none" />

                  {/* Logo Image */}
                  <img
                    src="/logos/sruman-logo.png"
                    alt="SruMan Logo"
                    className="w-full h-full object-contain p-2.5 scale-110 group-hover:scale-120 transition-transform duration-500 drop-shadow-sm"
                  />

                  {/* Shimmer light beam sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Tap Hint Badge */}
          <motion.button
            onClick={() => triggerRoyalBlessings()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-serif tracking-widest uppercase bg-gradient-to-r from-amber-500/15 via-purple-500/20 to-amber-500/15 hover:from-amber-500/25 hover:via-purple-500/30 hover:to-amber-500/25 text-amber-200 border border-amber-400/35 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
            <span>{t("hub.tapCrestBadge")}</span>
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
          </motion.button>
        </div>

        {/* Title, Tagline & Interactive Celebration Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-5 sm:mt-6 w-full max-w-3xl px-3"
        >
          {/* Welcome with Ornate Royal Filigree Divider */}
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 mb-2 max-w-full">
            <div className="h-[1px] w-4 xs:w-8 sm:w-16 bg-gradient-to-r from-transparent via-amber-400/60 to-amber-300 flex-shrink" />
            <span className="text-amber-400/80 text-[9px] xs:text-[10px] sm:text-xs flex-shrink-0">✦</span>
            <span className="font-serif text-[10px] xs:text-[11px] sm:text-xs md:text-sm tracking-[0.16em] xs:tracking-[0.22em] sm:tracking-[0.3em] text-amber-200/90 uppercase font-semibold whitespace-nowrap">
              {t("hub.welcomePrefix")}
            </span>
            <span className="text-amber-400/80 text-[9px] xs:text-[10px] sm:text-xs flex-shrink-0">✦</span>
            <div className="h-[1px] w-4 xs:w-8 sm:w-16 bg-gradient-to-l from-transparent via-amber-400/60 to-amber-300 flex-shrink" />
          </div>

          {/* Grand Shimmering Nameplate */}
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mt-1.5 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#fae4a8] to-amber-200 drop-shadow-[0_2px_18px_rgba(212,175,55,0.45)] whitespace-nowrap transition-all duration-500 hover:scale-[1.01]">
            <span className="inline-block hover:text-amber-100 transition-colors">{t("hub.brideFirstName")}</span>{" "}
            <span className="font-alex-brush text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-rose-300 to-amber-400 font-normal px-1 xs:px-1.5 drop-shadow-[0_0_15px_rgba(244,114,182,0.4)] align-middle">
              &
            </span>{" "}
            <span className="inline-block hover:text-amber-100 transition-colors">{t("hub.groomFirstName")}</span>
          </h1>

          {/* Romantic Quote with Twin Pulsing Hearts */}
          <div className="inline-flex items-center justify-center gap-2 sm:gap-2.5 mt-2.5 sm:mt-3.5 px-3.5 xs:px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-900/25 to-amber-500/10 border border-amber-400/30 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)] group hover:border-amber-400/50 transition-all duration-300">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300/80 fill-amber-300/40 group-hover:scale-125 transition-transform duration-300 animate-pulse flex-shrink-0" />
            <p className="font-alex-brush text-sm xs:text-base sm:text-xl md:text-2xl text-amber-200/95 font-normal tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.35)] leading-tight">
              {t("hub.quote")}
            </p>
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300/80 fill-amber-300/40 group-hover:scale-125 transition-transform duration-300 animate-pulse flex-shrink-0" />
          </div>

          {/* Subtitle Description */}
          <p className="font-sans text-xs sm:text-sm text-stone-300/85 max-w-lg mx-auto mt-3.5 tracking-wider leading-relaxed">
            {t("hub.subtitlePart1")}
            <span className="text-amber-200 font-medium">{t("hub.subtitleHighlight1")}</span>
            {t("hub.subtitlePart2")}
            <span className="text-amber-200 font-medium">{t("hub.subtitleHighlight2")}</span>
            {t("hub.subtitlePart3")}
            <span className="text-amber-200 font-medium">{t("hub.subtitleHighlight3")}</span>
            {t("hub.subtitlePart4")}
          </p>

          {/* Interactive Royal Blessings Shower Counter Pill */}
          <div className="mt-5 flex items-center justify-center">
            <motion.button
              onClick={() => triggerRoyalBlessings()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-purple-600/30 to-amber-500/20 hover:from-amber-500/30 hover:via-purple-600/40 hover:to-amber-500/30 border border-amber-400/40 hover:border-amber-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-md cursor-pointer transition-all duration-300"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
              <span className="font-serif text-xs sm:text-sm font-semibold text-amber-200 tracking-wider">
                {t("hub.showerRoyalBlessings")}
              </span>
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
            </motion.button>
          </div>
        </motion.div>

        {/* Milestone Cards Container */}
        <div className="w-full max-w-3xl mt-12 flex flex-col gap-8">
          
          {/* ============================================================ */}
          {/* #1: THE ROYAL WEDDING (COMING SOON - NO COUNTER, NO URL)      */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative rounded-[32px] p-6 sm:p-9 bg-gradient-to-br from-[#2a0c37]/80 via-[#1c0625]/85 to-[#12021a]/90 border border-amber-400/40 shadow-[0_12px_45px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden"
          >
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-400/10 via-purple-600/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full filter blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              {/* Badge Row */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-serif tracking-widest uppercase bg-amber-500/15 text-amber-300 border border-amber-400/35 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  {t("hub.weddingCard.primaryBadge")}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-serif tracking-widest uppercase bg-purple-500/20 text-purple-200 border border-purple-400/30">
                  <Lock className="w-3 h-3 text-purple-300" />
                  {t("hub.weddingCard.comingSoonBadge")}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-amber-100 drop-shadow-sm">
                {t("hub.weddingCard.title")}
              </h2>

              <p className="font-alex-brush text-xl sm:text-3xl text-amber-300/80 mt-1">
                {t("hub.weddingCard.tagline")}
              </p>

              <p className="font-sans text-xs sm:text-sm text-stone-300/85 mt-3 leading-relaxed">
                {t("hub.weddingCard.desc")}
              </p>

              {/* Prominent "Launching Soon" Royal Showcase Box (No URL, No Counter) */}
              <div className="mt-6 rounded-2xl bg-black/40 border border-amber-400/30 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-inner">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <Sparkles className="w-7 h-7 text-amber-300 animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100">
                      {t("hub.weddingCard.launchingTitle")}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-sans tracking-wider uppercase font-semibold border border-amber-400/30">
                      {t("hub.weddingCard.stayTunedBadge")}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-stone-300/80 mt-1.5 leading-relaxed">
                    {t("hub.weddingCard.launchingDesc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* ORNATE TIMELINE CONNECTOR                                    */}
          {/* ============================================================ */}
          <div className="flex flex-col items-center my-[-8px]">
            <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/60 to-amber-400/20" />
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              onClick={triggerConfetti}
              className="w-9 h-9 rounded-full border border-amber-400/50 bg-stone-950/90 flex items-center justify-center text-amber-300 text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer"
              title={t("hub.timelineTitle")}
            >
              💍
            </motion.div>
            <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/20 to-amber-400/60" />
          </div>

          {/* ============================================================ */}
          {/* #2: THE ENGAGEMENT CEREMONY (REDESIGNED & HIGHLY INTERACTIVE) */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative rounded-[32px] p-6 sm:p-10 bg-gradient-to-br from-[#2a0e36]/90 via-[#1e0728]/95 to-[#100216]/95 border-2 border-amber-400/60 shadow-[0_16px_50px_rgba(212,175,55,0.25)] hover:shadow-[0_20px_65px_rgba(212,175,55,0.4)] transition-all duration-500 backdrop-blur-md overflow-hidden"
          >
            {/* Glowing Accent Corner & Ambient Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-400/20 via-purple-600/15 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-amber-500/15 rounded-full filter blur-3xl pointer-events-none" />

            {/* Corner Filigree Borders */}
            <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-amber-400/40 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-amber-400/40 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-amber-400/40 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-amber-400/40 rounded-br-lg pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              {/* Badge & Status */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-serif tracking-widest uppercase bg-rose-500/20 text-rose-300 border border-rose-400/40 shadow-sm font-semibold">
                  <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300 animate-pulse" />
                  {t("hub.engagementCard.foreverBadge")}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-400/40 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {t("hub.engagementCard.reliveBadge")}
                </span>
              </div>

              {/* Title & Romantic Tagline */}
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#f7e4a9] to-amber-300 drop-shadow-sm">
                {t("hub.engagementCard.title")}
              </h2>

              <p className="font-alex-brush text-2xl sm:text-3xl text-amber-300/90 mt-1">
                {t("hub.engagementCard.tagline")}
              </p>

              {/* Ceremony Fast Facts Bar */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-sans">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-amber-400/20 text-stone-300">
                  <Calendar className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">{t("hub.engagementCard.dateLabel")}</strong> {t("hub.engagementCard.dateValue")}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-amber-400/20 text-stone-300">
                  <Clock className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">{t("hub.engagementCard.muhuratLabel")}</strong> {formatNumber(muhuratDisplay)}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-amber-400/20 text-stone-300">
                  <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span className="truncate">
                    <strong className="text-amber-200">{t("hub.engagementCard.venueLabel")}</strong> {t("hub.engagementCard.venueValue")}
                  </span>
                </div>
              </div>

              {/* ========================================================== */}
              {/* ENGAGEMENT COUNTER (MATCHING ENGAGEMENT PORTAL EXACTLY)   */}
              {/* ========================================================== */}
              <div className="my-7 rounded-2xl bg-black/50 border border-amber-400/35 p-5 sm:p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-amber-300 text-xs">✨</span>
                    <h3 className="font-serif text-sm sm:text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#f7e4a9] to-amber-300 uppercase">
                      {engagementTime.isOngoing
                        ? t("hub.engagementCard.countdownOngoing")
                        : engagementTime.isPast
                        ? t("hub.engagementCard.countdownPast")
                        : t("hub.engagementCard.countdownUpcoming")}
                    </h3>
                    <span className="text-amber-300 text-xs">✨</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400/60" />
                    <span className="text-amber-300 text-xs">❋</span>
                    <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-400/60" />
                  </div>
                </div>

                {/* 5-Segment Authentic Counter Grid (Months, Days, Hours, Mins, Secs) */}
                <div className="grid grid-cols-5 gap-2 sm:gap-3.5 max-w-xl mx-auto">
                  {[
                    { label: t("hub.engagementCard.months"), val: engagementTime.months },
                    { label: t("hub.engagementCard.days"), val: engagementTime.days },
                    { label: t("hub.engagementCard.hours"), val: engagementTime.hours },
                    { label: t("hub.engagementCard.mins"), val: engagementTime.minutes },
                    { label: t("hub.engagementCard.secs"), val: engagementTime.seconds },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-2xl bg-gradient-to-b from-white/[0.08] to-black/60 border border-amber-400/35 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 group"
                    >
                      <span className="font-serif text-lg sm:text-3xl lg:text-4xl font-extrabold text-amber-200 group-hover:text-amber-100 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                        {formatNumber(mounted ? String(item.val).padStart(2, "0") : "00")}
                      </span>
                      <span className="font-sans text-[8px] sm:text-[10px] tracking-widest text-amber-300/80 mt-1 uppercase font-semibold">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ========================================================== */}
              {/* INTERACTIVE FEATURE PREVIEW SELECTOR                      */}
              {/* ========================================================== */}
              <div className="mb-6">
                <span className="font-serif text-[11px] sm:text-xs tracking-[0.2em] text-amber-300/90 uppercase font-bold block mb-3 text-center sm:text-left">
                  {t("hub.engagementCard.exploreHighlights")}
                </span>

                {/* Feature Selector Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {engagementFeatures.map((feat) => {
                    const isSelected = activeTab === feat.id;
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => setActiveTab(feat.id)}
                        className={`flex flex-col items-start p-3 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                          isSelected
                            ? "bg-amber-400/15 border-amber-400/60 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                            : "bg-black/30 border-amber-400/20 hover:border-amber-400/40 hover:bg-black/40"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1.5">
                          <div className="p-1 rounded-lg bg-black/40 border border-amber-400/30">
                            {feat.icon}
                          </div>
                          <span
                            className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                              isSelected
                                ? "bg-amber-400 text-stone-950"
                                : "bg-white/5 text-stone-400"
                            }`}
                          >
                            {feat.badge}
                          </span>
                        </div>
                        <span className="font-serif text-xs font-bold text-amber-100 line-clamp-1">
                          {feat.title}
                        </span>
                        <span className="font-sans text-[10px] text-stone-400 line-clamp-1 mt-0.5">
                          {feat.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Feature Interactive Drawer */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 p-4 rounded-2xl bg-black/40 border border-amber-400/25 flex items-start gap-3 backdrop-blur-sm"
                  >
                    <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 flex-shrink-0 mt-0.5">
                      {engagementFeatures[activeTab].icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-amber-200">
                        {engagementFeatures[activeTab].title} —{" "}
                        <span className="font-sans text-xs font-normal text-amber-300/80">
                          {engagementFeatures[activeTab].subtitle}
                        </span>
                      </h4>
                      <p className="font-sans text-xs text-stone-300/85 mt-1 leading-relaxed">
                        {engagementFeatures[activeTab].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Actions Row: Grand CTA Button + Confetti Trigger */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/engagement"
                  onClick={triggerConfetti}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-[#f7e4a9] to-amber-500 text-stone-950 font-serif text-sm sm:text-base font-bold tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer text-center"
                >
                  <span>{t("hub.engagementCard.enterPortalBtn")}</span>
                  <ArrowRight className="w-5 h-5 text-stone-950 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={triggerConfetti}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-black/50 hover:bg-black/70 text-amber-300 border border-amber-400/40 hover:border-amber-400 font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer shadow-sm"
                  title={t("hub.engagementCard.showerBlessingsTitle")}
                >
                  <PartyPopper className="w-4 h-4 text-amber-300" />
                  <span>{t("hub.engagementCard.showerBlessingsBtn")}</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* #3: DOTR COMPANY SHOWCASE (COMPLETELY REDESIGNED & IMPRESSIVE) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="w-full max-w-3xl mt-20 relative rounded-[32px] p-7 sm:p-10 bg-gradient-to-br from-[#1b0826]/90 via-[#100118]/95 to-[#06000c]/98 border-2 border-amber-400/40 hover:border-amber-400/60 shadow-[0_16px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)] transition-all duration-500 backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Ambient Tech Grid Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-amber-400/15 via-purple-600/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

          {/* Corner Filigree Highlights */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400/35 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400/35 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400/35 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400/35 rounded-br-lg pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Crown Ribbon Header */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-serif tracking-[0.25em] uppercase font-bold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              {t("hub.dotr.craftedBadge")}
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            </div>

            {/* Brand Logo & Title Showcase */}
            <motion.a
              href="https://dotr.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center gap-3 cursor-pointer mb-6"
            >
              {/* White High-End Brand Box with Trimmed Logo & Perfect Fit */}
              <div className="w-60 sm:w-72 md:w-80 h-20 sm:h-22 md:h-24 rounded-2xl bg-white px-4 py-2 border-2 border-amber-400/70 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] overflow-hidden">
                <img
                  src="/logos/DOTR_Full_Color_Logo_Trimmed.png"
                  alt="DHINOJA OmniTech Resolutions (DOTR) Logo"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-amber-100 group-hover:text-amber-300 transition-colors">
                    {t("hub.dotr.companyName")}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold font-sans tracking-widest border border-amber-400/40">
                    DOTR
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-amber-200/80 mt-1 tracking-wide">
                  {t("hub.dotr.tagline")}
                </p>
              </div>
            </motion.a>

            {/* Core Capability Pillars */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-black/40 border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                <Code2 className="w-5 h-5 text-amber-300 mb-1.5" />
                <span className="font-serif text-xs font-bold text-amber-200">
                  {t("hub.dotr.pillar1Title")}
                </span>
                <span className="font-sans text-[11px] text-stone-400 mt-1">
                  {t("hub.dotr.pillar1Desc")}
                </span>
              </div>
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-black/40 border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                <Layers className="w-5 h-5 text-amber-300 mb-1.5" />
                <span className="font-serif text-xs font-bold text-amber-200">
                  {t("hub.dotr.pillar2Title")}
                </span>
                <span className="font-sans text-[11px] text-stone-400 mt-1">
                  {t("hub.dotr.pillar2Desc")}
                </span>
              </div>
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-black/40 border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                <Award className="w-5 h-5 text-amber-300 mb-1.5" />
                <span className="font-serif text-xs font-bold text-amber-200">
                  {t("hub.dotr.pillar3Title")}
                </span>
                <span className="font-sans text-[11px] text-stone-400 mt-1">
                  {t("hub.dotr.pillar3Desc")}
                </span>
              </div>
            </div>

            {/* Interactive Contact & Connection Action Hub */}
            <div className="w-full mt-3 flex flex-wrap items-center justify-center gap-2.5 text-xs font-sans">
              {/* Website */}
              <a
                href="https://dotr.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/30 bg-black/50 hover:bg-amber-400 hover:text-stone-950 text-amber-200 transition-all duration-300 shadow-sm font-semibold group"
              >
                <Globe className="w-4 h-4 text-amber-300 group-hover:text-stone-950 transition-colors" />
                <span>{t("hub.dotr.visitWebsite")}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>

              {/* Direct Phone */}
              <a
                href="tel:+918200965524"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/30 bg-black/50 hover:bg-amber-400 hover:text-stone-950 text-amber-200 transition-all duration-300 shadow-sm font-semibold group"
              >
                <Phone className="w-4 h-4 text-amber-300 group-hover:text-stone-950 transition-colors" />
                <span>{formatNumber("+91 8200965524")}</span>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:hello@dotr.in"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/30 bg-black/50 hover:bg-amber-400 hover:text-stone-950 text-amber-200 transition-all duration-300 shadow-sm font-semibold group"
              >
                <Mail className="w-4 h-4 text-amber-300 group-hover:text-stone-950 transition-colors" />
                <span>hello@dotr.in</span>
              </a>

              {/* Copy Contact Info Button with Toast Feedback */}
              <button
                type="button"
                onClick={handleCopyContact}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-400/20 bg-white/5 hover:bg-white/10 text-stone-300 hover:text-amber-200 transition-all duration-300 cursor-pointer"
                title={t("hub.dotr.copyTitle")}
              >
                {copiedContact ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">{t("hub.dotr.copied")}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t("hub.dotr.copyInfo")}</span>
                  </>
                )}
              </button>
            </div>

            {/* Footer Bottom Line */}
            <div className="mt-8 pt-5 border-t border-amber-400/15 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-stone-400/80 gap-2">
              <span>{t("hub.dotr.designedWithLove")}</span>
              <span>{t("hub.dotr.copyright")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
