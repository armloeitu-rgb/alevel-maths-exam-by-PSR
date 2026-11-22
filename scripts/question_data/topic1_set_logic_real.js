// Topic 1: เซต (6 ข้อ), Topic 2: ตรรกศาสตร์ (6 ข้อ), Topic 3: ระบบจำนวนจริง (7 ข้อ)
module.exports = [
  // --- 1. เซต (q1 - q6) ---
  {
    id: "q1",
    topic: "set",
    topicName: "เซต",
    difficulty: "easy",
    type: "multiple_choice",
    question: "กำหนดให้ $A = \\{1, 2, \\{1, 2\\}, \\emptyset\\}$ ข้อใดต่อไปนี้**ไม่ถูกต้อง**",
    choices: [
      "$\\{1, 2\\} \\in A$",
      "$\\{1, 2\\} \\subset A$",
      "$\\{\\emptyset\\} \\subset A$",
      "$\\emptyset \\in A$",
      "$\\{\\{1\\}\\} \\subset A$"
    ],
    correctAnswer: 4,
    explanation: {
      "coreConcept": "ความแตกต่างระหว่างการเป็นสมาชิก ($\in$) และการเป็นสับเซต ($\subset$): เซต $X \\subset A$ ก็ต่อเมื่อสมาชิกทุกตัวใน $X$ ต้องเป็นสมาชิกใน $A$",
      "steps": [
        "พิจารณาสมาชิกของ $A$: สมาชิกของ $A$ มี 4 ตัว คือ $1$, $2$, $\\{1, 2\\}$ และ $\\emptyset$",
        "ตัวเลือก 1: $\\{1, 2\\} \\in A$ ถูกต้อง เพราะ $\\{1, 2\\}$ เป็นสมาชิกตัวหนึ่งของ $A$",
        "ตัวเลือก 2: $\\{1, 2\\} \\subset A$ ถูกต้อง เพราะสมาชิก 1 และ 2 ต่างก็เป็นสมาชิกของ $A$",
        "ตัวเลือก 3: $\\{\\emptyset\\} \\subset A$ ถูกต้อง เพราะ $\\emptyset \\in A$",
        "ตัวเลือก 4: $\\emptyset \\in A$ ถูกต้อง เพราะ $\\emptyset$ เป็นหนึ่งในสมาชิกของ $A$",
        "ตัวเลือก 5: $\\{\\{1\\}\\} \\subset A$ หมายถึง $\\{1\\} \\in A$ ซึ่งไม่จริงเพราะใน $A$ มีแค่ $1$ ไม่ได้มี $\\{1\\}$ ดังนั้นตัวเลือกนี้จึงไม่ถูกต้อง"
      ]
    }
  },
  {
    id: "q2",
    topic: "set",
    topicName: "เซต",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ถ้า $n(U) = 100$, $n(A) = 55$, $n(B) = 48$ และ $n(A \\cup B)' = 15$ แล้วค่าของ $n(A \\cap B)$ เท่ากับข้อใด",
    choices: ["18", "20", "22", "24", "26"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สูตรการหาจำนวนสมาชิกของยูเนียน 2 เซต: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ และ $n(A \\cup B) = n(U) - n((A \\cup B)')$",
      "steps": [
        "จาก $n((A \\cup B)') = 15$ จะได้ $n(A \\cup B) = n(U) - 15 = 100 - 15 = 85$",
        "ใช้สูตร $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$",
        "แทนค่า: $85 = 55 + 48 - n(A \\cap B)$",
        "$85 = 103 - n(A \\cap B) \\implies n(A \\cap B) = 103 - 85 = 18$",
        "ดังนั้น $n(A \\cap B) = 18$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q3",
    topic: "set",
    topicName: "เซต",
    difficulty: "hard",
    type: "multiple_choice",
    question: "ในการสำรวจนักเรียน 120 คน เกี่ยวกับการชอบวิชาสามวิชา พบว่า ชอบคณิต 65 คน, ชอบฟิสิกส์ 55 คน, ชอบเคมี 50 คน, ชอบคณิตและฟิสิกส์ 25 คน, ชอบฟิสิกส์และเคมี 20 คน, ชอบคณิตและเคมี 22 คน และชอบทั้งสามวิชา 10 คน จงหาจำนวนนักเรียนที่ไม่ชอบวิชาใดเลยในสามวิชานี้",
    choices: ["5", "7", "10", "12", "15"],
    correctAnswer: 1,
    explanation: {
      "coreConcept": "สูตรจำนวนสมาชิกของ 3 เซต: $n(A \\cup B \\cup C) = n(A)+n(B)+n(C) - [n(A \\cap B)+n(B \\cap C)+n(C \\cap A)] + n(A \\cap B \\cap C)$",
      "steps": [
        "ให้ $M, P, C$ แทนเซตของนักเรียนที่ชอบคณิตศาสตร์ ฟิสิกส์ และเคมี ตามลำดับ",
        "คำนวณ $n(M \\cup P \\cup C) = 65 + 55 + 50 - (25 + 20 + 22) + 10$",
        "$n(M \\cup P \\cup C) = 170 - 67 + 10 = 113$ คน",
        "จำนวนนักเรียนที่ไม่ชอบวิชาใดเลยเท่ากับ $n(U) - n(M \\cup P \\cup C) = 120 - 113 = 7$ คน",
        "ดังนั้น คำตอบคือ 7 คน (ตรงกับตัวเลือกที่ 2)"
      ]
    }
  },
  {
    id: "q4",
    topic: "set",
    topicName: "เซต",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ถ้าเซต $A$ มีสมาชิก 5 ตัว แล้วจำนวนสับเซตแท้ (Proper Subsets) ทั้งหมดของเซต $A$ เท่ากับข้อใด",
    choices: ["31", "32", "63", "64", "16"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "จำนวนสับเซตทั้งหมดของเซตที่มีสมาชิก $n$ ตัว เท่ากับ $2^n$ และจำนวนสับเซตแท้เท่ากับ $2^n - 1$ (หักตัวมันเองออก 1 เซต)",
      "steps": [
        "เซต $A$ มีสมาชิก $n = 5$ ตัว",
        "จำนวนสับเซตทั้งหมดเท่ากับ $2^5 = 32$ เซต",
        "จำนวนสับเซตแท้ = $2^5 - 1 = 32 - 1 = 31$ เซต",
        "ดังนั้น คำตอบคือ 31 เซต"
      ]
    }
  },
  {
    id: "q5",
    topic: "set",
    topicName: "เซต",
    difficulty: "medium",
    type: "numeric",
    question: "กำหนดให้ $A$ และ $B$ เป็นเซตจำกัด โดยที่ $n(P(A)) = 64$ และ $n(P(B)) = 256$ ถ้า $n(A \\cap B) = 3$ จงหาค่าของ $n(P(A \\cup B))$",
    correctAnswer: "2048",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "ความสัมพันธ์เพาเวอร์เซต $n(P(X)) = 2^{n(X)}$ และกฎการนับ $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$",
      "steps": [
        "จาก $n(P(A)) = 64 = 2^6 \\implies n(A) = 6$",
        "จาก $n(P(B)) = 256 = 2^8 \\implies n(B) = 8$",
        "คำนวณ $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 6 + 8 - 3 = 11$",
        "หาค่า $n(P(A \\cup B)) = 2^{n(A \\cup B)} = 2^{11} = 2048$",
        "ดังนั้น คำตอบคือ 2048"
      ]
    }
  },
  {
    id: "q6",
    topic: "set",
    topicName: "เซต",
    difficulty: "hard",
    type: "numeric",
    question: "กำหนดให้ $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$ และ $B = \\{x \\in \\mathbb{R} \\mid x^3 - 6x^2 + 11x - 6 = 0\\}$ จงหาจำนวนสมาชิกของเพาเวอร์เซต $P(B - A)$",
    correctAnswer: "2",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การแก้สมการหาเซตคำตอบ การหาผลต่างของเซต $B - A$ และการหาจำนวนสมาชิกเพาเวอร์เซต $n(P(B - A)) = 2^{n(B - A)}$",
      "steps": [
        "หาเซต $A$: $x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies A = \\{2, 3\\}$",
        "หาเซต $B$: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3) = 0 \\implies B = \\{1, 2, 3\\}$",
        "หา $B - A$: สมาชิกที่อยู่ใน $B$ แต่ไม่อยู่ใน $A$ คือ $\\{1\\}$ ดังนั้น $n(B - A) = 1$",
        "จำนวนสมาชิกของ $P(B - A) = 2^1 = 2$",
        "ดังนั้น คำตอบคือ 2"
      ]
    }
  },

  // --- 2. ตรรกศาสตร์ (q7 - q12) ---
  {
    id: "q7",
    topic: "logic",
    topicName: "ตรรกศาสตร์",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ประพจน์ในข้อใดต่อไปนี้มีค่าความจริงเป็น**จริง**เสมอ (เป็นสัจนิรันดร์)",
    choices: [
      "$(p \\land q) \\rightarrow p$",
      "$(p \\lor q) \\rightarrow p$",
      "$p \\rightarrow (p \\land q)$",
      "$(p \\rightarrow q) \\rightarrow (q \\rightarrow p)$",
      "$\\sim(p \\lor q) \\leftrightarrow (p \\lor \\sim q)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สัจนิรันดร์ (Tautology) คือประพจน์ที่มีค่าความจริงเป็นจริงในทุกกรณีของการกำหนดค่าความจริงให้ประพจน์ย่อย",
      "steps": [
        "พิจารณาตัวเลือก 1: $(p \\land q) \\rightarrow p$",
        "ถ้า $p \\land q$ เป็นจริง แปลว่า $p$ เป็นจริง และ $q$ เป็นจริง",
        "เมื่อเหตุ ($p \\land q$) เป็นจริง ผล ($p$) ย่อมเป็นจริงด้วยเสมอ ทำให้ประพจน์ $(p \\land q) \\rightarrow p$ เป็นจริงทุกกรณี",
        "หรือใช้กฎ $(A \\land B) \\rightarrow A$ ซึ่งเป็นกฎพื้นฐานของการอ้างเหตุผล (Simplification Rule) จึงเป็นสัจนิรันดร์อย่างแน่นอน"
      ]
    }
  },
  {
    id: "q8",
    topic: "logic",
    topicName: "ตรรกศาสตร์",
    difficulty: "medium",
    type: "multiple_choice",
    question: "กำหนดให้ $p, q, r$ เป็นประพจน์ โดยที่ $(p \\land \\sim q) \\rightarrow (r \\lor s)$ มีค่าความจริงเป็น**เท็จ** ข้อใดต่อไปนี้สรุปค่าความจริงได้ถูกต้อง",
    choices: [
      "$p$ เป็นจริง, $q$ เป็นเท็จ, $r$ เป็นเท็จ, $s$ เป็นเท็จ",
      "$p$ เป็นจริง, $q$ เป็นจริง, $r$ เป็นเท็จ, $s$ เป็นเท็จ",
      "$p$ เป็นเท็จ, $q$ เป็นเท็จ, $r$ เป็นจริง, $s$ เป็นจริง",
      "$p$ เป็นจริง, $q$ เป็นเท็จ, $r$ เป็นจริง, $s$ เป็นเท็จ",
      "$p$ เป็นเท็จ, $q$ เป็นจริง, $r$ เป็นเท็จ, $s$ เป็นเท็จ"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ประพจน์ในรูป $A \\rightarrow B$ มีค่าความจริงเป็นเท็จได้กรณีเดียวเท่านั้น คือ เหตุ $A$ เป็นจริง (T) และ ผล $B$ เป็นเท็จ (F)",
      "steps": [
        "จาก $(p \\land \\sim q) \\rightarrow (r \\lor s) \\equiv F$",
        "จะได้ว่าด้านซ้าย $p \\land \\sim q \\equiv T$ และด้านขวา $r \\lor s \\equiv F$",
        "จาก $p \\land \\sim q \\equiv T$ แสดงว่า $p \\equiv T$ และ $\\sim q \\equiv T \\implies q \\equiv F$",
        "จาก $r \\lor s \\equiv F$ แสดงว่า $r \\equiv F$ และ $s \\equiv F$",
        "ดังนั้น $p = T, q = F, r = F, s = F$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q9",
    topic: "logic",
    topicName: "ตรรกศาสตร์",
    difficulty: "medium",
    type: "multiple_choice",
    question: "นิเสธของข้อความ $\\forall x [P(x) \\rightarrow \\sim Q(x)]$ สมมูลกับข้อใดต่อไปนี้",
    choices: [
      "$\\exists x [P(x) \\land Q(x)]$",
      "$\\exists x [P(x) \\rightarrow Q(x)]$",
      "$\\forall x [P(x) \\land Q(x)]$",
      "$\\exists x [\\sim P(x) \\lor \\sim Q(x)]$",
      "$\\forall x [\\sim P(x) \\lor Q(x)]$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "นิเสธของตัวบ่งปริมาณ $\\sim \\forall x [A] \\equiv \\exists x [\\sim A]$ และการแปลงประพจน์ $\\sim (A \\rightarrow B) \\equiv A \\land \\sim B$",
      "steps": [
        "หานิเสธ: $\\sim \\forall x [P(x) \\rightarrow \\sim Q(x)] \\equiv \\exists x [\\sim(P(x) \\rightarrow \\sim Q(x))]$",
        "ใช้กฎนิเสธของถ้า-แล้ว $\\sim (A \\rightarrow B) \\equiv A \\land \\sim B$",
        "จะได้ $\\sim (P(x) \\rightarrow \\sim Q(x)) \\equiv P(x) \\land \\sim(\\sim Q(x)) \\equiv P(x) \\land Q(x)$",
        "ดังนั้น จะได้ $\\exists x [P(x) \\land Q(x)]$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q10",
    topic: "logic",
    topicName: "ตรรกศาสตร์",
    difficulty: "hard",
    type: "multiple_choice",
    question: "กำหนดเอกภพสัมพัทธ์ $U = \\{-2, -1, 0, 1, 2\\}$ ข้อความในข้อใดต่อไปนี้มีค่าความจริงเป็น**จริง**",
    choices: [
      "$\\forall x [x^2 > 0]$",
      "$\\exists x [x^2 + 2x - 3 = 0]$",
      "$\\forall x [x + 1 > 0]$",
      "$\\forall x \\exists y [x + y = 5]$",
      "$\\exists x \\forall y [xy = 1]$"
    ],
    correctAnswer: 1,
    explanation: {
      "coreConcept": "การหาค่าความจริงของประโยคที่มีตัวบ่งปริมาณ: $\\exists x [P(x)]$ เป็นจริงเมื่อมี $x \\in U$ อย่างน้อย 1 ตัวที่ทำให้ $P(x)$ เป็นจริง",
      "steps": [
        "ตรวจสอบตัวเลือก 1: $\\forall x [x^2 > 0]$ เป็นเท็จเมื่อ $x = 0$ เพราะ $0^2 = 0 \\not> 0$",
        "ตรวจสอบตัวเลือก 2: $\\exists x [x^2 + 2x - 3 = 0]$ แยกตัวประกอบ $(x + 3)(x - 1) = 0 \\implies x = 1$ หรือ $x = -3$ ซึ่งพบว่า $1 \\in U$ ทำให้สมการเป็นจริง ดังนั้นประพจน์นี้เป็นจริง!",
        "ตรวจสอบตัวเลือก 3: $\\forall x [x + 1 > 0]$ เป็นเท็จเมื่อ $x = -2$ เพราะ $-2 + 1 = -1 \\not> 0$",
        "ดังนั้น คำตอบที่ถูกต้องคือตัวเลือกที่ 2"
      ]
    }
  },
  {
    id: "q11",
    topic: "logic",
    topicName: "ตรรกศาสตร์",
    difficulty: "medium",
    type: "numeric",
    question: "กำหนดให้ประพจน์ $p, q, r, s$ มีค่าความจริงเป็น $T, F, T, F$ ตามลำดับ จงพิจารณาประพจน์ต่อไปนี้ว่ามีกี่ประพจน์ที่มีค่าความจริงเป็น **จริง (T)**\n(1) $(p \\lor q) \\rightarrow (r \\land s)$\n(2) $(p \\land r) \\leftrightarrow (q \\lor \\sim s)$\n(3) $\\sim p \\rightarrow (q \\lor r)$\n(4) $(r \\rightarrow s) \\land (p \\rightarrow q)$",
    correctAnswer: "2",
    tolerance: 0.01,
    unit: "ประพจน์",
    explanation: {
      "coreConcept": "การแทนค่าความจริงของประพจน์ผสมโดยใช้ตารางค่าความจริงของตัวเชื่อม $\\land, \\lor, \\rightarrow, \\leftrightarrow, \\sim$",
      "steps": [
        "(1) $(T \\lor F) \\rightarrow (T \\land F) \\equiv T \\rightarrow F \\equiv F$",
        "(2) $(T \\land T) \\leftrightarrow (F \\lor T) \\equiv T \\leftrightarrow T \\equiv T$ (จริง)",
        "(3) $\\sim T \\rightarrow (F \\lor T) \\equiv F \\rightarrow T \\equiv T$ (จริง)",
        "(4) $(T \\rightarrow F) \\land (T \\rightarrow F) \\equiv F \\land F \\equiv F$",
        "พบว่าประพจน์ที่เป็นจริงมี 2 ประพจน์ คือ (2) และ (3)"
      ]
    }
  },
  {
    id: "q12",
    topic: "logic",
    topicName: "ตรรกศาสตร์",
    difficulty: "hard",
    type: "numeric",
    question: "พิจารณาตารางค่าความจริงของประพจน์ $[(p \\rightarrow q) \\land (q \\rightarrow r)] \\rightarrow (p \\rightarrow r)$ ที่สร้างจากประพจน์ย่อย $p, q, r$ จะมีกรณีทั้งหมด 8 กรณี ถามว่ามีกี่กรณีที่ประพจน์นี้มีค่าความจริงเป็น **จริง (T)**",
    correctAnswer: "8",
    tolerance: 0.01,
    unit: "กรณี",
    explanation: {
      "coreConcept": "กฎการถ่ายทอดทางตรรกศาสตร์ (Hypothetical Syllogism) เป็นสัจนิรันดร์ จึงมีค่าความจริงเป็นจริงในทุกกรณี",
      "steps": [
        "รูปแบบ $[(p \\rightarrow q) \\land (q \\rightarrow r)] \\rightarrow (p \\rightarrow r)$ คือกฎการถ่ายทอดของการให้เหตุผล",
        "ประพจน์นี้เป็นสัจนิรันดร์ (Tautology)",
        "เนื่องจากมีประพจน์ย่อย 3 ตัว ($p, q, r$) จึงมีกรณีค่าความจริงทั้งหมด $2^3 = 8$ กรณี",
        "เมื่อเป็นสัจนิรันดร์ ค่าความจริงจึงเป็นจริง (T) ทั้ง 8 กรณี"
      ]
    }
  },

  // --- 3. ระบบจำนวนจริง (q13 - q19) ---
  {
    id: "q13",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "easy",
    type: "multiple_choice",
    question: "เซตคำตอบของอสมการ $x^2 - 4x - 5 < 0$ คือช่วงในข้อใดต่อไปนี้",
    choices: [
      "$(-1, 5)$",
      "$[-1, 5]$",
      "$(-\\infty, -1) \\cup (5, \\infty)$",
      "$(-5, 1)$",
      "$(-\\infty, -5) \\cup (1, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การแก้อสมการพหุนามกำลังสองโดยการแยกตัวประกอบและลงจุดบนเส้นจำนวนบวก-ลบ-บวก",
      "steps": [
        "แยกตัวประกอบ: $x^2 - 4x - 5 = (x - 5)(x + 1) < 0$",
        "จุดวิกฤตบนเส้นจำนวนคือ $x = -1$ และ $x = 5$",
        "ช่วงเครื่องหมายบนเส้นจำนวน: $(-\\infty, -1)$ เป็น $+$, $(-1, 5)$ เป็น $-$, $(5, \\infty)$ เป็น $+$",
        "อสมการต้องการค่าน้อยกว่า 0 (ช่วงลบ) และเป็นช่วงเปิด",
        "ดังนั้น เซตคำตอบคือช่วงเปิด $(-1, 5)$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q14",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "medium",
    type: "multiple_choice",
    question: "เซตคำตอบของอสมการ $\\frac{x - 3}{x + 2} \\le 0$ คือช่วงในข้อใด",
    choices: [
      "$(-2, 3]$",
      "$[-2, 3]$",
      "$[-2, 3)$",
      "$(-\\infty, -2) \\cup [3, \\infty)$",
      "$(-\\infty, -2] \\cup [3, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การแก้อสมการเศษส่วนพหุนาม: ตัวส่วนห้ามเป็นศูนย์เสมอ ($x \\ne -2$)",
      "steps": [
        "จุดวิกฤตคือเศษ $x = 3$ และส่วน $x = -2$",
        "เงื่อนไขตัวส่วน: $x + 2 \\ne 0 \\implies x \\ne -2$ ดังนั้นที่จุด $-2$ ต้องเป็นช่วงเปิดเสมอ",
        "ที่เศษ $x = 3$ มีเครื่องหมายเท่ากับ ($\\le$) จึงเป็นจุดทึบ (ช่วงปิด)",
        "ช่วงที่ผลลัพธ์เป็นลบคือ $(-2, 3]$",
        "ดังนั้น เซตคำตอบคือ $(-2, 3]$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q15",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "medium",
    type: "multiple_choice",
    question: "ผลบวกของคำตอบทั้งหมดของสมการ $|2x - 3| = x + 6$ มีค่าเท่ากับข้อใด",
    choices: ["8", "10", "6", "12", "7"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมการค่าสัมบูรณ์ $|A| = B \\iff (A = B \\text{ หรือ } A = -B) \\text{ โดยที่ } B \\ge 0$",
      "steps": [
        "เงื่อนไข: $x + 6 \\ge 0 \\implies x \\ge -6$",
        "กรณีที่ 1: $2x - 3 = x + 6 \\implies x = 9$ (ซึ่ง $9 \\ge -6$ ใช้ได้)",
        "กรณีที่ 2: $2x - 3 = -(x + 6) = -x - 6 \\implies 3x = -3 \\implies x = -1$ (ซึ่ง $-1 \\ge -6$ ใช้ได้)",
        "ผลบวกของคำตอบทั้งหมด = $9 + (-1) = 8$",
        "ดังนั้น ผลบวกเท่ากับ 8 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q16",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "hard",
    type: "multiple_choice",
    question: "จำนวนเต็ม $x$ ที่สอดคล้องกับอสมการ $|x^2 - 4| < 5$ มีทั้งหมดกี่จำนวน",
    choices: ["5", "3", "7", "4", "6"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมบัติค่าสัมบูรณ์ $|A| < k \\iff -k < A < k$ ร่วมกับการแก้อสมการพหุนามและนับจำนวนเต็ม",
      "steps": [
        "จาก $|x^2 - 4| < 5$ ปลดค่าสัมบูรณ์ได้เป็น $-5 < x^2 - 4 < 5$",
        "บวก 4 ตลอดทั้งอสมการ: $-1 < x^2 < 9$",
        "เนื่องจาก $x^2 \\ge 0$ เสมอสำหรับทุกจำนวนจริง $x$ อสมการจึงลดรูปเหลือ $x^2 < 9$",
        "$x^2 - 9 < 0 \\implies (x - 3)(x + 3) < 0 \\implies -3 < x < 3$",
        "จำนวนเต็มในช่วง $(-3, 3)$ คือ $\\{-2, -1, 0, 1, 2\\}$ มีทั้งหมด 5 จำนวน",
        "ดังนั้น มีทั้งหมด 5 จำนวน (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q17",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "easy",
    type: "numeric",
    question: "ถ้าพหุนาม $P(x) = 2x^3 - 3x^2 + kx - 5$ หารด้วย $x - 2$ แล้วเหลือเศษ $7$ จงหาค่าของ $k$",
    correctAnswer: "4",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "ทฤษฎีบทเศษเหลือ: เมื่อหาร $P(x)$ ด้วย $x - c$ จะเหลือเศษเท่ากับ $P(c)$",
      "steps": [
        "ตามทฤษฎีบทเศษเหลือ เศษเท่ากับ $P(2) = 7$",
        "แทนค่า $x = 2$: $P(2) = 2(2)^3 - 3(2)^2 + k(2) - 5 = 7$",
        "$2(8) - 3(4) + 2k - 5 = 7$",
        "$16 - 12 + 2k - 5 = 7 \\implies 2k - 1 = 7$",
        "$2k = 8 \\implies k = 4$",
        "ดังนั้น ค่าของ $k$ เท่ากับ 4"
      ]
    }
  },
  {
    id: "q18",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "medium",
    type: "numeric",
    question: "กำหนดให้ $a$ และ $b$ เป็นคำตอบของสมการ $x^2 - 7x + 12 = 0$ โดยที่ $a < b$ จงหาค่าของ $a^2 + b^2$",
    correctAnswer: "25",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "ความสัมพันธ์ระหว่างรากและสัมประสิทธิ์ หรือการแยกตัวประกอบตรง $x^2 - (a+b)x + ab = 0$",
      "steps": [
        "แยกตัวประกอบ: $(x - 3)(x - 4) = 0$",
        "คำตอบคือ $x = 3$ และ $x = 4$ ดังนั้น $a = 3$ และ $b = 4$",
        "คำนวณ $a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25$",
        "หรือใช้เอกลักษณ์: $a^2 + b^2 = (a+b)^2 - 2ab = 7^2 - 2(12) = 49 - 24 = 25$"
      ]
    }
  },
  {
    id: "q19",
    topic: "real_numbers",
    topicName: "ระบบจำนวนจริง",
    difficulty: "hard",
    type: "numeric",
    question: "จงหาค่าต่ำสุดของ $f(x) = |x - 2| + |x - 8|$ สำหรับทุก $x \\in \\mathbb{R}$",
    correctAnswer: "6",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "อสมการอิงรูปสามเหลี่ยมของค่าสัมบูรณ์: $|a| + |b| \\ge |a - b|$ และความหมายทางเรขาคณิตของการหาระยะทางบนเส้นจำนวน",
      "steps": [
        "จากสมบัติ $|u| + |v| \\ge |u - v|$",
        "ให้ $u = x - 2$ และ $v = x - 8$",
        "$|x - 2| + |x - 8| = |x - 2| + |8 - x| \\ge |(x - 2) + (8 - x)| = |6| = 6$",
        "ค่าต่ำสุดจะเกิดขึ้นเมื่อ $2 \\le x \\le 8$ ซึ่งผลรวมระยะทางจาก $x$ ไปยัง 2 และ 8 จะมีค่าคงที่เท่ากับระยะห่างระหว่างจุดทั้งสองเสมอ คือ $8 - 2 = 6$",
        "ดังนั้น ค่าต่ำสุดคือ 6"
      ]
    }
  }
];
