"use client";

import { useState } from "react";
import { Gift, ArrowRight } from "lucide-react";
import "@/styles/FreeReportsPromo.css";

export default function FreeReportsPromo() {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/submit-free-report", {
      method: "POST",
      body: JSON.stringify({
        companyName,
        companyEmail,
        companyUrl,
      }),
    });

    setLoading(false);
    if (res.ok) setDone(true);
  };

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

          {/* BUTTON THAT REVEALS FORM */}
          {!showForm && !done && (
            <button className="free-reports-btn" onClick={() => setShowForm(true)}>
              Apply Now <ArrowRight className="btn-icon" />
            </button>
          )}

          {/* HIDDEN / VISIBLE FORM */}
          {showForm && !done && (
            <div className="hidden-form-container form-visible">
              <input
                className="free-input"
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                className="free-input"
                placeholder="Company Email"
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
              <input
                className="free-input"
                placeholder="Company URL"
                onChange={(e) => setCompanyUrl(e.target.value)}
              />

              <button className="free-reports-btn" onClick={handleSubmit}>
                {loading ? "Submitting..." : "Submit"}
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {done && (
            <p className="success">
              Your application has been received! We'll be in touch soon.
            </p>
          )}

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
