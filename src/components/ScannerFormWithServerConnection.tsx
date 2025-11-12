// frontend/src/components/ScannerForm.tsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Inter, Syne } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "400" });
const syne = Syne({ subsets: ["latin"], weight: "400" });
import "../styles/ScannerForm.css";
export default function ScannerForm() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    if (!url || !email) {
      setError("Both fields are required");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/scans",
        { url, email },
        { timeout: 30000 }
      );
      setResult(res.data);
      setUrl("");
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.error || err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main style={{ padding: "2rem", margin: "2rem" }}>
      <div className="hero-left">
        <h1 className={syne.className} style={{ fontSize: "2.8rem", marginBottom: 0.0, fontWeight:500 }}>
            Your AI startup might already be violating the law.
          P<u>rotect your AI produc</u>t.
        </h1>
        <p className={inter.className} style={{ fontSize: "1.25rem", marginBottom: 50, paddingLeft:"2rem", paddingRight:"5rem" }}>
          Instantly reveal ShadowAI, data mishaps, and GDPR gaps. Our tool gives you
          the power to tackle compliance challenges head-on, protecting your
          startup's integrity and data.
        </p>
        <div className="form-card">
          <form onSubmit={submit}>
            <div className="form-row">
              <div className="form-field">
                <label>Paste your AI product URL</label>
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://your-product.example"
                  type="text"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Email Address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  type="email"
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button className="primary" type="submit" disabled={loading}>
                {loading ? "Scanning…" : "Scan My Product"}
              </button>
              <div className="small-muted">We will only use this for the scan report.</div>
            </div>
            {error && <div style={{ color: "crimson", marginTop: 12 }}>{error}</div>}
            {result && <div className="result">{JSON.stringify(result, null, 2)}</div>}
          </form>
        </div>
      </div>
      
    </main>
  );
}