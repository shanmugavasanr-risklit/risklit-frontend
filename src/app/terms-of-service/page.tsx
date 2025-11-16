"use client";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/LegalPages.css";

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <NavBar />

      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p><strong>Effective Date:</strong> November 10, 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using RiskLit, you agree to these Terms of Service (“Terms”). If you do not agree, please
          discontinue use of the platform.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          RiskLit provides an AI-powered compliance scanning service to help startups identify potential
          regulatory risks in their digital operations.
        </p>

        <h2>3. Use of Service</h2>
        <ul>
          <li>Use RiskLit only for lawful purposes</li>
          <li>Do not misuse or reverse-engineer our platform</li>
        </ul>

        <h2>4. No Legal Advice</h2>
        <p>
          RiskLit provides automated insights for informational purposes only and does not constitute legal advice.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All platform content, software, and reports are owned by RiskLit Ltd and may not be redistributed
          without written consent.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          We use OpenAI API and AWS Cloud for analysis and hosting. RiskLit is not responsible for third-party
          service failures.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          RiskLit is provided “as is,” without warranties. We make no guarantee of accuracy or completeness.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          RiskLit Ltd shall not be liable for indirect or consequential damages arising from use of the platform.
        </p>

        <h2>9. Contact</h2>
        <p>
          Email: <a href="mailto:cofounder@risklit.com">cofounder@risklit.com</a>
        </p>
      </div>

    <Footer />
    </div>
  );
}
