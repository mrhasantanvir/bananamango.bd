"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Users, Utensils } from "lucide-react";

const Recipe = () => {
  const ingredients = [
    "কাঁচা ব্যানানা আম - ১ কেজি",
    "সরিষার তেল - ২ কাপ",
    "পাঁচফোড়ন - ২ টেবিল চামচ",
    "শুকনো লঙ্কা - ৫/৬ টি",
    "হলুদ ও লবন - পরিমাণমতো",
    "চিনি - স্বাদমতো",
  ];

  return (
    <section id="recipe" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/recipe.png"
                alt="ব্যানানা আমের আচার"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 right-10 z-20 bg-primary p-6 rounded-3xl shadow-xl transform rotate-12">
              <span className="block text-4xl font-bold text-dark italic">Best</span>
              <span className="text-sm font-bold uppercase text-dark/70">Recipe 2024</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">রেসিপি কর্ণার</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ব্যানানা আমের <span className="text-gradient">টক-মিষ্টি ঝুরি আচার</span>
            </h3>

            <div className="flex gap-6 mb-10">
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={20} className="text-primary" />
                <span>৪৫ মিনিট</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Users size={20} className="text-primary" />
                <span>পরিবার</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Utensils size={20} className="text-primary" />
                <span>সহজ</span>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" />
                প্রয়োজনীয় উপকরণ
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ingredients.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" />
                প্রস্তুত প্রণালী
              </h4>
              <ol className="space-y-6 text-lg text-gray-600">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">১</span>
                  <p>প্রথমে আমগুলো ধুয়ে খোসা ছাড়িয়ে ঝুরি করে কেটে নিন এবং সামান্য লবন দিয়ে রোদে শুকিয়ে নিন।</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">২</span>
                  <p>কড়াইতে সরিষার তেল গরম করে তাতে পাঁচফোড়ন এবং শুকনো লঙ্কা ফোঁড়ন দিন।</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">৩</span>
                  <p>তেলে আমগুলো ছেড়ে দিন এবং হলুদ ও লবন দিয়ে নাড়তে থাকুন। আম নরম হয়ে এলে চিনি দিয়ে নামিয়ে নিন।</p>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
