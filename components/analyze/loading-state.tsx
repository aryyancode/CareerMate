"use client";

import { useEffect, useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  "Reading your resume...",
  "Extracting text...",
  "Analyzing ATS compatibility...",
  "Finding missing keywords...",
  "Generating AI suggestions...",
  "Finalizing report...",
];

export function LoadingState() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="liquid rounded-[30px] p-8">
      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50"
        >
          <Sparkles className="h-10 w-10 text-blue-600" />
        </motion.div>

        <h2 className="mt-8 text-3xl font-bold text-slate-900">
          AI is analyzing your resume
        </h2>

        <p className="mt-3 text-slate-500">
          Please wait a few seconds...
        </p>

        <div className="mt-10 w-full max-w-lg">
          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-blue-700">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="font-medium">
              {steps[step]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}