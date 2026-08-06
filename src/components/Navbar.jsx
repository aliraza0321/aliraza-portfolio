import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for highlighting
  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
<header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/85 backdrop-blur-xl border-b border-accent/10 ${
        scrolled ? "shadow-lg shadow-accent/5" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center text-white font-display font-bold shadow-lg shadow-accent/30 group-hover:rotate-6 transition-transform">
            AR
          </span>
          <span className="font-display font-bold text-lg text-ink">
            Ali <span className="text-gradient">Raza</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-ink/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 text-ink p-2 hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-accent/10"
          >
            {links.map((link) => (
              <li key={link.href} className="border-b border-ink/5">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 text-sm font-medium transition-colors ${
                    active === link.href.slice(1)
                      ? "text-accent bg-accent/10"
                      : "text-ink/80 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
