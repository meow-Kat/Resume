import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "鄭凱文 - Full Stack Developer",
  description: "鄭凱文的個人履歷網站 - Full Stack Developer，專精於前後端開發、AI整合、即時通訊、影音串流等技術",
  keywords: "鄭凱文, Full Stack Developer, React, Vue, Laravel, Python, FastAPI, AI, LLM, WebRTC, SSE, 前端開發, 後端開發, 全端工程師",
  authors: [{ name: "鄭凱文" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
