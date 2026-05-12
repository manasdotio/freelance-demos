import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import BlogSection from "@/components/sections/BlogSection";
import CTABanner from "@/components/sections/CTABanner";

// Dynamic imports for heavy carousel components (performance optimization)
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <CTABanner />
    </>
  );
}
