"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { blurDataURL } from "@/lib/utils";

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary"
            >
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Smarter Strategies. Stronger Businesses.
            </motion.div>

            <motion.h1
              variants={textVariants}
              transition={{ duration: 0.5 }}
              className="text-[36px] sm:text-5xl lg:text-[58px] leading-[1.1] mb-5 text-text-dark"
            >
              Powering Business Growth Through Strategic Insight
            </motion.h1>

            <motion.p
              variants={textVariants}
              transition={{ duration: 0.5 }}
              className="text-text-muted text-base sm:text-lg leading-relaxed max-w-md mb-8 mx-auto lg:mx-0"
            >
              Through data-driven strategies, operational excellence, and hands-on expertise, we empower your team to make better decisions.
            </motion.p>

            <motion.div
              variants={textVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button className="group gap-2 w-full sm:w-auto">
                Start Your Growth Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Inline stat chip on mobile */}
              <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm lg:hidden">
                <BarChart3 size={18} className="text-primary" />
                <span className="text-sm font-medium text-text-dark">Join <strong>321</strong> Businesses</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — mosaic on desktop, single hero image on mobile */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Mobile: single image */}
            <div className="lg:hidden rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Business Professional"
                fill
                priority
                className="object-cover object-[top]"
                placeholder="blur"
                blurDataURL={blurDataURL(800, 600)}
              />
              {/* Mini stat badge on mobile image */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" />
                <span className="text-sm font-serif font-bold text-text-dark">321 Business</span>
              </div>
            </div>

            {/* Desktop: mosaic grid */}
            <motion.div
              className="hidden lg:block relative h-[580px] w-full"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="absolute top-0 left-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500 z-10"
              >
                <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Business Professional" fill priority className="object-cover" placeholder="blur" blurDataURL={blurDataURL(600, 400)} />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                className="absolute top-[10%] right-0 w-[40%] h-[35%] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500"
              >
                <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" alt="Meeting" fill className="object-cover" placeholder="blur" blurDataURL={blurDataURL(400, 300)} />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="absolute bottom-0 left-[5%] w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500"
              >
                <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80" alt="Handshake" fill className="object-cover" placeholder="blur" blurDataURL={blurDataURL(500, 300)} />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="absolute bottom-[5%] right-[5%] w-[40%] h-[45%] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500 z-20"
              >
                <Image src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=400&q=80" alt="Team discussion" fill className="object-cover" placeholder="blur" blurDataURL={blurDataURL(400, 300)} />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2 z-30 border border-gray-50"
              >
                <TrendingUp size={16} className="text-green-500" />
                <span className="font-serif font-bold text-text-dark">321 Business</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
