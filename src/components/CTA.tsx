"use client";

import { useState, useEffect } from "react";
import "@/styles/CTA.css";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleStartScan = () => {
    scrollToHero();
    setTimeout(() => {
      (window as any).triggerAssessment?.();
    }, 600); // wait for scroll animation
  };

  const handleScheduleDemo = () => {
    scrollToHero();
    setTimeout(() => {
      (window as any).triggerDemo?.();
    }, 600);
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Stop guessing your AI compliance score
          </h2>
          <p className="cta-subtitle">
            In minutes, know where you stand — and how to fix it.
          </p>

          <div className="cta-buttons">
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
              Schedule a Demo
            </button>
            </a>
          </div>

          <p className="cta-footnote">
            Join 100+ AI startups building with confidence
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
