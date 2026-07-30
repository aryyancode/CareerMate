"use client";

type Props = {
  keywords: string[];
};

export function KeywordsCard({ keywords }: Props) {
  return (
    <div className="liquid rounded-[28px] p-8">
      <h3 className="text-xl font-semibold text-slate-900">
        Missing Keywords
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}