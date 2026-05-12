import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">Opax</span>
              <div className="w-2 h-2 rounded-full bg-primary mb-2"></div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're making a positive impact with practical solutions to help businesses and individuals grow with confidence and clear strategy.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-6">Support</h3>
            <ul className="space-y-3">
              {["Privacy Plan", "Pricing Plan", "Contact Us", "Careers", "Blog"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Top Links</h3>
            <ul className="space-y-3">
              {["About Us", "Team", "Portfolio", "Services", "FAQs"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <p>+1 (23) 456-7890</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <p>123 Business Avenue, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 'Opax'. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
