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
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-sm md:text-lg font-black text-primary uppercase tracking-[0.4em] mb-6 drop-shadow-lg">
              রাজশাহীর প্রিমিয়াম ব্যানানা আম
            </h1>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-10 drop-shadow-2xl tracking-tighter">
              স্বাদে ও গন্ধে <br />
              <span className="text-gradient">অতুলনীয় আভিজাত্য</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed drop-shadow-lg font-medium">
              সরাসরি রাজশাহীর বাগান থেকে বাছাই করা প্রিমিয়াম ব্যানানা আম। কোনো কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো সেরা স্বাদের নিশ্চয়তা।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="https://rajshahiram.com.bd/ProductDetails/M114"
              className="bg-primary hover:bg-accent text-dark px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(251,191,36,0.3)] hover:scale-105 active:scale-95 group/btn"
            >
              এখনই অর্ডার করুন
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="#history"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              আরও জানুন
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
