"use client";

import React from 'react';
import { Hash, Delete } from 'lucide-react';

interface NumericInputProps {
  value?: string;
  onChange: (value: string) => void;
  unit?: string;
  disabled?: boolean;
}

export const NumericInput: React.FC<NumericInputProps> = ({
  value = '',
  onChange,
  unit,
  disabled = false,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Allow digits, single negative sign at start, and single decimal point
    if (/^-?\d*\.?\d*$/.test(raw)) {
      onChange(raw);
    }
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 space-y-4">
      <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm">
        <Hash className="w-4 h-4 text-indigo-600" />
        <span>ข้อสอบแบบอัตนัย: พิมพ์คำตอบเป็นตัวเลข (รองรับทศนิยมและจำนวนติดลบ)</span>
      </div>

      <div className="flex items-center gap-3 max-w-md">
        <div className="relative flex-1">
          <input
            type="text"
            inputMode="decimal"
            disabled={disabled}
            placeholder="เช่น 36 หรือ -3 หรือ 1.5"
            value={value}
            onChange={handleInputChange}
            className="w-full text-2xl font-mono px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800 disabled:opacity-60"
          />
          {unit && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm pointer-events-none">
              {unit}
            </span>
          )}
        </div>

        {value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="px-3.5 py-3 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition-colors flex items-center gap-1.5 text-sm"
            title="ล้างคำตอบ"
          >
            <Delete className="w-4 h-4" />
            <span className="hidden sm:inline">ล้าง</span>
          </button>
        )}
      </div>

      <p className="text-xs text-slate-500">
        * ตามระเบียบการสอบ A-Level: หากเป็นจำนวนเต็ม สามารถกรอกเฉพาะตัวเลขได้เลย
      </p>
    </div>
  );
};
export default NumericInput;
