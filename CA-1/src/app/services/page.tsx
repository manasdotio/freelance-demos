import type { Metadata } from "next";
import { services } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Opax Business Consulting",
  description: "Explore Opax's full range of consulting services: business planning, operational excellence, financial consulting, market research, and digital transformation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">Our Services</span>
          <h1 className="text-4xl md:text-5xl leading-tight text-text-dark">High-Impact Consulting For Forward-Thinking Brands</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block">
              <div className="h-[200px] relative overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" placeholder="blur" blurDataURL={blurDataURL(600, 200)} />
              </div>
              <div className="p-6">
                <h2 className="text-text-dark text-xl font-serif mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">Learn more <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
