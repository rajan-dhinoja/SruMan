"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowRight, Globe, Phone } from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";

export default function SruManHub() {
  // Configurable Wedding Target Date (December 12, 2026 10:00:00)
  const targetWeddingDate = new Date("2026-12-12T10:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetWeddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
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
        {/* Divine Invocation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="font-serif text-xs sm:text-sm md:text-base tracking-[0.3em] text-amber-300 uppercase font-bold drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">
            || શ્રી ગણેશાય નમઃ || શ્રી દ્વારકાધીશાય નમઃ ||
          </span>
        </motion.div>

        {/* Grand Monogram Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center rounded-full border border-amber-400/30 bg-black/60 backdrop-blur-md shadow-[0_0_40px_rgba(212,175,55,0.35)]"
        >
          {/* Outer rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1.5 border border-dashed border-amber-400/40 rounded-full"
          />

          {/* Shimmering logo inner */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(212, 175, 55, 0.4), inset 0 2px 8px rgba(255,255,255,0.9)",
                "0 0 35px rgba(212, 175, 55, 0.8), inset 0 2px 8px rgba(255,255,255,0.9)",
                "0 0 20px rgba(212, 175, 55, 0.4), inset 0 2px 8px rgba(255,255,255,0.9)",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-3 rounded-full flex items-center justify-center bg-white border-2 border-amber-400/60 overflow-hidden"
          >
            <img
              src="/logos/sruman-logo.png"
              alt="SruMan Logo"
              className="w-full h-full object-contain p-2 scale-110 hover:scale-120 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-6"
        >
          <span className="font-serif text-xs sm:text-sm tracking-[0.35em] text-amber-300/80 uppercase font-semibold">
            Welcome To The Celebrations of
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#f7e4a9] to-amber-300 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
            Srushti & Aman
          </h1>
          <p className="font-alex-brush text-2xl sm:text-4xl text-amber-200/90 mt-2 font-normal">
            "Two hearts, two souls, one eternal journey of love"
          </p>
          <p className="font-sans text-xs sm:text-sm text-stone-300/80 max-w-lg mx-auto mt-3 tracking-wider leading-relaxed">
            Choose an experience below to discover our celebrations, wedding festivities, itineraries, and cherished memories.
          </p>
        </motion.div>

        {/* Milestone Cards Container */}
        <div className="w-full max-w-3xl mt-12 flex flex-col gap-8">
          
          {/* ============================================================ */}
          {/* FEATURED #1: THE ROYAL WEDDING (HEADLINE CELEBRATION)        */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] p-6 sm:p-10 bg-gradient-to-br from-[#2f0e3d]/90 via-[#21072b]/95 to-[#15021c]/90 border-2 border-amber-400/60 shadow-[0_12px_45px_rgba(212,175,55,0.25)] hover:shadow-[0_16px_60px_rgba(212,175,55,0.45)] transition-all duration-500 backdrop-blur-md overflow-hidden"
          >
            {/* Glowing Accent Corner & Ambient Light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-400/20 via-purple-600/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full filter blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              {/* Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-serif tracking-widest uppercase bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-sm font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  Primary Celebration
                </span>
                <span className="font-serif text-xs tracking-wider text-amber-300/80 hidden sm:inline-block">
                  Upcoming
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-amber-100 group-hover:text-amber-200 transition-colors drop-shadow-sm">
                The Royal Wedding
              </h2>

              <p className="font-alex-brush text-xl sm:text-3xl text-amber-300/90 mt-1">
                A grand celebration of sacred vows & forever love
              </p>

              <p className="font-sans text-xs sm:text-sm text-stone-300/90 mt-3 leading-relaxed">
                Step inside the grand wedding portal for multi-day itineraries (Mandap Muhurat, Haldi, Mehendi, Sangeet, Baarat, Pheras & Reception), live countdown, and celebration details.
              </p>

              {/* Live Countdown Mini Grid */}
              <div className="my-6 grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
                {[
                  { label: "DAYS", val: timeLeft.days },
                  { label: "HOURS", val: timeLeft.hours },
                  { label: "MINS", val: timeLeft.minutes },
                  { label: "SECS", val: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-black/50 border border-amber-400/25 backdrop-blur-sm shadow-inner"
                  >
                    <span className="font-sans text-xl sm:text-3xl font-extrabold text-amber-200">
                      {String(item.val).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] tracking-widest text-stone-400 mt-0.5 uppercase">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/wedding"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-[#f7e4a9] to-amber-500 text-stone-950 font-serif text-sm sm:text-base font-bold tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Enter Grand Wedding Portal</span>
                  <ArrowRight className="w-5 h-5 text-stone-950 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* ORNATE TIMELINE CONNECTOR                                    */}
          {/* ============================================================ */}
          <div className="flex flex-col items-center my-[-8px]">
            <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/60 to-amber-400/20" />
            <div className="w-8 h-8 rounded-full border border-amber-400/40 bg-stone-950/80 flex items-center justify-center text-amber-300 text-xs shadow-md">
              💍
            </div>
            <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400/20 to-amber-400/60" />
          </div>

          {/* ============================================================ */}
          {/* FEATURED #2: THE ENGAGEMENT (WHERE FOREVER BEGAN)            */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] p-6 sm:p-10 bg-gradient-to-br from-[#1a0823]/80 via-[#13031a]/85 to-[#0b010f]/90 border border-amber-400/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_45px_rgba(212,175,55,0.2)] transition-all duration-500 backdrop-blur-md overflow-hidden"
          >
            <div className="relative z-10 flex flex-col">
              {/* Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-serif tracking-widest uppercase bg-rose-500/10 text-rose-300 border border-rose-400/30 shadow-sm font-semibold">
                  <Heart className="w-3.5 h-3.5 text-rose-300" />
                  Where Forever Began
                </span>
                <span className="font-serif text-xs tracking-wider text-stone-400 hidden sm:inline-block">
                  Relive The Memories
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100 group-hover:text-amber-200 transition-colors">
                The Engagement Ceremony
              </h2>

              <p className="font-alex-brush text-xl sm:text-2xl text-amber-300/80 mt-1">
                The grand ring ceremony, palace gates & sacred promises
              </p>

              <p className="font-sans text-xs sm:text-sm text-stone-300/80 mt-3 leading-relaxed">
                Relive the royal palace gate entrance, divine blessings, guestbook wishes, digital invitation patrika, and love story memories.
              </p>

              {/* Feature Highlights Pills */}
              <div className="my-5 flex flex-wrap gap-2">
                {[
                  "Palace Gate Entrance",
                  "Digital Blessings Guestbook",
                  "Nimantrak Patrika",
                  "Multilingual Support",
                ].map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-amber-400/20 text-[11px] font-sans tracking-wide text-amber-200/80"
                  >
                    ✦ {feat}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/engagement"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-850 text-amber-200 border border-amber-400/40 font-serif text-sm sm:text-base font-semibold tracking-wider hover:border-amber-300 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Relive Engagement Memories</span>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* DEVELOPER CREDITS & FOOTER                                   */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-lg mt-16 bg-white/[0.02] backdrop-blur-md rounded-[28px] border border-amber-400/15 p-6 flex flex-col items-center text-center shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
        >
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-amber-300 uppercase font-bold mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
            Crafted With Love By
          </span>

          <a
            href="http://dotr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2.5 cursor-pointer mb-5"
          >
            <div className="w-40 h-20 rounded-2xl bg-white p-2.5 border-2 border-amber-400/60 flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <img
                src="/logos/DOTR_Full_Color_Logo.png"
                alt="DOTR Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-sans text-sm tracking-[0.15em] text-amber-100 font-bold group-hover:text-amber-300 uppercase mt-1">
              DHINOJA OmniTech Resolutions (DOTR)
            </h3>
          </a>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full text-xs font-sans">
            <a
              href="http://dotr.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-amber-400/20 bg-black/40 hover:bg-amber-400 hover:text-stone-950 text-amber-200 transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5" />
              dotr.in
            </a>
            <a
              href="tel:+918200965524"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-amber-400/20 bg-black/40 hover:bg-amber-400 hover:text-stone-950 text-amber-200 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 8200965524
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
