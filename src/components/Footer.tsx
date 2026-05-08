"use client";

import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Play, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 pt-20 pb-8 relative overflow-hidden border-t border-gray-100">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="text-2xl font-black tracking-tighter flex items-center">
                <span className="text-dark">Banana</span>
                <span className="text-primary ml-1">Mango</span>
                <span className="text-gray-400">.bd</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-8 text-base leading-relaxed font-medium max-w-xs">
              রাজশাহীর আমের আভিজাত্য এখন আপনার হাতের নাগালে। সরাসরি বাগান থেকে বাছাই করা প্রিমিয়াম আম।
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "https://www.facebook.com/RajshahirAam", color: "hover:bg-blue-500" },
                { icon: Play, href: "https://www.youtube.com/@রাজশাহীরআম", color: "hover:bg-red-500" },
                { icon: Globe, href: "https://rajshahiram.com.bd/", color: "hover:bg-primary" }
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href}
                  target="_blank"
                  className={`w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center transition-all border border-gray-100 group/icon hover:text-white hover:shadow-lg ${social.color}`}
                >
                  <social.icon size={18} className="text-gray-400 group-hover/icon:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-primary rounded-full" />
              লিঙ্কস
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: "হোম", href: "#" },
                { name: "পরিচিতি", href: "#history" },
                { name: "চাষ পদ্ধতি", href: "#care" },
                { name: "রেসিপি", href: "#recipe" },
                { name: "ব্লগ", href: "#blogs" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-500 hover:text-primary transition-all font-bold flex items-center gap-2 group/link text-sm">
                    <span className="w-1 h-1 bg-gray-200 rounded-full group-hover/link:bg-primary group-hover/link:scale-150 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-secondary rounded-full" />
              যোগাযোগ
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "রাজশাহী, বাংলাদেশ।", color: "text-primary" },
                { icon: Phone, text: "০১৭০৭৯৭৯৭৬৭", color: "text-primary" },
                { icon: Mail, text: "info@rajshahiram.com.bd", color: "text-primary" }
              ].map((contact, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <contact.icon size={16} className={contact.color} />
                  </div>
                  <span className="font-bold text-gray-600 text-sm">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Compact Premium CTA */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner">
                  <ShoppingBag size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-dark leading-none">সরাসরি কিনুন</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Verified Seller</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-6 font-medium leading-relaxed">
                রাজশাহীর সেরা ব্যানানা আম সরাসরি আমাদের বাগান থেকে।
              </p>
              <Link 
                href="https://rajshahiram.com.bd/ProductDetails/M114" 
                target="_blank"
                className="bg-primary hover:bg-dark hover:text-white text-dark font-black px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 group/btn text-sm"
              >
                অর্ডার দিন
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-[10px] font-black tracking-widest uppercase">
          <p>© 2024 BananaMango.bd | All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              Powered by 
              <Link href="https://rajshahiram.com.bd/" className="text-dark hover:text-primary transition-colors">
                RajshahiRam
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
