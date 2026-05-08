"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/posts";

const Blogs = () => {
  // Show only the first 6 posts on the home page
  const displayPosts = posts.slice(0, 6);

  return (
    <section id="blogs" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-secondary uppercase tracking-[0.4em] mb-4">নলেজ সেন্টার</h2>
            <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
              আম বিষয়ক <span className="text-gradient">সবশেষ তথ্য ও টিপস</span>
            </h3>
          </div>
          <Link href="#blogs" className="group flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-xl hover:bg-primary transition-all font-black text-dark active:scale-95">
            সবগুলো পড়ুন
            <ArrowUpRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(251,191,36,0.3)] border border-gray-100 transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-primary group-hover:w-full transition-all duration-700" />
              
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.keywords.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors line-clamp-2 tracking-tighter leading-tight">
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
  );
};

export default Blogs;
