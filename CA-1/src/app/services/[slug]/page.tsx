import type { Metadata } from "next";
import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blurDataURL } from "@/lib/utils";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return { title: `${service.title} | Opax Services`, description: `Learn how Opax helps businesses with ${service.title.toLowerCase()}.` };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();
  return (
    <main className="min-h-screen">
      <div className="pt-24 pb-16 bg-dark">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">Our Services</span>
          <h1 className="text-4xl md:text-6xl leading-tight text-white">{service.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-4xl py-24">
        <div className="rounded-2xl overflow-hidden h-[400px] relative mb-12 shadow-xl">
          <Image src={service.image} alt={service.title} fill className="object-cover" placeholder="blur" blurDataURL={blurDataURL(800, 400)} />
        </div>
        <p className="text-text-muted text-xl leading-relaxed">Full service details and case studies are coming soon. This page is pre-generated at build time using dynamic routing with Next.js App Router.</p>
      </div>
    </main>
  );
}
