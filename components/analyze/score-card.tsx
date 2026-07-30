"use client";

import { motion } from "framer-motion";

type Props = {
  score: number;
};

export function ScoreCard({ score }: Props) {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getRating = () => {
    if (score >= 90)
      return {
        label: "Excellent",
        color: "bg-emerald-100 text-emerald-700",
      };

    if (score >= 75)
      return {
        label: "Good",
        color: "bg-blue-100 text-blue-700",
      };

    if (score >= 60)
      return {
        label: "Average",
        color: "bg-amber-100 text-amber-700",
      };

    return {
      label: "Needs Work",
      color: "bg-red-100 text-red-700",
    };
  };

  const rating = getRating();

  return (
    <div className="liquid rounded-[32px] p-10">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          ATS SCORE
        </p>

        <div className="relative mt-8 h-52 w-52">
          <svg
            className="-rotate-90"
            width="208"
            height="208"
          >
            <circle
              cx="104"
              cy="104"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="12"
            />

            <motion.circle
              cx="104"
              cy="104"
              r={radius}
              fill="none"
              stroke="#2563eb"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: .8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl font-bold text-slate-900">
                {score}
              </div>

              <div className="text-sm text-slate-500">
                out of 100
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className={`mt-6 rounded-full px-4 py-2 text-sm font-semibold ${rating.color}`}
        >
          {rating.label}
        </div>

        <p className="mt-6 max-w-lg leading-7 text-slate-600">
          This score estimates how well your resume can perform in
          Applicant Tracking Systems before reaching a recruiter.
        </p>
      </div>
    </div>
  );
}