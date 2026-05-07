"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="history" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/banana-mango.png" 
                alt="ব্যানানা আম" 
                width={800} 
                height={600} 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">পরিচিতি ও ইতিহাস</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ব্যানানা আমের <span className="text-gradient">নামকরণ ও উৎস</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="font-bold text-dark italic">
                bananna Mango bd মূলত রাজশাহীর আম-এর একটি সহ-উদ্যোগ। আমাদের লক্ষ্য রাজশাহীর আমের সঠিক তথ্য এবং রিয়েল-টাইম বাজার দর সবার কাছে পৌঁছে দেওয়া।
              </p>
              <p>
                ব্যানানা আম মূলত থাইল্যান্ডের একটি জাত যা এখন বাংলাদেশে (বিশেষ করে রাজশাহীতে) ব্যাপক জনপ্রিয়। এর লম্বাটে গড়ন এবং পাতলা আটির কারণে এটি বর্তমানে আমের বাজারে প্রিমিয়াম ক্যাটাগরিতে আছে।
              </p>
              <p>
                রাজশাহীর মাটি ও জলবায়ু এই আমের জন্য অত্যন্ত উপযোগী, যার ফলে এখানকার ব্যানানা আম স্বাদে ও গন্ধে হয় অতুলনীয়। আম প্রেমীদের কাছে এটি এখন অন্যতম পছন্দের নাম।
              </p>
            </div>
            
            <div className="mt-10 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-primary">০%</span>
                <span className="text-sm text-gray-500 uppercase font-medium">আঁশ যুক্ত</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <span className="block text-3xl font-bold text-primary">৯৯%</span>
                <span className="text-sm text-gray-500 uppercase font-medium">মিষ্টি স্বাদ</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <span className="block text-3xl font-bold text-primary">প্রিমিয়াম</span>
                <span className="text-sm text-gray-500 uppercase font-medium">কোয়ালিটি</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
