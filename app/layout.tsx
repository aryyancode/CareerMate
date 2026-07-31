import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareerMate — Build a Resume Recruiters Want",
  description:
    "AI-powered resume analyzer that calculates ATS scores, analyzes resumes, and provides personalized improvement suggestions using Google Gemini AI.",

  verification: {
    google: "N54wbk0ODlRC5-JKg_E7I40RTI8Hx3UICWm0W683wiE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
