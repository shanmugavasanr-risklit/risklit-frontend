"use client";

import { Search, BarChart3, CheckCircle } from "lucide-react";
import "@/styles/HowItWorks.css";

const steps = [
  {
    icon: Search,
    title: "Scan",
    description: "Upload policy or provide a URL; RiskLit analyzes models, datasets and docs.",
  },
  {
    icon: BarChart3,
    title: "Score",
    description: "Receive a clear risk score and prioritized issues.",
  },
  {
    icon: CheckCircle,
    title: "Fix & Verify",
    description: "Use auto-generated remediation guides; get RiskLit Verified once fixes are applied.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to AI compliance readiness
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="step-container flex flex-col items-center text-center">
                <div className="step-icon mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="how-description">{step.description}</p>

                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
