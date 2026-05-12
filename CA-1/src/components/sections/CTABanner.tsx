"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="bg-primary-light rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight text-text-dark mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-text-muted text-lg mb-10">
              Whether you're a startup finding your footing, the right partner makes all the difference. Let's create something remarkable together.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-3.5 rounded-full border border-white/40 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-sm placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="shrink-0 group gap-2">
                Subscribe
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
