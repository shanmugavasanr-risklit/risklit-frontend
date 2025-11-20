"use client";

import { Gift, ArrowRight } from "lucide-react";
import "@/styles/FreeReportsPromo.css";

export default function FreeReportsPromo() {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSc2hFMUHXPstYrUrYoTrncNI7p3-kF7yKneMv1G7L4yY4-kyg/viewform"; // ← your link

  return (
    <section id="free-reports" className="free-reports-banner">
      <div className="free-reports-container">

        {/* LEFT SIDE */}
        <div className="free-reports-text">
          <div className="free-reports-badge">
            <Gift className="h-5 w-5" />
            <span>New Initiative</span>
          </div>

          <h2 className="free-reports-title">
            Get one of <span>50 Free Compliance Reports</span>
          </h2>

          <p className="free-reports-description">
            We're giving away 50 RiskLit compliance scans to AI startups this month.
          </p>

          {/* Apply Button → opens Google Form */}
          <button
            className="free-reports-btn"
            onClick={() => window.open(googleFormLink, "_blank")}
          >
            Apply Now <ArrowRight className="btn-icon" />
          </button>

          <p className="free-reports-footnote">
            ⏰ Limited to first 50 verified applicants • Offer ends soon
          </p>
        </div>

        {/* RIGHT SIDE GRAPHIC */}
        <div className="free-reports-visual">
          <div className="free-reports-highlight">
            <h3>50</h3>
            <p>Free Reports Available</p>
          </div>
        </div>

      </div>
    </section>
  );
}
