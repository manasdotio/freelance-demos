import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Opax Business Consulting",
  description: "Learn about Opax — a results-driven consulting firm helping companies unlock growth, streamline operations, and thrive in competitive markets.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="py-32 text-center container mx-auto px-4 max-w-3xl">
        <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl leading-tight text-text-dark mb-6">
          We&apos;re results driven business consulting firm
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          Dedicated to helping companies unlock growth, streamline operations, and thrive in competitive markets. Our team of senior consultants brings decades of experience and a track record of success.
        </p>
      </div>
    </main>
  );
}
