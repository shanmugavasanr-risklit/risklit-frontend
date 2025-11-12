import { useState } from "react";
import "../styles/Form.css";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

interface AssessmentFormProps {
  onComplete: (answers: Record<string, string>) => void;
}

const questions: Question[] = [
  // 👇 Step 0: Scanner + dropdown card
  {
    id: "scanner",
    question: "Scan your AI product for compliance or shadow usage",
    options: [
      { value: "shadow", label: "Detect ShadowAI" },
      { value: "compliance", label: "Compliance Scanner" },
    ],
  },
  {
    id: "ai-purpose",
    question: "What is the primary purpose of your AI system?",
    options: [
      { value: "critical", label: "Critical Infrastructure (High Risk)" },
      { value: "biometric", label: "Biometric Identification (High Risk)" },
      { value: "employment", label: "Employment/HR Decisions (High Risk)" },
      { value: "general", label: "General Business Operations (Limited Risk)" },
    ],
  },
  {
    id: "data-processing",
    question: "What type of data does your AI system process?",
    options: [
      { value: "sensitive", label: "Sensitive Personal Data (Health, Biometric)" },
      { value: "personal", label: "Personal Identifiable Information" },
      { value: "business", label: "Business Data Only" },
      { value: "public", label: "Publicly Available Data" },
    ],
  },
  {
    id: "human-oversight",
    question: "What level of human oversight exists?",
    options: [
      { value: "none", label: "Fully Automated (No Human Review)" },
      { value: "minimal", label: "Minimal Oversight (Spot Checks)" },
      { value: "moderate", label: "Regular Human Review" },
      { value: "full", label: "Full Human-in-the-Loop" },
    ],
  },
  {
    id: "documentation",
    question: "Do you have documented AI governance policies?",
    options: [
      { value: "none", label: "No Documentation" },
      { value: "basic", label: "Basic Documentation" },
      { value: "comprehensive", label: "Comprehensive Policies" },
      { value: "certified", label: "ISO 42001 Certified" },
    ],
  },
  {
    id: "risk-management",
    question: "Do you have AI risk management processes?",
    options: [
      { value: "none", label: "No Formal Process" },
      { value: "informal", label: "Informal Risk Assessment" },
      { value: "structured", label: "Structured Risk Framework" },
      { value: "continuous", label: "Continuous Monitoring & Assessment" },
    ],
  },
];

export default function AssessmentForm({ onComplete }: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleNext = async () => {
    // Handle scanner submission before continuing
    if (currentStep === 0) {
      if (!url || !email || !answers["scanner"]) {
        setError("Please fill all fields before continuing.");
        return;
      }
      setError(null);
      setLoading(true);
      try {
        const zapierHook =
          answers["scanner"] === "shadow"
            ? "https://hooks.zapier.com/hooks/catch/22031769/u66iqc5/" // Detect ShadowAI
            : "https://hooks.zapier.com/hooks/catch/22031769/u66iqc5/"; // Compliance Scanner

        await fetch(zapierHook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, email }),
          mode: "no-cors",
        });

        setResult({ success: true, message: "Scan triggered successfully!" });
      } catch (err: any) {
        setError(err.message || "Failed to trigger scan.");
      } finally {
        setLoading(false);
      }
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const isAnswered = answers[questions[currentStep].id] !== undefined;
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="form-section">
      <div className="form-card">
        <div className="form-header">
          <div className="progress-info">
            <span>
              Question {currentStep + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <h2 className="form-question">{questions[currentStep].question}</h2>
          <p className="form-description">
            {currentStep === 0
              ? "Enter your product details and select scan type"
              : "Select the option that best describes your AI system"}
          </p>
        </div>

        <div className="form-content">
          {currentStep === 0 ? (
            <>
              {/* Scanner input fields */}
              <div className="form-field">
                <label>AI Product URL</label>
                <input
                  type="text"
                  placeholder="https://your-product.example"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Dropdown for scan type */}
              <select
                value={answers["scanner"] || ""}
                onChange={(e) => handleAnswer(e.target.value)}
                className="dropdown"
              >
                <option value="">Select a scan type</option>
                {questions[0].options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {error && <div className="error-text">{error}</div>}
              {result && (
                <div className="result success">{result.message}</div>
              )}
            </>
          ) : (
            <>
              {questions[currentStep].options.map((option) => (
                <label
                  key={option.value}
                  className={`radio-option ${
                    answers[questions[currentStep].id] === option.value
                      ? "selected"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={questions[currentStep].id}
                    value={option.value}
                    checked={answers[questions[currentStep].id] === option.value}
                    onChange={() => handleAnswer(option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </>
          )}

          <div className="form-buttons">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="btn-outline"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswered || loading}
              className="btn-primary"
            >
              {loading
                ? "Processing..."
                : currentStep === questions.length - 1
                ? "View Results"
                : "Next"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
