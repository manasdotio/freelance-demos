import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Opax Blog`, description: `Read '${post.title}' on the Opax consulting insights blog.` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <main className="min-h-screen">
      <div className="py-32 container mx-auto px-4 max-w-3xl text-center">
        <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">{post.category}</span>
        <p className="text-text-muted text-sm mb-4">{post.date}</p>
        <h1 className="text-3xl md:text-5xl leading-tight text-text-dark mb-8">{post.title}</h1>
        <p className="text-text-muted text-lg leading-relaxed">Full article content coming soon. This page is pre-rendered at build time using static params from the blog data file.</p>
      </div>
    </main>
  );
}
