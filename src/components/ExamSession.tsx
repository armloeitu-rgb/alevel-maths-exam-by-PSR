"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { Question, UserAnswer } from '../types/exam';
import MathRenderer from './MathRenderer';
import MultipleChoice from './MultipleChoice';
import NumericInput from './NumericInput';
import QuestionPalette from './QuestionPalette';

interface ExamSessionProps {
  questions: Question[];
  timeLimitMinutes: number;
  onSubmitExam: (answers: Record<string, UserAnswer>, timeSpentSeconds: number) => void;
  onUpdateRemainingTime: (seconds: number) => void;
}

export const ExamSession: React.FC<ExamSessionProps> = ({
  questions,
  timeLimitMinutes,
  onSubmitExam,
  onUpdateRemainingTime,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showMobilePalette, setShowMobilePalette] = useState<boolean>(false);

  // Timer logic
  const totalSeconds = timeLimitMinutes > 0 ? timeLimitMinutes * 60 : 0;
  const [timeRemaining, setTimeRemaining] = useState<number>(totalSeconds);
  const [timeSpent, setTimeSpent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);

      if (timeLimitMinutes > 0) {
        setTimeRemaining((prev) => {
          const nextVal = prev - 1;
          onUpdateRemainingTime(nextVal);
          if (nextVal <= 0) {
            clearInterval(timer);
            // Auto-submit when time expires
            handleConfirmSubmit();
            return 0;
          }
          return nextVal;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimitMinutes]);

  const currentQ = questions[currentIndex];
  const currentAnswer = userAnswers[currentQ?.id] || {
    questionId: currentQ?.id,
    isMarkedForReview: false,
  };

  const handleSelectChoice = (choiceIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        questionId: currentQ.id,
        selectedChoice: choiceIndex,
        isMarkedForReview: prev[currentQ.id]?.isMarkedForReview ?? false,
      },
    }));
  };

  const handleNumericChange = (value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        questionId: currentQ.id,
        numericAnswer: value,
        isMarkedForReview: prev[currentQ.id]?.isMarkedForReview ?? false,
      },
    }));
  };

  const handleToggleFlag = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        questionId: currentQ.id,
        isMarkedForReview: !prev[currentQ.id]?.isMarkedForReview,
      },
    }));
  };

  const handleConfirmSubmit = () => {
    onSubmitExam(userAnswers, timeSpent);
  };

  // Count answered questions
  const answeredCount = questions.filter((q) => {
    const a = userAnswers[q.id];
    return a && (a.selectedChoice !== undefined || (a.numericAnswer !== undefined && a.numericAnswer.trim() !== ''));
  }).length;

  const flaggedCount = questions.filter((q) => userAnswers[q.id]?.isMarkedForReview).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Mobile Drawer Toggle */}
      <div className="md:hidden flex items-center justify-between mb-4 bg-white p-3 rounded-2xl border border-slate-200">
        <div className="text-xs text-slate-600">
          ข้อที่ <span className="font-bold text-indigo-600">{currentIndex + 1}</span> จาก {questions.length} ข้อ
        </div>
        <button
          onClick={() => setShowMobilePalette(!showMobilePalette)}
          className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200"
        >
          <Menu className="w-3.5 h-3.5" />
          <span>กระดาษคำตอบ</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Main Question Area (Left/Center) */}
        <div className="md:col-span-8 lg:col-span-9 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Question Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-600 text-white font-extrabold text-sm px-3 py-1 rounded-xl shadow-sm">
                  ข้อที่ {currentIndex + 1}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                  {currentQ.topicName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                    currentQ.difficulty === 'easy'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : currentQ.difficulty === 'medium'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}
                >
                  {currentQ.difficulty.toUpperCase()}
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {currentQ.type === 'multiple_choice' ? 'ปรนัย 5 ตัวเลือก' : 'อัตนัยระบายตัวเลข'}
                </span>
              </div>
            </div>

            {/* Question Prompt */}
            <div className="text-lg sm:text-xl text-slate-900 font-medium leading-relaxed">
              <MathRenderer content={currentQ.question} />
            </div>

            {/* Answer Input Section */}
            <div className="pt-2">
              {currentQ.type === 'multiple_choice' && currentQ.choices && (
                <MultipleChoice
                  choices={currentQ.choices}
                  selectedChoice={currentAnswer.selectedChoice}
                  onSelect={handleSelectChoice}
                />
              )}

              {currentQ.type === 'numeric' && (
                <NumericInput
                  value={currentAnswer.numericAnswer}
                  onChange={handleNumericChange}
                  unit={currentQ.unit}
                />
              )}
            </div>

            {/* Bottom Controls */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              {/* Flag button */}
              <button
                type="button"
                onClick={handleToggleFlag}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                  currentAnswer.isMarkedForReview
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flag className={`w-4 h-4 ${currentAnswer.isMarkedForReview ? 'fill-current' : ''}`} />
                <span>{currentAnswer.isMarkedForReview ? 'ปักหมุดแล้ว' : 'ปักหมุดทบทวน'}</span>
              </button>

              {/* Prev / Next / Submit */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">ข้อก่อนหน้า</span>
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 flex items-center gap-1.5 shadow-sm"
                  >
                    <span>ข้อถัดไป</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(true)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold hover:from-emerald-700 hover:to-teal-700 flex items-center gap-2 shadow-md shadow-emerald-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>ส่งกระดาษคำตอบ</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar Question Palette (Right) */}
        <div className="hidden md:block md:col-span-4 lg:col-span-3 space-y-4">
          <QuestionPalette
            questions={questions}
            userAnswers={userAnswers}
            currentIndex={currentIndex}
            onSelectIndex={setCurrentIndex}
          />

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="w-full py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-100 transition-all hover:scale-[1.01]"
          >
            <Send className="w-4 h-4" />
            <span>ส่งกระดาษคำตอบ ({answeredCount}/{questions.length})</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Modal */}
      {showMobilePalette && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-5 overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-slate-800">ผังข้อสอบ</h3>
              <button
                onClick={() => setShowMobilePalette(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <QuestionPalette
              questions={questions}
              userAnswers={userAnswers}
              currentIndex={currentIndex}
              onSelectIndex={(idx) => {
                setCurrentIndex(idx);
                setShowMobilePalette(false);
              }}
            />
            <button
              type="button"
              onClick={() => {
                setShowMobilePalette(false);
                setShowSubmitModal(true);
              }}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm"
            >
              ส่งกระดาษคำตอบ
            </button>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">ยืนยันการส่งข้อสอบ?</h3>
              <p className="text-xs text-slate-500">
                เมื่อส่งแล้ว ระบบจะทำการประมวลผลคะแนนและเปิดหน้าเฉลยละเอียดทันที
              </p>
            </div>

            {/* Answer Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-sm">
              <div className="flex justify-between text-slate-700">
                <span>ทำแล้ว:</span>
                <span className="font-bold text-emerald-600">{answeredCount} ข้อ</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>ยังไม่ได้ตอบ:</span>
                <span className="font-bold text-rose-500">{unansweredCount} ข้อ</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>ปักหมุดทบทวน:</span>
                <span className="font-bold text-amber-500">{flaggedCount} ข้อ</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 p-2.5 rounded-xl font-medium">
                ⚠️ คุณยังมีข้อที่ไม่ได้ตอบอีก {unansweredCount} ข้อ ต้องการส่งทันทีหรือไม่?
              </p>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 text-sm"
              >
                กลับไปทำต่อ
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-100"
              >
                ยืนยันส่งข้อสอบ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ExamSession;
