"use client";
import "@/styles/Resources.css";
import { BookOpen, FileText, TrendingUp, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "EU AI Act — A founder's 10-minute checklist",
    description: "Quick guide to understanding what the EU AI Act means for your startup and how to prepare.",
    link: "#",
  },
  {
    icon: FileText,
    title: "How to prepare for ISO/IEC 42001 audits",
    description: "Step-by-step preparation guide for passing your first AI management system audit.",
    link: "#",
  },
  {
    icon: TrendingUp,
    title: "What investors look for in AI compliance reports",
    description: "Learn how RiskLit helps startups prepare for EU AI Act compliance — even before enforcement begins in 2026.",
    link: "#",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="resources-section py-20">
      <div className="container mx-auto px-4">
        
        {/* ✅ Section Title */}
        <div className="text-center mb-12">
          <h2 className="resources-title">Learn about AI compliance</h2>
          <p className="resources-subtitle">
            Expert guidance to help you navigate regulatory requirements
          </p>
        </div>

        {/* ✅ Cards */}
        <div className="resources-grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div key={index} className="resource-card group text-left">
                <div className="resource-icon">
                  <Icon className="icon-inner" />
                </div>

                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>

                <a href={resource.link} className="resource-link">
                  Read more
                  <ArrowRight className="resource-arrow" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Resources;
