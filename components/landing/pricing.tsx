"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["3 resume analyses / month", "ATS score", "Basic suggestions"],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/ month",
    features: [
      "Unlimited analyses",
      "Job description matching",
      "Bullet point rewrites",
      "Full section-by-section feedback",
      "Analysis history",
    ],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Team",
    price: "$39",
    period: "/ month",
    features: [
      "Everything in Pro",
      "5 seats",
      "Shared reports",
      "Priority support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Simple pricing, no surprises
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex h-full flex-col",
              plan.featured &&
                "border-primary/60 shadow-glow ring-1 ring-primary/40",
            )}
          >
            {plan.featured && (
              <span className="mb-4 w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                Most popular
              </span>
            )}
            <CardTitle>{plan.name}</CardTitle>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-3xl font-bold">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {plan.period}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.featured ? "default" : "secondary"}
              className="mt-8 w-full"
              asChild
            >
              <Link href="/analyze">{plan.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
