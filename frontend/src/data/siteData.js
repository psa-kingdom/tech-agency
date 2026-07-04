// Central content store — separated from markup so a future CMS/admin panel
// can plug in without a rewrite (per master_prompt Phase 2 tech notes).

export const AGENCY_NAME = "Altios Labs";
export const CTA_LINK = "https://cal.com/souravdash";
export const CONTACT_EMAIL = "srv.uxd@gmail.com";

export const NAV_LINKS = [
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICES = [
  {
    slug: "websites",
    size: "large",
    accent: "iris",
    tileTitle: "Websites",
    tileHeadline: "Scalable web experiences designed to convert.",
    tileDescription:
      "Landing pages, full CMS-driven sites, membership platforms, and admin panels — built to convert across every screen, segment, and stage of the funnel.",
    tags: ["Landing Pages", "CMS", "Memberships", "Payments"],
    tileLink: "Explore Website Development",
    icon: "Globe",
    eyebrow: "Website Development",
    heroHeadline:
      "Scalable web experiences designed to convert — across every screen, segment, and stage of the funnel.",
    heroSubhead:
      "We design and build websites that don't just look good — they're engineered to turn visitors into leads, members, and customers.",
    heroVisualCaption: "Homepage + funnel page + admin dashboard mockup",
    whatsIncluded: [
      { title: "High-Converting Landing Pages", description: "Funnel-optimized pages built for a single goal: conversion." },
      { title: "Full Marketing Funnels", description: "Multi-step funnels connecting ads, landing pages, and follow-up sequences." },
      { title: "CMS-Driven Websites", description: "Fully editable sites your team can update without touching code." },
      { title: "Custom Admin Panels", description: "Purpose-built dashboards to manage content, users, and data." },
      { title: "Membership & Gated Content Platforms", description: "Login flows, subscriptions, and access control done right." },
      { title: "Email & Payment Integrations", description: "Stripe, Razorpay, ESPs, and CRMs wired directly into your site." },
    ],
    deepDives: [
      { title: "Conversion-First Design", description: "Every layout decision is made with the funnel in mind — clear hierarchy, fast load times, and CTAs placed where attention actually peaks.", visualCaption: "Funnel hierarchy diagram" },
      { title: "Built on Modern, Flexible Stacks", description: "We pick the right stack for your needs — from headless CMS setups to fully custom builds — so the site stays fast and easy to maintain as you grow.", visualCaption: "Tech stack overview" },
      { title: "Integrated, Not Bolted On", description: "Payments, email marketing, CRM, and analytics are integrated at build time, not duct-taped on afterward.", visualCaption: "Integrations map" },
    ],
    whoItsFor: "Founders launching a new product, marketing teams running paid funnels, and businesses replacing an outdated or underperforming website.",
    faq: [
      { q: "Can you redesign our existing site without losing our SEO rankings?", a: "Yes — we run a migration plan that preserves URL structure, metadata, and redirects." },
      { q: "Do you build the CMS so our team can update content ourselves?", a: "Always — you should never need to call a developer to change a headline." },
      { q: "Can you integrate our existing payment or CRM tools?", a: "Yes, we integrate with most major payment gateways, ESPs, and CRMs, or build custom API connections where needed." },
    ],
  },
  {
    slug: "ai-automation",
    size: "large",
    accent: "periwinkle",
    tileTitle: "AI Automation & Integration",
    tileHeadline: "Put your business on autopilot.",
    tileDescription:
      "Custom AI software, intelligent agents, and end-to-end workflow automation that eliminate manual work and let your team focus on what actually needs a human.",
    tags: ["AI Agents", "Custom AI Software", "Workflow Automation"],
    tileLink: "Explore AI Automation",
    icon: "Bot",
    eyebrow: "AI Automation & Integration",
    heroHeadline: "AI automation and integrations to put your business on autopilot.",
    heroSubhead:
      "We design and deploy custom AI software, intelligent agents, and automated workflows that take repetitive work off your team's plate — permanently.",
    heroVisualCaption: "AI agent chat interface + automation flow diagram",
    whatsIncluded: [
      { title: "Custom AI Software", description: "Purpose-built AI applications tailored to your specific business logic — not a generic wrapper around a chatbot. From internal tools to customer-facing AI features embedded directly into your product." },
      { title: "Custom AI Agents", description: "Autonomous agents that handle real work — qualifying leads, answering support tickets, processing documents, or orchestrating multi-step tasks across your existing tools, with human-in-the-loop checkpoints where it matters." },
      { title: "AI Workflows & Automations", description: "End-to-end automation connecting your CRM, email, spreadsheets, and internal systems — so data moves and decisions trigger automatically, without manual handoffs." },
    ],
    deepDives: [
      { title: "Automation Audit First", description: "Before we automate anything, we map your current workflows to find where time is actually being lost — then design automations around real bottlenecks, not assumptions.", visualCaption: "Workflow audit map" },
      { title: "Agents That Fit Your Stack", description: "We build and deploy agents inside the tools you already use — Slack, email, your CRM, your internal dashboard — so adoption doesn't require retraining your team.", visualCaption: "Agent-in-stack diagram" },
      { title: "Safe, Monitored, Reliable", description: "Every automation ships with logging, monitoring, and clear fallback paths, so AI augments your operations without becoming a black box.", visualCaption: "Monitoring dashboard" },
    ],
    whoItsFor: "Operations-heavy businesses drowning in repetitive tasks, and product teams that want to embed AI features without building an in-house AI team.",
    faq: [
      { q: "Do we need our own AI/ML team to use this?", a: "No — we handle the model selection, integration, and infrastructure end-to-end." },
      { q: "What tools can you integrate with?", a: "Most CRMs, helpdesks, spreadsheets, Slack, email, and custom internal systems via API." },
      { q: "How do you handle AI mistakes or edge cases?", a: "We build in human-in-the-loop checkpoints and monitoring so failures are caught early, not after they've caused damage." },
    ],
  },
  {
    slug: "custom-software",
    size: "large",
    accent: "orchid",
    tileTitle: "Custom Software",
    tileHeadline: "Digital products that scale.",
    tileDescription:
      "SaaS platforms, MVPs, enterprise tools, and internal dashboards — engineered for speed today and scale tomorrow.",
    tags: ["SaaS", "MVPs", "Enterprise Tools", "Dashboards"],
    tileLink: "Explore Custom Software",
    icon: "LayoutDashboard",
    eyebrow: "Custom Software Development",
    heroHeadline: "Digital products that scale.",
    heroSubhead:
      "From MVP to enterprise-grade platform, we design and engineer custom software built around your exact workflows — not someone else's template.",
    heroVisualCaption: "SaaS dashboard UI mockup",
    whatsIncluded: [
      { title: "SaaS Platforms", description: "Multi-tenant, subscription-ready platforms built to scale from first user to first thousand." },
      { title: "MVPs", description: "Lean, fast builds that get your idea in front of real users without over-engineering." },
      { title: "Enterprise Tools", description: "Internal systems that replace spreadsheets and disconnected tools with something built for how your team actually works." },
      { title: "Dashboards & Analytics", description: "Custom dashboards that turn raw data into decisions." },
    ],
    deepDives: [
      { title: "From Idea to MVP, Fast", description: "We scope ruthlessly to ship a usable, testable product quickly — then iterate based on real user feedback instead of guesswork.", visualCaption: "MVP sprint timeline" },
      { title: "Architected to Scale", description: "Every platform is built on a foundation that can handle growth — proper data modeling, scalable infrastructure, and clean code your future team can actually work with.", visualCaption: "System architecture diagram" },
      { title: "Enterprise-Grade Where It Counts", description: "Role-based access, audit trails, and integrations with your existing enterprise systems — built in from day one for teams that can't afford downtime or data leaks.", visualCaption: "Access control diagram" },
    ],
    whoItsFor: "Startups validating a new product, and enterprises needing internal tools or platforms that off-the-shelf software can't handle.",
    faq: [
      { q: "We only have an idea, no spec — can you still help?", a: "Yes — we start with a discovery and scoping phase to turn your idea into a clear technical plan." },
      { q: "Can you take over an existing codebase?", a: "Yes, we regularly inherit and modernize existing products." },
      { q: "Do you offer ongoing support after launch?", a: "Yes — retained support and iteration plans are available post-launch." },
    ],
  },
  {
    slug: "sap-transformation",
    size: "small",
    accent: "deepIris",
    tileTitle: "SAP Transformation",
    tileOneLiner: "S/4HANA migrations, SAP cloud integration, and module delivery — executed with rigor.",
    tileLink: "Learn more",
    icon: "Boxes",
    eyebrow: "SAP Transformation",
    heroHeadline: "SAP transformation, executed with rigor.",
    heroSubhead:
      "S/4HANA migrations, SAP cloud integration, module delivery, and enterprise integrations — delivered with the discipline enterprise systems demand.",
    heroVisualCaption: "System architecture diagram — SAP modules + cloud + third-party systems",
    whatsIncluded: [
      { title: "S/4HANA Migrations", description: "End-to-end migration planning and execution, minimizing downtime and data risk." },
      { title: "SAP Cloud Integration", description: "Connecting SAP with cloud infrastructure and third-party platforms via robust, monitored integrations." },
      { title: "Module Delivery", description: "Configuration and rollout of SAP modules aligned to your specific business processes." },
      { title: "Enterprise Integrations", description: "Reliable, secure integrations between SAP and the rest of your enterprise stack." },
    ],
    deepDives: [
      { title: "Migration Without the Risk", description: "We approach S/4HANA migrations with a phased, tested methodology — data validation, parallel testing, and rollback plans at every stage.", visualCaption: "Migration phase timeline" },
      { title: "Rigor at Every Step", description: "SAP transformations touch the core of how your business runs — so every engagement follows documented processes, sign-offs, and enterprise-grade change management.", visualCaption: "Change management flow" },
    ],
    whoItsFor: "Mid-size to large enterprises running SAP who need migration, integration, or module delivery support without the overhead of a big-four consulting engagement.",
    faq: [
      { q: "Can you support a phased S/4HANA migration?", a: "Yes — we plan migrations in phases to minimize business disruption." },
      { q: "Do you work alongside our internal IT/SAP team?", a: "Yes, we typically work as an extension of your existing team rather than a replacement." },
      { q: "Can you integrate SAP with non-SAP systems?", a: "Yes, we build and maintain integrations between SAP and your CRM, e-commerce, or custom internal systems." },
    ],
  },
  {
    slug: "digital-marketing",
    size: "small",
    accent: "paleIris",
    tileTitle: "Digital Marketing",
    tileOneLiner: "SEO, paid media, and marketing automation that turn traffic into pipeline.",
    tileLink: "Learn more",
    icon: "Megaphone",
    eyebrow: "Digital Marketing",
    heroHeadline: "Marketing that compounds, not just campaigns that spike.",
    heroSubhead:
      "SEO, paid media, content, and marketing automation — built to turn traffic into pipeline and pipeline into revenue.",
    heroVisualCaption: "Analytics / growth dashboard mockup — traffic and conversion charts trending upward",
    whatsIncluded: [
      { title: "SEO", description: "Technical SEO, content strategy, and on-page optimization to grow organic visibility that compounds over time." },
      { title: "Paid Media", description: "Google, Meta, and LinkedIn ad campaigns built around your actual funnel, not vanity metrics." },
      { title: "Content Marketing", description: "Blog, landing page, and email content designed to move people through your funnel." },
      { title: "Marketing Automation", description: "Lifecycle email and CRM automation that nurtures leads without manual follow-up." },
      { title: "Analytics & CRO", description: "Conversion tracking and ongoing testing to improve funnel performance month over month." },
    ],
    deepDives: [
      { title: "Full-Funnel, Not Just Top-of-Funnel", description: "We don't just drive traffic — we work with your website and automation stack (often the ones we've built) to make sure that traffic actually converts.", visualCaption: "Funnel conversion diagram" },
      { title: "Data Over Guesswork", description: "Every campaign is tracked, measured, and optimized against real conversion data, not just impressions and clicks.", visualCaption: "Campaign analytics dashboard" },
    ],
    whoItsFor: "Businesses with a working product that need consistent, measurable lead generation — not a one-off campaign.",
    faq: [
      { q: "Do you need to have built our website to run our marketing?", a: "No — we can work with your existing site and stack, though integration is smoother if we've built it." },
      { q: "What's the minimum commitment?", a: "Marketing compounds over time, so we typically recommend a 3-month minimum to see meaningful results." },
      { q: "Can you handle both paid and organic?", a: "Yes — we run integrated strategies across SEO, content, and paid media rather than treating them separately." },
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);

export const DIFFERENTIATORS = [
  { icon: "Layers", title: "Full-Stack Under One Roof", description: "Website, software, and AI, delivered by one accountable team instead of three vendors." },
  { icon: "ShieldCheck", title: "Built to Ship, Not Just Demo", description: "Production-grade code, proper QA, and documentation — not a prototype that breaks in week two." },
  { icon: "Globe2", title: "Global Delivery", description: "We work across time zones with clients in India, the US, UK, and Australia." },
  { icon: "Handshake", title: "Transparent, Milestone-Based Engagements", description: "Clear scope, clear pricing, and payments tied to delivery milestones — no surprises." },
];

export const PROCESS_STEPS = [
  { step: "01", icon: "Search", title: "Discover", description: "A short discovery call to understand your goals, constraints, and what success looks like." },
  { step: "02", icon: "ClipboardList", title: "Scope & Plan", description: "We turn that conversation into a clear proposal — scope, timeline, and milestone-based pricing." },
  { step: "03", icon: "Code2", title: "Build", description: "Design and development in focused sprints, with regular check-ins so you always know where things stand." },
  { step: "04", icon: "Rocket", title: "Launch & Support", description: "We ship, test, and stay on for support, iteration, and scale-up as you grow." },
];

export const TESTIMONIALS = [
  { name: "[Client Name]", role: "[Role]", company: "[Company]", quote: "[Testimonial placeholder — swap with real client quotes]" },
  { name: "[Client Name]", role: "[Role]", company: "[Company]", quote: "[Testimonial placeholder — swap with real client quotes]" },
  { name: "[Client Name]", role: "[Role]", company: "[Company]", quote: "[Testimonial placeholder — swap with real client quotes]" },
];

export const TRUST_STRIP_TEXT = "Trusted by teams across India · US · UK · Australia";
