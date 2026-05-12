"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pages", href: "/about", hasDropdown: true, dropdownItems: [{ name: "About Us", href: "/about" }, { name: "Contact", href: "/contact" }] },
  { name: "Services", href: "/services", hasDropdown: true, dropdownItems: [{ name: "All Services", href: "/services" }, { name: "Business Planning", href: "/services/business-planning" }, { name: "Financial Consulting", href: "/services/financial-consulting" }] },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog", hasDropdown: true, dropdownItems: [{ name: "All Articles", href: "/blog" }, { name: "Leadership", href: "/blog" }, { name: "Strategy", href: "/blog" }] },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-dark text-white/80 py-2 text-xs">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          <p>
            Are you Ready to Free Business Consulting Today?{" "}
            <Link href="#" className="text-primary hover:text-white transition-colors ml-1 font-medium">
              Contact Us
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} className="text-primary" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} className="text-primary" />
              <span>+1 (234) 456-7891</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled ? "bg-white shadow-md border-transparent py-3" : "bg-white border-gray-100 py-4"
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-serif font-bold text-text-dark tracking-tight">Opax</span>
            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                      isActive ? "text-primary" : "text-text-dark hover:text-primary"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className={cn("transition-colors", isActive ? "text-primary" : "text-gray-400 group-hover:text-primary")} />}
                  </Link>
                  {isActive && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full" />}

                  {/* Dropdown */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="absolute top-full left-0 mt-3 w-52 bg-white border border-gray-100 shadow-xl rounded-xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      {link.dropdownItems.map((item) => (
                        <Link key={item.name} href={item.href} className="block px-4 py-2.5 text-sm text-text-muted hover:text-primary hover:bg-bg-section rounded-lg transition-colors">{item.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Button>Free Consulting</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-text-dark p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[101] flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-gray-100">
                <span className="text-2xl font-serif font-bold text-text-dark">Opax</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-muted hover:text-text-dark bg-gray-50 rounded-full">
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 flex-1 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium flex items-center justify-between border-b border-gray-50 pb-3 transition-colors",
                          isActive ? "text-primary" : "text-text-dark"
                        )}
                      >
                        {link.name}
                        {link.hasDropdown && <ChevronDown size={18} className="text-gray-400" />}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <Mail size={16} className="text-primary" /> info@example.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <Phone size={16} className="text-primary" /> +1 (234) 456-7891
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-gray-100">
                <Button className="w-full">Free Consulting</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
