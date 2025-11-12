import React from "react";
import "@/styles/CustomUI.css";

// ------------------ CARD ------------------
export const Card = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card ${className || ""}`}>{children}</div>
);

export const CardHeader = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-header ${className || ""}`}>{children}</div>
);

export const CardTitle = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`card-title ${className || ""}`}>{children}</h3>
);

export const CardDescription = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`card-description ${className || ""}`}>{children}</p>
);

export const CardContent = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-content ${className || ""}`}>{children}</div>
);

// ------------------ BADGE ------------------
export const Badge = ({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
  className?: string;
}) => (
  <span className={`badge badge-${variant} ${className || ""}`}>{children}</span>
);

// ------------------ BUTTON ------------------
export const Button = ({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary" | "destructive" | "hero";
  size?: "default" | "sm" | "lg";
}) => (
  <button
    className={`btn btn-${variant} btn-${size} ${className || ""}`}
    {...props}
  >
    {children}
  </button>
);

// ------------------ PROGRESS ------------------
export const Progress = ({
  value = 0,
  className,
}: {
  value?: number;
  className?: string;
}) => (
  <div className={`progress ${className || ""}`}>
    <div className="progress-bar" style={{ width: `${value}%` }} />
  </div>
);
