"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Clock, 
  Sparkles, 
  Play, 
  CheckCircle, 
  FileText,
  Flame,
  Zap,
  Target,
  Trophy,
  Coffee,
  GraduationCap,
  Heart
} from 'lucide-react';
import { Difficulty, ExamConfig, Question } from '../types/exam';

interface TopicSelectorProps {
  questions: Question[];
  onStartExam: (config: ExamConfig) => void;
}

// Cute topic badge metadata with emojis and friendly styling
const topicMeta: Record<string, { emoji: string; badgeBg: string; textCol: string }> = {
  all: { emoji: '🌟', badgeBg: 'bg-indigo-100/80 text-indigo-700', textCol: 'text-indigo-900' },
  set: { emoji: '🍩', badgeBg: 'bg-rose-100/80 text-rose-700', textCol: 'text-rose-900' },
  logic: { emoji: '🧠', badgeBg: 'bg-amber-100/80 text-amber-700', textCol: 'text-amber-900' },
  real_numbers: { emoji: '🔢', badgeBg: 'bg-emerald-100/80 text-emerald-700', textCol: 'text-emerald-900' },
  matrix: { emoji: '🧱', badgeBg: 'bg-cyan-100/80 text-cyan-700', textCol: 'text-cyan-900' },
  relations_functions: { emoji: '🔗', badgeBg: 'bg-violet-100/80 text-violet-700', textCol: 'text-violet-900' },
  conic_sections: { emoji: '🪐', badgeBg: 'bg-orange-100/80 text-orange-700', textCol: 'text-orange-900' },
  expo_log: { emoji: '🚀', badgeBg: 'bg-purple-100/80 text-purple-700', textCol: 'text-purple-900' },
  trigonometry: { emoji: '📐', badgeBg: 'bg-teal-100/80 text-teal-700', textCol: 'text-teal-900' },
  vectors: { emoji: '🧭', badgeBg: 'bg-blue-100/80 text-blue-700', textCol: 'text-blue-900' },
  sequences_series: { emoji: '📈', badgeBg: 'bg-lime-100/80 text-lime-800', textCol: 'text-lime-950' },
  calculus: { emoji: '⚡', badgeBg: 'bg-fuchsia-100/80 text-fuchsia-700', textCol: 'text-fuchsia-900' },
  counting_probability: { emoji: '🎲', badgeBg: 'bg-yellow-100/80 text-yellow-800', textCol: 'text-yellow-950' },
  complex_numbers: { emoji: '🔮', badgeBg: 'bg-indigo-100/80 text-indigo-700', textCol: 'text-indigo-900' },
  statistics: { emoji: '📊', badgeBg: 'bg-sky-100/80 text-sky-700', textCol: 'text-sky-900' },
  probability_distribution: { emoji: '🔔', badgeBg: 'bg-emerald-100/80 text-emerald-800', textCol: 'text-emerald-950' },
};

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  questions,
  onStartExam,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(30);
  const [questionCountChoice, setQuestionCountChoice] = useState<number | 'all'>(10);

  // Group unique topics from questions
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
      {/* Cute & Inviting Hero Banner */}
      <div className="text-center space-y-3 relative">
        {/* Playful Floating Mascot / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 via-rose-100 to-indigo-100 border border-amber-200/60 shadow-xs text-xs font-bold text-slate-800 animate-pulse">
          <span className="text-base">🦉</span>
          <span>พี่ฮูก Math Hero ชวนมาอัปสกิลคณิต A-Level กันเถอะ!</span>
          <span className="text-base">✨</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2 flex-wrap">
          <span>ระบบจำลองข้อสอบ</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">
            A-Level คณิต ม.ปลาย
          </span>
          <span className="text-2xl sm:text-3xl">📐</span>
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          ฝึกทำข้อสอบตามสไตล์สนามจริง คลังข้อสอบจุใจ <b>100 ข้อ ครบ 15 บท</b> มีทั้งปรนัยและอัตนัย พร้อมเฉลยละเอียดแบบ Step-by-Step และสรุป Core Concept
        </p>

        {/* Feature highlight pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold flex items-center gap-1.5 shadow-2xs">
            <span>🎯</span> คลัง 100 ข้อ ครบ 15 บท
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold flex items-center gap-1.5 shadow-2xs">
            <span>💡</span> มี Core Concept ทุกข้อ
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-semibold flex items-center gap-1.5 shadow-2xs">
            <span>⏱️</span> ระบบจับเวลาแบบสมจริง
          </span>
          <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-semibold flex items-center gap-1.5 shadow-2xs">
            <span>📝</span> เฉลยละเอียดทีละขั้นตอน
          </span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
        {/* Step 1: Select Topic with Cute Icons */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shadow-2xs">
                1
              </span>
              <span>เลือกบทเรียนที่ต้องการฝึก (15 บทเรียน) 📚</span>
            </label>
            <span className="text-xs text-slate-500 font-medium">
              ข้อสอบพร้อมฝึกทั้งหมด: <b className="text-indigo-600 font-bold text-sm">{questions.length}</b> ข้อ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto p-1.5 pr-2">
            {/* All Topics Option */}
            <button
              type="button"
              onClick={() => setSelectedTopic('all')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                selectedTopic === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-600 shadow-md scale-[1.01]'
                  : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-lg shrink-0 backdrop-blur-xs">
                  🌟
                </span>
                <div>
                  <div className="font-bold text-sm">ทุกบทเรียน (รวมข้อสอบจริง)</div>
                  <div className={`text-[11px] ${selectedTopic === 'all' ? 'text-indigo-100' : 'text-slate-500'}`}>
                    สุ่มโจทย์คละทุกบทเรียน
                  </div>
                </div>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-bold font-mono ${
                  selectedTopic === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {questions.length}
              </span>
            </button>

            {/* Individual Topics with Custom Emojis */}
            {topics.map((t) => {
              const isSelected = selectedTopic === t.id;
              const meta = topicMeta[t.id] || { emoji: '📖', badgeBg: 'bg-slate-100 text-slate-700', textCol: 'text-slate-800' };

              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTopic(t.id)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.01]'
                      : 'bg-slate-50/80 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-base shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                      {meta.emoji}
                    </span>
                    <span className="font-semibold text-sm truncate">{t.name}</span>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-mono ml-2 shrink-0 font-bold ${
                      isSelected ? 'bg-white/25 text-white' : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {t.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Difficulty with Cute Characters */}
        <div className="space-y-3">
          <label className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shadow-2xs">
              2
            </span>
            <span>เลือกระดับความยาก (Difficulty) 🎯</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'all', emoji: '🎪', label: 'คละความยาก', sub: 'All-Star', desc: 'รวมมิตรโจทย์ทุกระดับ' },
              { id: 'easy', emoji: '🐣', label: 'Easy (ง่าย)', sub: 'ลูกเจี๊ยบเก็บแต้ม', desc: 'ทบทวนนิยาม/เก็บแต้ม' },
              { id: 'medium', emoji: '🦊', label: 'Medium (ปานกลาง)', sub: 'จิ้งจอกสายมาตรฐาน', desc: 'ระดับมาตรฐาน A-Level' },
              { id: 'hard', emoji: '🦁', label: 'Hard (ยาก)', sub: 'สิงโตบอสใหญ่', desc: 'โจทย์ประยุกต์เชิงลึก' },
            ].map((d) => {
              const isSelected = selectedDifficulty === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDifficulty(d.id as Difficulty | 'all')}
                  className={`p-4 rounded-2xl border text-left transition-all space-y-1.5 relative overflow-hidden group ${
                    isSelected
                      ? 'border-indigo-600 ring-2 ring-indigo-600/20 bg-indigo-50/70 shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{d.emoji}</span>
                    {isSelected && <CheckCircle className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">{d.label}</div>
                    <div className="text-[11px] font-semibold text-indigo-600">{d.sub}</div>
                  </div>
                  <p className="text-xs text-slate-500 pt-0.5">{d.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Select Question Count with Cute Badges */}
        <div className="space-y-3">
          <label className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shadow-2xs">
              3
            </span>
            <span>จำนวนข้อที่ต้องการทำในการทดสอบรอบนี้ 📝</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { val: 5, emoji: '⚡', label: '5 ข้อ', desc: 'Quick Practice' },
              { val: 10, emoji: '🎯', label: '10 ข้อ', desc: 'ซ้อมย่อยกำลังดี' },
              { val: 20, emoji: '🔥', label: '20 ข้อ', desc: 'ฝึกซ้อมเข้มข้น' },
              { val: 30, emoji: '🏆', label: '30 ข้อ', desc: 'ขนาดชุดสอบจริง' },
              { val: 'all', emoji: '👑', label: `ทั้งหมด`, desc: `ครบ ${matchingQuestions.length} ข้อ` },
            ].map((cnt) => {
              const isSelected = questionCountChoice === cnt.val;
              return (
                <button
                  key={String(cnt.val)}
                  type="button"
                  onClick={() => setQuestionCountChoice(cnt.val as any)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-lg">{cnt.emoji}</div>
                  <div className="font-bold text-sm">{cnt.label}</div>
                  <div className={`text-[10px] ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                    {cnt.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Exam Settings (Timer) */}
        <div className="space-y-3">
          <label className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shadow-2xs">
              4
            </span>
            <span>เวลาในการทำข้อสอบ (Timer) ⏱️</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { val: 0, emoji: '☕', label: 'ไม่จำกัดเวลา', desc: 'ชิลๆ ชมนกชมไม้' },
              { val: 15, emoji: '⚡', label: '15 นาที', desc: 'Speed Test ท้าทาย' },
              { val: 30, emoji: '⏱️', label: '30 นาที', desc: 'มาตรฐานพอดีคำ' },
              { val: 90, emoji: '🎓', label: '90 นาที', desc: 'จำลองสนามจริง A-Level' },
            ].map((t) => (
              <button
                key={t.val}
                type="button"
                onClick={() => setTimeLimitMinutes(t.val)}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  timeLimitMinutes === t.val
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="text-lg">{t.emoji}</div>
                <div className="font-bold text-sm">{t.label}</div>
                <div className={`text-[10px] ${timeLimitMinutes === t.val ? 'text-slate-300' : 'text-slate-500'}`}>
                  {t.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <div className="text-sm font-bold text-slate-800 flex items-center gap-1.5 justify-center sm:justify-start">
              <span>🎉 พร้อมลุย!</span>
              <span>พบข้อสอบ: <b className="text-indigo-600">{matchingQuestions.length}</b> ข้อ</span>
              <span>➔ กำลังจะสุ่มทำ: <b className="text-emerald-600">{effectiveQuestionCount}</b> ข้อ</span>
            </div>
            <div className="text-xs text-slate-500">
              💡 ทริก: ระบบจะสุ่มลำดับข้อสอบใหม่ให้ทุกรอบเพื่อไม่ให้จำเจ
            </div>
          </div>

          <button
            type="button"
            disabled={matchingQuestions.length === 0}
            onClick={handleStart}
            className={`w-full sm:w-auto px-9 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2.5 transition-all shadow-lg ${
              matchingQuestions.length > 0
                ? 'bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white shadow-indigo-200 hover:shadow-xl hover:scale-[1.02] active:scale-95'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <Play className="w-5 h-5 fill-current" />
            <span>เริ่มทำข้อสอบทันที ({effectiveQuestionCount} ข้อ) 🚀</span>
          </button>
        </div>
      </div>

      {/* Cute Motivational Footer Banner */}
      <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 pt-2">
        <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
        <span>ฝึกทำโจทย์ทุกวัน คือกุญแจสำคัญสู่คะแนน 100 เต็ม สู้ๆ นะครับ!</span>
      </div>
    </div>
  );
};
export default TopicSelector;
