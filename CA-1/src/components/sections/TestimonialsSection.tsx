"use client";

import { useCallback, useEffect, useState, memo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blurDataURL } from "@/lib/utils";
import { motion } from "framer-motion";

const TestimonialCard = memo(function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-[#1A1A2E] rounded-2xl p-8 h-full flex flex-col border border-white/5 hover:border-primary/20 transition-colors">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      <p className="text-white/90 text-lg leading-relaxed italic mb-8 grow">
        &quot;{testimonial.quote}&quot;
      </p>

      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/30">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL(150, 150)}
          />
        </div>
        <div>
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-primary text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
});

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-14 lg:py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="bg-white/5 border border-white/10 text-primary">Testimonials</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-tight text-white">
            Real stories from real businesses we&apos;ve helped transform.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-6"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:scale-105 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "bg-primary w-6" : "bg-white/30 w-2.5 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:scale-105 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
