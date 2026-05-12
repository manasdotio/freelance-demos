"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We start by thoroughly understanding your business and challenges, to discover opportunities through deep research."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Next, we craft a customized strategy tailored to your goals. It centers on clarity, operational efficiency, and sustainable outcomes."
  },
  {
    number: "03",
    title: "Execution & Implementation",
    description: "With strategy in place, we roll up our sleeves and help you execute — through team training, system setup, and hands-on support."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-14 lg:py-24 bg-white relative">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column — dark card */}
          <motion.div
            className="bg-dark rounded-3xl p-8 sm:p-10 lg:p-14 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -bottom-10 -right-6 text-[140px] sm:text-[200px] font-serif font-bold text-white/5 leading-none select-none pointer-events-none">
              04
            </div>
            <div className="relative z-10">
              <SectionLabel className="bg-white/10 text-primary border border-white/5">How We Work</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight text-white">
                Explore strategic process from idea to execution.
              </h2>
            </div>
          </motion.div>

          {/* Right Column — stepper */}
          <div className="relative pl-2">
            {/* Connecting dashed line */}
            <div className="absolute left-[23px] top-6 bottom-12 w-px border-l border-dashed border-primary/30"></div>

            <div className="space-y-8 sm:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-base sm:text-lg shrink-0 shadow-[0_0_15px_rgba(108,92,231,0.4)]">
                    {step.number}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-lg sm:text-xl font-serif text-text-dark mb-2">{step.title}</h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
