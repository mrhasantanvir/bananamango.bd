"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center pt-32 md:pt-40 overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div style={{ y: textY }} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-8">
              <Star size={16} className="text-primary fill-primary" />
              <span className="text-xs font-black text-white uppercase tracking-[0.2em]">
                রাজশাহীর সেরা প্রিমিয়াম আম
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[1.2] md:leading-[1.1] mb-10 tracking-tighter">
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block pb-2 md:pb-4"
              >
                স্বাদে ও গন্ধে
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gradient block mt-4 md:mt-6"
              >
                অতুলনীয় আভিজাত্য
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              সরাসরি রাজশাহীর বাগান থেকে বাছাই করা প্রিমিয়াম ব্যানানা আম। কোনো কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো সেরা স্বাদের নিশ্চয়তা।
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="https://rajshahiram.com.bd/ProductDetails/M114"
              className="bg-primary hover:bg-white text-dark px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(251,191,36,0.3)] hover:scale-105 active:scale-95 group/btn"
            >
              এখনই অর্ডার করুন
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <div className="flex items-center gap-6 px-4">
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none">৫০০০+</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">সফল ডেলিভারি</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none">১০০%</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">অর্গানিক গ্যারান্টি</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Trust Badges */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-10 bottom-20 hidden lg:flex flex-col gap-4"
      >
        {[
          { icon: ShieldCheck, text: "নিরাপদ প্যাকিং" },
          { icon: Zap, text: "দ্রুত ডেলিভারি" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <item.icon className="text-primary" size={20} />
            </div>
            <span className="text-white font-bold text-sm">{item.text}</span>
          </div>
        ))}
      </motion.div>

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
