import Link from "next/link";
import { FileSearch, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-28 border-t border-slate-200 bg-slate-50/70">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
                <FileSearch className="h-5 w-5 text-white" />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  MatchCV
                </h2>

                <p className="-mt-1 text-xs text-slate-500">
                  AI Resume Intelligence
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Improve your resume with AI-powered insights, optimize it for ATS,
              and maximize your chances of landing interviews.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start gap-5 md:items-end">
            <Link
              href="#features"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Features
            </Link>

            <Link
              href="/dashboard"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Dashboard
            </Link>

            <Link
              href="/analyze"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Analyze Resume
            </Link>

            <div className="mt-3 flex gap-4">
              <Github className="h-5 w-5 cursor-pointer text-slate-500 transition hover:text-slate-900" />
              <Linkedin className="h-5 w-5 cursor-pointer text-slate-500 transition hover:text-slate-900" />
              <Mail className="h-5 w-5 cursor-pointer text-slate-500 transition hover:text-slate-900" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} MatchCV. All rights reserved.</p>

          <p>Built with Next.js • TypeScript • Gemini AI</p>
        </div>
      </div>
    </footer>
  );
}