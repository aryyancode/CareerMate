"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Sparkles,
  Target,
  SpellCheck,
  PenLine,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Job Match Score",
    description:
      "Compare your resume against any job description and instantly see how well you match.",
  },
  {
    icon: Gauge,
    title: "ATS Compatibility",
    description:
      "Ensure your resume passes Applicant Tracking Systems before you apply.",
  },
  {
    icon: Sparkles,
    title: "AI Resume Analysis",
    description:
      "Receive detailed AI insights with keyword suggestions and improvement tips.",
  },
  {
    icon: PenLine,
    title: "Bullet Improvements",
    description:
      "Transform weak bullet points into strong, achievement-focused statements.",
  },
  {
    icon: SpellCheck,
    title: "Grammar Check",
    description:
      "Detect grammar mistakes, readability issues, and improve writing quality.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Upload once and receive a complete resume analysis in just a few seconds.",
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Features
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Everything you need to
            <br />
            build a stronger resume
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AI-powered analysis, ATS optimization, grammar checking, and
            personalized improvements—all in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              className="group"
            >
              <div className="liquid h-full rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}