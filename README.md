# A-Level Math Exam Simulator (ระบบจำลองข้อสอบคณิตศาสตร์ ม.ปลาย)

เว็บแอปพลิเคชันจำลองการทำข้อสอบคณิตศาสตร์ประยุกต์ ม.ปลาย (A-Level) พัฒนาด้วย Next.js (App Router), Tailwind CSS และ KaTeX สำหรับเรนเดอร์สมการคณิตศาสตร์ คมชัด สวยงาม ไม่มี Layout Shift

---

## ฟังก์ชันการทำงานใน Phase 1

1. **หน้าแรก (Setup & Filter)**:
   - เลือกลำดับบทเรียน (Topic) เช่น แคลคูลัส, สถิติ, เวกเตอร์, จำนวนจริง, เอกซ์โพเนนเชียลและลอการิทึม, ความน่าจะเป็น หรือเลือกทำทุกบท
   - เลือกระดับความยาก: Easy, Medium, Hard หรือ All (คละความยาก)
   - เลือกระยะเวลาทำข้อสอบ (Timer): ไม่จำกัดเวลา, 15 นาที, 30 นาที หรือ 90 นาที

2. **ระบบทำข้อสอบ (Interactive Exam Engine)**:
   - รองรับโจทย์ 2 รูปแบบตามมาตรฐาน A-Level:
     - **แบบปรนัย 5 ตัวเลือก** พร้อมเรนเดอร์สัญลักษณ์ทางคณิตศาสตร์ในตัวเลือก
     - **แบบอัตนัยระบายตัวเลข** (Numeric Input) รองรับทศนิยมและจำนวนติดลบ
   - มี Question Palette แสดงผังข้อสอบ: ข้อที่ทำแล้ว, ข้อที่ยังไม่ได้ทำ, ปักหมุดทบทวน (Flag for review)
   - ป๊อปอัปยืนยันการส่งข้อสอบ และระบบ Auto-submit เมื่อหมดเวลา

3. **หน้าตรวจคำตอบและเฉลยละเอียด (Step-by-Step & Core Concept)**:
   - รายงานคะแนนรวม, สัดส่วนความถูกต้อง (%), เวลาที่ใช้ทำ
   - ตัวกรองตรวจทาน: ทั้งหมด / ข้อที่ผิด / ข้อที่ถูก / ไม่ได้ตอบ
   - แสดง **Core Concept** ทฤษฎีบทและสูตรสำคัญที่ใช้แก้โจทย์ข้อนั้น
   - แสดง **Step-by-Step Solution** วิธีทำอย่างละเอียดทีละขั้นตอน พร้อมสูตร KaTeX

---

## โครงสร้างโปรเจกต์

```text
alevel-math-exam/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout นำเข้า KaTeX CSS
│   │   ├── page.tsx           # หน้าควบคุม Flow (Topic Selector -> Exam -> Result)
│   │   └── globals.css        # Tailwind styles & KaTeX styling
│   ├── components/
│   │   ├── MathRenderer.tsx   # เรนเดอร์ LaTeX ทั้ง Inline ($...$) และ Block ($$...$$)
│   │   ├── Navbar.tsx         # แถบ Header แสดงเวลาจับเวลาและสถานะ
│   │   ├── TopicSelector.tsx  # ตัวเลือกบทเรียน ระดับความยาก และเวลา
│   │   ├── QuestionPalette.tsx# ผังข้อสอบ (Question Grid)
│   │   ├── MultipleChoice.tsx # คอมโพเนนต์ตัวเลือก 5 ตัวเลือก
│   │   ├── NumericInput.tsx   # คอมโพเนนต์กรอกคำตอบอัตนัย
│   │   ├── ExamSession.tsx    # หน้าห้องสอบแบบ Interactive
│   │   └── ResultView.tsx     # รายงานผลคะแนนและเฉลยละเอียด
│   ├── data/
│   │   └── questions.json     # คลังข้อสอบ A-Level
│   └── types/
│       └── exam.ts            # Data Interfaces
```

---

## วิธีการรันโปรเจกต์ (Development Mode)

เปิด Terminal ในโฟลเดอร์โปรเจกต์:

```bash
cd "C:\Users\pkwed\.gemini\antigravity\scratch\alevel-math-exam"
npm run dev
```

จากนั้นเปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)
