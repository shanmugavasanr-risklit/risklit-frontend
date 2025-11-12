import { Clock, FileCheck, RefreshCw, Award } from "lucide-react";
import "@/styles/Features.css";

const features = [
  {
    icon: Clock,
    title: "Assess in minutes",
    description: "Run an automated compliance scan for EU AI Act and ISO 42001. Fast, practical, and tailored to startups.",
  },
  {
    icon: FileCheck,
    title: "Actionable fixes",
    description: "Get remediation steps, policy templates and developer checklists you can implement right away.",
  },
  {
    icon: RefreshCw,
    title: "Continuous monitoring",
    description: "Schedule scans, get alerts for drift, and export audit-ready reports for investors and auditors.",
  },
  {
    icon: Award,
    title: "Investor-ready evidence",
    description: "Download RiskLit Verified reports that show readiness to VCs and partners.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
  <div className="feature-icon">
    <Icon className="h-6 w-6 text-blue-600" />
  </div>
  <h3 className="feature-title">{feature.title}</h3>
  <p className="feature-description">{feature.description}</p>
</div>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
