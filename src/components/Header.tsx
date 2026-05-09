"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "হোম", href: "#" },
    { name: "পরিচিতি", href: "#history" },
    { name: "চাষ পদ্ধতি", href: "#care" },
    { name: "রেসিপি", href: "#recipe" },
    { name: "ব্লগ", href: "#blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl py-3 shadow-2xl border-b border-gray-100" : "bg-transparent py-6"
      }`}
    >
      <div className="container-fluid mx-auto px-4 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col leading-none"
          >
            <div className="flex items-center text-2xl md:text-3xl font-black">
              <span className={isScrolled ? "text-slate-900" : "text-white drop-shadow-xl"}>
                Banana
              </span>
              <motion.span 
                animate={{ 
                  color: isScrolled ? ["#16a34a", "#ca8a04", "#16a34a"] : ["#4ade80", "#facc15", "#4ade80"],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="ml-1"
              >
                Mango
              </motion.span>
              <span className="text-primary">.bd</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-black transition-all hover:text-primary relative group/link ${
                isScrolled ? "text-slate-700" : "text-white drop-shadow-md"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover/link:w-full" />
            </Link>
          ))}
          <Link
            href="https://rajshahiram.com.bd/ProductDetails/M114"
            className="bg-primary hover:bg-accent text-dark px-8 py-3 rounded-2xl font-black transition-all flex items-center gap-2 shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95 group/btn"
          >
            <ShoppingCart size={18} className="group-hover:rotate-12 transition-transform" />
            অর্ডার করুন
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-slate-800 border-b border-gray-100 pb-4 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://rajshahiram.com.bd/ProductDetails/M114"
                className="bg-primary text-dark p-6 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-xl text-xl mt-4"
              >
                <ShoppingCart size={24} />
                অর্ডার করুন
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
