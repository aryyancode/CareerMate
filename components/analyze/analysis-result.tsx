"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

import { ScoreCard } from "./score-card";
import { SummaryCard } from "./summary-card";
import { StrengthsCard } from "./strengths-card";
import { WeaknessesCard } from "./weaknesses-card";

type AnalysisResultProps = {
  analysis: {
    atsScore: number;
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
  };
};

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-slate-900">
          Resume Analysis Report
        </h1>

        <p className="mt-3 text-slate-500">
          Your resume has been analyzed using our AI-powered ATS engine.
        </p>
      </div>

      {/* Score */}
      <ScoreCard score={analysis.atsScore} />

      {/* Summary */}
      <SummaryCard
        summary="Your resume has been successfully analyzed. Review your strengths, weaknesses and AI recommendations below to improve your ATS score."
      />

      {/* Strengths + Weaknesses */}
      <div className="grid gap-6 lg:grid-cols-2">
        <StrengthsCard strengths={analysis.strengths} />
        <WeaknessesCard weaknesses={analysis.weaknesses} />
      </div>

      {/* AI Suggestions */}
      <div className="liquid rounded-[28px] p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
            <Lightbulb className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              AI Recommendations
            </h2>

            <p className="text-sm text-slate-500">
              High-impact improvements for your resume.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {analysis.suggestions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <p className="leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}