"use client";

import { useRef, useState } from "react";
import { extractTextFromPDF } from "@/lib/pdf";

import { UploadZone } from "@/components/analyze/upload-zone";
import { FileCard } from "@/components/analyze/file-card";
import { LoadingState } from "@/components/analyze/loading-state";
import { AnalysisResult } from "@/components/analyze/analysis-result";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function AnalyzePage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  type Analysis = {
    atsScore: number;
    matchScore: number;
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
    matchingKeywords: string[];
    missingKeywords: string[];
    sectionScores: {
      skills: number;
      experience: number;
      projects: number;
      education: number;
      formatting: number;
    };
  };

  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  async function handleFile(selected?: File) {
    if (!selected) return;

    setError("");
    setAnalysis(null);

    if (selected.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }

    if (selected.size > MAX_FILE_SIZE) {
      setError("File size must be less than 5 MB.");
      return;
    }

    try {
      setLoading(true);
      setFile(selected);

      const extractedText = await extractTextFromPDF(selected);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resumeText: extractedText,
          jobDescription,
        }),
      });

      const data = await response.json();

      setAnalysis(data);
    } catch (error) {
      console.error(error);
      setError("Failed to analyze your resume.");
    } finally {
      setLoading(false);
    }
  }

  function removeFile() {
    setFile(null);
    setAnalysis(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <main className="container py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            AI Resume Analyzer
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold text-slate-900">
            Analyze Your Resume
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Upload your resume to receive an ATS score, AI feedback,
            personalized suggestions, and actionable improvements.
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {!file && <UploadZone onFileAction={handleFile} />}

        {file && (
          <FileCard
            file={file}
            onChange={() => inputRef.current?.click()}
            onRemove={removeFile}
          />
        )}

        <div className="liquid mt-8 rounded-[30px] p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Job Description
            </h2>

            <p className="mt-2 text-slate-500">
              Paste the job description to compare your resume against the role.
            </p>
          </div>

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the complete job description here..."
            className="min-h-[220px] w-full resize-none rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Optional for now. Soon this will generate a Job Match Score.
            </p>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              {jobDescription.length} characters
            </span>
          </div>
        </div>

        {loading && (
          <div className="mt-8">
            <LoadingState />
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600">
            {error}
          </div>
        )}

        {!loading && analysis && (
          <div className="mt-10">
            <AnalysisResult analysis={analysis} />
          </div>
        )}
      </div>
    </main>
  );
}
