"use client";

import { useState, useRef, useEffect } from "react";
import "@/styles/HeroSection.css";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import logo from "@/assets/risklit-logo.png";
import { ArrowRight, Play } from "lucide-react";
import AssessmentForm from "@/components/AssessmentForm";
import ScannerForm from "@/components/ScannerForm";
import { Scorecard } from "@/components/Scorecard";

const Hero = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [formAnswers, setFormAnswers] = useState<Record<string, string> | null>(null);

  const assessmentRef = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  const handleAssessmentComplete = (answers: Record<string, string>) => {
    setFormAnswers(answers);
  };

  const handleStartAssessment = () => {
    setShowAssessment(true);
    setFormAnswers(null);
  };

  const handleViewDemo = () => {
    setShowScanner(true);
  };

  useEffect(() => {
    // ✅ Expose to window for CTA to call
    (window as any).triggerAssessment = handleStartAssessment;
    (window as any).triggerDemo = handleViewDemo;

    return () => {
      delete (window as any).triggerAssessment;
      delete (window as any).triggerDemo;
    };
  }, []);

  useEffect(() => {
    if (showAssessment && assessmentRef.current) {
      assessmentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showAssessment]);

  useEffect(() => {
    if (showScanner && scannerRef.current) {
      scannerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showScanner]);

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-watermark">
          <img src={logo.src} alt="" className="hero-logo" />
        </div>

        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Build AI that regulators, investors and customers can trust.
              </h1>

              <p className="hero-subtitle">
                RiskLit scans your models, datasets and policies against EU AI Act, ISO/IEC 42001 and global frameworks — get a detailed risk scorecard and step-by-step remediation in minutes.
              </p>

              <div className="hero-buttons">
<button
  className="btn-primary"
  onClick={() => {
    const el = document.getElementById("free-reports");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
>
  Start Scan <ArrowRight className="btn-icon" />
</button>


                <a href="mailto:cofounder@risklit.com?subject=Schedule%20a%20Demo">
                <button className="btn-outline">
                  <Play className="btn-icon-left" /> View Demo
                </button>
                </a>
              </div>

              <p className="hero-footnote">
                No credit card • 5-minute assessment • PDF report
              </p>
            </div>

            <div className="hero-image">
              <img
                src={heroDashboard.src}
                alt="RiskLit dashboard preview"
                className="hero-dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {showAssessment && (
        <div ref={assessmentRef} id="assessment-form" className="form-container-fade">
          {!formAnswers ? (
            <AssessmentForm onComplete={handleAssessmentComplete} />
          ) : (
            <Scorecard answers={formAnswers} />
          )}
        </div>
      )}

      {showScanner && (
        <div ref={scannerRef} id="demo" className="form-container-fade">
          <ScannerForm />
        </div>
      )}
    </>
  );
};

export default Hero;
