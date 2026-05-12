"use client";

import { useCallback, useEffect, useState, memo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blurDataURL } from "@/lib/utils";
import { motion } from "framer-motion";

const PortfolioCard = memo(function PortfolioCard({ item }: { item: typeof portfolio[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group h-full flex flex-col">
      <div className="h-[200px] relative overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={blurDataURL(800, 200)}
        />
      </div>
      <div className="p-5 flex flex-col grow">
        <div className="mb-3">
          <span className="inline-block bg-primary-light text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        <h3 className="text-text-dark text-lg font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-text-muted text-sm mt-auto">{item.location}</p>
      </div>
    </div>
  );
});

export default function PortfolioSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-14 lg:py-24 bg-bg-section relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Our Portfolio</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-tight text-text-dark">
            Each project is a story of smart decisions and lasting impact
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 pl-4"
                >
                  <PortfolioCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-text-dark hover:text-primary hover:shadow-lg hover:scale-105 transition-all disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "bg-primary w-6" : "bg-gray-300 w-2.5 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-text-dark hover:text-primary hover:shadow-lg hover:scale-105 transition-all disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
