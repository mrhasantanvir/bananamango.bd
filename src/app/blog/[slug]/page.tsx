import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Globe, Mail, Link as LinkIcon, Smartphone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | BananaMango.bd`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: ["/banana-mango.png"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[currentIndex];
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Garden Background */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Mango Garden" 
            fill 
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            href="/#blogs" 
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            ফিরে যান
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-primary text-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Premium Guide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Offset */}
      <section className="pb-20 -mt-32 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p className="text-2xl font-bold text-dark border-l-4 border-primary pl-6 py-2">
                  {post.excerpt}
                </p>
                <div className="whitespace-pre-line text-lg">
                  {post.content}
                </div>
                
                <p>
                  ব্যানানা আমের চারা বা ফল সরাসরি বাগান থেকে পেতে <Link href="https://rajshahiram.com.bd/ProductDetails/M114" className="text-primary font-bold hover:underline">এখানে ক্লিক করুন</Link>। আমরা রাজশাহীর সেরা বাগান থেকে ফ্রেশ আম সরবরাহ করি।
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-2xl my-12 italic text-dark font-medium">
                  "রাজশাহীর ব্যানানা আম এখন আমের বাজারে আভিজাত্যের প্রতীক। এর পাতলা আঁটি এবং সুমিষ্ট স্বাদ আপনাকে মুগ্ধ করবেই।"
                </div>

                <div className="mt-16 border-t border-gray-100 pt-12">
                  <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary rounded-full" />
                    প্রয়োজনীয় লিঙ্ক ও যোগাযোগ
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="https://rajshahiram.com.bd" target="_blank" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                        <Globe size={24} className="text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm">অফিসিয়াল ওয়েবসাইট</h4>
                        <p className="text-xs text-gray-400">rajshahiram.com.bd</p>
                      </div>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.rabbil.rajshahimango&hl=en-US&pli=1" target="_blank" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                        <Smartphone size={24} className="text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm">মোবাইল অ্যাপ</h4>
                        <p className="text-xs text-gray-400">Google Play Store</p>
                      </div>
                    </Link>
                    <Link href="https://wa.me/8801707979767" target="_blank" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
                        <MessageCircle size={24} className="text-green-500 group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm">হোয়াটসঅ্যাপ</h4>
                        <p className="text-xs text-gray-400">+8801707979767</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Post Navigation */}
                <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row gap-6">
                  {prevPost && (
                    <Link href={`/blog/${prevPost.slug}`} className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary hover:bg-white hover:shadow-xl transition-all group">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> আগের ব্লগ
                      </p>
                      <h4 className="font-bold text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">{prevPost.title}</h4>
                    </Link>
                  )}
                  {nextPost && (
                    <Link href={`/blog/${nextPost.slug}`} className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary hover:bg-white hover:shadow-xl transition-all group text-right">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 justify-end">
                        পরের ব্লগ <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </p>
                      <h4 className="font-bold text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">{nextPost.title}</h4>
                    </Link>
                  )}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-dark">শেয়ার করুন:</span>
                  <div className="flex gap-2">
                    {[Globe, Mail, LinkIcon].map((Icon, i) => (
                      <button key={i} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                        <Icon size={18} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  {post.keywords.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Shop Ad */}
              <div className="bg-dark text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/40 transition-all" />
                <h4 className="text-2xl font-bold mb-6 relative z-10">সেরা ব্যানানা আম কিনুন</h4>
                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed">
                  সরাসরি বাগান থেকে বাছাই করা প্রিমিয়াম আম এখন আপনার হাতের মুঠোয়। 
                </p>
                <Link 
                  href="https://rajshahiram.com.bd/ProductDetails/M114" 
                  className="bg-primary text-dark font-bold px-8 py-4 rounded-xl block text-center hover:bg-accent transition-all relative z-10"
                >
                  এখনই অর্ডার করুন
                </Link>
              </div>

              {/* Related Posts */}
              <div>
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  আরও পড়ুন
                </h4>
                <div className="space-y-6">
                  {posts.filter(p => p.slug !== slug).slice(0, 5).map((p) => (
                    <Link 
                      key={p.slug} 
                      href={`/blog/${p.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0 relative">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h5 className="font-bold text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {p.title}
                        </h5>
                        <span className="text-sm text-gray-400">{p.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
