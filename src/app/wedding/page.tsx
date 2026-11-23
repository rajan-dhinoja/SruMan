"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, MapPin, Heart, ChevronRight, Bell, Music, CheckCircle2 } from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";
import HubBridge from "@/components/HubBridge";
import { useLanguage } from "@/context/LanguageContext";

export default function WeddingPage() {
  const { t, formatNumber } = useLanguage();

  // Target Wedding Date (Configurable - e.g., December 12, 2026 10:00:00)
  const targetDate = new Date("2026-12-12T10:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

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

  const weddingEvents = [
    {
      title: "Ganesh Sthapana & Mandap Muhurat",
      date: "Day 1 - Morning",
      time: "09:00 AM Onwards",
      desc: "Invoking divine blessings of Lord Ganesha for auspicious beginnings and eternal prosperity.",
      tag: "Sacred Ritual",
      icon: "🪔",
    },
    {
      title: "Haldi & Mehendi Ceremony",
      date: "Day 1 - Afternoon & Evening",
      time: "03:30 PM Onwards",
      desc: "Fragrant turmeric, intricate henna designs, vibrant yellow-green hues, and celebratory folk songs.",
      tag: "Colors & Joy",
      icon: "🌿",
    },
    {
      title: "The Royal Sangeet Night",
      date: "Day 1 - Night",
      time: "07:30 PM Onwards",
      desc: "An enchanting evening of music, family dance performances, DJ beats, and joyful celebration.",
      tag: "Music & Beats",
      icon: "💃",
    },
    {
      title: "Royal Baarat & Hastamelap",
      date: "Day 2 - Morning / Muhurat",
      time: "10:15 AM Auspicious Muhurat",
      desc: "Grand groom procession followed by sacred Pheras around the holy fire to unite two souls forever.",
      tag: "The Big Vows",
      icon: "🏰",
    },
    {
      title: "Grand Wedding Reception & Gala Dinner",
      date: "Day 2 - Evening",
      time: "07:00 PM Onwards",
      desc: "A royal feast and formal reception to welcome and bless the newly married couple as husband & wife.",
      tag: "Royal Feast",
      icon: "🥂",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#12031a] via-[#1c0826] to-[#0c0112] text-[#fbf9fb] overflow-x-hidden select-none">
      <SparklesCanvas />
      <HubBridge current="wedding" />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden">
        {/* Ambient Royal Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-purple-600/15 to-transparent rounded-full filter blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
        >
          {/* Spiritual Invocation */}
          <span className="font-serif text-sm sm:text-base tracking-[0.3em] text-amber-300/80 uppercase font-semibold mb-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            || શ્રી ગણેશાય નમઃ || શ્રી દ્વારકાધીશાય નમઃ ||
          </span>

          {/* SruMan Monogram */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 my-4 rounded-full border border-amber-400/30 p-2 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border border-dashed border-amber-400/30 rounded-full"
            />
            <img
              src="/logos/sruman-logo.png"
              alt="SruMan Logo"
              className="w-full h-full object-contain p-2 scale-110"
            />
          </div>

          <h2 className="font-serif text-amber-200 tracking-[0.25em] text-xs sm:text-sm uppercase font-bold mt-2">
            The Royal Wedding Celebration
          </h2>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide mt-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#f7e4a9] to-amber-300 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
            Srushti & Aman
          </h1>

          <p className="font-alex-brush text-2xl sm:text-4xl text-amber-200/90 mt-2 font-normal">
            Two souls, two families, bound by sacred vows
          </p>

          <p className="max-w-xl text-stone-300/80 font-sans text-xs sm:text-sm tracking-wider mt-4 leading-relaxed">
            With the divine blessings of our beloved parents and elders, we warmly invite you to share our joy as we embark on our lifelong journey of love and togetherness.
          </p>

          {/* Live Countdown Grid */}
          <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 max-w-lg w-full">
            {[
              { label: "DAYS", val: timeLeft.days },
              { label: "HOURS", val: timeLeft.hours },
              { label: "MINS", val: timeLeft.minutes },
              { label: "SECS", val: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-black/40 border border-amber-400/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span className="font-sans text-2xl sm:text-4xl font-extrabold text-amber-200">
                  {String(item.val).padStart(2, "0")}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest text-stone-400 mt-1 uppercase">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Relive Engagement Quick Pill */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/engagement"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-amber-200 border border-amber-400/30 text-xs sm:text-sm tracking-wider transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-4 h-4 text-rose-300" />
              <span>Relive Our Engagement Memories →</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Multi-Day Celebration Itinerary Preview */}
      <section className="relative max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-300 font-bold">
            The Festivities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-amber-100 mt-2">
            Wedding Itinerary & Celebrations
          </h2>
          <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-md mx-auto mt-2">
            Each ritual carries sacred meaning and joyful festivities. Come celebrate every precious moment with us.
          </p>
          <div className="w-24 h-[1px] bg-amber-400/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weddingEvents.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#240c2f]/80 to-[#14041b]/90 border border-amber-400/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative overflow-hidden ${
                idx === 3 ? "md:col-span-2 border-amber-400/40 bg-gradient-to-br from-[#2e0f3c]/90 via-[#22072e]/90 to-[#14041b]/90" : ""
              }`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-[80px] pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-3xl">{evt.icon}</span>
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-serif tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-400/30">
                  {evt.tag}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
                {evt.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-300 mt-2 mb-3">
                <span className="flex items-center gap-1.5 text-amber-200/90">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {evt.date}
                </span>
                <span className="flex items-center gap-1.5 text-stone-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {evt.time}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-stone-300/80 leading-relaxed">
                {evt.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guest Experience Notice & Interactive Portal Expansion */}
      <section className="relative max-w-4xl mx-auto px-4 py-12 mb-16 text-center">
        <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-amber-500/10 via-purple-900/30 to-amber-500/10 border border-amber-400/30 backdrop-blur-md">
          <Sparkles className="w-8 h-8 text-amber-300 mx-auto mb-3 animate-bounce" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
            More Grand Experiences Unfolding Soon
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-lg mx-auto mt-2 leading-relaxed">
            We are curating interactive RSVP, guest accommodation & travel assistance, digital blessings, live photo streams, and musical experiences.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-serif text-sm tracking-wider font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform"
            >
              ✦ Return to SruMan Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-amber-400/15 bg-black/60 backdrop-blur-md text-stone-400 text-xs font-sans tracking-wider">
        <p>Srushti & Aman | Crafted with love by <a href="http://dotr.in" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline font-semibold">DOTR</a></p>
      </footer>
    </div>
  );
}
