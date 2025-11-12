"use client";
import { Gift, ArrowRight } from "lucide-react";
import "@/styles/FreeReportsPromo.css";

export default function FreeReportsPromo() {
  const handleApplyClick = () => {
    window.open(
      "https://forms.gle/your-google-form-link", // 🔁 replace with actual form URL
      "_blank"
    );
  };

  return (
    <section id="free-reports" className="free-reports-banner">
      <div className="free-reports-container">

        {/* 🎁 Left Section */}
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
            Apply now to receive a personalized risk scorecard and step-by-step compliance roadmap — completely free.
          </p>

          <button className="free-reports-btn" onClick={handleApplyClick}>
            Apply via Google Form
            <ArrowRight className="btn-icon" />
          </button>

          <p className="free-reports-footnote">
            ⏰ Limited to first 50 verified applicants • Offer ends soon
          </p>
        </div>

        {/* 🌐 Right Graphic */}
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
