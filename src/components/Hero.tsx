"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary/20 border border-primary/30 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm"
          >
            রাজশাহীর সেরা ব্যানানা আম
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            ব্যানানা আম: <span className="text-primary">স্বাদে অনন্য</span>, আকৃতিতে অপূর্ব।
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
          >
            রাজশাহীর সেরা বাগানের তাজা ব্যানানা আম এখন আপনার দোরগোড়ায়। এর পাতলা আটি এবং জাদুকরী স্বাদে আপনি মুগ্ধ হতে বাধ্য।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="https://rajshahiram.com.bd/ProductDetails/M114"
              className="bg-primary hover:bg-accent text-dark px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-2xl hover:scale-105 active:scale-95"
            >
              এখনই অর্ডার করুন
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#history"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
            >
              বিস্তারিত জানুন
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
