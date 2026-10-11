"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import {
  Menu,
  X,
  Command,
  FileText,
  Terminal,
} from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
}

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "SYSTEMS", href: "#projects" },
  { name: "STACK", href: "#skills" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar({
  onOpenCommandPalette,
  onOpenResumeModal,
  onOpenTerminal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["hero", "projects", "skills", "about", "experience", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between transition-all duration-300 px-4 py-2 sm:px-5 sm:py-2 rounded-full ${
            isScrolled
              ? "bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              : "bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-xs"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & Live System Status */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs shadow-xs transition-transform group-hover:scale-105">
                AI
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
                  PRATEEK // AI LAB
                </span>
                <span className="hidden sm:flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  SYSTEM ONLINE
                </span>
              </div>
            </a>
          </div>

          {/* Minimal Floating Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const targetId = item.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50/90 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Terminal CLI Trigger */}
            <button
              onClick={onOpenTerminal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
              title="Open Laboratory Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>CLI</span>
            </button>

            {/* Quick Resume CTA */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-all cursor-pointer"
              title="Download & View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Resume</span>
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all cursor-pointer"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-slate-400" />
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded border border-slate-200 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none rounded-xl bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM ONLINE
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-1 text-xs font-mono text-slate-700 px-2.5 py-1 bg-slate-100 rounded-lg border border-slate-200"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>CLI Terminal</span>
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-xs font-mono font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 text-white text-xs font-mono font-bold shadow-xs"
            >
              <FileText className="w-4 h-4" />
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
