"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blurDataURL } from "@/lib/utils";
import { memo } from "react";

const BlogCard = memo(function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <motion.article
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={blurDataURL(600, 224)}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-text-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
          {post.date}
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="mb-4">
          <span className="inline-block bg-primary-light text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <h3 className="text-lg font-serif text-text-dark leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-3 transition-all"
          >
            Read more <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

export default function BlogSection() {
  return (
    <section className="py-14 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Top Articles & Insights</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-tight text-text-dark">
            Explore our latest thinking on business transformation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
