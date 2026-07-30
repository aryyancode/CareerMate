"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

type Props = {
  score: number;
};

export function MatchScoreCard({ score }: Props) {
  const getBadge = () => {
    if (score >= 90)
      return {
        text: "Excellent Match",
        color: "bg-emerald-100 text-emerald-700",
      };

    if (score >= 75)
      return {
        text: "Strong Match",
        color: "bg-blue-100 text-blue-700",
      };

    if (score >= 60)
      return {
        text: "Moderate Match",
        color: "bg-amber-100 text-amber-700",
      };

    return {
      text: "Low Match",
      color: "bg-red-100 text-red-700",
    };
  };

  const badge = getBadge();

  return (
    <div className="liquid rounded-[28px] p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <Target className="h-7 w-7 text-blue-600" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Job Match
          </p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-slate-900"
          >
            {score}%
          </motion.h2>
        </div>
      </div>

      <div
        className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${badge.color}`}
      >
        {badge.text}
      </div>
    </div>
  );
}