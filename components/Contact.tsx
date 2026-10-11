"use client";

import { useState } from "react";
import { personalData } from "@/data/personal";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry from ${senderName || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
            Let&apos;s Build Something Intelligent.
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed pt-2 font-sans">
            Open to software engineering, AI/ML, full-stack, computer vision, and
            related internship opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-2 font-bold">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-base sm:text-lg font-mono font-bold text-slate-900 hover:text-blue-600 transition-colors block break-all"
              >
                {personalData.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-cyan-300 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-2 font-bold">
                  <Phone className="w-4 h-4 text-cyan-600" />
                  Phone / WhatsApp
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-cyan-600 transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-600" />
                      <span className="text-cyan-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${personalData.phone}`}
                className="text-base sm:text-lg font-mono font-bold text-slate-900 hover:text-cyan-600 transition-colors block"
              >
                +91 {personalData.phone}
              </a>
            </div>

            {/* 4 Social Action Buttons: EMAIL, LINKEDIN, GITHUB, LEETCODE */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>EMAIL</span>
              </a>

              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs transition-all shadow-xs"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs transition-all shadow-xs"
              >
                <GitHubIcon className="w-4 h-4 text-slate-700" />
                <span>GITHUB</span>
              </a>

              <a
                href={personalData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs transition-all shadow-xs"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-600" />
                <span>LEETCODE</span>
              </a>
            </div>

            {/* Location pill */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600 shadow-2xs">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Based in {personalData.location} • Open to Remote &amp; On-Site Internships</span>
            </div>
          </div>

          {/* Quick Message Form (Right 7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 font-sans">
                Direct Lab Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans">
                Sends inquiry directly to {personalData.email}.
              </p>
            </div>

            <form onSubmit={handleQuickSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Engineering Lead / Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. team@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 font-semibold">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Discussing software/AI engineering internship opportunities or technical systems..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(37,99,235,0.25)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Laboratory Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
