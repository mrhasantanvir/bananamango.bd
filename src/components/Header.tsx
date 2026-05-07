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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-110 drop-shadow-xl">
            <Image 
              src="/logo.png" 
              alt="BananaMango.bd Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all hover:text-primary ${
                isScrolled ? "text-dark" : "text-white drop-shadow-md hover:scale-105"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://rajshahiram.com.bd/ProductDetails/M114"
            className="bg-accent hover:bg-primary text-white px-6 py-2.5 rounded-full font-black transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
          >
            <ShoppingCart size={18} />
            রাজশাহীর আম কিনুন
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
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://rajshahiram.com.bd/ProductDetails/M114"
                className="bg-accent text-white p-4 rounded-xl font-black text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart size={20} />
                রাজশাহীর আম কিনুন
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
