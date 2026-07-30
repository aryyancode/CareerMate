"use client";

import { CheckCircle2 } from "lucide-react";

type Props = {
  strengths: string[];
};

export function StrengthsCard({ strengths }: Props) {
  return (
    <div className="liquid rounded-[28px] p-8">
      <h3 className="text-xl font-semibold text-slate-900">
        Strengths
      </h3>

      <div className="mt-6 space-y-4">
        {strengths.map((item) => (
          <div key={item} className="flex gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}