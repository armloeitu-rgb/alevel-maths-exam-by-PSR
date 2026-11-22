"use client";

import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle, 
  XCircle, 
  Clock, 
  RotateCcw, 
  Lightbulb, 
  BookOpen, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Filter,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, UserAnswer } from '../types/exam';
import MathRenderer from './MathRenderer';

interface ResultViewProps {
  questions: Question[];
  userAnswers: Record<string, UserAnswer>;
  timeSpentSeconds: number;
  onRetake: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  onRetake,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'skipped'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  // Helper to check correctness
  const checkIsCorrect = (q: Question) => {
    const ans = userAnswers[q.id];
    if (!ans) return false;

    if (q.type === 'multiple_choice') {
      return ans.selectedChoice !== undefined && ans.selectedChoice === Number(q.correctAnswer);
    } else {
      if (!ans.numericAnswer || ans.numericAnswer.trim() === '') return false;
      const userNum = parseFloat(ans.numericAnswer.trim());
      const correctNum = parseFloat(String(q.correctAnswer).trim());
      if (isNaN(userNum) || isNaN(correctNum)) {
        return ans.numericAnswer.trim() === String(q.correctAnswer).trim();
      }
      const tolerance = q.tolerance ?? 0.001;
      return Math.abs(userNum - correctNum) <= tolerance;
    }
  };

  const isAnswerSkipped = (q: Question) => {
    const ans = userAnswers[q.id];
    if (!ans) return true;
    if (q.type === 'multiple_choice') {
      return ans.selectedChoice === undefined;
    }
    return !ans.numericAnswer || ans.numericAnswer.trim() === '';
  };

