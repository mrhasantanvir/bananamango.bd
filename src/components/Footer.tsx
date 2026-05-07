import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Play } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-dark pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-14 h-14 transition-transform group-hover:scale-110">
                <Image 
                  src="/logo_icon.png" 
                  alt="BananaMango Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <div className="text-2xl font-black flex items-center">
                  <span className="text-slate-900">Banana</span>
                  <span className="text-green-600">Mango</span>
                  <span className="text-gray-400">.bd</span>
                </div>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">
                  Premium Fruit Index
                </span>
              </div>
            </Link>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              bananna Mango bd মূলত রাজশাহীর আম-এর একটি সহ-উদ্যোগ। আমাদের লক্ষ্য রাজশাহীর আমের সঠিক তথ্য এবং রিয়েল-টাইম বাজার দর সবার কাছে পৌঁছে দেওয়া।
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.facebook.com/RajshahirAam" 
                target="_blank"
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all shadow-md border border-gray-100"
              >
                <Globe size={24} className="text-gray-400" />
              </Link>
              <Link 
                href="https://www.youtube.com/@রাজশাহীরআম" 
                target="_blank"
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all shadow-md border border-gray-100"
              >
                <Play size={24} className="text-gray-400" />
              </Link>
              <Link 
                href="https://rajshahiram.com.bd/" 
                target="_blank"
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all shadow-md border border-gray-100"
              >
                <Globe size={24} className="text-gray-400" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4">
              {[
                { name: "হোম", href: "#" },
                { name: "পরিচিতি", href: "#history" },
                { name: "চাষ পদ্ধতি", href: "#care" },
                { name: "রেসিপি", href: "#recipe" },
                { name: "ব্লগ", href: "#blogs" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">যোগাযোগ</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-gray-600">
                <MapPin className="text-primary flex-shrink-0" />
                <span className="font-medium">মোন্নাফের মোড়, রাজশাহী, বাংলাদেশ।</span>
              </li>
              <li className="flex gap-4 text-gray-600">
                <Phone className="text-primary flex-shrink-0" />
                <span className="font-medium">০১৭০৭৯৭৯৭৬৭</span>
              </li>
              <li className="flex gap-4 text-gray-600">
                <Mail className="text-primary flex-shrink-0" />
                <span className="font-medium">info@rajshahiram.com.bd</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-dark">সরাসরি কিনুন</h4>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl">
              <p className="text-sm text-gray-500 mb-6">রাজশাহীর আমের একটি বিশেষায়িত প্লাটফর্ম</p>
              <Link 
                href="https://rajshahiram.com.bd/ProductDetails/M114" 
                target="_blank"
                className="bg-primary text-dark font-black px-6 py-4 rounded-xl block text-center hover:bg-accent transition-all shadow-lg active:scale-95"
              >
                অর্ডার করুন
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>© 2024 BananaMango.bd | All Rights Reserved.</p>
          <p>Powered by <Link href="https://rajshahiram.com.bd/" className="text-primary hover:underline font-bold">RajshahiRam</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
