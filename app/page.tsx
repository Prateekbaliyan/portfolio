"use client";

import { useState } from "react";
import Desktop from "@/components/os/Desktop";
import RecruiterMode from "@/components/os/RecruiterMode";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [recruiterModeOpen, setRecruiterModeOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600/15 selection:text-blue-900">
      {/* PRATEEK OS Interactive Desktop Environment */}
      <Desktop
        onOpenRecruiter={() => setRecruiterModeOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Recruiter Mode (Under 30 Seconds Comprehensive View) */}
      {recruiterModeOpen && (
        <RecruiterMode
          onClose={() => setRecruiterModeOpen(false)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      )}

      {/* ATS-Friendly PDF Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
