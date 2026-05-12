"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedCounter({ 
  value, 
  suffix = "",
  className 
}: { 
  value: number; 
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(duration / end, 10);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / incrementTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className={cn("font-serif font-bold text-text-dark text-4xl lg:text-5xl block", className)}>
      {count}{suffix}
    </span>
  );
}
