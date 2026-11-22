"use client";

import React from 'react';
import { BookOpen, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  stage: 'setup' | 'exam' | 'result';
  timeRemaining?: number; // seconds
  onExitExam?: () => void;
  examTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  stage,
  timeRemaining,
  onExitExam,
  examTitle = 'คณิตศาสตร์ประยุกต์ A-Level',
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining !== undefined && timeRemaining < 300 && timeRemaining > 0;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-100 font-bold text-lg">
            ∑
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 tracking-tight text-base sm:text-lg">
                A-Level Math Sim
              </span>
              <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60 px-2 py-0.5 rounded-full">
                ม.ปลาย
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              {stage === 'exam' ? examTitle : 'ระบบจำลองข้อสอบและเฉลยละเอียดแบบ Step-by-Step'}
            </p>
          </div>
        </div>

        {/* Center / Right: Dynamic Controls based on Stage */}
        <div className="flex items-center gap-4">
          {stage === 'exam' && timeRemaining !== undefined && (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all ${
                isLowTime
                  ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {isLowTime ? (
                <AlertTriangle className="w-4 h-4 text-rose-500" />
              ) : (
                <Clock className="w-4 h-4 text-indigo-600" />
              )}
              <span className="font-mono text-base">{formatTime(timeRemaining)}</span>
            </div>
          )}

          {stage === 'exam' && onExitExam && (
            <button
              onClick={onExitExam}
              className="text-xs sm:text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-rose-200 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">ออกจากการสอบ</span>
            </button>
          )}

          {stage === 'setup' && (
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>คลังข้อสอบอัปเดต A-Level 67-68</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
