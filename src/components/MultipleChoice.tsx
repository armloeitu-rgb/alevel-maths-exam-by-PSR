"use client";

import React from 'react';
import MathRenderer from './MathRenderer';

interface MultipleChoiceProps {
  choices: string[];
  selectedChoice?: number;
  onSelect: (choiceIndex: number) => void;
  disabled?: boolean;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  choices,
  selectedChoice,
  onSelect,
  disabled = false,
}) => {
  const choiceLabels = ['1', '2', '3', '4', '5'];

  return (
    <div className="space-y-3">
      {choices.map((choiceText, index) => {
        const isSelected = selectedChoice === index;

        return (
          <button
            key={index}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(index)}
            className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 group ${
              isSelected
                ? 'bg-indigo-50/70 border-indigo-600 ring-1 ring-indigo-600 shadow-sm'
                : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/80'
            }`}
          >
            {/* Number Tag */}
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-semibold shrink-0 transition-colors ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-700'
              }`}
            >
              {choiceLabels[index] ?? index + 1}
            </div>

            {/* Choice Content with Math */}
            <div className="pt-0.5 text-slate-800 text-base leading-relaxed flex-1">
              <MathRenderer content={choiceText} />
            </div>
          </button>
        );
      })}
    </div>
  );
};
export default MultipleChoice;
