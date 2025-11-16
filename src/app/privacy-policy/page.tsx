"use client";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/LegalPages.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <NavBar />

      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> November 10, 2025</p>
        <p><strong>Last Updated:</strong> November 10, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          RiskLit Ltd (“RiskLit,” “we,” “us,” or “our”) provides an AI-powered compliance scanning service
          designed to help startups assess legal and regulatory risks. This Privacy Policy explains how we collect,
          use, and protect your personal information when you use our platform.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>Email address (for reports and communication)</li>
          <li>Website URL (for compliance scanning)</li>
        </ul>
        <p>We do not use cookies or tracking technologies.</p>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Provide and improve our compliance scanning service</li>
          <li>Send compliance reports and updates</li>
          <li>Respond to user requests</li>
        </ul>

        <h2>4. Data Storage</h2>
        <p>All data is securely stored on AWS servers in the United States with encryption and access control.</p>

        <h2>5. Third-Party Services</h2>
        <p>
          We use OpenAI API for AI processing and AWS for hosting and storage. These services process data only
          as needed to support RiskLit’s operations.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain user-submitted data only as long as necessary to deliver services.
          You may request deletion by emailing
          <a href="mailto:cofounder@risklit.com"> cofounder@risklit.com</a>.
        </p>

        <h2>7. Contact</h2>
        <p>
          RiskLit Ltd, Delaware, United States<br />
          Email: <a href="mailto:cofounder@risklit.com">cofounder@risklit.com</a>
        </p>
      </div>
    <Footer />
    </div>
  );
}
