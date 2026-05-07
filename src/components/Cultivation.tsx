"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sprout, CloudRain, ShieldCheck } from "lucide-react";
import Image from "next/image";

const Cultivation = () => {
  const steps = [
    {
      title: "মাটি তৈরি",
      desc: "উর্বর দোঁয়াশ মাটি ব্যানানা আম চাষের জন্য সবচেয়ে উপযোগী। জমি চাষ দিয়ে তাতে জৈব সার মিশিয়ে নিতে হবে।",
      icon: <Sprout className="text-primary" size={32} />,
    },
    {
      title: "রোপণের সময়",
      desc: "জুন থেকে জুলাই মাস হলো চারা রোপণের সঠিক সময়। তবে সেচ সুবিধা থাকলে সারা বছরই রোপণ করা যায়।",
      icon: <CloudRain className="text-primary" size={32} />,
    },
    {
      title: "সার প্রয়োগ",
      desc: "গাছের বৃদ্ধির জন্য নিয়মিত জৈব সার এবং প্রয়োজনীয় খনিজ সার ব্যবহার করতে হবে।",
      icon: <CheckCircle2 className="text-primary" size={32} />,
    },
    {
      title: "পোকা দমন",
      desc: "মুকুল আসার পর এবং ফল বড় হওয়ার সময় প্রাকৃতিক উপায়ে পোকা দমনে ব্যবস্থা নিতে হবে।",
      icon: <ShieldCheck className="text-primary" size={32} />,
    },
  ];

  return (
    <section id="care" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">চাষ ও যত্ন</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">কিভাবে করবেন <span className="text-gradient">সঠিক চাষ পদ্ধতি</span></h3>
          <p className="text-lg text-gray-600">
            বাণিজ্যিক ভাবে বা বাড়ির আঙিনায় ব্যানানা আম চাষ করতে চাইলে নিচের সহজ ধাপগুলো অনুসরণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-dark rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 p-12 md:p-20">
            <h4 className="text-3xl font-bold text-white mb-6">মুকুল আসার পরের বিশেষ যত্ন</h4>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              ব্যানানা আমের বিশেষত্ব হলো এর ফলন। মুকুল আসার পর থেকে নিয়মিত পানি সেচ এবং ছত্রাকনাশক ব্যবহার করলে আমের ঝরে পড়া রোধ করা যায়। প্রাকৃতিক প্রতিকার হিসেবে নিম তেল ব্যবহার করা যেতে পারে।
            </p>
            <Link
              href="https://rajshahiram.com.bd/ProductDetails/M114"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
            >
              উন্নত জাতের চারা অর্ডার করুন <ArrowRight size={20} />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full h-80 lg:h-full relative min-h-[400px]">
            <Image 
              src="/sapling.png" 
              alt="Mango Sapling" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default Cultivation;
