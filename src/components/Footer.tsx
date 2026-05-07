import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Play, ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 pt-32 pb-12 relative overflow-hidden border-t border-gray-50">
      {/* Decorative Light Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-10 group">
              <div className="text-3xl font-black tracking-tighter flex items-center">
                <span className="text-dark">Banana</span>
                <span className="text-primary ml-1">Mango</span>
                <span className="text-gray-400">.bd</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed font-medium">
              রাজশাহীর আমের আভিজাত্য এখন আপনার হাতের নাগালে। আমরা সরাসরি বাগান থেকে প্রিমিয়াম কোয়ালিটি নিশ্চিত করি।
            </p>
            <div className="flex gap-5">
              {[
                { icon: Globe, href: "https://rajshahiram.com.bd/" },
                { icon: Play, href: "https://www.youtube.com/@রাজশাহীরআম" },
                { icon: Globe, href: "https://www.facebook.com/RajshahirAam" }
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all border border-gray-100 group/icon hover:shadow-xl hover:shadow-primary/20"
                >
                  <social.icon size={24} className="text-gray-400 group-hover/icon:text-dark transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 flex items-center gap-3">
              <span className="w-10 h-1.5 bg-primary rounded-full shadow-sm" />
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-5">
              {[
                { name: "হোম", href: "#" },
                { name: "পরিচিতি", href: "#history" },
                { name: "চাষ পদ্ধতি", href: "#care" },
                { name: "রেসিপি", href: "#recipe" },
                { name: "ব্লগ", href: "#blogs" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-500 hover:text-primary transition-all font-bold flex items-center gap-3 group/link text-lg">
                    <span className="w-1.5 h-1.5 bg-gray-200 rounded-full group-hover/link:bg-primary group-hover/link:scale-150 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 flex items-center gap-3">
              <span className="w-10 h-1.5 bg-secondary rounded-full shadow-sm" />
              যোগাযোগ
            </h4>
            <ul className="space-y-8">
              {[
                { icon: MapPin, text: "মোন্নাফের মোড়, রাজশাহী, বাংলাদেশ।", color: "text-primary" },
                { icon: Phone, text: "০১৭০৭৯৭৯৭৬৭", color: "text-primary" },
                { icon: Mail, text: "info@rajshahiram.com.bd", color: "text-primary" }
              ].map((contact, i) => (
                <li key={i} className="flex gap-5 group/contact">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-primary/10 transition-all border border-gray-100">
                    <contact.icon size={20} className={contact.color} />
                  </div>
                  <span className="font-bold text-gray-600 leading-tight pt-2 text-lg">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Premium Light CTA Card with Soft Colored Shadows */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center shadow-[0_40px_80px_-20px_rgba(251,191,36,0.15)] hover:shadow-[0_40px_80px_-20px_rgba(251,191,36,0.25)] transition-all transform hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner shadow-primary/20">
                <ShoppingBag size={36} className="text-primary" />
              </div>
              
              <h4 className="text-2xl font-black mb-4 text-dark tracking-tight">সরাসরি কিনুন</h4>
              <p className="text-gray-500 mb-10 font-medium leading-relaxed">
                রাজশাহীর সেরা ব্যানানা আম সরাসরি আমাদের বাগান থেকে সংগ্রহ করুন
              </p>
              
              <Link 
                href="https://rajshahiram.com.bd/ProductDetails/M114" 
                target="_blank"
                className="bg-primary hover:bg-accent text-dark font-black px-8 py-5 rounded-2xl w-full flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(251,191,36,0.3)] hover:shadow-primary/50 active:scale-95 group/btn text-xl"
              >
                অর্ডার করুন
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm font-black tracking-widest uppercase">
          <p>© 2024 BananaMango.bd | Premium Quality Guaranteed</p>
          <p className="flex items-center gap-3">
            Crafted by 
            <Link href="https://rajshahiram.com.bd/" className="text-dark hover:text-primary transition-colors">
              RajshahiRam
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
