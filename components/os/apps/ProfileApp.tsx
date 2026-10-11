"use client";

import Image from "next/image";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  FileDown,
  Mail,
  MapPin,
  Sparkles,
  Cpu,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";

interface ProfileAppProps {
  onOpenResumeModal: () => void;
}

export default function ProfileApp({ onOpenResumeModal }: ProfileAppProps) {
  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* Top Identity Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Real Profile Photo (Strictly unretouched, exact source image) */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-md shrink-0 bg-white">
          <Image
            src="/profile.jpg"
            alt={personalData.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bio & System Tag */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/60 border border-blue-200 text-xs font-mono text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span>SYSTEM ID: DEVELOPER // STATUS: ONLINE</span>
          </div>

          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {personalData.name}
            </h2>
            <div className="text-sm font-semibold text-blue-600 font-mono mt-0.5">
              {personalData.title}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            {personalData.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition hover:scale-102 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 transition"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{personalData.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Verified Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-mono text-slate-500 block">UNDERGRADUATE CGPA</span>
          <span className="text-2xl font-black text-blue-600 mt-1 block">8.38</span>
          <span className="text-[11px] text-slate-500">B.Tech CSE (AI)</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-mono text-slate-500 block">LEETCODE PROBLEMS</span>
          <span className="text-2xl font-black text-amber-600 mt-1 block">182+</span>
          <span className="text-[11px] text-slate-500">C++ Algorithmic</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-mono text-slate-500 block">CLOUD CREDENTIAL</span>
          <span className="text-xs font-black text-slate-900 mt-2 block leading-tight">
            AWS Certified Cloud Practitioner
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-mono text-slate-500 block">PRODUCTION SYSTEMS</span>
          <span className="text-2xl font-black text-emerald-600 mt-1 block">06</span>
          <span className="text-[11px] text-slate-500">Live Deployed & OSS</span>
        </div>
      </div>

      {/* Verified Education & Schooling */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          Academic Background
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono font-bold text-blue-600">{edu.period}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {edu.score}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
              <p className="text-xs text-slate-600">{edu.institution}, {edu.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Verification Links */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-slate-500 font-bold uppercase">Official Channels:</span>
        <div className="flex items-center gap-4">
          <a
            href={personalData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-semibold"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={personalData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-semibold"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalData.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-semibold"
          >
            <LeetCodeIcon className="w-4 h-4" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </div>
  );
}
