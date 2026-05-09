"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mt-48" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
          >
            যোগাযোগ <span className="text-gradient">করুন</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            আমাদের আম নিয়ে কোনো প্রশ্ন আছে? অথবা বাগান থেকে সরাসরি আম অর্ডার করতে চান? নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।
          </motion.p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left side: Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-dark mb-6">আমাদের সাথে কানেক্টেড থাকুন</h2>
                <p className="text-gray-500 font-medium">আমরা আপনাদের যেকোনো প্রশ্ন বা পরামর্শ শুনতে সদা প্রস্তুত।</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "ঠিকানা", content: "রাজশাহী, বাংলাদেশ।", color: "text-red-500", bg: "bg-red-50" },
                  { icon: Phone, title: "ফোন", content: "০১৭০৭৯৭৯৭৬৭", color: "text-primary", bg: "bg-primary/10" },
                  { icon: Mail, title: "ইমেইল", content: "info@rajshahiram.com.bd", color: "text-blue-500", bg: "bg-blue-50" },
                  { icon: Clock, title: "সময়", content: "প্রতিদিন সকাল ১০টা - রাত ১০টা", color: "text-secondary", bg: "bg-secondary/10" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={24} className={item.color} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="https://wa.me/8801707979767" 
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white p-6 rounded-[2rem] font-black text-xl transition-all shadow-xl shadow-green-200 group"
              >
                <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                সরাসরি হোয়াটসঅ্যাপ
              </Link>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-50">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">আপনার নাম</label>
                      <input 
                        type="text" 
                        placeholder="নাম লিখুন"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">ফোন নাম্বার</label>
                      <input 
                        type="text" 
                        placeholder="০১৭xxxxxxxx"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">বিষয়</label>
                    <input 
                      type="text" 
                      placeholder="কি বিষয়ে জানতে চান?"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">বার্তা</label>
                    <textarea 
                      rows={6}
                      placeholder="বিস্তারিত এখানে লিখুন..."
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    className="bg-primary hover:bg-dark hover:text-white text-dark font-black px-10 py-5 rounded-2xl flex items-center gap-3 transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1 active:scale-95 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    বার্তা পাঠান
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
