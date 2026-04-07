import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Layers,
  Clock,
} from "lucide-react";

export const SITE_NAME = "Acme";
export const SITE_DESCRIPTION =
  "The modern platform for building better products, faster.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const NAV_ITEMS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;

export const CTA_TEXT = "Get Started";
export const CTA_HREF = "/#contact";

export const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed with optimized performance at every layer of the stack.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with encryption, SSO, and role-based access controls.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description:
      "Real-time insights and dashboards to help you make data-driven decisions.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy to edge locations worldwide with automatic scaling and failover.",
  },
  {
    icon: Layers,
    title: "Flexible Integrations",
    description:
      "Connect with your favorite tools through our extensive API and webhook support.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description:
      "Reliable infrastructure backed by an SLA you can count on.",
  },
] as const;

export const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for side projects and experiments.",
    features: [
      "Up to 3 projects",
      "1 team member",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams that need more power.",
    features: [
      "Unlimited projects",
      "Up to 10 team members",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "SSO authentication",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated support",
      "Custom SLA",
      "On-premise deployment",
      "Audit logs",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free account and you can start building immediately. No credit card required.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all paid plans come with a 14-day free trial. You can cancel anytime during the trial period.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer community support for free plans, priority email support for Pro plans, and dedicated account management for Enterprise customers.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "This platform transformed the way our team builds products. We shipped 3x faster in the first month.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
  },
  {
    quote:
      "The best developer experience I've ever had. The integrations just work.",
    author: "Marcus Johnson",
    role: "Lead Engineer",
    company: "DataSync",
  },
  {
    quote:
      "We migrated our entire infrastructure in a weekend. The documentation is outstanding.",
    author: "Elena Rodriguez",
    role: "VP Engineering",
    company: "CloudPeak",
  },
] as const;

export const SOCIAL_LINKS = [
  { platform: "Twitter", url: "https://twitter.com", label: "Twitter" },
  { platform: "GitHub", url: "https://github.com", label: "GitHub" },
  { platform: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
  ],
  company: [
    { label: "About", href: "/#" },
    { label: "Careers", href: "/#" },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy", href: "/#" },
    { label: "Terms", href: "/#" },
  ],
} as const;
