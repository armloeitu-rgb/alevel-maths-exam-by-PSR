// Topic 7: ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม (7 ข้อ), Topic 8: ฟังก์ชันตรีโกณมิติ (7 ข้อ), Topic 9: เวกเตอร์ (6 ข้อ)
module.exports = [
  // --- 7. ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม (q41 - q47) ---
  {
    id: "q41",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ค่าของ $\\log_3(81) + \\log_2(\\frac{1}{8}) - \\log_5(1)$ เท่ากับข้อใด",
    choices: ["1", "0", "7", "-1", "2"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมบัติพื้นฐานของลอการิทึม: $\\log_a(a^k) = k$ และ $\\log_a(1) = 0$",
      "steps": [
        "$\\log_3(81) = \\log_3(3^4) = 4$",
        "$\\log_2(\\frac{1}{8}) = \\log_2(2^{-3}) = -3$",
        "$\\log_5(1) = 0$",
        "คำนวณ: $4 + (-3) - 0 = 1$",
        "ดังนั้น คำตอบคือ 1 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q42",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "medium",
    type: "multiple_choice",
    question: "เซตคำตอบของสมการ $\\log(x + 3) + \\log(x - 1) = \\log(12)$ คือเซตในข้อใด",
    choices: [
      "$\\{3\\}$",
      "$\\{-5, 3\\}$",
      "$\\{5\\}$",
      "$\\{1, 3\\}$",
      "$\\emptyset$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การรวมลอการิทึม $\\log A + \\log B = \\log(AB)$ โดยมีเงื่อนไขหลังลอการิทึม $A > 0, B > 0$",
      "steps": [
        "เงื่อนไขหลัง log: $x + 3 > 0 \\implies x > -3$ และ $x - 1 > 0 \\implies x > 1$ รวมกันคือ $x > 1$",
        "รวมลอการิทึม: $\\log[(x + 3)(x - 1)] = \\log(12)$",
        "ปลด log: $(x + 3)(x - 1) = 12$",
        "$x^2 + 2x - 3 = 12 \\implies x^2 + 2x - 15 = 0$",
        "แยกตัวประกอบ: $(x + 5)(x - 3) = 0 \\implies x = 3$ หรือ $x = -5$",
        "ตรวจสอบเงื่อนไข $x > 1$: ใช้ได้เฉพาะ $x = 3$ ($x = -5$ ทำให้หลัง log ติดลบ)",
        "ดังนั้น เซตคำตอบคือ $\\{3\\}$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q43",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "hard",
    type: "multiple_choice",
    question: "เซตคำตอบของอสมการ $(\\frac{1}{2})^{x^2 - 3} > (\\frac{1}{2})^{2x}$ คือช่วงในข้อใดต่อไปนี้",
    choices: [
      "$(-1, 3)$",
      "$[-1, 3]$",
      "$(-\\infty, -1) \\cup (3, \\infty)$",
      "$(-3, 1)$",
      "$(-\\infty, -3) \\cup (1, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "อสมการเอกซ์โพเนนเชียลฐานลด: สำหรับฟังก์ชันลด ($0 < a < 1$), $a^u > a^v \\iff u < v$ (กลับเครื่องหมายอสมการ)",
      "steps": [
        "เนื่องจากฐาน $a = \\frac{1}{2}$ มีค่าอยู่ระหว่าง 0 กับ 1 เป็นฟังก์ชันลด",
        "เมื่อปลดฐาน ต้องกลับเครื่องหมายอสมการ: $x^2 - 3 < 2x$",
        "ย้ายข้าง: $x^2 - 2x - 3 < 0$",
        "แยกตัวประกอบ: $(x - 3)(x + 1) < 0$",
        "ช่วงคำตอบบนเส้นจำนวนคือช่วงเปิด $(-1, 3)$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q44",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ถ้า $2^{2x+1} - 9(2^x) + 4 = 0$ แล้วผลคูณของคำตอบทั้งหมดมีค่าเท่ากับข้อใด",
    choices: ["-2", "2", "0", "-1", "4"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การเปลี่ยนตัวแปร $u = 2^x$ ในสมการเอกซ์โพเนนเชียล",
      "steps": [
        "จัดรูป: $2 \\cdot (2^x)^2 - 9(2^x) + 4 = 0$",
        "ให้ $u = 2^x$: $2u^2 - 9u + 4 = 0$",
        "แยกตัวประกอบ: $(2u - 1)(u - 4) = 0 \\implies u = \\frac{1}{2}$ หรือ $u = 4$",
        "แทนคืน $2^x$:\n1) $2^x = \\frac{1}{2} = 2^{-1} \\implies x_1 = -1$\n2) $2^x = 4 = 2^2 \\implies x_2 = 2$",
        "ผลคูณของคำตอบ: $x_1 \\cdot x_2 = (-1)(2) = -2$",
        "ดังนั้น คำตอบคือ -2 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q45",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "easy",
    type: "numeric",
    question: "จงหาค่าของ $x$ ที่สอดคล้องกับสมการ $3^{2x - 1} = 27$",
    correctAnswer: "2",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การแก้สมการเอกซ์โพเนนเชียลโดยการทำฐานให้เท่ากัน: $a^u = a^v \\implies u = v$ เมื่อ $a > 0, a \\ne 1$",
      "steps": [
        "เขียน 27 ในรูปฐาน 3: $27 = 3^3$",
        "สมการกลายเป็น $3^{2x - 1} = 3^3$",
        "เทียบเลขชี้กำลัง: $2x - 1 = 3$",
        "$2x = 4 \\implies x = 2$",
        "ดังนั้น $x = 2$"
      ]
    }
  },
  {
    id: "q46",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "medium",
    type: "numeric",
    question: "ถ้า $\\log_2 3 = a$ และ $\\log_2 5 = b$ จงเขียน $\\log_2 45$ ในรูปของ $a$ และ $b$ โดยหาก $a=1.5, b=2.3$ ค่าของ $\\log_2 45$ จะเท่ากับเท่าใด",
    correctAnswer: "5.3",
    tolerance: 0.05,
    unit: "",
    explanation: {
      "coreConcept": "การแยกตัวประกอบของจำนวนหลังลอการิทึม: $\\log(xy) = \\log x + \\log y$ และ $\\log(x^k) = k\\log x$",
      "steps": [
        "แยกตัวประกอบ $45 = 9 \\times 5 = 3^2 \\times 5$",
        "$\\log_2 45 = \\log_2(3^2 \\times 5) = \\log_2(3^2) + \\log_2 5 = 2\\log_2 3 + \\log_2 5 = 2a + b$",
        "แทนค่า $a = 1.5, b = 2.3$:",
        "$\\log_2 45 = 2(1.5) + 2.3 = 3.0 + 2.3 = 5.3$",
        "ดังนั้น คำตอบคือ 5.3"
      ]
    }
  },
  {
    id: "q47",
    topic: "expo_log",
    topicName: "ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม",
    difficulty: "hard",
    type: "numeric",
    question: "จำนวนเต็มบวก $x$ ที่สอดคล้องกับสมการ $x^{\\log x} = 100x$ มีค่ามากที่สุดเท่ากับเท่าใด",
    correctAnswer: "100",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การแก้สมการโดยการเทค $\\log$ ฐาน 10 ทั้งสองข้างของสมการ",
      "steps": [
        "เทค $\\log$ ฐาน 10 ทั้งสองข้าง: $\\log(x^{\\log x}) = \\log(100x)$",
        "ดึงเลขชี้กำลัง: $(\\log x) \\cdot (\\log x) = \\log 100 + \\log x$",
        "$(\\log x)^2 - \\log x - 2 = 0$",
        "ให้ $u = \\log x$: $u^2 - u - 2 = 0 \\implies (u - 2)(u + 1) = 0$",
        "จะได้ $u = 2$ หรือ $u = -1$",
        "1) $\\log x = 2 \\implies x = 10^2 = 100$\n2) $\\log x = -1 \\implies x = 10^{-1} = 0.1$",
        "โจทย์ถามหาจำนวนเต็มบวก $x$ ที่มากที่สุด คือ 100"
      ]
    }
  },

  // --- 8. ฟังก์ชันตรีโกณมิติ (q48 - q54) ---
  {
    id: "q48",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ค่าของ $\\sin(150^\\circ) + \\cos(300^\\circ)$ เท่ากับข้อใด",
    choices: ["1", "0", "$\\sqrt{3}$", "$\\frac{1}{2}$", "-1"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การหาค่าตรีโกณมิติในจตุภาคต่างๆ: $\\sin(180^\\circ - \\theta) = \\sin\\theta$ และ $\\cos(360^\\circ - \\theta) = \\cos\\theta$",
      "steps": [
        "$\\sin(150^\\circ) = \\sin(180^\\circ - 30^\\circ) = \\sin(30^\\circ) = \\frac{1}{2}$ (จตุภาคที่ 2 ค่า $\\sin$ เป็นบวก)",
        "$\\cos(300^\\circ) = \\cos(360^\\circ - 60^\\circ) = \\cos(60^\\circ) = \\frac{1}{2}$ (จตุภาคที่ 4 ค่า $\\cos$ เป็นบวก)",
        "คำนวณ: $\\frac{1}{2} + \\frac{1}{2} = 1$",
        "ดังนั้น คำตอบคือ 1 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q49",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ถ้า $\\sin\\theta = \\frac{3}{5}$ และ $\\frac{\\pi}{2} < \\theta < \\pi$ แล้วค่าของ $\\cos(2\\theta)$ เท่ากับข้อใด",
    choices: [
      "$\\frac{7}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{24}{25}$",
      "$-\\frac{24}{25}$",
      "$\\frac{16}{25}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สูตรมุมสองเท่าของฟังก์ชันโคไซน์: $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$",
      "steps": [
        "ใช้สูตร $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$",
        "แทนค่า $\\sin\\theta = \\frac{3}{5}$:",
        "$\\cos(2\\theta) = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25}$",
        "$\\cos(2\\theta) = \\frac{7}{25}$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q50",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ค่าของ $\\cos(75^\\circ)$ มีค่าเท่ากับข้อใดต่อไปนี้",
    choices: [
      "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{3} - 1}{2\\sqrt{2}}$",
      "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$",
      "$\\frac{1}{4}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สูตรโคไซน์ของผลบวกสองมุม: $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$",
      "steps": [
        "เขียน $75^\\circ = 45^\\circ + 30^\\circ$",
        "$\\cos(75^\\circ) = \\cos(45^\\circ + 30^\\circ) = \\cos(45^\\circ)\\cos(30^\\circ) - \\sin(45^\\circ)\\sin(30^\\circ)$",
        "แทนค่า: $\\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) - \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right)$",
        "$= \\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q51",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "hard",
    type: "multiple_choice",
    question: "กำหนดรูปสามเหลี่ยม $ABC$ โดยที่ด้าน $a = 5$, ด้าน $b = 7$ และมุม $C = 60^\\circ$ ความยาวของด้าน $c$ เท่ากับข้อใด",
    choices: [
      "$\\sqrt{39}$",
      "$\\sqrt{49}$",
      "$\\sqrt{74}$",
      "6",
      "$\\sqrt{34}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "กฎของโคไซน์ (Law of Cosines): $c^2 = a^2 + b^2 - 2ab\\cos C$",
      "steps": [
        "จากกฎของโคไซน์: $c^2 = a^2 + b^2 - 2ab\\cos C$",
        "แทนค่า: $c^2 = 5^2 + 7^2 - 2(5)(7)\\cos(60^\\circ)$",
        "$c^2 = 25 + 49 - 70\\left(\\frac{1}{2}\\right) = 74 - 35 = 39$",
        "ดังนั้น $c = \\sqrt{39}$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q52",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "easy",
    type: "numeric",
    question: "ค่าของ $\\arcsin\\left(\\frac{1}{2}\\right) + \\arccos\\left(\\frac{1}{2}\\right)$ มีค่าเท่ากับกี่องศา",
    correctAnswer: "90",
    tolerance: 0.01,
    unit: "องศา",
    explanation: {
      "coreConcept": "เอกลักษณ์ของฟังก์ชันตรีโกณมิติผกผัน: $\\arcsin(x) + \\arccos(x) = \\frac{\\pi}{2}$ เรเดียน หรือ $90^\\circ$ เสมอสำหรับทุก $x \\in [-1, 1]$",
      "steps": [
        "$\\arcsin(1/2) = 30^\\circ$",
        "$\\arccos(1/2) = 60^\\circ$",
        "ผลรวม $= 30^\\circ + 60^\\circ = 90^\\circ$",
        "ดังนั้น คำตอบคือ 90 องศา"
      ]
    }
  },
  {
    id: "q53",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "medium",
    type: "numeric",
    question: "ถ้า $\\tan\\theta = 2$ จงหาค่าของ $\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta}$",
    correctAnswer: "3",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "เทคนิคการหารทั้งเศษและส่วนด้วย $\\cos\\theta$ เพื่อเปลี่ยนนิพจน์ให้อยู่ในรูปของ $\\tan\\theta$",
      "steps": [
        "หารทั้งเศษและส่วนด้วย $\\cos\\theta$ (เมื่อ $\\cos\\theta \\ne 0$):",
        "$\\frac{\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\cos\\theta}}{\\frac{\\sin\\theta}{\\cos\\theta} - \\frac{\\cos\\theta}{\\cos\\theta}} = \\frac{\\tan\\theta + 1}{\\tan\\theta - 1}$",
        "แทนค่า $\\tan\\theta = 2$:",
        "$= \\frac{2 + 1}{2 - 1} = \\frac{3}{1} = 3$",
        "ดังนั้น คำตอบคือ 3"
      ]
    }
  },
  {
    id: "q54",
    topic: "trigonometry",
    topicName: "ฟังก์ชันตรีโกณมิติ",
    difficulty: "hard",
    type: "numeric",
    question: "จำนวนคำตอบของสมการ $2\\sin^2 x - 3\\sin x + 1 = 0$ ในช่วง $[0, 2\\pi]$ มีทั้งหมดกี่คำตอบ",
    correctAnswer: "3",
    tolerance: 0.01,
    unit: "คำตอบ",
    explanation: {
      "coreConcept": "การแก้สมการตรีโกณมิติกำลังสองและการหาคำตอบรอบวงกลมหนึ่งหน่วยในช่วง $[0, 2\\pi]$",
      "steps": [
        "แยกตัวประกอบ: $(2\\sin x - 1)(\\sin x - 1) = 0$",
        "จะได้ 1) $\\sin x = \\frac{1}{2}$ หรือ 2) $\\sin x = 1$",
        "กรณี 1: $\\sin x = \\frac{1}{2}$ ในช่วง $[0, 2\\pi]$ มี 2 คำตอบคือ $x = \\frac{\\pi}{6}$ และ $x = \\frac{5\\pi}{6}$",
        "กรณี 2: $\\sin x = 1$ ในช่วง $[0, 2\\pi]$ มี 1 คำตอบคือ $x = \\frac{\\pi}{2}$",
        "รวมจำนวนคำตอบทั้งหมด $= 2 + 1 = 3$ คำตอบ",
        "ดังนั้น คำตอบคือ 3"
      ]
    }
  },

  // --- 9. เวกเตอร์ (q55 - q60) ---
  {
    id: "q55",
    topic: "vectors",
    topicName: "เวกเตอร์",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ขนาดของเวกเตอร์ $\\vec{u} = 2\\hat{i} - 3\\hat{j} + 6\\hat{k}$ มีค่าเท่ากับข้อใด",
    choices: ["7", "49", "5", "$\\sqrt{11}$", "9"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ขนาดของเวกเตอร์ในสามมิติ: $|\\vec{u}| = \\sqrt{a^2 + b^2 + c^2}$",
      "steps": [
        "จากสูตร $|\\vec{u}| = \\sqrt{2^2 + (-3)^2 + 6^2}$",
        "คำนวณ: $\\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$",
        "ดังนั้น ขนาดของเวกเตอร์เท่ากับ 7 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q56",
    topic: "vectors",
    topicName: "เวกเตอร์",
    difficulty: "medium",
    type: "multiple_choice",
    question: "มุมระหว่างเวกเตอร์ $\\vec{u} = \\hat{i} + \\hat{j}$ และ $\\vec{v} = \\hat{j} + \\hat{k}$ มีขนาดกี่องศา",
    choices: ["$60^\\circ$", "$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$120^\\circ$"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การหามุมระหว่างเวกเตอร์สองเวกเตอร์: $\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|}$",
      "steps": [
        "หา $\\vec{u} \\cdot \\vec{v} = (1)(0) + (1)(1) + (0)(1) = 1$",
        "หา $|\\vec{u}| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$",
        "หา $|\\vec{v}| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{2}$",
        "คำนวณ $\\cos\\theta = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$",
        "เนื่องจาก $\\cos\\theta = \\frac{1}{2}$ จะได้ $\\theta = 60^\\circ$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q57",
    topic: "vectors",
    topicName: "เวกเตอร์",
    difficulty: "hard",
    type: "multiple_choice",
    question: "ผลคูณเชิงเวกเตอร์ (Cross Product) ของ $\\vec{u} = \\hat{i} + 2\\hat{j} - \\hat{k}$ และ $\\vec{v} = 2\\hat{i} - \\hat{j} + \\hat{k}$ คือเวกเตอร์ในข้อใด",
    choices: [
      "$\\hat{i} - 3\\hat{j} - 5\\hat{k}$",
      "$\\hat{i} + 3\\hat{j} - 5\\hat{k}$",
      "$-\\hat{i} - 3\\hat{j} - 5\\hat{k}$",
      "$\\hat{i} - 3\\hat{j} + 5\\hat{k}$",
      "$3\\hat{i} - \\hat{j} - 5\\hat{k}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ผลคูณเชิงเวกเตอร์ $\\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{bmatrix}$",
      "steps": [
        "ตั้งเมทริกซ์ $\\begin{bmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 1 \\end{bmatrix}$",
        "คำนวณแกน $\\hat{i}$: $(2)(1) - (-1)(-1) = 2 - 1 = 1\\hat{i}$",
        "คำนวณแกน $\\hat{j}$: $-[(1)(1) - (-1)(2)] = -(1 + 2) = -3\\hat{j}$",
        "คำนวณแกน $\\hat{k}$: $(1)(-1) - (2)(2) = -1 - 4 = -5\\hat{k}$",
        "ได้ $\\vec{u} \\times \\vec{v} = \\hat{i} - 3\\hat{j} - 5\\hat{k}$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q58",
    topic: "vectors",
    topicName: "เวกเตอร์",
    difficulty: "easy",
    type: "numeric",
    question: "ถ้าเวกเตอร์ $\\vec{u} = 2\\hat{i} + k\\hat{j}$ ตั้งฉากกับเวกเตอร์ $\\vec{v} = 3\\hat{i} - 2\\hat{j}$ จงหาค่าของ $k$",
    correctAnswer: "3",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "เวกเตอร์สองเวกเตอร์ตั้งฉากกันก็ต่อเมื่อผลคูณเชิงสเกลาร์ (Dot product) เท่ากับ 0",
      "steps": [
        "$\\vec{u} \\cdot \\vec{v} = 0$",
        "$(2)(3) + (k)(-2) = 0$",
        "$6 - 2k = 0 \\implies 2k = 6 \\implies k = 3$",
        "ดังนั้น ค่าของ $k$ คือ 3"
      ]
    }
  },
  {
    id: "q59",
    topic: "vectors",
    topicName: "เวกเตอร์",
    difficulty: "medium",
    type: "numeric",
    question: "กำหนดให้ $|\\vec{u}| = 3$, $|\\vec{v}| = 4$ และมุมระหว่างเวกเตอร์ทั้งสองเท่ากับ $60^\\circ$ จงหาค่าของ $|\\vec{u} + \\vec{v}|^2$",
    correctAnswer: "37",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "สูตรกำลังสองของขนาดผลบวกเวกเตอร์: $|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + 2|\\vec{u}||\\vec{v}|\\cos\\theta + |\\vec{v}|^2$",
      "steps": [
        "จากสูตร $|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + 2(\\vec{u} \\cdot \\vec{v}) + |\\vec{v}|^2$",
        "$= 3^2 + 2(3)(4)\\cos(60^\\circ) + 4^2$",
        "$= 9 + 24\\left(\\frac{1}{2}\\right) + 16$",
        "$= 9 + 12 + 16 = 37$",
        "ดังนั้น คำตอบคือ 37"
      ]
    }
  },
  {
    id: "q60",
    topic: "vectors",
    topicName: "เวกเตอร์",
    difficulty: "hard",
    type: "numeric",
    question: "พื้นที่ของรูปสี่เหลี่ยมด้านขนานที่เกิดจากเวกเตอร์ $\\vec{u} = 3\\hat{i} + \\hat{j}$ และ $\\vec{v} = \\hat{i} + 4\\hat{j}$ มีค่าเท่ากับกี่ตารางหน่วย",
    correctAnswer: "11",
    tolerance: 0.01,
    unit: "ตารางหน่วย",
    explanation: {
      "coreConcept": "พื้นที่ของรูปสี่เหลี่ยมด้านขนานที่กำหนดโดยเวกเตอร์สองมิติเท่ากับ $|\\det \\begin{bmatrix} u_1 & u_2 \\\\ v_1 & v_2 \\end{bmatrix}|$ หรือ $|\\vec{u} \\times \\vec{v}|$",
      "steps": [
        "คำนวณดีเทอร์มิแนนต์ของเวกเตอร์ทั้งสอง: $|(3)(4) - (1)(1)|$",
        "$= |12 - 1| = 11$",
        "ดังนั้น พื้นที่สี่เหลี่ยมด้านขนานเท่ากับ 11 ตารางหน่วย"
      ]
    }
  }
];
