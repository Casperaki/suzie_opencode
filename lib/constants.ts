import {
  Users,
  MessageCircle,
  Brain,
  Shield,
  Bell,
  Plug,
} from "lucide-react";

export const SITE_NAME = "Team Suzie";
export const SITE_DESCRIPTION =
  "Your AI team. One platform. Deploy and manage intelligent AI agents that communicate, collaborate, and take action across your organization.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://teamsuzie.com";

export const NAV_ITEMS = [
  { label: "Features", href: "/#features" },
  { label: "Agents", href: "/#agents" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
] as const;

export const CTA_TEXT = "Get Started";
export const CTA_HREF = "/#contact";

export const HERO_BADGE = "Powered by OpenClaw";
export const HERO_TITLE = [
  "Your AI Team.",
  "One Platform.",
];
export const HERO_SUBTITLE =
  "Meet Team Suzie — the enterprise platform that orchestrates specialized AI agents like Dave Shucks and Suzie Nice. Connect them to WhatsApp, Slack, Discord, and more. Give them memory, skills, and purpose.";
export const HERO_CTA_PRIMARY = "Start Building";
export const HERO_CTA_SECONDARY = "See It In Action";

export const FEATURES = [
  {
    icon: Users,
    title: "Multi-Agent Orchestration",
    description:
      "Deploy and manage a team of specialized AI agents that work together seamlessly. Each agent brings unique skills to your organization.",
  },
  {
    icon: MessageCircle,
    title: "Cross-Platform Messaging",
    description:
      "Agents connect natively to WhatsApp, Telegram, Matrix, Discord, Slack, Signal, and more — meeting your team where they already work.",
  },
  {
    icon: Brain,
    title: "Persistent Memory & Skills",
    description:
      "Agents maintain long-term memory, daily notes, and specialized capabilities that grow smarter with every interaction.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Role-based access controls, comprehensive audit trails, and secure deployment options that meet the highest compliance standards.",
  },
  {
    icon: Bell,
    title: "Proactive Intelligence",
    description:
      "Agents monitor your email, calendars, weather, and key signals — reaching out proactively when something needs your attention.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description:
      "Agents read and write files, execute commands, browse the web, and interact with external APIs — becoming true extensions of your team.",
  },
] as const;

export const AGENTS = [
  {
    name: "Suzie Nice",
    role: "Operations Coordinator",
    description: "Manages schedules, coordinates teams, and keeps everything running smoothly across departments.",
    color: "from-violet-500 to-purple-600",
    emoji: "✨",
    skills: ["Calendar Management", "Team Coordination", "Workflow Automation"],
  },
  {
    name: "Dave Shucks",
    role: "Research Analyst",
    description: "Digs deep into data, compiles reports, and surfaces insights that drive strategic decisions.",
    color: "from-cyan-500 to-blue-600",
    emoji: "🔍",
    skills: ["Data Analysis", "Report Generation", "Market Research"],
  },
  {
    name: "Your Agent",
    role: "Coming Soon",
    description: "Define the role, give it skills, and watch it become an invaluable member of your team.",
    color: "from-teal-500 to-emerald-600",
    emoji: "🚀",
    skills: ["Custom Skills", "Your Workflows", "Your Data"],
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Deploy Your Agents",
    description: "Choose from pre-built agents or create custom ones tailored to your organization's needs. Each agent comes with specialized skills and knowledge.",
  },
  {
    step: "02",
    title: "Connect Your Tools",
    description: "Link your messaging platforms, calendars, email, APIs, and data sources. Agents integrate seamlessly with your existing stack.",
  },
  {
    step: "03",
    title: "Watch Them Work",
    description: "Your agents collaborate, learn, and take action — proactively helping your team while you maintain full oversight and control.",
  },
] as const;

export const PLANS = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For teams getting started with AI agents.",
    features: [
      "Up to 3 AI agents",
      "5 messaging channels",
      "Basic memory & skills",
      "Email support",
      "Community access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing teams that need powerful automation.",
    features: [
      "Up to 15 AI agents",
      "Unlimited messaging channels",
      "Advanced memory & custom skills",
      "Priority support",
      "Audit logs & analytics",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security and scale needs.",
    features: [
      "Unlimited AI agents",
      "Dedicated infrastructure",
      "SSO & advanced RBAC",
      "Custom SLA",
      "On-premise deployment option",
      "Dedicated account team",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Team Suzie transformed how we operate. Our agents handle 60% of routine coordination tasks, freeing our team to focus on strategy.",
    author: "Rachel Torres",
    role: "VP of Operations",
    company: "Meridian Health",
  },
  {
    quote:
      "Deploying Dave Shucks as our research analyst was a game-changer. We get comprehensive market reports in minutes instead of days.",
    author: "James Liu",
    role: "Head of Strategy",
    company: "NovaTech Ventures",
  },
  {
    quote:
      "The cross-platform messaging is incredible. Our agents meet our global team on WhatsApp, Slack, and Teams — wherever people work.",
    author: "Amara Okafor",
    role: "CTO",
    company: "Atlas Financial",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is the open-source runtime that powers Team Suzie. It provides the core agent infrastructure, memory systems, and tool execution capabilities that make intelligent AI assistants possible.",
  },
  {
    question: "How do AI agents differ from chatbots?",
    answer:
      "Unlike simple chatbots that only respond to prompts, Team Suzie agents have persistent memory, specialized skills, proactive capabilities, and can take actions across your tools and platforms autonomously.",
  },
  {
    question: "Can I create custom agents with unique skills?",
    answer:
      "Absolutely. You can define custom agents with specific roles, knowledge bases, and skills. Agents can be trained on your internal data and connected to your proprietary tools and APIs.",
  },
  {
    question: "How secure is the platform?",
    answer:
      "Enterprise-grade security is foundational. We offer role-based access controls, comprehensive audit trails, data encryption at rest and in transit, SOC 2 Type II compliance, and optional on-premise deployment.",
  },
  {
    question: "Which messaging platforms are supported?",
    answer:
      "We support WhatsApp, Telegram, Matrix, Discord, Slack, Signal, Microsoft Teams, and more. We're constantly adding new integrations based on customer requests.",
  },
] as const;

export const SOCIAL_LINKS = [
  { platform: "Twitter", url: "https://twitter.com/teamsuzie", label: "Twitter" },
  { platform: "GitHub", url: "https://github.com/scissero", label: "GitHub" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/scissero", label: "LinkedIn" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Agents", href: "/#agents" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Documentation", href: "/docs" },
  ],
  company: [
    { label: "About Scissero", href: "https://scissero.com" },
    { label: "OpenClaw", href: "https://openclaw.ai" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/#contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "GitHub", href: "https://github.com/scissero" },
    { label: "Community", href: "/community" },
    { label: "Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
} as const;
