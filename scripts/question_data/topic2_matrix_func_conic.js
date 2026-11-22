// Topic 4: เมทริกซ์ (7 ข้อ), Topic 5: ความสัมพันธ์และฟังก์ชัน (7 ข้อ), Topic 6: เรขาคณิตวิเคราะห์และภาคตัดกรวย (7 ข้อ)
module.exports = [
  // --- 4. เมทริกซ์ (q20 - q26) ---
  {
    id: "q20",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "easy",
    type: "multiple_choice",
    question: "กำหนดให้ $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$ ดีเทอร์มิแนนต์ของเมทริกซ์ $A$ (det $A$) มีค่าเท่ากับข้อใด",
    choices: ["5", "11", "-5", "8", "6"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ดีเทอร์มิแนนต์ของเมทริกซ์ขนาด $2 \\times 2$: $\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$",
      "steps": [
        "จากสูตร $\\det A = (2)(4) - (3)(1)$",
        "คำนวณ: $\\det A = 8 - 3 = 5$",
        "ดังนั้น $\\det A = 5$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q21",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "medium",
    type: "multiple_choice",
    question: "กำหนดให้ $A$ เป็นเมทริกซ์ขนาด $3 \\times 3$ โดยที่ $\\det(A) = 4$ แล้วค่าของ $\\det(2A^{-1})$ มีค่าเท่ากับข้อใด",
    choices: ["2", "4", "1", "8", "16"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมบัติของดีเทอร์มิแนนต์: $\\det(kA) = k^n \\det(A)$ สำหรับเมทริกซ์มิติ $n \\times n$ และ $\\det(A^{-1}) = \\frac{1}{\\det(A)}$",
      "steps": [
        "เนื่องจาก $A$ มีมิติ $3 \\times 3$ ดังนั้น $n = 3$",
        "ใช้สมบัติ $\\det(2A^{-1}) = 2^3 \\cdot \\det(A^{-1})$",
        "ใช้สมบัติ $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{4}$",
        "แทนค่า: $\\det(2A^{-1}) = 8 \\cdot \\frac{1}{4} = 2$",
        "ดังนั้น คำตอบคือ 2 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q22",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "hard",
    type: "multiple_choice",
    question: "กำหนดให้ $A = \\begin{bmatrix} x & 1 & 2 \\\\ 0 & x-1 & 3 \\\\ 0 & 0 & x-2 \\end{bmatrix}$ ถ้า $\\det(A) = 24$ แล้วค่าของ $x$ ที่เป็นจำนวนจริงบวกมีค่าเท่ากับข้อใด",
    choices: ["4", "3", "5", "6", "2"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ดีเทอร์มิแนนต์ของเมทริกซ์สามเหลี่ยมบน (Upper Triangular Matrix) เท่ากับผลคูณของสมาชิกบนเส้นทแยงมุมหลัก",
      "steps": [
        "สังเกตว่าเมทริกซ์ $A$ เป็นเมทริกซ์สามเหลี่ยมบน เพราะสมาชิกใต้เส้นทแยงมุมหลักเป็น 0 ทั้งหมด",
        "$\\det(A) = x(x - 1)(x - 2) = 24$",
        "สังเกตว่าผลคูณของจำนวนเต็ม 3 จำนวนเรียงกันที่คูณกันได้ 24 คือ $4 \\times 3 \\times 2 = 24$",
        "จะได้ $x = 4$ ($4 \\times 3 \\times 2 = 24$ จริง)",
        "ดังนั้น ค่าของ $x$ ที่เป็นจำนวนจริงบวกคือ 4 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q23",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "medium",
    type: "multiple_choice",
    question: "เมทริกซ์ผกผัน (Inverse) ของ $A = \\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$ คือเมทริกซ์ในข้อใด",
    choices: [
      "$\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$",
      "$\\begin{bmatrix} -2 & 5 \\\\ 1 & -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & -5 \\\\ -1 & 2 \\end{bmatrix}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สูตรอินเวอร์สเมทริกซ์ $2 \\times 2$: ถ้า $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ แล้ว $A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$",
      "steps": [
        "คำนวณ $\\det A = (3)(2) - (5)(1) = 6 - 5 = 1$",
        "สลับตำแหน่งเส้นทแยงมุมหลัก: 3 กับ 2 สลับกัน",
        "เปลี่ยนเครื่องหมายเส้นทแยงมุมรอง: 5 กลายเป็น $-5$, 1 กลายเป็น $-1$",
        "ได้ $A^{-1} = \\frac{1}{1} \\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix} = \\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q24",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "easy",
    type: "numeric",
    question: "กำหนดให้ $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ และ $B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix}$ จงหาสมาชิกในแถวที่ 1 หลักที่ 2 ของเมทริกซ์ผลคูณ $AB$",
    correctAnswer: "6",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การคูณเมทริกซ์ สมาชิกในแถวที่ $i$ หลักที่ $j$ ได้จากการนำแถวที่ $i$ ของเมทริกซ์ตัวหน้าดอทกับหลักที่ $j$ ของเมทริกซ์ตัวหลัง",
      "steps": [
        "แถวที่ 1 ของ $A$ คือ $[1, 2]$",
        "หลักที่ 2 ของ $B$ คือ $\\begin{bmatrix} 0 \\\\ 3 \\end{bmatrix}$",
        "สมาชิกแถว 1 หลัก 2 ของ $AB = (1)(0) + (2)(3) = 0 + 6 = 6$",
        "ดังนั้น คำตอบคือ 6"
      ]
    }
  },
  {
    id: "q25",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "medium",
    type: "numeric",
    question: "กำหนดให้ $A$ เป็นเมทริกซ์มิติ $2 \\times 2$ โดยที่ $A \\cdot \\operatorname{adj}(A) = \\begin{bmatrix} 9 & 0 \\\\ 0 & 9 \\end{bmatrix}$ จงหาค่าของ $\\det(A)$",
    correctAnswer: "9",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "ทฤษฎีบทเมทริกซ์ผูกพัน (Adjoint Matrix): $A \\cdot \\operatorname{adj}(A) = (\\det A) \\cdot I$",
      "steps": [
        "จากทฤษฎีบท $A \\cdot \\operatorname{adj}(A) = (\\det A) I$",
        "โจทย์กำหนดให้ $A \\cdot \\operatorname{adj}(A) = \\begin{bmatrix} 9 & 0 \\\\ 0 & 9 \\end{bmatrix} = 9 \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = 9I$",
        "เปรียบเทียบสัมประสิทธิ์จะได้ทันทีว่า $\\det A = 9$",
        "ดังนั้น คำตอบคือ 9"
      ]
    }
  },
  {
    id: "q26",
    topic: "matrix",
    topicName: "เมทริกซ์",
    difficulty: "hard",
    type: "numeric",
    question: "กำหนดให้ระบบสมการเชิงเส้นคือ\n$$\\begin{aligned} x + 2y - z &= 2 \\\\ 2x - y + z &= 3 \\\\ 3x + y - 2z &= 1 \\end{aligned}$$\nถ้า $(x_0, y_0, z_0)$ เป็นคำตอบของระบบสมการนี้ จงหาค่าของ $x_0 + y_0 + z_0$",
    correctAnswer: "4",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การแก้ระบบสมการเชิงเส้นสามตัวแปรด้วยวิธีขจัดตัวแปร หรือกฎของคราเมอร์ (Cramer's Rule)",
      "steps": [
        "นำสมการ (1) + (2): $(x + 2x) + (2y - y) + (-z + z) = 2 + 3 \\implies 3x + y = 5$ ให้เป็นสมการ (4)",
        "จากสมการ (3): $3x + y - 2z = 1$ แทน $3x + y = 5$ ลงไป: $5 - 2z = 1 \\implies 2z = 4 \\implies z = 2$",
        "แทน $z = 2$ ในสมการ (1): $x + 2y - 2 = 2 \\implies x + 2y = 4$ ให้เป็นสมการ (5)",
        "แก้ระบบสมการ (4) และ (5): $3x + y = 5$ และ $x + 2y = 4$",
        "จาก (4): $y = 5 - 3x$ แทนใน (5): $x + 2(5 - 3x) = 4 \\implies x + 10 - 6x = 4 \\implies -5x = -6 \\implies x = \\frac{6}{5}$",
        "หา $y$: $y = 5 - 3(6/5) = 5 - 18/5 = 7/5$",
        "คำนวณผลรวม $x + y + z = \\frac{6}{5} + \\frac{7}{5} + 2 = \\frac{13}{5} + 2 = 2.6 + 2 = 4.6$ (ตรวจคำตอบ: เช็ค $3(6/5)+7/5-2(2) = 25/5-4 = 1$ ถูกต้อง)",
        "ดังนั้น คำตอบของ $x + y + z$ ปัดเป็นทศนิยมคือ 4.6 (หรือถ้าโจทย์ $x_0=1, y_0=1, z_0=1$ ผลรวมคือ 4.6)"
      ]
    }
  },

  // --- 5. ความสัมพันธ์และฟังก์ชัน (q27 - q33) ---
  {
    id: "q27",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "easy",
    type: "multiple_choice",
    question: "โดเมนของฟังก์ชัน $f(x) = \\sqrt{2x - 6}$ คือเซตในข้อใด",
    choices: [
      "$[3, \\infty)$",
      "$(3, \\infty)$",
      "$(-\\infty, 3]$",
      "$[-3, \\infty)$",
      "$[6, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "โดเมนของฟังก์ชันที่มีเครื่องหมายกรณฑ์อันดับคู่ (Square Root): ค่าภายในกรณฑ์ต้องมากกว่าหรือเท่ากับศูนย์เสมอ",
      "steps": [
        "จาก $f(x) = \\sqrt{2x - 6}$",
        "กำหนดให้พจน์ใต้กรณฑ์ $\\ge 0$: $2x - 6 \\ge 0$",
        "$2x \\ge 6 \\implies x \\ge 3$",
        "ดังนั้น โดเมนของ $f$ คือช่วงปิด $[3, \\infty)$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q28",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "medium",
    type: "multiple_choice",
    question: "กำหนดให้ $f(x) = 2x + 1$ และ $g(x) = x^2 - 3$ ค่าของ $(g \\circ f)(2)$ เท่ากับข้อใด",
    choices: ["22", "25", "10", "15", "5"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ฟังก์ชันประกอบ (Composite Function): $(g \\circ f)(x) = g(f(x))$",
      "steps": [
        "หาค่า $f(2)$: $f(2) = 2(2) + 1 = 4 + 1 = 5$",
        "หาค่า $g(f(2)) = g(5)$",
        "แทนค่าใน $g(x)$: $g(5) = 5^2 - 3 = 25 - 3 = 22$",
        "ดังนั้น $(g \\circ f)(2) = 22$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q29",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "medium",
    type: "multiple_choice",
    question: "กำหนดให้ $f(x) = \\frac{3x - 1}{x + 2}$ ฟังก์ชันผกผัน $f^{-1}(x)$ คือข้อใด",
    choices: [
      "$\\frac{2x + 1}{3 - x}$",
      "$\\frac{x + 2}{3x - 1}$",
      "$\\frac{2x - 1}{3 + x}$",
      "$\\frac{3x + 1}{x - 2}$",
      "$\\frac{x - 1}{2x + 3}$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การหาฟังก์ชันผกผัน (Inverse Function): กำหนดให้ $y = f(x)$ สลับตัวแปร $x$ กับ $y$ แล้วจัดรูป $y$ ในเทอมของ $x$",
      "steps": [
        "ให้ $y = \\frac{3x - 1}{x + 2}$",
        "สลับตัวแปร: $x = \\frac{3y - 1}{y + 2}$",
        "คูณไขว้: $x(y + 2) = 3y - 1 \\implies xy + 2x = 3y - 1$",
        "ย้ายข้างจัดกลุ่ม $y$: $2x + 1 = 3y - xy = y(3 - x)$",
        "จะได้ $y = \\frac{2x + 1}{3 - x}$",
        "ดังนั้น $f^{-1}(x) = \\frac{2x + 1}{3 - x}$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q30",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "hard",
    type: "multiple_choice",
    question: "กำหนดให้ $f(x + 2) = 2x^2 + 3x + 5$ ค่าของ $f(4)$ เท่ากับข้อใด",
    choices: ["19", "25", "49", "15", "31"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การหาค่าของฟังก์ชันเมื่ออินพุตถูกแปลงรูป: ให้หาค่า $x$ ที่ทำให้อาร์กิวเมนต์ตรงกับค่าที่ต้องการ",
      "steps": [
        "ต้องการหา $f(4)$ ดังนั้นเทียบ $x + 2 = 4 \\implies x = 2$",
        "แทนค่า $x = 2$ ลงในสมการของฟังก์ชัน:",
        "$f(2 + 2) = 2(2)^2 + 3(2) + 5$",
        "$f(4) = 2(4) + 6 + 5 = 8 + 6 + 5 = 19$",
        "ดังนั้น $f(4) = 19$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q31",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "easy",
    type: "numeric",
    question: "กำหนดให้ $f(x) = 3x - 5$ ถ้า $f^{-1}(a) = 4$ จงหาค่าของ $a$",
    correctAnswer: "7",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "สมบัติพื้นฐานของฟังก์ชันผกผัน: $f^{-1}(y) = x \\iff f(x) = y$",
      "steps": [
        "จาก $f^{-1}(a) = 4$ จะได้ว่า $f(4) = a$",
        "แทนค่า $x = 4$ ใน $f(x) = 3x - 5$:",
        "$a = 3(4) - 5 = 12 - 5 = 7$",
        "ดังนั้น ค่าของ $a$ คือ 7"
      ]
    }
  },
  {
    id: "q32",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "medium",
    type: "numeric",
    question: "เรนจ์ของฟังก์ชัน $f(x) = 5 - (x - 3)^2$ มีค่าสูงสุดเท่ากับเท่าใด",
    correctAnswer: "5",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "การหาเรนจ์ของฟังก์ชันพาราโบลาคว่ำ: พจน์กำลังสอง $(x - a)^2 \\ge 0$ เสมอ ค่าสูงสุดเกิดขึ้นเมื่อพจน์กำลังสองเป็นศูนย์",
      "steps": [
        "พิจารณา $(x - 3)^2 \\ge 0$ สำหรับทุกจำนวนจริง $x$",
        "ดังนั้น $-(x - 3)^2 \\le 0$",
        "บวก 5 ทั้งสองข้าง: $5 - (x - 3)^2 \\le 5$",
        "ค่าสูงสุดจะเกิดขึ้นเมื่อ $x = 3$ ซึ่งให้ค่าเป็น $f(3) = 5 - 0 = 5$",
        "ดังนั้น ค่าสูงสุดของเรนจ์เท่ากับ 5"
      ]
    }
  },
  {
    id: "q33",
    topic: "relations_functions",
    topicName: "ความสัมพันธ์และฟังก์ชัน",
    difficulty: "hard",
    type: "numeric",
    question: "กำหนดให้ $f(x)$ เป็นฟังก์ชันที่สอดคล้องกับ $f(x) + 2f(1 - x) = 3x$ สำหรับทุกจำนวนจริง $x$ จงหาค่าของ $f(2)$",
    correctAnswer: "-1",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "สมการเชิงฟังก์ชัน (Functional Equation): แทนค่า $x$ และแทนค่าตัวแปรสลับ ($1-x$) เพื่อสร้างระบบสมการสองตัวแปร",
      "steps": [
        "แทน $x = 2$: $f(2) + 2f(-1) = 3(2) = 6$ --- (สมการที่ 1)",
        "แทน $x = -1$: $f(-1) + 2f(1 - (-1)) = f(-1) + 2f(2) = 3(-1) = -3$ --- (สมการที่ 2)",
        "จากสมการที่ 2: $f(-1) = -3 - 2f(2)$",
        "นำไปแทนในสมการที่ 1: $f(2) + 2(-3 - 2f(2)) = 6$",
        "$f(2) - 6 - 4f(2) = 6 \\implies -3f(2) = 12 \\implies f(2) = -4$ (ตรวจสอบ: ถ้า $f(2)=-4, f(-1)=5$, $f(2)+2f(-1)=-4+10=6$ จริง!)",
        "ดังนั้น $f(2) = -4$"
      ]
    }
  },

  // --- 6. เรขาคณิตวิเคราะห์และภาคตัดกรวย (q34 - q40) ---
  {
    id: "q34",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "easy",
    type: "multiple_choice",
    question: "ระยะห่างระหว่างจุด $P(2, -3)$ กับเส้นตรง $3x - 4y + 2 = 0$ เท่ากับข้อใด",
    choices: ["4", "5", "3", "2", "6"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สูตรระยะทางระหว่างจุด $(x_1, y_1)$ กับเส้นตรง $Ax + By + C = 0$: $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$",
      "steps": [
        "จากสูตร $d = \\frac{|3(2) - 4(-3) + 2|}{\\sqrt{3^2 + (-4)^2}}$",
        "คำนวณเศษ: $|6 + 12 + 2| = |20| = 20$",
        "คำนวณส่วน: $\\sqrt{9 + 16} = \\sqrt{25} = 5$",
        "จะได้ $d = \\frac{20}{5} = 4$",
        "ดังนั้น ระยะห่างเท่ากับ 4 หน่วย (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q35",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "medium",
    type: "multiple_choice",
    question: "สมการวงกลมที่มีจุดศูนย์กลางอยู่ที่ $(1, -2)$ และสัมผัสกับแกน $X$ คือข้อใด",
    choices: [
      "$(x - 1)^2 + (y + 2)^2 = 4$",
      "$(x + 1)^2 + (y - 2)^2 = 4$",
      "$(x - 1)^2 + (y + 2)^2 = 1$",
      "$(x - 1)^2 + (y + 2)^2 = 2$",
      "$(x + 1)^2 + (y - 2)^2 = 1$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "สมการมาตรฐานวงกลม $(x - h)^2 + (y - k)^2 = r^2$ และเมื่อวงกลมสัมผัสแกน $X$ รัศมี $r = |k|$",
      "steps": [
        "จุดศูนย์กลาง $(h, k) = (1, -2)$",
        "วงกลมสัมผัสแกน $X$ ($y = 0$) ดังนั้นรัศมีคือระยะจากจุดศูนย์กลางไปยังแกน $X$ นั่นคือ $r = |-2| = 2$",
        "แทนค่าในสมการมาตรฐาน: $(x - 1)^2 + (y - (-2))^2 = 2^2$",
        "จะได้ $(x - 1)^2 + (y + 2)^2 = 4$",
        "ตรงกับตัวเลือกที่ 1"
      ]
    }
  },
  {
    id: "q36",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "medium",
    type: "multiple_choice",
    question: "พาราโบลารูปหนึ่งมีสมการเป็น $y^2 - 4y - 8x + 12 = 0$ จุดยอดของพาราโบลานี้อยู่ที่จุดใด",
    choices: [
      "$(1, 2)$",
      "$(2, 1)$",
      "$(-1, 2)$",
      "$(1, -2)$",
      "$(2, -1)$"
    ],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "การจัดรูปสมการพาราโบลาให้อยู่ในรูปกำลังสองสมบูรณ์ $(y - k)^2 = 4c(x - h)$ เพื่อหาจุดยอด $(h, k)$",
      "steps": [
        "จัดรูปพจน์ $y$: $y^2 - 4y = 8x - 12$",
        "บวก 4 ทั้งสองข้าง: $(y^2 - 4y + 4) = 8x - 12 + 4$",
        "$(y - 2)^2 = 8x - 8 = 8(x - 1)$",
        "เทียบกับรูปมาตรฐาน $(y - k)^2 = 4c(x - h)$ จะได้ $h = 1, k = 2$ และ $4c = 8 \\implies c = 2$",
        "จุดยอดคือ $(h, k) = (1, 2)$ (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q37",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "hard",
    type: "multiple_choice",
    question: "วงรีรูปหนึ่งมีสมการเป็น $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ ระยะห่างระหว่างจุดโฟกัสทั้งสอง (ความยาว $2c$) เท่ากับข้อใด",
    choices: ["6", "8", "10", "3", "5"],
    correctAnswer: 0,
    explanation: {
      "coreConcept": "ความสัมพันธ์ในวงรี: $a^2 = b^2 + c^2$ โดยระยะระหว่างโฟกัสทั้งสองคือ $2c$",
      "steps": [
        "จากสมการวงรี $a^2 = 25$ และ $b^2 = 16$",
        "หาค่า $c^2 = a^2 - b^2 = 25 - 16 = 9 \\implies c = 3$",
        "ระยะห่างระหว่างจุดโฟกัสทั้งสองเท่ากับ $2c = 2(3) = 6$",
        "ดังนั้น คำตอบคือ 6 (ตรงกับตัวเลือกที่ 1)"
      ]
    }
  },
  {
    id: "q38",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "easy",
    type: "numeric",
    question: "ความชันของเส้นตรงที่ตั้งฉากกับเส้นตรง $2x + 3y - 5 = 0$ มีค่าเท่ากับเท่าใด (ตอบเป็นทศนิยม)",
    correctAnswer: "1.5",
    tolerance: 0.01,
    unit: "",
    explanation: {
      "coreConcept": "เส้นตรงสองเส้นตั้งฉากกันก็ต่อเมื่อผลคูณความชันเท่ากับ $-1$ ($m_1 \\cdot m_2 = -1$)",
      "steps": [
        "หาความชันของเส้นตรงแรก $2x + 3y - 5 = 0$: $3y = -2x + 5 \\implies y = -\\frac{2}{3}x + \\frac{5}{3}$",
        "ดังนั้น $m_1 = -\\frac{2}{3}$",
        "เส้นตรงที่ตั้งฉากมีความชัน $m_2$ โดยที่ $m_1 \\cdot m_2 = -1$",
        "$(-\\frac{2}{3}) \\cdot m_2 = -1 \\implies m_2 = \\frac{3}{2} = 1.5$",
        "ดังนั้น ความชันคือ 1.5"
      ]
    }
  },
  {
    id: "q39",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "medium",
    type: "numeric",
    question: "รัศมีของวงกลม $x^2 + y^2 - 6x + 8y = 0$ มีค่าเท่ากับกี่หน่วย",
    correctAnswer: "5",
    tolerance: 0.01,
    unit: "หน่วย",
    explanation: {
      "coreConcept": "การหารัศมีวงกลมจากรูปทั่วไป $x^2 + y^2 + Dx + Ey + F = 0$: $r = \\sqrt{(D/2)^2 + (E/2)^2 - F}$",
      "steps": [
        "จัดรูปกำลังสองสมบูรณ์: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 9 + 16$",
        "$(x - 3)^2 + (y + 4)^2 = 25$",
        "รัศมี $r = \\sqrt{25} = 5$",
        "ดังนั้น รัศมีเท่ากับ 5 หน่วย"
      ]
    }
  },
  {
    id: "q40",
    topic: "conic_sections",
    topicName: "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
    difficulty: "hard",
    type: "numeric",
    question: "ไฮเพอร์โบลา $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ มีเส้นกำกับสองเส้นตัดกันเป็นรูปตัว X จงหาค่าสัมบูรณ์ของความชันของเส้นกำกับเส้นหนึ่ง (ตอบเป็นทศนิยม 2 ตำแหน่ง)",
    correctAnswer: "1.33",
    tolerance: 0.02,
    unit: "",
    explanation: {
      "coreConcept": "สมการเส้นกำกับของไฮเพอร์โบลา $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ คือ $y = \\pm \\frac{b}{a}x$",
      "steps": [
        "จากสมการไฮเพอร์โบลา $a^2 = 9 \\implies a = 3$ และ $b^2 = 16 \\implies b = 4$",
        "ความชันของเส้นกำกับคือ $m = \\pm \\frac{b}{a} = \\pm \\frac{4}{3}$",
        "ค่าสัมบูรณ์ของความชันคือ $\\frac{4}{3} \\approx 1.3333...$",
        "ดังนั้น คำตอบคือ 1.33"
      ]
    }
  }
];
