"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="py-24 bg-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-6xl leading-tight">Let&apos;s Build Something Great Together</h1>
        </div>
      </div>

      {/* Body */}
      <div className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <div>
              <h2 className="text-3xl text-text-dark mb-4">Get in Touch</h2>
              <p className="text-text-muted text-lg leading-relaxed">Ready to transform your business? Our team of expert consultants is here to help you navigate challenges and uncover new growth opportunities.</p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary flex-shrink-0"><Mail size={22} /></div><div><p className="text-xs text-text-muted uppercase tracking-wider">Email</p><p className="text-text-dark font-medium">info@example.com</p></div></div>
              <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary flex-shrink-0"><Phone size={22} /></div><div><p className="text-xs text-text-muted uppercase tracking-wider">Phone</p><p className="text-text-dark font-medium">+1 (234) 456-7891</p></div></div>
              <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary flex-shrink-0"><MapPin size={22} /></div><div><p className="text-xs text-text-muted uppercase tracking-wider">Address</p><p className="text-text-dark font-medium">123 Business Avenue, New York, NY 10001</p></div></div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center p-12 bg-primary-light rounded-2xl">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-6"><Send size={28} className="text-white" /></div>
                  <h3 className="text-2xl text-text-dark mb-3">Message Sent!</h3>
                  <p className="text-text-muted">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5 bg-bg-light p-8 rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label className="text-sm font-medium text-text-dark mb-2 block">First Name</label><input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white" /></div>
                  <div><label className="text-sm font-medium text-text-dark mb-2 block">Last Name</label><input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white" /></div>
                </div>
                <div><label className="text-sm font-medium text-text-dark mb-2 block">Email Address</label><input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white" /></div>
                <div><label className="text-sm font-medium text-text-dark mb-2 block">Company (optional)</label><input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white" /></div>
                <div><label className="text-sm font-medium text-text-dark mb-2 block">Message</label><textarea rows={5} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white resize-none" /></div>
                <Button type="submit" className="w-full gap-2 group"><Send size={16} className="group-hover:translate-x-1 transition-transform" />Send Message</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
