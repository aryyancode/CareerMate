"use client";

import { AlertTriangle } from "lucide-react";

type Props = {
  weaknesses: string[];
};

export function WeaknessesCard({ weaknesses }: Props) {
  return (
    <div className="liquid rounded-[28px] p-8">
      <h3 className="text-xl font-semibold text-slate-900">
        Weaknesses
      </h3>

      <div className="mt-6 space-y-4">
        {weaknesses.map((item) => (
          <div key={item} className="flex gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 text-amber-500" />
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}