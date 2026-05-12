import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Opax Business Consulting",
  description: "Explore Opax's latest insights, articles, and thought leadership on business transformation and strategic growth.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Insights
          </span>
          <h1 className="text-4xl md:text-5xl leading-tight text-text-dark">
            Explore our latest thinking on business transformation.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" placeholder="blur" blurDataURL={blurDataURL(600, 224)} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-text-dark text-xs font-semibold px-3 py-1.5 rounded-full">{post.date}</div>
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="inline-block bg-primary-light text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">{post.category}</span>
                <h2 className="text-text-dark text-lg font-serif leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-3 transition-all">
                    Read more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
