"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { blurDataURL } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "Global Reach" },
  { value: 35, suffix: "+", label: "Industries Served" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Businesses" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 2, suffix: "M+", label: "Revenue Unlocked" },
];

const aboutImages = [
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80", alt: "Office team" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80", alt: "Consulting meeting" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=400&q=80", alt: "Strategy planning" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80", alt: "Teamwork" },
];

export default function AboutSection() {
  return (
    <section className="py-14 lg:py-24 bg-white relative">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12 lg:mb-20">

          {/* Left Column (Images) — hidden on mobile, shown on lg */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {aboutImages.map((img, i) => (
                <div
                  key={img.alt}
                  className={`rounded-2xl overflow-hidden h-[200px] xl:h-[240px] relative ${i === 1 ? "mt-8" : i === 2 ? "-mt-8" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={blurDataURL(400, 300)}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Content) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>About Us</SectionLabel>

            <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight mb-6 text-text-dark">
              We&apos;re results driven business consulting firm dedicated to helping companies unlock growth, streamline operations, and thrive in competitive markets.
            </h2>

            {/* Single image shown only on mobile between text and button */}
            <div className="lg:hidden mb-6 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-md">
              <Image
                src={aboutImages[0].src}
                alt={aboutImages[0].alt}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataURL(400, 225)}
              />
            </div>

            <Button variant="outline" className="group gap-2">
              Start With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="border-y border-gray-100 py-8 lg:py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-y-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="px-3 text-center border-r border-gray-100 last:border-r-0"
                style={{ borderRight: i === 2 || i === 5 ? "none" : undefined }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-2xl sm:text-3xl lg:text-4xl" />
                <p className="text-xs sm:text-sm text-text-muted mt-1 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
