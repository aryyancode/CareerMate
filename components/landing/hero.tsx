"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ResumePreview } from "./resume-preview";
import { UploadCard } from "./upload-card";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="hero-grid absolute inset-0 -z-10 opacity-50" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              ✨ AI Resume Intelligence
            </div>

            <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.04em] leading-tight text-slate-900 md:text-6xl">
              Land More
              <br />
              Interviews.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Upload your resume and receive an ATS score, AI-powered
              suggestions, keyword analysis, and actionable improvements to
              maximize your interview chances.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/analyze">Upload Resume</Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">
                  View Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="liquid rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">94%</p>
                <p className="mt-1 text-xs text-slate-500">ATS Accuracy</p>
              </div>

              <div className="liquid rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-green-600">5K+</p>
                <p className="mt-1 text-xs text-slate-500">Resumes Analyzed</p>
              </div>

              <div className="liquid rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-orange-500">AI</p>
                <p className="mt-1 text-xs text-slate-500">Instant Feedback</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto flex w-full max-w-xl flex-col gap-6"
          >
            <ResumePreview />

            <UploadCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
