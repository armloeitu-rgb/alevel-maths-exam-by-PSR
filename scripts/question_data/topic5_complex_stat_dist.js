// Topic 13: จำนวนเชิงซ้อน (6 ข้อ), Topic 14: สถิติ (6 ข้อ), Topic 15: การแจกแจงความน่าจะเป็น (6 ข้อ)
module.exports = [
  // --- 13. จำนวนเชิงซ้อน (q83 - q88) ---
  {
    id: "q83",
    topic: "complex_numbers",
    topicName: "จำนวนเชิงซ้อน",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ค่าของ $i^{2026}$ มีค่าเท่ากับข้อใด เมื่อ $i = \\sqrt{-1}$",
    choices: ["-1", "1", "$i$", "$-i$", "0"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "วัฏจักรของหน่วยจินตภาพ $i$: $i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$ หาค่าโดยนำเลขชี้กำลังหารด้วย 4 แล้วดูเศษ",
      "steps": [
        "นำ 2026 หารด้วย 4: $2026 = 4 \\times 506 + 2$",
        "เหลือเศษ 2",
        "ดังนั้น $i^{2026} = i^2 = -1$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q84",
    topic: "complex_numbers",
    topicName: "จำนวนเชิงซ้อน",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ถ้า $z = 3 - 4i$ แล้วค่าของ $|z| + z\\bar{z}$ เท่ากับข้อใด",
    choices: ["30", "25", "20", "35", "10"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ขนาดของจำนวนเชิงซ้อน $|z| = \\sqrt{a^2 + b^2}$ และสมบัติสังยุค $z\\bar{z} = |z|^2$",
      "steps": [
        "หาขนาดของ $z$: $|z| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$",
        "ใช้สมบัติ $z\\bar{z} = |z|^2 = 5^2 = 25$",
        "คำนวณผลรวม: $|z| + z\\bar{z} = 5 + 25 = 30$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q85",
    topic: "complex_numbers",
    topicName: "จำนวนเชิงซ้อน",
    difficulty: "hard",
    type: "multiple_choice",
    question: "รูปเชิงขั้ว (Polar Form) ของจำนวนเชิงซ้อน $z = -1 + \\sqrt{3}i$ ตรงกับข้อใด",
    choices: [
      "$2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$",
      "$2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$",
      "$2\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right)$",
      "$\\sqrt{2}\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$",
      "$2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การแปลงจำนวนเชิงซ้อนเป็นรูปเชิงขั้ว $z = r(\\cos\\theta + i\\sin\\theta)$ โดย $r = \\sqrt{a^2 + b^2}$ และ $\\tan\\theta = \\frac{b}{a}$ พิจารณาจตุภาค",
      "steps": [
        "หาขนาด: $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$",
        "พิจารณาจุด $(-1, \\sqrt{3})$ อยู่ในจตุภาคที่ 2 ($x < 0, y > 0$)",
        "มุมอ้างอิง: $\\tan\\alpha = \\frac{\\sqrt{3}}{1} \\implies \\alpha = 60^\\circ = \\frac{\\pi}{3}$",
        "ในจตุภาคที่ 2: $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$",
        "ดังนั้น $z = 2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q86",
    topic: "complex_numbers",
    topicName: "จำนวนเชิงซ้อน",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ค่าของ $\\frac{2 + i}{1 - i}$ เขียนในรูป $a + bi$ ตรงกับข้อใด",
    choices: [
      "$\\frac{1}{2} + \\frac{3}{2}i$",
      "$\\frac{1}{2} - \\frac{3}{2}i$",
      "$1 + 3i$",
      "$\\frac{3}{2} + \\frac{1}{2}i$",
      "$3 + i$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การหารจำนวนเชิงซ้อนโดยการคูณด้วยสังยุค (Conjugate) ของตัวส่วนทั้งเศษและส่วน",
      "steps": [
        "สังยุคของตัวส่วน $1 - i$ คือ $1 + i$",
        "$\\frac{2 + i}{1 - i} = \\frac{(2 + i)(1 + i)}{(1 - i)(1 + i)}$",
        "ตัวเศษ: $(2)(1) + 2i + i + i^2 = 2 + 3i - 1 = 1 + 3i$",
        "ตัวส่วน: $1^2 - i^2 = 1 - (-1) = 2$",
        "ได้ผลลัพธ์ $\\frac{1 + 3i}{2} = \\frac{1}{2} + \\frac{3}{2}i$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q87",
    topic: "complex_numbers",
    topicName: "จำนวนเชิงซ้อน",
    difficulty: "easy",
    type: "numeric",
    question: "ถ้า $z = (1 + 2i) + (4 - 5i)$ แล้วส่วนจริง (Real part) ของ $z$ มีค่าเท่ากับเท่าใด",
    correctAnswer: "5",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การบวกจำนวนเชิงซ้อน: นำส่วนจริงบวกส่วนจริง และส่วนจินตภาพบวกส่วนจินตภาพ",
      "steps": [
        "ส่วนจริง: $1 + 4 = 5$",
        "ส่วนจินตภาพ: $(2 - 5)i = -3i$",
        "$z = 5 - 3i$",
        "ส่วนจริง $\\operatorname{Re}(z) = 5$"
      ]
    }
  },
  {
    id: "q88",
    topic: "complex_numbers",
    topicName: "จำนวนเชิงซ้อน",
    difficulty: "hard",
    type: "numeric",
    question: "ถ้า $z = \\cos(15^\\circ) + i\\sin(15^\\circ)$ จงหาค่าของส่วนจริงของ $z^6$",
    correctAnswer: "0",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "ทฤษฎีบทของเดอมัวฟวร์ (De Moivre's Theorem): $[\\cos\\theta + i\\sin\\theta]^n = \\cos(n\\theta) + i\\sin(n\\theta)$",
      "steps": [
        "ใช้ทฤษฎีบทเดอมัวฟวร์: $z^6 = \\cos(6 \\times 15^\\circ) + i\\sin(6 \\times 15^\\circ)$",
        "$z^6 = \\cos(90^\\circ) + i\\sin(90^\\circ)$",
        "เนื่องจาก $\\cos(90^\\circ) = 0$ และ $\\sin(90^\\circ) = 1$",
        "$z^6 = 0 + 1i = i$",
        "ส่วนจริงของ $z^6$ เท่ากับ 0"
      ]
    }
  },

  // --- 14. สถิติ (q89 - q94) ---
  {
    id: "q89",
    topic: "statistics",
    topicName: "สถิติ",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ข้อมูลชุดหนึ่งประกอบด้วย $4, 7, 7, 8, 9, 10, 11$ ฐานนิยมของข้อมูลชุดนี้เท่ากับข้อใด",
    choices: ["7", "8", "4", "9", "ไม่มีฐานนิยม"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ฐานนิยม (Mode) คือค่าของข้อมูลที่มีความถี่สูงสุด (ปรากฏบ่อยที่สุด)",
      "steps": [
        "นับความถี่ของข้อมูลแต่ละค่า: เลข 4 มี 1 ตัว, เลข 7 มี 2 ตัว, เลข 8 มี 1 ตัว, เลข 9 มี 1 ตัว, เลข 10 มี 1 ตัว, เลข 11 มี 1 ตัว",
        "ข้อมูลที่มีความถี่สูงสุดคือ 7 (ความถี่เท่ากับ 2)",
        "ดังนั้น ฐานนิยมเท่ากับ 7 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q90",
    topic: "statistics",
    topicName: "สถิติ",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ข้อมูลชุดหนึ่งมี 5 จำนวน ได้แก่ $2, 4, 6, 8, 10$ ความแปรปรวนของข้อมูลชุดนี้เท่ากับข้อใด",
    choices: ["8", "10", "4", "$\\sqrt{8}$", "6"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ความแปรปรวนประชากร: $\\sigma^2 = \\frac{\\sum (x_i - \\mu)^2}{N}$",
      "steps": [
        "หาค่าเฉลี่ยเลขคณิต: $\\mu = \\frac{2 + 4 + 6 + 8 + 10}{5} = \\frac{30}{5} = 6$",
        "หาผลต่างกำลังสองจากค่าเฉลี่ย:\n$(2-6)^2 = 16$\n$(4-6)^2 = 4$\n$(6-6)^2 = 0$\n$(8-6)^2 = 4$\n$(10-6)^2 = 16$",
        "รวมผลต่างกำลังสอง: $16 + 4 + 0 + 4 + 16 = 40$",
        "หารด้วย $N = 5$: $\\sigma^2 = \\frac{40}{5} = 8$",
        "ดังนั้น ความแปรปรวนเท่ากับ 8 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q91",
    topic: "statistics",
    topicName: "สถิติ",
    difficulty: "hard",
    type: "multiple_choice",
    question: "ถ้าข้อมูลชุดหนึ่งมีค่าเฉลี่ยเลขคณิตเท่ากับ 50 และส่วนเบี่ยงเบนมาตรฐานเท่ากับ 8 หากนำ 2 ไปคูณข้อมูลทุกตัวแล้วบวกด้วย 5 ค่าเฉลี่ยเลขคณิตและส่วนเบี่ยงเบนมาตรฐานชุดใหม่จะเท่ากับข้อใดตามลำดับ",
    choices: [
      "105 และ 16",
      "105 และ 21",
      "100 และ 16",
      "105 และ 8",
      "100 และ 21"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมบัติการแปลงเชิงเส้น $y_i = ax_i + b$: ค่าเฉลี่ยเลขคณิตใหม่ $\\bar{y} = a\\bar{x} + b$ แต่ส่วนเบี่ยงเบนมาตรฐานใหม่ $s_y = |a|s_x$ (ไม่ขึ้นกับการบวก $b$)",
      "steps": [
        "การแปลงข้อมูลคือ $y = 2x + 5$ ดังนั้น $a = 2$ และ $b = 5$",
        "ค่าเฉลี่ยใหม่: $\\bar{y} = 2(50) + 5 = 100 + 5 = 105$",
        "ส่วนเบี่ยงเบนมาตรฐานใหม่: $s_y = |2|(8) = 16$ (การบวก 5 ไม่ทำให้การกระจายเปลี่ยน)",
        "ดังนั้น ค่าเฉลี่ยใหม่คือ 105 และส่วนเบี่ยงเบนมาตรฐานใหม่คือ 16 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q92",
    topic: "statistics",
    topicName: "สถิติ",
    difficulty: "easy",
    type: "numeric",
    question: "ข้อมูลชุดหนึ่งเรียงลำดับจากน้อยไปมากแล้วดังนี้: $3, 5, 7, 9, 11, 13, 15$ จงหาค่ามัธยฐานของข้อมูลชุดนี้",
    correctAnswer: "9",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "มัธยฐานของข้อมูลเดี่ยว $N$ ตัว อยู่ที่ตำแหน่ง $\\frac{N + 1}{2}$",
      "steps": [
        "ข้อมูลมี $N = 7$ จำนวน",
        "ตำแหน่งมัธยฐาน $= \\frac{7 + 1}{2} = 4$",
        "ข้อมูลในตำแหน่งที่ 4 คือ 9",
        "ดังนั้น มัธยฐานเท่ากับ 9"
      ]
    }
  },
  {
    id: "q93",
    topic: "statistics",
    topicName: "สถิติ",
    difficulty: "medium",
    type: "numeric",
    question: "คะแนนสอบของนักเรียนห้องหนึ่งมี 10 คน ได้คะแนนเฉลี่ย 15 คะแนน ต่อมาพบว่าครูตรวจคะแนนของนักเรียนคนหนึ่งผิดไป โดยลงคะแนนเป็น 8 คะแนน แต่คะแนนที่ถูกต้องคือ 18 คะแนน จงหาคะแนนเฉลี่ยที่ถูกต้อง",
    correctAnswer: "16",
    tolerance: 0.01,
    unit: "คะแนน",
    explanation: {
      "coreConcept": "การแก้ไขค่าเฉลี่ยเลขคณิตที่คลาดเคลื่อน: ผลรวมใหม่ = ผลรวมเก่า - ค่าที่ผิด + ค่าที่ถูก",
      "steps": [
        "ผลรวมคะแนนเดิม $= N \\times \\bar{x} = 10 \\times 15 = 150$",
        "ปรับปรุงผลรวมคะแนน: ผลรวมใหม่ $= 150 - 8 + 18 = 160$",
        "คะแนนเฉลี่ยใหม่ $= \\frac{160}{10} = 16$",
        "ดังนั้น คะแนนเฉลี่ยที่ถูกต้องคือ 16 คะแนน"
      ]
    }
  },
  {
    id: "q94",
    topic: "statistics",
    topicName: "สถิติ",
    difficulty: "hard",
    type: "numeric",
    question: "ข้อมูลชุดหนึ่งมีพิสัยระหว่างควอร์ไทล์ ($IQR = Q_3 - Q_1$) เท่ากับ 12 ถ้าควอร์ไทล์ที่หนึ่ง ($Q_1$) เท่ากับ 20 จงหาค่าของควอร์ไทล์ที่สาม ($Q_3$)",
    correctAnswer: "32",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "นิยามของพิสัยระหว่างควอร์ไทล์: $IQR = Q_3 - Q_1$",
      "steps": [
        "จาก $IQR = Q_3 - Q_1$",
        "$12 = Q_3 - 20$",
        "$Q_3 = 20 + 12 = 32$",
        "ดังนั้น $Q_3 = 32$"
      ]
    }
  },

  // --- 15. การแจกแจงความน่าจะเป็น (q95 - q100) ---
  {
    id: "q95",
    topic: "probability_distribution",
    topicName: "การแจกแจงความน่าจะเป็น",
    difficulty: "easy",
    type: "multiple_choice",
    question: "กำหนดให้ $X$ เป็นตัวแปรสุ่มไม่ต่อเนื่องที่มีการแจกแจงความน่าจะเป็นดังนี้: $P(X = 0) = 0.2$, $P(X = 1) = 0.5$, $P(X = 2) = c$ ค่าของ $c$ เท่ากับข้อใด",
    choices: ["0.3", "0.2", "0.4", "0.1", "0.5"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมบัติของฟังก์ชันการแจกแจงความน่าจะเป็นของตัวแปรสุ่มไม่ต่อเนื่อง: ผลรวมของความน่าจะเป็นทุกค่าต้องเท่ากับ 1 เสมอ ($\\sum P(X = x) = 1$)",
      "steps": [
        "จาก $\\sum P(X = x) = 1$",
        "$0.2 + 0.5 + c = 1$",
        "$0.7 + c = 1 \\implies c = 0.3$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q96",
    topic: "probability_distribution",
    topicName: "การแจกแจงความน่าจะเป็น",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ตัวแปรสุ่ม $X$ มีค่าที่เป็นไปได้คือ 1, 2, 3 โดยมี $P(X = 1) = 0.3$, $P(X = 2) = 0.4$, $P(X = 3) = 0.3$ ค่าคาดหมาย $E(X)$ เท่ากับข้อใด",
    choices: ["2.0", "2.5", "1.8", "2.2", "1.5"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ค่าคาดหมาย (Expected Value): $E(X) = \\sum x_i P(X = x_i)$",
      "steps": [
        "$E(X) = (1)(0.3) + (2)(0.4) + (3)(0.3)$",
        "$E(X) = 0.3 + 0.8 + 0.9 = 2.0$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q97",
    topic: "probability_distribution",
    topicName: "การแจกแจงความน่าจะเป็น",
    difficulty: "hard",
    type: "multiple_choice",
    question: "ตัวแปรสุ่ม $X$ มีการแจกแจงทวินาม $X \\sim B(n = 4, p = 0.5)$ ความน่าจะเป็นที่ $X = 2$ เท่ากับข้อใด",
    choices: [
      "$\\frac{3}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{16}$",
      "$\\frac{1}{16}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สูตรการแจกแจงทวินาม (Binomial Distribution): $P(X = x) = \\binom{n}{x} p^x (1 - p)^{n - x}$",
      "steps": [
        "แทนค่า $n = 4, x = 2, p = 0.5$:",
        "$P(X = 2) = \\binom{4}{2} (0.5)^2 (0.5)^2$",
        "$\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$",
        "$P(X = 2) = 6 \\times \\left(\\frac{1}{2}\\right)^4 = 6 \\times \\frac{1}{16} = \\frac{6}{16} = \\frac{3}{8}$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q98",
    topic: "probability_distribution",
    topicName: "การแจกแจงความน่าจะเป็น",
    difficulty: "easy",
    type: "numeric",
    question: "ถ้าคะแนนสอบมีการแจกแจงปกติ โดยมีค่าเฉลี่ย $\\mu = 50$ และส่วนเบี่ยงเบนมาตรฐาน $\\sigma = 5$ จงหาค่าคะแนนมาตรฐาน ($Z$) ของนักเรียนที่สอบได้ 60 คะแนน",
    correctAnswer: "2",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "สูตรคะแนนมาตรฐาน: $Z = \\frac{x - \\mu}{\\sigma}$",
      "steps": [
        "แทนค่า $x = 60, \\mu = 50, \\sigma = 5$:",
        "$Z = \\frac{60 - 50}{5} = \\frac{10}{5} = 2$",
        "ดังนั้น ค่า $Z = 2$"
      ]
    }
  },
  {
    id: "q99",
    topic: "probability_distribution",
    topicName: "การแจกแจงความน่าจะเป็น",
    difficulty: "medium",
    type: "numeric",
    question: "ตัวแปรสุ่ม $X$ มีการแจกแจงทวินาม $B(n = 100, p = 0.2)$ จงหาค่าความแปรปรวน $Var(X)$",
    correctAnswer: "16",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "ความแปรปรวนของการแจกแจงทวินาม: $Var(X) = n p (1 - p)$",
      "steps": [
        "แทนค่า $n = 100, p = 0.2, (1 - p) = 0.8$:",
        "$Var(X) = 100 \\times 0.2 \\times 0.8 = 20 \\times 0.8 = 16$",
        "ดังนั้น ความแปรปรวนเท่ากับ 16"
      ]
    }
  },
  {
    id: "q100",
    topic: "probability_distribution",
    topicName: "การแจกแจงความน่าจะเป็น",
    difficulty: "hard",
    type: "numeric",
    question: "ตัวแปรสุ่มปกติมาตรฐาน $Z$ มี $P(0 < Z < 1.96) = 0.475$ จงหาความน่าจะเป็น $P(Z > 1.96)$ (ตอบเป็นทศนิยม 3 ตำแหน่ง)",
    correctAnswer: "0.025",
    tolerance: 0.001,
    unit: "",
    explanation: {
      "coreConcept": "สมบัติความสมมาตรของเส้นโค้งปกติมาตรฐาน: พื้นที่ครึ่งซีกขวา ($Z > 0$) มีค่าเท่ากับ 0.5 เสมอ ดังนั้น $P(Z > z) = 0.5 - P(0 < Z < z)$",
      "steps": [
        "เนื่องจากพื้นที่ใต้กราฟครึ่งขวาคือ $P(Z > 0) = 0.5$",
        "$P(Z > 1.96) = P(Z > 0) - P(0 < Z < 1.96)$",
        "$= 0.5 - 0.475 = 0.025$",
        "ดังนั้น ความน่าจะเป็นเท่ากับ 0.025"
      ]
    }
  }
];
