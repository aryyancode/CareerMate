"use client";

import Link from "next/link";
import { FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-sm">
            <FileSearch className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="font-display text-xl font-bold text-slate-900">
              MatchCV
            </h1>

            <p className="-mt-1 text-xs text-slate-500">
              AI Resume Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <Button size="sm" asChild>
            <Link href="/analyze">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}