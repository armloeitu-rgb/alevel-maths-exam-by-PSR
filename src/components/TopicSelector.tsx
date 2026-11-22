"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Clock, 
  Sparkles, 
  Play, 
  CheckCircle,
  HelpCircle,
  BarChart3,
  Compass,
  Sigma,
  FileText
} from 'lucide-react';
import { Difficulty, ExamConfig, Question } from '../types/exam';

interface TopicSelectorProps {
  questions: Question[];
  onStartExam: (config: ExamConfig) => void;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  questions,
  onStartExam,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(30);
  const [questionCountChoice, setQuestionCountChoice] = useState<number | 'all'>(10);

  // Group unique topics from questions in consistent order
  const topics = React.useMemo(() => {
    const map = new Map<string, { id: string; name: string; count: number }>();
    questions.forEach((q) => {
      const existing = map.get(q.topic);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(q.topic, { id: q.topic, name: q.topicName, count: 1 });
      }
    });
    return Array.from(map.values());
  }, [questions]);

  // Calculate filtered count
  const matchingQuestions = React.useMemo(() => {
    return questions.filter((q) => {
      const matchTopic = selectedTopic === 'all' || q.topic === selectedTopic;
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      return matchTopic && matchDiff;
    });
  }, [questions, selectedTopic, selectedDifficulty]);

  // Effective question count to test
  const effectiveQuestionCount = React.useMemo(() => {
    if (questionCountChoice === 'all' || questionCountChoice > matchingQuestions.length) {
      return matchingQuestions.length;
    }
    return questionCountChoice;
  }, [questionCountChoice, matchingQuestions.length]);

  const handleStart = () => {
    if (matchingQuestions.length === 0) return;
    onStartExam({
      selectedTopic,
      difficulty: selectedDifficulty,
      questionCount: effectiveQuestionCount,
      timeLimitMinutes,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/70 text-indigo-700 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A-Level Mathematics (คณิตศาสตร์ประยุกต์ 1) คลังข้อสอบ 100 ข้อ ครบ 15 บท</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          ระบบจำลองข้อสอบคณิตศาสตร์ ม.ปลาย (A-Level)
        </h1>
        <p className="text-slate-600 text-base max-w-3xl mx-auto">
          ฝึกทำข้อสอบตามโครงสร้างจริง ครอบคลุมครบถ้วนทั้ง 15 บทเรียน มีทั้งแบบปรนัย 5 ตัวเลือก และอัตนัยระบายตัวเลข พร้อมเฉลยละเอียดแบบ Step-by-Step และสรุป Core Concept
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
        {/* Step 1: Select Topic */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>1. เลือกบทเรียนที่ต้องการฝึก (15 บทเรียน)</span>
            </label>
            <span className="text-xs text-slate-500 font-medium">
              ข้อสอบพร้อมฝึกทั้งหมดในระบบ: <b className="text-indigo-600 font-bold">{questions.length}</b> ข้อ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[360px] overflow-y-auto p-1 pr-2">
            {/* All Topics Option */}
            <button
              type="button"
              onClick={() => setSelectedTopic('all')}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                selectedTopic === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sigma className={`w-4 h-4 ${selectedTopic === 'all' ? 'text-white' : 'text-indigo-600'}`} />
                <span className="font-semibold text-sm">ทุกบทเรียน (รวมข้อสอบจริง)</span>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                  selectedTopic === 'all' ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {questions.length}
              </span>
            </button>

            {/* Individual Topics */}
            {topics.map((t) => {
              const isSelected = selectedTopic === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTopic(t.id)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Compass className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-indigo-500'}`} />
                    <span className="font-medium text-sm truncate">{t.name}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-mono ml-2 shrink-0 ${
                      isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {t.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Difficulty */}
        <div className="space-y-3">
          <label className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>2. เลือกระดับความยาก (Difficulty)</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'all', label: 'คละความยาก (All)', desc: 'จำลองข้อสอบจริงทุกระดับ' },
              { id: 'easy', label: 'Easy (ง่าย)', desc: 'ทบทวนนิยาม / เก็บคะแนน' },
              { id: 'medium', label: 'Medium (ปานกลาง)', desc: 'ระดับมาตรฐาน A-Level' },
              { id: 'hard', label: 'Hard (ยาก)', desc: 'โจทย์ประยุกต์เชิงลึก' },
            ].map((d) => {
              const isSelected = selectedDifficulty === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDifficulty(d.id as Difficulty | 'all')}
                  className={`p-4 rounded-2xl border text-left transition-all space-y-1 ${
                    isSelected
                      ? 'border-indigo-600 ring-2 ring-indigo-600/20 bg-indigo-50/60 shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{d.label}</span>
                    {isSelected && <CheckCircle className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <p className="text-xs text-slate-500">{d.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Select Question Count */}
        <div className="space-y-3">
          <label className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>3. จำนวนข้อที่ต้องการทำในการทดสอบรอบนี้</span>
          </label>

          <div className="flex flex-wrap gap-2.5">
            {[
              { val: 5, label: '5 ข้อ (Quick Practice)' },
              { val: 10, label: '10 ข้อ (ซ้อมย่อย)' },
              { val: 20, label: '20 ข้อ (ฝึกซ้อมเข้มข้น)' },
              { val: 30, label: '30 ข้อ (ขนาดชุดข้อสอบ A-Level จริง)' },
              { val: 'all', label: `ทั้งหมดในหมวด (${matchingQuestions.length} ข้อ)` },
            ].map((cnt) => {
              const isSelected = questionCountChoice === cnt.val;
              return (
                <button
                  key={String(cnt.val)}
                  type="button"
                  onClick={() => setQuestionCountChoice(cnt.val as any)}
                  className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cnt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Exam Settings (Timer) */}
        <div className="space-y-3">
          <label className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>4. เวลาในการทำข้อสอบ (Timer)</span>
          </label>

          <div className="flex flex-wrap gap-2.5">
            {[
              { val: 0, label: 'ไม่จำกัดเวลา (ฝึกทำสบายๆ)' },
              { val: 15, label: '15 นาที (Speed Test)' },
              { val: 30, label: '30 นาที (มาตรฐาน)' },
              { val: 90, label: '90 นาที (จำลองสนามสอบ A-Level จริง)' },
            ].map((t) => (
              <button
                key={t.val}
                type="button"
                onClick={() => setTimeLimitMinutes(t.val)}
                className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                  timeLimitMinutes === t.val
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-medium text-slate-700">
              ข้อสอบที่ตรงเงื่อนไข:{' '}
              <span className="font-bold text-indigo-600 text-base">{matchingQuestions.length}</span> ข้อ
              {' '}| กำลังจะสุ่มทำ: <span className="font-bold text-emerald-600 text-base">{effectiveQuestionCount}</span> ข้อ
            </div>
            <div className="text-xs text-slate-500">
              (คลังข้อสอบทั้งหมดมี 100 ข้อ ครบ 15 บทเรียนหลัก ม.ปลาย)
            </div>
          </div>

          <button
            type="button"
            disabled={matchingQuestions.length === 0}
            onClick={handleStart}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-md ${
              matchingQuestions.length > 0
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-indigo-200 hover:shadow-lg hover:scale-[1.01]'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <Play className="w-5 h-5 fill-current" />
            <span>เริ่มทำข้อสอบ ({effectiveQuestionCount} ข้อ)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopicSelector;
