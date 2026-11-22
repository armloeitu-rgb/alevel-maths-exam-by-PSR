const fs = require('fs');
const path = require('path');

const t1 = require('./question_data/topic1_set_logic_real');
const t2 = require('./question_data/topic2_matrix_func_conic');
const t3 = require('./question_data/topic3_expo_trig_vector');
const t4 = require('./question_data/topic4_seq_calc_count');
const t5 = require('./question_data/topic5_complex_stat_dist');

const allQuestions = [...t1, ...t2, ...t3, ...t4, ...t5];

console.log(`Total questions loaded: ${allQuestions.length}`);

// Validation
if (allQuestions.length !== 100) {
  console.error(`ERROR: Expected 100 questions, got ${allQuestions.length}`);
  process.exit(1);
}

const expectedTopics = [
  "เซต",
  "ตรรกศาสตร์",
  "ระบบจำนวนจริง",
  "เมทริกซ์",
  "ความสัมพันธ์และฟังก์ชัน",
  "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
  "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
  "ฟังก์ชันตรีโกณมิติ",
  "เวกเตอร์",
  "ลำดับและอนุกรม",
  "แคลคูลัส",
  "หลักการนับและความน่าจะเป็น",
  "จำนวนเชิงซ้อน",
  "สถิติ",
  "การแจกแจงความน่าจะเป็น"
];

const topicCount = {};
const idSet = new Set();

allQuestions.forEach((q, idx) => {
  if (idSet.has(q.id)) {
    console.error(`Duplicate ID found: ${q.id}`);
    process.exit(1);
  }
  idSet.add(q.id);

  if (!q.topicName || !q.question || !q.explanation || !q.explanation.coreConcept || !q.explanation.steps) {
    console.error(`Incomplete question data at index ${idx} (${q.id})`);
    process.exit(1);
  }

  if (q.type === 'multiple_choice') {
    if (!q.choices || q.choices.length !== 5) {
      console.error(`Question ${q.id} multiple_choice must have exactly 5 choices, got ${q.choices?.length}`);
      process.exit(1);
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 4) {
      console.error(`Question ${q.id} multiple_choice correctAnswer must be 0-4, got ${q.correctAnswer}`);
      process.exit(1);
    }
  } else if (q.type === 'numeric') {
    if (q.correctAnswer === undefined || q.correctAnswer === null || String(q.correctAnswer).trim() === '') {
      console.error(`Question ${q.id} numeric correctAnswer is empty`);
      process.exit(1);
    }
  } else {
    console.error(`Unknown question type: ${q.type} in ${q.id}`);
    process.exit(1);
  }

  topicCount[q.topicName] = (topicCount[q.topicName] || 0) + 1;
});

console.log("\n--- Topic Breakdown ---");
expectedTopics.forEach((t) => {
  const count = topicCount[t] || 0;
  console.log(`- ${t}: ${count} ข้อ`);
  if (count === 0) {
    console.error(`ERROR: Topic '${t}' has 0 questions!`);
    process.exit(1);
  }
});

const outputPath = path.join(__dirname, '../src/data/questions.json');
fs.writeFileSync(outputPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`\nSuccessfully wrote 100 questions to: ${outputPath}`);
