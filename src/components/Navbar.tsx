"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LogoName from "@/components/ui/LogoName";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);


  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => {

      if (isScrolling) return; // ⛔ ignore during programmatic scroll

      setScrolled(window.scrollY > 50);

      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        if (contactRect.top <= 150 && contactRect.bottom >= 150) {
          setActive("");
          return;
        }
      }

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  /* Smooth scroll with offset */
  const scrollToSection = (id: string) => {

    const el = document.querySelector(id);
    if (!el) return;

    const offset = 100;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    setIsScrolling(true);
    setActive(id); // Immediately highlight clicked link

    window.scrollTo({ top: y, behavior: "smooth" });

    setIsOpen(false);

    // Re-enable scroll detection after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 600); // match scroll duration
  };

  return (
    <>
      {/* Floating Wrapper */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <motion.nav
          // animate={{ scale: scrolled ? 0.96 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="flex items-center justify-between px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          {/* LOGO */}
          <motion.button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center group"
            whileHover={{
              y: [-3, 3, -3],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            
            <LogoName className="w-8 h-8 text-yellow-400 group-hover:text-white transition-colors duration-300" />

            <span className="font-space text-xl tracking-wider text-white transition-colors duration-300 group-hover:text-yellow-400">
              .B.T
            </span>
          </motion.button>

          {/* CENTER NAV LINKS (Your Original Style) */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-1.5 rounded-full font-space transition-all duration-300 ${active === link.href
                  ? "text-black"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="floating-pill"
                    transition={{ type: "tween", duration: 0.1 }}
                    className="absolute inset-0 bg-yellow-400 rounded-full"
                  />
                )}

                <span className="relative z-10">
                  {link.name}
                </span>
              </button>
            ))}
          </div>

          {/* CONTACT BUTTON (Your Original Glow Style) */}

          <motion.button

            onClick={() => scrollToSection("#contact")}
            className=" hidden md:inline-flex relative px-7 py-2 rounded-2xl bg-yellow-400 text-black font-space font-medium tracking-wide overflow-hidden backdrop-blur-md "
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(250,204,21,0.35)", transition: { duration: 0.3, ease: "easeOut" } }}
            whileTap={{ scale: 0.97 }}
          >

            <span className="relative z-10">Contact Me </span>

            <motion.div
              className="absolute inset-0 bg-yellow-300 opacity-30 blur-xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </motion.nav>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              fixed top-28 left-1/2 -translate-x-1/2 z-40
              w-[90%] max-w-sm
              rounded-2xl
              bg-[#24232A]
              border border-white/10
              shadow-2xl
              p-6
              flex flex-col items-center gap-6
            "
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-space text-gray-300 hover:text-yellow-400 text-lg transition"
              >
                {link.name}
              </button>
            ))}

            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 rounded-2xl bg-yellow-400 text-black font-space font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
