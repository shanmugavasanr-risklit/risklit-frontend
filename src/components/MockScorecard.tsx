"use client";
import Image from "next/image";
import scorecardMockup from "@/assets/scorecard-mockup.jpg";
import "@/styles/MockScorecard.css";
import { Download, CheckCircle } from "lucide-react";

const MockScorecard = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadReport = () => {
    scrollToHero();
    setTimeout(() => {
      (window as any).triggerAssessment?.();
    }, 600); // allow scroll animation to complete
  };

  return (
    <section id="mockscorecard" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">

          {/* ✅ mockscorecard image */}
          <div className="mockscorecard-image">
            <Image src={scorecardMockup} alt="RiskLit compliance mockscorecard" className="w-full h-auto" />
          </div>

          {/* ✅ Right section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl mockscorecard-title mb-4">
                Your compliance scorecard
              </h2>
              <p className="mockscorecard-text">
                Get a comprehensive view of your AI system's compliance status with
                detailed breakdowns across all critical areas.
              </p>
            </div>

            <div className="mockscorecard-success-card">
              <div className="flex items-start gap-4">
                <CheckCircle className="mockscorecard-success-icon flex-shrink-0" />
                <div>
                  <h3 className="mockscorecard-success-title mb-2">RiskLit Verified</h3>
                  <p className="mockscorecard-success-description">
                    RiskLit Verified means your product meets a baseline of readiness for
                    the EU AI Act and ISO/IEC 42001. Verified startups receive a downloadable
                    compliance pack that’s investor and audit-friendly.
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ Updated Button */}
            <button className="mockscorecard-btn" onClick={handleDownloadReport}>
              <Download className="h-5 w-5" />
              Download Sample Report
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MockScorecard;
