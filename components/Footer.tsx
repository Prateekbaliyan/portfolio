"use client";

import { personalData } from "@/data/personal";
import { Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon, LeetCodeIcon, GitHubIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand & Subtitle */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-extrabold text-slate-900 font-sans tracking-wide">
            {personalData.name.toUpperCase()}
          </div>
          <div className="text-xs font-mono font-medium text-blue-700">
            {personalData.title.toUpperCase()}
          </div>
          <p className="text-xs font-mono text-slate-400 pt-1">
            © 2026 {personalData.name} • Built with curiosity, code &amp; caffeine.
          </p>
        </div>

        {/* Center/Right: Social & Direct Links */}
        <div className="flex items-center gap-3 text-slate-600">
          <a
            href={personalData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={personalData.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 hover:text-amber-600 border border-slate-200 transition-colors"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalData.email}`}
            aria-label="Direct Email"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="ml-2 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
