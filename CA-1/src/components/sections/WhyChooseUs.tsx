"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blurDataURL } from "@/lib/utils";

const usps = [
  "Your Best Management Partner, Not Just a Consultant",
  "Key Business Decisions Deserve Expert Guidance",
  "Custom Strategies, Clear Advice, Real Protection",
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 lg:py-24 bg-bg-light relative">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Why Choose Us</SectionLabel>

            <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight mb-5 text-text-dark">
              The Consulting Powerhouse Behind Business Success
            </h2>

            <p className="text-text-muted text-base lg:text-lg leading-relaxed mb-7">
              Our clients choose us because we solve problems others can&apos;t. From day one, we focus on results, uncovering growth opportunities.
            </p>

            <div className="space-y-3 mb-8">
              {usps.map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                >
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-text-dark font-medium text-sm sm:text-base">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button>Work With Us →</Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Business Consultant"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                placeholder="blur"
                blurDataURL={blurDataURL(800, 600)}
              />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-5 left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 max-w-[240px] sm:max-w-[280px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0">
                <Trophy size={20} />
              </div>
              <div>
                <p className="font-serif font-bold text-text-dark text-base leading-none mb-0.5">Top Rated</p>
                <p className="text-xs text-text-muted">Award winning consulting</p>
              </div>
            </motion.div>

            <p className="mt-10 sm:mt-12 text-text-muted italic border-l-2 border-primary pl-4 text-sm hidden sm:block">
              &quot;We don&apos;t just offer advice, we build solutions that move the needle. Our team of senior consultants brings decades of experience...&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
