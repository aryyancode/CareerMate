"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FileText, Target } from "lucide-react";

const lines = ["w-full", "w-5/6", "w-3/4", "w-full", "w-2/3", "w-4/5", "w-1/2"];

export function ResumePreview() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const controls = animate(0, 94, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setScore(Math.round(v)),
    });

    return () => controls.stop();
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="liquid rounded-[28px] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                CareerMate Analysis
              </h3>

              <p className="text-sm text-slate-500">
                Resume successfully scanned
              </p>
            </div>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Ready
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {lines.map((width, i) => (
            <div
              key={i}
              className={`relative h-3 overflow-hidden rounded-full bg-slate-200 ${width}`}
            >
              <motion.div
                className="absolute left-0 top-0 h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: i * 0.08,
                  duration: 1.2,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Overall ATS Score</p>

              <h2 className="mt-1 text-4xl font-bold text-slate-900">
                {score}
              </h2>
            </div>

            <Target className="h-11 w-11 text-blue-600" />
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
