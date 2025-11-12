// src/components/Scorecard.tsx
import {
  Card, CardHeader, CardContent, CardTitle, CardDescription,
  Badge, Button, Progress
} from "@/components/ui/CustomUI";

import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Download,
  Share2,
} from "lucide-react";

import "../styles/Scorecard.css";

interface ScorecardProps {
  answers: Record<string, string>;
}

const calculateRiskScore = (answers: Record<string, string>): number => {
  const riskPoints: Record<string, Record<string, number>> = {
    "ai-purpose": { critical: 20, biometric: 20, employment: 15, general: 5 },
    "data-processing": { sensitive: 20, personal: 15, business: 5, public: 0 },
    "human-oversight": { none: 20, minimal: 15, moderate: 10, full: 0 },
    documentation: { none: 20, basic: 15, comprehensive: 5, certified: 0 },
    "risk-management": {
      none: 20,
      informal: 15,
      structured: 5,
      continuous: 0,
    },
  };

  let totalRisk = 0;
  Object.entries(answers).forEach(([key, value]) => {
    if (riskPoints[key] && riskPoints[key][value] !== undefined) {
      totalRisk += riskPoints[key][value];
    }
  });

  return Math.max(0, 100 - totalRisk);
};

export const Scorecard = ({ answers }: ScorecardProps) => {
  const score = calculateRiskScore(answers);

  const getRiskLevel = (score: number) => {
    if (score >= 80)
      return { level: "Low Risk", color: "success", icon: CheckCircle2 };
    if (score >= 60)
      return { level: "Medium Risk", color: "warning", icon: AlertTriangle };
    return { level: "High Risk", color: "destructive", icon: XCircle };
  };

  const risk = getRiskLevel(score);
  const RiskIcon = risk.icon;

  const complianceChecks = [
    {
      framework: "EU AI ACT",
      items: [
        {
          name: "Risk Classification",
          status: score >= 70,
          critical: true,
        },
        {
          name: "Human Oversight",
          status: answers["human-oversight"] !== "none",
          critical: true,
        },
        {
          name: "Data Governance",
          status:
            answers["data-processing"] !== "sensitive" || score >= 60,
          critical: false,
        },
        {
          name: "Transparency Requirements",
          status: score >= 50,
          critical: false,
        },
      ],
    },
    {
      framework: "ISO 42001",
      items: [
        {
          name: "AI Management System",
          status: answers.documentation !== "none",
          critical: true,
        },
        {
          name: "Risk Management Process",
          status: answers["risk-management"] !== "none",
          critical: true,
        },
        {
          name: "Continuous Monitoring",
          status: answers["risk-management"] === "continuous",
          critical: false,
        },
        {
          name: "Documentation Standards",
          status:
            answers.documentation === "comprehensive" ||
            answers.documentation === "certified",
          critical: false,
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Your Compliance Scorecard</h2>
          <p className="text-muted-foreground text-lg">
            Based on your responses, here is your AI compliance assessment
          </p>
        </div>

        {/* Main Score Card */}
        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-card flex items-center justify-center">
                    <span className="text-4xl font-bold">{score}</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <RiskIcon className={`w-12 h-12 text-${risk.color}`} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl">
                Compliance Score: {score}/100
              </CardTitle>
              <Badge variant={risk.color as any} className="text-base px-4 py-1">
                {risk.level}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Framework Compliance */}
        <div className="grid md:grid-cols-2 gap-6">
          {complianceChecks.map((framework) => (
            <Card key={framework.framework}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  {framework.framework}
                </CardTitle>
                <CardDescription>
                  Compliance requirements status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {framework.items.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {item.name}
                        {item.critical && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Critical
                          </Badge>
                        )}
                      </span>
                      {item.status ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                    <Progress value={item.status ? 100 : 0} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {score >= 80
                    ? "Congratulations! You're ready for RiskLit Verification"
                    : "Ready to improve your compliance?"}
                </h3>
                <p className="text-muted-foreground">
                  {score >= 80
                    ? "Download your report and share your compliance status"
                    : "Get personalized recommendations to achieve RiskLit Verified status"}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-4 h-4" />
                  Download Report
                </Button>
                <Button variant="hero" size="lg">
                  <Share2 className="mr-2 w-4 h-4" />
                  Get Verified
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
