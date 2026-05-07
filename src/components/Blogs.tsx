"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/posts";

const Blogs = () => {
  // Show only the first 6 posts on the home page
  const displayPosts = posts.slice(0, 6);

  return (
    <section id="blogs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">আমাদের ব্লগ</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              ব্যানানা আম সম্পর্কে <span className="text-gradient">আরও জানুন</span>
            </h3>
          </div>
          <Link 
            href="#" 
            className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all"
          >
            সব ব্লগ দেখুন <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary/30 transition-all hover:shadow-2xl group flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.keywords.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>
                
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    <ArrowUpRight size={20} />
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
