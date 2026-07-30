"use client";

import { FileText, RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type FileCardProps = {
  file: File;
  onChange: () => void;
  onRemove: () => void;
};

export function FileCard({
  file,
  onChange,
  onRemove,
}: FileCardProps) {
  return (
    <div className="liquid rounded-[30px] p-6">
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>

        <div className="flex-1">
          <h3 className="truncate text-lg font-semibold text-slate-900">
            {file.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB • Ready for analysis
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="outline" onClick={onChange}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Change File
        </Button>

        <Button variant="ghost" onClick={onRemove}>
          <X className="mr-2 h-4 w-4" />
          Remove
        </Button>
      </div>
    </div>
  );
}