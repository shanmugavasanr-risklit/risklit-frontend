"use client";
import { useState, useEffect } from "react";
import "@/styles/NavBar.css";
import logo from "@/assets/risklit-logo.png";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  // ✅ Detect scroll for styling
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll for internal links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetEl = document.querySelector(target.getAttribute("href") || "");
      if (!targetEl) return;
      targetEl.scrollIntoView({ behavior: "smooth" });
    };

    links.forEach((link) => link.addEventListener("click", smoothScroll));
    return () => links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);

  // ✅ Scroll to Hero section
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ✅ Trigger Hero's Start Assessment function
  const handleStartScan = () => {
    scrollToHero();
    // Small delay so scroll completes before triggering
    setTimeout(() => {
      (window as any).triggerAssessment?.();
    }, 600);
  };

  return (
    <header className={`header ${scroll ? "scrolled" : ""}`}>
      <div className="header-container">
        
        {/* ✅ Logo */}
        <div className="header-logo">
          <a href="/"><img src={logo.src} alt="RiskLit" className="logo-img" /> </a>
        </div>

        {/* ✅ Navigation Links */}
        <nav className="header-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#resources">Resources</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* ✅ Action Buttons */}
        <div className="header-actions">
          <button className="btn-text">Sign In</button>
<button
  className="btn-primary"
  onClick={() => {
    const el = document.getElementById("free-reports");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
>
  Start Scan
</button>

        </div>

      </div>
    </header>
  );
}
