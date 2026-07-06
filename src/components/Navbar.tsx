"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Vision", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Learnixa EdTech", href: "/learnixa" },
    { name: "Raha Infra", href: "/infra" },
    { name: "Big Think Tech", href: "/bigthink" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-black/5"
          : "bg-transparent py-6 border-white/10"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 w-full max-w-[1280px] mx-auto">
        <Link href="/" className={`font-plus-jakarta text-[22px] font-extrabold tracking-tighter transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
          RAHA GROUP
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm font-semibold pb-1 border-b-2 transition-all duration-300 ${
                  isActive
                    ? scrolled ? "border-black text-black" : "border-white text-white"
                    : "border-transparent hover:text-secondary " + (scrolled ? "text-[#444748]" : "text-white/80")
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className={`hidden sm:inline-block px-6 py-2.5 rounded-lg font-inter text-sm font-semibold transition-all ${
              scrolled
                ? "bg-black text-white hover:bg-black/90"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            Contact Us
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg"
          >
            <span className={`material-symbols-outlined text-[28px] ${scrolled ? "text-black" : "text-white"}`}>
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 flex flex-col p-6 gap-4 shadow-lg animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-inter text-base font-semibold py-2 transition-colors ${
                pathname === link.href ? "text-[#735b28]" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-black text-white py-3 rounded-lg font-inter text-sm font-semibold hover:bg-black/90 transition-all mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
