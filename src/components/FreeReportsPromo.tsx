"use client";

import { useState } from "react";
import { Gift, ArrowRight } from "lucide-react";
import "@/styles/FreeReportsPromo.css";

const TOTAL_STEPS = 6;

export default function FreeReportsPromo() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // SECTION 1 — Basic
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  // SECTION 2 — Jurisdiction
  const [companyRegisteredIn, setCompanyRegisteredIn] = useState("");
  const [customerRegions, setCustomerRegions] = useState<string[]>([]);

  // SECTION 3 — Data Handling
  const [userDataTypes, setUserDataTypes] = useState<string[]>([]);
  const [usesCookies, setUsesCookies] = useState("");
  const [dataShared, setDataShared] = useState("");

  // SECTION 4 — AI Usage
  const [usingAI, setUsingAI] = useState("");

  // SECTION 5 — Compliance Status
  const [hasPrivacyPolicy, setHasPrivacyPolicy] = useState("");
  const [hasTerms, setHasTerms] = useState("");
  const [previousAudit, setPreviousAudit] = useState("");

  // OPTIONAL
  const [stage, setStage] = useState("");
  const [industry, setIndustry] = useState("");
  const [biggestConcern, setBiggestConcern] = useState("");
  const [followUp, setFollowUp] = useState("");

  const toggleValue = (arr: string[], value: string, setter: any) => {
    if (arr.includes(value)) setter(arr.filter((x) => x !== value));
    else setter([...arr, value]);
  };

  const goNext = () => {
    setCurrentStep((s) => (s < TOTAL_STEPS ? s + 1 : s));
  };

  const goBack = () => {
    setCurrentStep((s) => (s > 1 ? s - 1 : s));
  };

  const handleSubmit = async () => {
    setLoading(true);

const res = await fetch(
  "https://tkz3rcgbe8.execute-api.eu-north-1.amazonaws.com/dev/free-beta-application",
  {
    method: "POST",
    body: JSON.stringify({
      companyName,
      businessEmail,
      websiteUrl,
      companyRegisteredIn,
      customerRegions,
      userDataTypes,
      usesCookies,
      dataSharedWithThirdParties: dataShared,
      usingAI,
      hasPrivacyPolicy,
      hasTerms,
      previousAudit,
      stage,
      industry,
      biggestConcern,
      wantFollowUp: followUp,
    }),
  }
);


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

          {/* Apply Now Button */}
          {!showForm && !done && (
            <button
              className="free-reports-btn"
              onClick={() => {
                setShowForm(true);
                setCurrentStep(1);
              }}
            >
              Apply Now <ArrowRight className="btn-icon" />
            </button>
          )}

          {/* FORM WIZARD */}
          {showForm && !done && (
            <div className="hidden-form-container form-visible">
              {/* Dots progress */}
              <div className="wizard-dots">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
                  const stepNumber = i + 1;
                  const isActive = stepNumber === currentStep;
                  const isCompleted = stepNumber < currentStep;
                  return (
                    <span
                      key={stepNumber}
                      className={[
                        "wizard-dot",
                        isActive ? "wizard-dot-active" : "",
                        isCompleted ? "wizard-dot-completed" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  );
                })}
              </div>

              {/* Sliding steps container */}
              <div
                className="wizard-steps"
                style={{
                  transform: `translateX(-${(currentStep - 1) * 100}%)`,
                }}
              >
                {/* STEP 1 */}
                <div className="wizard-step">
                  <h3 className="free-section-title">Company Information</h3>
                  <input
                    className="free-input"
                    placeholder="Company Name *"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <input
                    className="free-input"
                    placeholder="Business Email *"
                    onChange={(e) => setBusinessEmail(e.target.value)}
                  />
                  <input
                    className="free-input"
                    placeholder="Website URL *"
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>

                {/* STEP 2 */}
                <div className="wizard-step">
                  <h3 className="free-section-title">Jurisdiction & Operational Scope</h3>

                  <label className="free-label">
                    Where is your company registered? *
                  </label>
                  <select
                    className="free-select"
                    onChange={(e) => setCompanyRegisteredIn(e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option>UK</option>
                    <option>EU</option>
                    <option>US</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>

                  <label className="free-label">
                    Do you serve customers in these regions? *
                  </label>
                  <div className="free-checkbox-group">
                    {["UK", "EU", "USA", "Other"].map((region) => (
                      <label key={region}>
                        <input
                          type="checkbox"
                          onChange={() =>
                            toggleValue(
                              customerRegions,
                              region,
                              setCustomerRegions
                            )
                          }
                        />
                        {region}
                      </label>
                    ))}
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="wizard-step">
                  <h3 className="free-section-title">Data Handling</h3>

                  <label className="free-label">
                    What type of data do users provide? *
                  </label>
                  <div className="free-checkbox-group">
                    {[
                      "Email",
                      "Full Name",
                      "Phone",
                      "Payment Info",
                      "Location",
                      "Other",
                    ].map((t) => (
                      <label key={t}>
                        <input
                          type="checkbox"
                          onChange={() =>
                            toggleValue(userDataTypes, t, setUserDataTypes)
                          }
                        />
                        {t}
                      </label>
                    ))}
                  </div>

                  <label className="free-label">
                    Do you use cookies or tracking tools? *
                  </label>
                  <select
                    className="free-select"
                    onChange={(e) => setUsesCookies(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>YES</option>
                    <option>NO</option>
                    <option>Not Sure</option>
                  </select>

                  <label className="free-label">
                    Do you share collected data with third parties? *
                  </label>
                  <select
                    className="free-select"
                    onChange={(e) => setDataShared(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>YES</option>
                    <option>NO</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                {/* STEP 4 */}
                <div className="wizard-step">
                  <h3 className="free-section-title">AI Usage</h3>
                  <label className="free-label">
                    Are you using AI in your product?
                  </label>
                  <select
                    className="free-select"
                    onChange={(e) => setUsingAI(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>YES</option>
                    <option>NO</option>
                    <option>Planning to</option>
                  </select>
                </div>

                {/* STEP 5 */}
                <div className="wizard-step">
                  <h3 className="free-section-title">Current Compliance Status</h3>

                  <label className="free-label">Do you have a Privacy Policy?</label>
                  <select
                    className="free-select"
                    onChange={(e) => setHasPrivacyPolicy(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>YES</option>
                    <option>NO</option>
                    <option>Working On It</option>
                  </select>

                  <label className="free-label">Do you have Terms of Service?</label>
                  <select
                    className="free-select"
                    onChange={(e) => setHasTerms(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>YES</option>
                    <option>NO</option>
                    <option>Working On It</option>
                  </select>

                  <label className="free-label">
                    Have you done any compliance audits before?
                  </label>
                  <select
                    className="free-select"
                    onChange={(e) => setPreviousAudit(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>YES</option>
                    <option>Not Yet</option>
                  </select>
                </div>

                {/* STEP 6 */}
                <div className="wizard-step">
                  <h3 className="free-section-title">More About You (Optional)</h3>
                  <input
                    className="free-input"
                    placeholder="Stage of the startup"
                    onChange={(e) => setStage(e.target.value)}
                  />
                  <input
                    className="free-input"
                    placeholder="Industry"
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                  <textarea
                    className="free-textarea"
                    placeholder="Your biggest compliance concern"
                    onChange={(e) => setBiggestConcern(e.target.value)}
                  />
                  <select
                    className="free-select"
                    onChange={(e) => setFollowUp(e.target.value)}
                  >
                    <option value="">
                      If results show high risks, would you like follow-up support?
                    </option>
                    <option>YES</option>
                    <option>NO</option>
                    <option>Maybe</option>
                  </select>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="wizard-nav">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="free-back-btn"
                    onClick={goBack}
                  >
                    Back
                  </button>
                )}

                {currentStep < TOTAL_STEPS && (
                  <button
                    type="button"
                    className="free-reports-btn"
                    onClick={goNext}
                  >
                    Next
                    <ArrowRight className="btn-icon" />
                  </button>
                )}

                {currentStep === TOTAL_STEPS && (
                  <button
                    type="button"
                    className="free-reports-btn"
                    onClick={handleSubmit}
                  >
                    {loading ? "Submitting..." : "Submit"}
                    <ArrowRight className="btn-icon" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {done && (
            <p className="success-message">
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
