"use client";

type Props = {
  summary: string;
};

export function SummaryCard({ summary }: Props) {
  return (
    <div className="liquid rounded-[28px] p-8">
      <h3 className="text-xl font-semibold text-slate-900">
        Resume Summary
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {summary}
      </p>
    </div>
  );
}