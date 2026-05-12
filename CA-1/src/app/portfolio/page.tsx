import type { Metadata } from "next";
import { portfolio } from "@/lib/portfolio";
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio | Opax Business Consulting",
  description: "Explore Opax's portfolio of strategic consulting projects across industries and geographies.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-bg-section">
      <div className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl leading-tight text-text-dark">
            Each project is a story of smart decisions and lasting impact
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <div className="h-[220px] relative overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" placeholder="blur" blurDataURL={blurDataURL(800, 220)} />
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary-light text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">{item.category}</span>
                <h2 className="text-text-dark text-lg font-medium mb-2">{item.title}</h2>
                <p className="text-text-muted text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
