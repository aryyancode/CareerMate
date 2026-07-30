"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Went from a 58 to an 89 ATS score in one pass. Three interviews the following week.",
    name: "Priya Nair",
    role: "Backend Engineer",
  },
  {
    quote:
      "The bullet-point rewrites alone were worth it — recruiters started responding.",
    name: "Marcus Odera",
    role: "Product Manager",
  },
  {
    quote:
      "Finally a tool that tells you the missing keywords instead of a vague score.",
    name: "Elena Vasquez",
    role: "Data Analyst",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Trusted by job seekers who got interviews
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="h-full">
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 font-display text-sm text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
