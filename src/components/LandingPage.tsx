"use client";
import { useState } from "react";
import "../styles/LandingPage.css";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HowItWorks from "./HowItWorks";
import MockScorecard from "./MockScorecard";
import FAQ from "./FAQ";
import Resources from "./Resources";
import CTA from "./CTA";
import FreeReportsPromo from "./FreeReportsPromo";

export default function LandingPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [locked, setLocked] = useState<string | null>(null);

  const frameworks = [
    {
      id: "eu",
      name: "🇪🇺 EU AI Act",
      content:
        "A comprehensive regulatory framework categorizing AI systems by risk, requiring transparency, human oversight, and conformity assessments before deployment.",
    },
    {
      id: "iso",
      name: "📘 ISO/IEC 42001",
      content:
        "The international standard for AI management systems, defining how organizations establish, implement, maintain, and continually improve AI governance.",
    },
    {
      id: "nist",
      name: "🇺🇸 NIST AI RMF",
      content:
        "The U.S. risk management framework guiding trustworthy AI development through accountability, data integrity, and measurable reliability principles.",
    },
    {
      id: "aida",
      name: "🇨🇦 Canada AIDA",
      content:
        "Canada’s Artificial Intelligence and Data Act focusing on responsible AI development with provisions for privacy, fairness, and transparency.",
    },
    {
      id: "uk",
      name: "🇬🇧 UK AI Principles",
      content:
        "The UK’s non-statutory approach emphasizing fairness, accountability, and safety while encouraging innovation-friendly AI governance.",
    },
  ];

  const active = locked ?? hovered;


  const handleClick = (id: string) => {
    setLocked((prev) => (prev === id ? null : id));
  };




return (
  <>
    {/* 🧩 FEATURES SECTION */}
    <Features />
    {/*<section id="features" className="overview">
      <div className="container">
        <h2>AI Compliance, Simplified</h2>
        <p>
          RiskLit helps organizations of all sizes navigate complex AI
          regulations like the <strong>EU AI Act</strong> with confidence.
          Our compliance engine scores, explains, and auto-generates
          documentation tailored to your AI systems.
        </p>

        <div className="overview-grid">
          <div className="card">
            <h3>⚙️ Assess</h3>
            <p>
              Run a full compliance scan for your AI models and datasets.
              Instantly identify gaps under EU AI Act and ISO/IEC 42001.
            </p>
          </div>
          <div className="card">
            <h3>🧩 Fix</h3>
            <p>
              Get actionable remediation plans, policy templates, and model
              improvement guides to meet regulatory standards.
            </p>
          </div>
          <div className="card">
            <h3>📊 Monitor</h3>
            <p>
              Set up continuous compliance checks with alerts and automated
              reports for audits and investor due diligence.
            </p>
          </div>
        </div>
      </div>
    </section>
    /*/}

    <HowItWorks />
    {/* 🌍 COMPLIANCE SECTION */}
    {/*
    <section id="compliance" className="compliance-map">
      <div className="container">
        <h2>Global Framework Support</h2>
        <p>
          RiskLit supports global AI compliance frameworks across multiple
          jurisdictions.
        </p>

        <div className="frameworks-row">
          {frameworks.map((fw) => (
            <div
              key={fw.id}
              className={`framework-tile ${active === fw.id ? "active" : ""}`}
              onMouseEnter={() => locked === null && setHovered(fw.id)}
              onMouseLeave={() => locked === null && setHovered(null)}
              onClick={() => handleClick(fw.id)}
            >
              <span>{fw.name}</span>
            </div>
          ))}
        </div>

        <div className={`framework-full ${active ? "show" : ""}`}>
          {active && (
            <div className="framework-full-content">
              <p>{frameworks.find((fw) => fw.id === active)?.content}</p>
            </div>
          )}
        </div>
      </div>
    </section>
    */}

    <MockScorecard />

    {/* 💬 TESTIMONIALS SECTION */}
    <section className="testimonials">
      <div className="container">
        <h2>Loved by Builders & Compliance Teams</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              “RiskLit transformed our compliance process. We went from
              confusion to clarity in less than a week.”
            </p>
            <span>- CTO, HealthTech Startup</span>
          </div>
          <div className="testimonial">
            <p>
              “Our investors demanded AI compliance documentation — RiskLit
              gave us everything instantly.”
            </p>
            <span>- Founder, AI SaaS</span>
          </div>
          <div className="testimonial">
            <p>
              “This is what AI governance should feel like — practical,
              automated, and stress-free.”
            </p>
            <span>- Head of AI Policy, FinTech</span>
          </div>
        </div>
      </div>
    </section>

    <FAQ />


    <Resources />


    {/* 💰 PRICING / CTA SECTION */}
    {/*}
    <section id="pricing" className="cta">
      <div className="container">
        <h2>Get RiskLit Verified Today</h2>
        <p>
          Build AI that’s compliant, responsible, and trusted. RiskLit makes
          it fast and founder-friendly.
        </p>
        <button
          className="btn-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Start Your Free Scan
        </button>

      </div>
    </section>
    */}

    <CTA />

    <Footer />
  </>
);}

