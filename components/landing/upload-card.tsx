"use client";

import Link from "next/link";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadCard() {
  return (
    <div className="liquid w-full rounded-[28px] p-6">
      <div className="flex min-h-[290px] flex-col items-center justify-center rounded-[22px] border-2 border-dashed border-slate-300 bg-white/40 p-10 text-center transition-all duration-300 hover:border-blue-500">
        <UploadCloud className="mx-auto h-12 w-12 text-blue-600" />

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Upload your resume
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Drag & drop your PDF here or browse from your device.
        </p>

        <Button asChild className="mt-8" size="lg">
          <Link href="/analyze">Choose Resume</Link>
        </Button>

        <p className="mt-4 text-xs text-slate-400">
          Secure upload • PDF only • Max 5 MB
        </p>
      </div>
    </div>
  );
}