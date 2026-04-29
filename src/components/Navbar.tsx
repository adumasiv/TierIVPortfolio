import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT: NAME */}
        <a href="#top">
          <h1 className="font-bold text-lg gradient-name cursor-pointer">
            Avery Dumas IV
          </h1>
        </a>

        {/* CENTER NAV (DESKTOP) */}
        <div className="hidden md:flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#contact" className="nav-link">
            Connect
          </a>
        </div>

        {/* RIGHT: RESUME */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-white/10 transition text-sm"
          >
            Resume ↓
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block nav-link"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block nav-link"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setOpen(false)}
            className="block nav-link"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block nav-link"
          >
            Let's Connect
          </a>

          <a
            href="/resume.pdf"
            download
            className="block mt-4 px-4 py-2 border border-gray-700 rounded-lg text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
