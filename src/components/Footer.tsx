import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Play, ArrowRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-8 group">
              <div className="text-2xl font-black tracking-tight flex items-center">
                <span className="text-slate-900">Banana</span>
                <span className="text-green-600 ml-1">Mango</span>
                <span className="text-gray-400">.bd</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed font-medium">
              ব্যানানা আম বিডি মূলত রাজশাহীর আম-এর একটি সহ-উদ্যোগ। আমাদের লক্ষ্য রাজশাহীর আমের সঠিক তথ্য এবং রিয়েল-টাইম বাজার দর সবার কাছে পৌঁছে দেওয়া।
            </p>
            <div className="flex gap-4">
              {[
                { icon: Globe, href: "https://rajshahiram.com.bd/" },
                { icon: Play, href: "https://www.youtube.com/@রাজশাহীরআম" },
                { icon: Globe, href: "https://www.facebook.com/RajshahirAam" }
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all shadow-sm border border-gray-100 group/icon"
                >
                  <social.icon size={22} className="text-gray-400 group-hover/icon:text-dark transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2 text-dark">
              <span className="w-8 h-1 bg-primary rounded-full" />
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-4">
              {[
                { name: "হোম", href: "#" },
                { name: "পরিচিতি", href: "#history" },
                { name: "চাষ পদ্ধতি", href: "#care" },
                { name: "রেসিপি", href: "#recipe" },
                { name: "ব্লগ", href: "#blogs" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-500 hover:text-primary transition-all font-bold flex items-center gap-2 group/link">
                    <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2 text-dark">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              যোগাযোগ
            </h4>
            <ul className="space-y-6">
              {[
                { icon: MapPin, text: "মোন্নাফের মোড়, রাজশাহী, বাংলাদেশ।", color: "text-red-500" },
                { icon: Phone, text: "০১৭০৭৯৭৯৭৬৭", color: "text-blue-500" },
                { icon: Mail, text: "info@rajshahiram.com.bd", color: "text-green-500" }
              ].map((contact, i) => (
                <li key={i} className="flex gap-4 group/contact">
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-white group-hover/contact:shadow-md transition-all`}>
                    <contact.icon size={18} className={contact.color} />
                  </div>
                  <span className="font-bold text-gray-600 leading-tight pt-2">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-1 rounded-[2.5rem] shadow-xl">
              <div className="bg-white p-8 rounded-[2.4rem] border border-white/50 backdrop-blur-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Image src="/logo_icon.png" alt="Logo" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="text-xl font-black mb-4 text-dark">সরাসরি কিনুন</h4>
                <p className="text-sm text-gray-500 mb-8 font-medium">
                  রাজশাহীর আমের একটি বিশেষায়িত প্লাটফর্ম থেকে অর্ডার করুন
                </p>
                <Link 
                  href="https://rajshahiram.com.bd/ProductDetails/M114" 
                  target="_blank"
                  className="bg-primary hover:bg-accent text-dark font-black px-8 py-4 rounded-2xl w-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/30 active:scale-95 group/btn"
                >
                  অর্ডার করুন
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm font-bold">
          <p>© 2024 BananaMango.bd | All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            Powered by 
            <Link href="https://rajshahiram.com.bd/" className="text-dark hover:text-primary transition-colors border-b-2 border-primary/30">
              RajshahiRam
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
