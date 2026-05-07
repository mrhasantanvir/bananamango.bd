"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[3rem] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all"
            >
              <X size={20} />
            </button>

            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/banana-mango.png" 
                alt="ব্যানানা আম" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  Special Offer
                </span>
                <h4 className="text-2xl font-bold">সেরা মানের ব্যানানা আম খুঁজছেন?</h4>
              </div>
            </div>

            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <ShoppingBag className="text-primary" size={32} />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                আমাদের <span className="text-gradient">মেইন শপে</span> ভিজিট করুন।
              </h3>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                রাজশাহীর বাগান থেকে সরাসরি তাজা আম পেতে এখনই আমাদের অফিসিয়াল শপে যান। সেরা কোয়ালিটি এবং ফ্রেশ আমের গ্যারান্টি!
              </p>

              <Link
                href="https://rajshahiram.com.bd/ProductDetails/M114"
                className="bg-primary hover:bg-accent text-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                এখনই শপে যান
                <ArrowRight size={20} />
              </Link>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="mt-6 text-gray-400 hover:text-gray-600 text-sm font-medium transition-all"
              >
                না ধন্যবাদ, আমি পরে দেখব
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
