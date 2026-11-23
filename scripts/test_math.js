const katex = require('katex');
const data = require('../src/data/questions.json');

let parseErrors = [];
let totalMathParsed = 0;

function testRender(text, location) {
  if (!text) return;
  const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;
  let match;
  while ((match = mathRegex.exec(text)) !== null) {
    const raw = match[0];
    const isDisplay = raw.startsWith('$$') && raw.endsWith('$$');
    const mathContent = isDisplay ? raw.slice(2, -2).trim() : raw.slice(1, -1).trim();
    totalMathParsed++;
    try {
      katex.renderToString(mathContent, { displayMode: isDisplay, throwOnError: true });
    } catch (err) {
      parseErrors.push({ location, raw, mathContent, error: err.message });
    }
  }
}

data.forEach((q) => {
  testRender(q.question, `${q.id} question`);
  if (q.choices) {
    q.choices.forEach((c, i) => testRender(c, `${q.id} choice ${i}`));
  }
  if (q.explanation) {
    testRender(q.explanation.coreConcept, `${q.id} coreConcept`);
    if (q.explanation.steps) {
      q.explanation.steps.forEach((s, i) => testRender(s, `${q.id} step ${i}`));
    }
  }
});

console.log('Total questions checked:', data.length);
console.log('Total math expressions parsed:', totalMathParsed);
console.log('KaTeX parse errors with strict throwOnError: true ->', parseErrors.length);
if (parseErrors.length > 0) {
  console.log('Sample errors:', parseErrors.slice(0, 10));
} else {
  console.log('ALL MATH EXPRESSIONS RENDER PERFECTLY IN KATEX!');
}
