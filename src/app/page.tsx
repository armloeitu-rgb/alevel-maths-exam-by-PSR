"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import TopicSelector from '../components/TopicSelector';
import ExamSession from '../components/ExamSession';
import ResultView from '../components/ResultView';
import questionsData from '../data/questions.json';
import { Question, ExamConfig, UserAnswer } from '../types/exam';

export default function Home() {
  const [stage, setStage] = useState<'setup' | 'exam' | 'result'>('setup');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examConfig, setExamConfig] = useState<ExamConfig | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number | undefined>(undefined);

  const allQuestions = questionsData as Question[];

  const handleStartExam = (config: ExamConfig) => {
    // Filter questions based on topic and difficulty
    const filtered = allQuestions.filter((q) => {
      const matchTopic = config.selectedTopic === 'all' || q.topic === config.selectedTopic;
      const matchDiff = config.difficulty === 'all' || q.difficulty === config.difficulty;
      return matchTopic && matchDiff;
    });

    // Shuffle questions or take up to count
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, config.questionCount);

    setExamQuestions(selected);
    setExamConfig(config);
    setUserAnswers({});
    setTimeRemaining(config.timeLimitMinutes > 0 ? config.timeLimitMinutes * 60 : undefined);
    setStage('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitExam = (answers: Record<string, UserAnswer>, timeSpent: number) => {
    setUserAnswers(answers);
    setTimeSpentSeconds(timeSpent);
    setStage('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitExam = () => {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการออกจากการสอบ? ข้อมูลการทำข้อสอบจะไม่ถูกบันทึก')) {
      setStage('setup');
      setExamQuestions([]);
      setUserAnswers({});
      setTimeRemaining(undefined);
    }
  };

  const handleRetake = () => {
    setStage('setup');
    setExamQuestions([]);
    setUserAnswers({});
    setTimeRemaining(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentTopicName = useMemo(() => {
    if (!examConfig) return '';
    if (examConfig.selectedTopic === 'all') return 'ทุกบทเรียน (รวมข้อสอบจริง)';
    const q = allQuestions.find((item) => item.topic === examConfig.selectedTopic);
    return q?.topicName || examConfig.selectedTopic;
  }, [examConfig, allQuestions]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar
        stage={stage}
        timeRemaining={timeRemaining}
        onExitExam={stage === 'exam' ? handleExitExam : undefined}
        examTitle={currentTopicName}
      />

      <main className="flex-1">
        {stage === 'setup' && (
          <TopicSelector
            questions={allQuestions}
            onStartExam={handleStartExam}
          />
        )}

        {stage === 'exam' && examConfig && (
          <ExamSession
            questions={examQuestions}
            timeLimitMinutes={examConfig.timeLimitMinutes}
            onSubmitExam={handleSubmitExam}
            onUpdateRemainingTime={setTimeRemaining}
          />
        )}

        {stage === 'result' && (
          <ResultView
            questions={examQuestions}
            userAnswers={userAnswers}
            timeSpentSeconds={timeSpentSeconds}
            onRetake={handleRetake}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-medium text-slate-600">
            ระบบจำลองข้อสอบคณิตศาสตร์ประยุกต์ A-Level ม.ปลาย
          </p>
          <p>
            พัฒนาด้วย Next.js (App Router), Tailwind CSS & KaTeX Mathematical Typesetting
          </p>
        </div>
      </footer>
    </div>
  );
}
