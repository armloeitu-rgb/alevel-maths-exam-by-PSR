import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ระบบจำลองข้อสอบคณิตศาสตร์ A-Level ม.ปลาย | Math Simulator",
  description: "ระบบฝึกทำข้อสอบคณิตศาสตร์ประยุกต์ A-Level คลังข้อสอบปรนัยและอัตนัย พร้อมเฉลยละเอียดแบบ Step-by-Step และ Core Concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
