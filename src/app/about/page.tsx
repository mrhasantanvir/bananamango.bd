"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Heart, Leaf } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
            >
              আমাদের <span className="text-gradient">পরিচিতি</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed"
            >
              রাজশাহীর ঐতিহ্যবাহী ব্যানানা আমের বিশুদ্ধতা এবং আভিজাত্য আপনাদের দ্বারে পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/blog-images/img1.png" 
                  alt="Our Orchard" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-dark leading-tight">
                সরাসরি বাগান থেকে <span className="text-primary">বিশুদ্ধতার গ্যারান্টি</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                আমরা বিশ্বাস করি, আমের আসল স্বাদ এবং গুণমান তখনই নিশ্চিত করা সম্ভব যখন তা সরাসরি বাগান থেকে কোনো রকম রাসায়নিক ব্যবহার ছাড়াই সংগ্রহ করা হয়। রাজশাহীর পবা এবং গোদাগাড়ী অঞ্চলে আমাদের নিজস্ব তত্ত্বাবধানে এই ব্যানানা আম চাষ করা হয়।
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Leaf, title: "সম্পূর্ণ অর্গানিক", desc: "কোনো রকম বিষাক্ত কেমিক্যাল ব্যবহার করা হয় না।" },
                  { icon: ShieldCheck, title: "প্রিমিয়াম কোয়ালিটি", desc: "প্রতিটি আম হাতে বেছে প্যাকিং করা হয়।" },
                  { icon: Heart, title: "ঐতিহ্যবাহী স্বাদ", desc: "রাজশাহীর আদি ও অকৃত্রিম ব্যানানা আমের স্বাদ।" },
                  { icon: CheckCircle2, title: "নিরাপদ ডেলিভারি", desc: "সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি।" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">আমাদের লক্ষ্য</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-gray-300 text-lg leading-relaxed font-medium">
            <p>
              BananaMango.bd এর যাত্রা শুরু হয়েছে আমের জগতে আভিজাত্য এবং নির্ভরযোগ্যতা ফিরিয়ে আনার প্রত্যয় নিয়ে। আমরা কেবল আম বিক্রি করি না, আমরা আপনাদের হাতে পৌঁছে দিই এক টুকরো রাজশাহী এবং কৃষকের কঠোর পরিশ্রমের ফসল।
            </p>
            <p>
              আমাদের প্রতিটি ব্যানানা আম এর আকৃতি, বর্ণ এবং স্বাদে অতুলনীয়। আমরা চাই প্রতিটি পরিবার যেন নিরাপদ এবং সুস্বাদু আম খেয়ে সুস্থ থাকতে পারে।
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
