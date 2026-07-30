"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

type UploadZoneProps = {
  onFileAction: (file: File) => void;
};

export function UploadZone({ onFileAction }: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        onFileAction(acceptedFiles[0]);
      }
    },
    [onFileAction]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
  } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`liquid rounded-[30px] p-6 transition-all duration-300 ${
        isDragActive
          ? "scale-[1.02] border-blue-500 shadow-2xl"
          : "hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
      <input {...getInputProps()} />

      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-slate-300 bg-white/40 p-10 text-center transition-all duration-300">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 ${
            isDragActive
              ? "bg-blue-600 text-white scale-110"
              : "bg-blue-50"
          }`}
        >
          <UploadCloud
            className={`h-10 w-10 ${
              isDragActive
                ? "text-white"
                : "text-blue-600"
            }`}
          />
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">
          {isDragActive
            ? "Drop your resume"
            : "Upload Your Resume"}
        </h2>

        <p className="mt-3 max-w-md leading-7 text-slate-600">
          Drag & drop your PDF here or browse from your device.
        </p>

        <Button
          className="mt-8"
          size="lg"
          type="button"
          onClick={open}
        >
          Choose PDF
        </Button>

        <p className="mt-5 text-sm text-slate-400">
          PDF only • Maximum size 5 MB
        </p>
      </div>
    </div>
  );
}