"use client";
import "@/styles/InsightsSection.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InsightsSection() {
  return (
    <div>
    <NavBar />
    <section id="insights" className="insights-section">
      <div className="container">
        <h2>Insights</h2>
        <p className="subtitle">
          Explore AI compliance trends, case studies, and best practices from the RiskLit team.
        </p>

        <div className="insights-grid">
          <div className="insight-card">
            <h3>🔍 Understanding the EU AI Act</h3>
            <p>
              A clear breakdown of how startups and enterprises can prepare for
              the EU’s landmark AI regulation.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>

          <div className="insight-card">
            <h3>⚖️ AI Risk Classification Explained</h3>
            <p>
              Learn how to classify your AI systems by risk levels and what each
              category means for compliance.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>

          <div className="insight-card">
            <h3>🧠 Responsible AI in Practice</h3>
            <p>
              How real companies are building trustworthy and transparent AI
              systems that align with regulations.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
