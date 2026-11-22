"use client";

import React from 'react';
import { Flag, CheckCircle2 } from 'lucide-react';
import { Question, UserAnswer } from '../types/exam';

interface QuestionPaletteProps {
  questions: Question[];
  userAnswers: Record<string, UserAnswer>;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  userAnswers,
  currentIndex,
  onSelectIndex,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <h3 className="font-semibold text-slate-800 text-sm">ข้อสอบทั้งหมด ({questions.length} ข้อ)</h3>
      </div>

      {/* Grid of Question Numbers */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 gap-2">
        {questions.map((q, idx) => {
          const ans = userAnswers[q.id];
          const isAnswered =
            ans &&
            (ans.selectedChoice !== undefined ||
              (ans.numericAnswer !== undefined && ans.numericAnswer.trim() !== ''));
          const isFlagged = ans?.isMarkedForReview;
          const isCurrent = currentIndex === idx;

          let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';

          if (isCurrent) {
            btnClass = 'ring-2 ring-indigo-600 bg-indigo-50 text-indigo-700 font-bold border-indigo-300';
          } else if (isAnswered) {
            btnClass = 'bg-emerald-50 text-emerald-700 border-emerald-300 font-medium hover:bg-emerald-100';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              className={`relative h-11 rounded-xl text-sm border flex items-center justify-center transition-all ${btnClass}`}
            >
              <span>{idx + 1}</span>

              {/* Status Icons */}
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full flex items-center justify-center text-white ring-2 ring-white">
                  <Flag className="w-2 h-2 fill-current" />
                </span>
              )}

              {isAnswered && !isCurrent && (
                <span className="absolute -bottom-1 -right-1 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300" />
          <span>ตอบแล้ว</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-md bg-slate-100 border border-slate-300" />
          <span>ยังไม่ตอบ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-md ring-2 ring-indigo-600 bg-indigo-50 border border-indigo-300" />
          <span>ข้อปัจจุบัน</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-500 flex items-center justify-center">
            <Flag className="w-2 h-2 text-white fill-current" />
          </div>
          <span>ปักหมุดทบทวน</span>
        </div>
      </div>
    </div>
  );
};
export default QuestionPalette;
