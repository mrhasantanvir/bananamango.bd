"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="history" className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white">
              <Image 
                src="/banana-mango.png" 
                alt="ব্যানানা আম" 
                width={800} 
                height={800} 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-black text-secondary uppercase tracking-[0.4em] mb-6">পরিচিতি ও ইতিহাস</h2>
            <h3 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1]">
              ব্যানানা আমের <br />
              <span className="text-gradient">আভিজাত্য ও উৎস</span>
            </h3>
            
            <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
              <div className="bg-gray-50 p-8 rounded-[2rem] border-l-8 border-primary shadow-sm italic text-dark text-lg leading-relaxed">
                "bananna Mango bd মূলত রাজশাহীর আম-এর একটি সহ-উদ্যোগ। আমাদের লক্ষ্য রাজশাহীর আমের সঠিক তথ্য এবং রিয়েল-টাইম বাজার দর সবার কাছে পৌঁছে দেওয়া।"
              </div>
              <p>
                ব্যানানা আম মূলত থাইল্যান্ডের একটি আভিজাত্যময় জাত যা এখন রাজশাহীর উর্বর মাটিতে অনন্য স্বাদে ফলছে। এর লম্বাটে গড়ন এবং পাতলা আটির কারণে এটি বর্তমানে আমের বাজারে ১ নম্বর প্রিমিয়াম আম।
              </p>
              <p>
                রাজশাহীর আবহাওয়া এবং আমাদের বিশেষ যত্ন এই আমকে দিয়েছে এক জাদুকরী সুগন্ধ ও মিষ্টতা।
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: "আঁশ যুক্ত", value: "০%", color: "text-primary" },
                { label: "মিষ্টি স্বাদ", value: "৯৯%", color: "text-secondary" },
                { label: "কোয়ালিটি", value: "প্রিমিয়াম", color: "text-dark" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-default"
                >
                  <span className={`block text-2xl md:text-3xl font-black ${stat.color} mb-1`}>{stat.value}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
