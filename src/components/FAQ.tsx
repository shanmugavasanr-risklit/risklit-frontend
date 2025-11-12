"use client";
import { useState } from "react";
import "@/styles/FAQ.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a scan take?",
    answer: "Typical scans finish in 5–10 minutes for small products; larger systems may take longer.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes — you can upload documents encrypted in transit. We do not retain raw model data without consent.",
  },
  {
    question: "Which frameworks do you cover?",
    answer: "EU AI Act, ISO/IEC 42001, NIST AI RMF, Canada AIDA, and UK AI principles. We'll flag which rules apply to you.",
  },
  {
    question: "What happens after I'm 'Verified'?",
    answer: "You receive a downloadable evidence pack and a Verification badge you can show to investors and auditors.",
  },
];

const FAQ = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggle = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};



  return (
    <section id="faq" className="faq-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="faq-title text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="faq-subtitle text-lg">
              Everything you need to know about RiskLit
            </p>
          </div>

          <div className="faq-wrapper">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${
                    openIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="icon" />
                  ) : (
                    <ChevronDown className="icon" />
                  )}
                </button>
<div className={`faq-answer ${openIndex === index ? "open" : ""}`}>

                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