  // Compute statistics
  const total = questions.length;
  const correctCount = questions.filter(checkIsCorrect).length;
  const skippedCount = questions.filter(isAnswerSkipped).length;
  const wrongCount = total - correctCount - skippedCount;
  const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  useEffect(() => {
    // Expand all questions by default so student can read explanations immediately
    const initialExpanded: Record<string, boolean> = {};
    questions.forEach((q) => {
      initialExpanded[q.id] = true;
    });
    setExpandedQuestions(initialExpanded);

    // Fire confetti if score >= 60%
    if (scorePercent >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti fallback
      }
    }
  }, [questions, scorePercent]);

  const toggleExpand = (id: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins} นาที ${remainingSecs} วินาที`;
  };

  // Filtered question list
  const filteredQuestions = questions.filter((q) => {
    const isCorrect = checkIsCorrect(q);
    const isSkipped = isAnswerSkipped(q);
    if (filter === 'correct') return isCorrect;
    if (filter === 'wrong') return !isCorrect && !isSkipped;
    if (filter === 'skipped') return isSkipped;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Score Summary Card */}
      <div className="bg-gradient-to-br from-white to-indigo-50/40 rounded-3xl border border-indigo-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-indigo-100/80">
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner ${
                scorePercent >= 70
                  ? 'bg-emerald-100 text-emerald-700'
                  : scorePercent >= 50
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-rose-100 text-rose-700'
              }`}
            >
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                ผลการทดสอบ A-Level
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                คะแนนรวม: {correctCount} / {total}{' '}
                <span className="text-indigo-600 font-bold text-xl sm:text-2xl">
                  ({scorePercent}%)
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {scorePercent >= 80
                  ? 'ยอดเยี่ยมมาก! พื้นฐานและทักษะประยุกต์อยู่ในระดับสูงพร้อมสอบจริง'
                  : scorePercent >= 60
                  ? 'ทำได้ดี! ทบทวน Core Concept ในข้อที่ผิดเพิ่มเติมเพื่อเพิ่มความแม่นยำ'
                  : 'ฝึกฝนต่อเนื่อง! ศึกษาเฉลย Step-by-Step ด้านล่างเพื่ออุดจุดที่ยังไม่เข้าใจ'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onRetake}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-100 transition-all hover:scale-[1.02]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ทำชุดข้อสอบใหม่</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <div className="text-xs font-medium text-slate-500 flex items-center justify-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>ตอบถูก</span>
            </div>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">{correctCount}</div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <div className="text-xs font-medium text-slate-500 flex items-center justify-center gap-1">
              <XCircle className="w-3.5 h-3.5 text-rose-500" />
              <span>ตอบผิด</span>
            </div>
            <div className="text-2xl font-extrabold text-rose-500 mt-1">{wrongCount}</div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <div className="text-xs font-medium text-slate-500 flex items-center justify-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>ไม่ได้ทำ</span>
            </div>
            <div className="text-2xl font-extrabold text-slate-600 mt-1">{skippedCount}</div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <div className="text-xs font-medium text-slate-500 flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>เวลาที่ใช้</span>
            </div>
            <div className="text-base font-bold text-slate-800 mt-1 truncate">
              {formatTime(timeSpentSeconds)}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          <span className="text-sm font-bold text-slate-700">ตรวจทานเฉลยละเอียด:</span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
          {[
            { id: 'all', label: `ทั้งหมด (${total})` },
            { id: 'wrong', label: `ข้อที่ผิด (${wrongCount})` },
            { id: 'correct', label: `ข้อที่ถูก (${correctCount})` },
            { id: 'skipped', label: `ไม่ได้ตอบ (${skippedCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === tab.id
                  ? 'bg-white text-indigo-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Questions Detailed Breakdown */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const originalIndex = questions.findIndex((item) => item.id === q.id);
          const isCorrect = checkIsCorrect(q);
          const isSkipped = isAnswerSkipped(q);
          const isExpanded = expandedQuestions[q.id] ?? true;
          const ans = userAnswers[q.id];

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                isCorrect
                  ? 'border-emerald-200 shadow-emerald-50/50 shadow-sm'
                  : isSkipped
                  ? 'border-slate-300'
                  : 'border-rose-200 shadow-rose-50/50 shadow-sm'
              }`}
            >
              {/* Header Accordion Bar */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-slate-50/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-700'
                        : isSkipped
                        ? 'bg-slate-100 text-slate-500'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : isSkipped ? (
                      <HelpCircle className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">
                        ข้อที่ {originalIndex + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {q.topicName}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : isSkipped
                            ? 'bg-slate-100 text-slate-600 border border-slate-200'
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}
                      >
                        {isCorrect ? 'ถูกต้อง' : isSkipped ? 'ไม่ได้ตอบ' : 'ตอบผิด'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-xs hidden sm:inline text-slate-500">
                    {isExpanded ? 'ซ่อนเฉลย' : 'ดูเฉลยละเอียด'}
                  </span>
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-6">
                  {/* Question Text */}
                  <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <MathRenderer content={q.question} />
                  </div>

                  {/* Answers Comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {/* User Answer */}
                    <div
                      className={`p-3.5 rounded-xl border flex items-center justify-between ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                          : isSkipped
                          ? 'bg-slate-50 border-slate-200 text-slate-600'
                          : 'bg-rose-50/70 border-rose-200 text-rose-900'
                      }`}
                    >
                      <span className="font-semibold text-xs text-slate-500">คำตอบของคุณ:</span>
                      <span className="font-bold text-sm">
                        {q.type === 'multiple_choice'
                          ? ans?.selectedChoice !== undefined
                            ? `ตัวเลือกที่ ${ans.selectedChoice + 1} (${q.choices?.[ans.selectedChoice]})`
                            : '(ไม่ได้ตอบ)'
                          : ans?.numericAnswer && ans.numericAnswer.trim() !== ''
                          ? `${ans.numericAnswer} ${q.unit || ''}`
                          : '(ไม่ได้ตอบ)'}
                      </span>
                    </div>

                    {/* Correct Answer */}
                    <div className="p-3.5 rounded-xl border bg-emerald-50/80 border-emerald-300 text-emerald-900 flex items-center justify-between">
                      <span className="font-semibold text-xs text-emerald-700">คำตอบที่ถูกต้อง:</span>
                      <span className="font-bold text-sm flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        {q.type === 'multiple_choice'
                          ? `ตัวเลือกที่ ${Number(q.correctAnswer) + 1} (${q.choices?.[Number(q.correctAnswer)]})`
                          : `${q.correctAnswer} ${q.unit || ''}`}
                      </span>
                    </div>
                  </div>

                  {/* Core Concept Banner */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-amber-950 space-y-2">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                      <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                      <span>Core Concept (หัวใจสำคัญและทฤษฎีบทที่ใช้):</span>
                    </div>
                    <div className="text-sm pl-7 leading-relaxed font-medium">
                      <MathRenderer content={q.explanation.coreConcept} />
                    </div>
                  </div>

                  {/* Step-by-Step Solution */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      <span>วิธีทำอย่างละเอียด (Step-by-Step Solution):</span>
                    </div>

                    <div className="space-y-2.5">
                      {q.explanation.steps.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-800 leading-relaxed"
                        >
                          <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <div className="flex-1">
                            <MathRenderer content={step} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ResultView;
