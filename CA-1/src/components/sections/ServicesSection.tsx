"use client";

import { useState, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn, blurDataURL } from "@/lib/utils";

const extraImages = [
  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
];

const ServiceCard = memo(function ServiceCard({ title, image, index }: { title: string; image: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-[#1A1A2E] rounded-2xl p-4 sm:p-6 group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-primary/40 hover:shadow-[0_0_25px_rgba(108,92,231,0.15)] cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden mb-4 h-[160px] sm:h-[200px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={blurDataURL(600, 200)}
        />
      </div>
      <h3 className="text-white text-base sm:text-lg font-medium">{title}</h3>
    </motion.div>
  );
});

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) || services[0];
  const gridItems = [
    { title: activeService.title, image: activeService.image },
    { title: `${activeService.title} Phase 2`, image: extraImages[0] },
    { title: `${activeService.title} Phase 3`, image: extraImages[1] },
    { title: `${activeService.title} Advanced`, image: extraImages[2] },
  ];

  return (
    <section className="py-14 lg:py-24 bg-dark text-white relative">
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="bg-white/5 border border-white/10 text-primary">Our Services</SectionLabel>
          <h2 className="text-2xl sm:text-3xl lg:text-[44px] leading-tight text-white">
            High-Impact Consulting For Forward-Thinking Brands
          </h2>
        </motion.div>

        {/* Tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 sm:gap-3 mb-10 lg:mb-14 overflow-x-auto pb-2 lg:justify-center lg:flex-wrap scrollbar-hide">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0",
                activeTab === service.id
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(108,92,231,0.4)]"
                  : "bg-transparent text-gray-400 border border-gray-700 hover:text-white hover:border-gray-500"
              )}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {gridItems.map((item, index) => (
              <ServiceCard key={`${activeTab}-${index}`} title={item.title} image={item.image} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
