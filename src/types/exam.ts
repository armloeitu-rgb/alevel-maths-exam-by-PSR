export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 'multiple_choice' | 'numeric';

export interface Explanation {
  coreConcept: string;
  steps: string[];
}

export interface Question {
  id: string;
  topic: string;
  topicName: string;
  difficulty: Difficulty;
  type: QuestionType;
  question: string;
  choices?: string[]; // 5 choices for multiple_choice
  correctAnswer: number | string; // index 0-4 for multiple_choice, or number/string for numeric
  tolerance?: number; // for numeric answers (e.g. 0.01)
  unit?: string;
  explanation: Explanation;
}

export interface UserAnswer {
  questionId: string;
  selectedChoice?: number; // 0-4
  numericAnswer?: string; // string input
  isMarkedForReview: boolean;
}

export interface ExamConfig {
  selectedTopic: string; // 'all' or specific topic id
  difficulty: Difficulty | 'all';
  questionCount: number;
  timeLimitMinutes: number; // 0 for untimed
}

export interface ExamSummary {
  totalQuestions: number;
  attemptedQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedQuestions: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  topicBreakdown: {
    topicName: string;
    correct: number;
    total: number;
  }[];
}
