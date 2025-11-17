"use client";

import "@/styles/Footer.css";
import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">
          {/* Company Column */}
          <div>
            <h3 className="footer-title">RiskLit</h3>
            <p className="footer-description">
              AI compliance for startups.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="#">Start Free Scan</a></li>
              <li><a href="#">Demo</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

{/* Legal Column */}
<div>
  <h4 className="footer-heading">Legal</h4>
  <ul className="footer-links">
<li><Link href="/privacy-policy">Privacy Policy</Link></li>
<li><Link href="/terms-of-service">Terms of Service</Link></li>
  </ul>
</div>
        </div>
        {/* Bottom row */}
        <div className="footer-bottom">
          <div className="footer-contact">
            <Mail className="footer-icon" />
            <a href="mailto:cofounder@risklit.com">cofounder@risklit.com</a>
          </div>

          <div className="footer-social">
            <a href="#"><Twitter className="footer-icon" /></a>
            <a href="https://www.linkedin.com/company/risklitt"><Linkedin className="footer-icon" /></a>
            <a href="#"><Github className="footer-icon" /></a>
          </div>

          <p className="footer-copy">
            © 2025 RiskLit. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
