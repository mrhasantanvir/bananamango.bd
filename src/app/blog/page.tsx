"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const displayPosts = [...posts].reverse();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-40 pb-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-dark transition-colors mb-8 group font-black uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            হোমপেজে ফিরুন
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            নলেজ <span className="text-gradient">সেন্টার</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            আমের আভিজাত্য, স্বাদ এবং সঠিক যত্ন সম্পর্কে বিস্তারিত জানুন আমাদের সবশেষ তথ্য ও টিপস থেকে।
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(251,191,36,0.3)] border border-gray-100 transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full relative"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-primary group-hover:w-full transition-all duration-700 z-20" />
                
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.keywords.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  
                  <p className="text-gray-500 mb-10 flex-grow leading-relaxed font-medium text-lg line-clamp-3 group-hover:text-gray-600 transition-colors">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-gray-100 mt-auto">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <Calendar size={14} className="text-primary/60 group-hover:text-primary transition-colors" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <User size={14} className="text-primary/60 group-hover:text-primary transition-colors" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-dark transition-all shadow-sm group-hover:shadow-lg active:scale-90"
                    >
                      <ArrowUpRight size={28} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
