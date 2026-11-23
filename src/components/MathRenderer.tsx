"use client";

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

interface RenderPart {
  type: 'text' | 'math-inline' | 'math-block';
  content: string;
  html?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  className = '',
  block = false,
}) => {
  const renderedContent = useMemo<RenderPart[]>(() => {
    if (!content) return [];

    // If block prop is forced and content doesn't have delimiters
    if (block && !content.includes('$')) {
      try {
        const html = katex.renderToString(content, {
          displayMode: true,
          throwOnError: false,
        });
        return [{ type: 'math-block', content, html }];
      } catch {
        return [{ type: 'text', content }];
      }
    }

    // Fallback: If content has no delimiters but contains LaTeX syntax and no Thai characters
    if (
      !content.includes('$') &&
      /\\([a-zA-Z]+)|(\^|\_)\{?[0-9a-zA-Z]/.test(content) &&
      !/[\u0E00-\u0E7F]/.test(content)
    ) {
      try {
        const html = katex.renderToString(content.trim(), {
          displayMode: block,
          throwOnError: false,
        });
        return [{ type: block ? 'math-block' : 'math-inline', content: content.trim(), html }];
      } catch {
        // Fall back to standard regex processing
      }
    }

    const parts: RenderPart[] = [];
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = mathRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: content.substring(lastIndex, match.index),
        });
      }

      const raw = match[0];
      const isDisplay = raw.startsWith('$$') && raw.endsWith('$$');
      const mathStr = isDisplay ? raw.slice(2, -2).trim() : raw.slice(1, -1).trim();

      try {
        const html = katex.renderToString(mathStr, {
          displayMode: isDisplay,
          throwOnError: false,
        });
        parts.push({
          type: isDisplay ? 'math-block' : 'math-inline',
          content: mathStr,
          html,
        });
      } catch {
        parts.push({
          type: 'text',
          content: raw,
        });
      }

      lastIndex = match.index + raw.length;
    }

    if (lastIndex < content.length) {
      parts.push({
        type: 'text',
        content: content.substring(lastIndex),
      });
    }

    return parts;
  }, [content, block]);

  return (
    <span className={`inline-block leading-relaxed ${className}`}>
      {renderedContent.map((part, idx) => {
        if (part.type === 'text') {
          return <span key={idx} className="whitespace-pre-wrap">{part.content}</span>;
        }
        if (part.type === 'math-block') {
          return (
            <span
              key={idx}
              className="block my-2 overflow-x-auto py-1 text-center"
              dangerouslySetInnerHTML={{ __html: part.html || '' }}
            />
          );
        }
        return (
          <span
            key={idx}
            className="inline px-0.5"
            dangerouslySetInnerHTML={{ __html: part.html || '' }}
          />
        );
      })}
    </span>
  );
};
export default MathRenderer;
