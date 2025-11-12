import { useState, useRef, useEffect } from "react";
import "../styles/HeroSection.css";
import AssessmentForm from "@/components/AssessmentForm";
import ScannerForm from "@/components/ScannerForm";
import { Scorecard } from "@/components/Scorecard";

export default function HeroSection() {
    const [showAssessment, setShowAssessment] = useState(false);
    const [showScanner, setShowScanner] = useState(false);
    const [formAnswers, setFormAnswers] = useState<Record<string, string> | null>(
        null
    );

    const assessmentRef = useRef<HTMLDivElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);

    const handleAssessmentComplete = (answers: Record<string, string>) => {
        console.log("Assessment completed:", answers);
        setFormAnswers(answers);
    };

    const handleStartAssessment = () => {
        setShowAssessment(true);
        setFormAnswers(null); // reset scorecard if restarting
    };

    const handleViewDemo = () => {
        setShowScanner(true);
    };

    // Scroll to assessment form when it appears
    useEffect(() => {
        if (showAssessment && assessmentRef.current) {
            assessmentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [showAssessment]);

    // Scroll to scanner form when it appears
    useEffect(() => {
        if (showScanner && scannerRef.current) {
            scannerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [showScanner]);

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-badge">
                    <span>EU AI ACT & ISO 42001 Compliant</span>
                </div>

                <h1 className="hero-title">
                    Become <span className="highlight">RiskLit Verified</span>
                </h1>

                <p className="hero-subtitle">
                    AI Compliance Scanner that assesses your systems against EU AI ACT and
                    ISO 42001 guidelines. Get your scorecard in minutes.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary" onClick={handleStartAssessment}>
                        Start Assessment
                    </button>

                    <button className="btn-secondary" onClick={handleViewDemo}>
                        View Demo
                    </button>
                </div>

                <div className="hero-features">
                    <div className="feature">
                        <span className="feature-icon">✔</span>
                        <div>
                            <h4>EU AI ACT</h4>
                            <p>Full compliance</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">📄</span>
                        <div>
                            <h4>ISO 42001</h4>
                            <p>Guidelines ready</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">🛡</span>
                        <div>
                            <h4>Risk Score</h4>
                            <p>Instant results</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assessment Form + Scorecard */}
            {showAssessment && (
                <div ref={assessmentRef} id="assessment-form" className="form-container-fade">
                    {!formAnswers ? (
                        <AssessmentForm onComplete={handleAssessmentComplete} />
                    ) : (
                        <Scorecard answers={formAnswers} />
                    )}
                </div>
            )}

            {/* Scanner Demo Section */}
            {showScanner && (
                <div ref={scannerRef} id="demo" className="form-container-fade">
                    <ScannerForm />
                </div>
            )}
        </section>
    );
}
