// Central content store — updated for Navigatte structure and industry solutions.

export const AGENCY_NAME = "Navigatte";
export const CTA_LINK = "https://cal.com/souravdash";
export const CONTACT_EMAIL = "srv.uxd@gmail.com";

export const NAV_LINKS = [
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICES = [
  {
    slug: "digital-platforms",
    size: "large",
    accent: "iris",
    tileTitle: "Digital Platforms & Customer Experience",
    tileHeadline: "Helping organizations build engaging digital experiences and scalable business platforms.",
    tileDescription:
      "We design and build websites, portals, and web applications that engage your users, improve retention, and drive measurable business outcomes.",
    icon: "Globe",
    eyebrow: "Digital Platforms & Customer Experience",
    heroHeadline: "Digital Platforms & Customer Experience",
    heroSubhead: "Helping organizations build engaging digital experiences and scalable business platforms.",
    heroVisualCaption: "Corporate site + custom portal mockup",
    capabilities: [
      "Corporate Websites",
      "Enterprise Websites",
      "Customer Portals",
      "Membership Platforms",
      "Dealer & Distributor Portals",
      "E-Commerce Platforms",
      "Self-Service Applications",
      "NGO & Association Platforms",
      "Multi-Tenant Platforms",
      "Progressive Web Applications"
    ],
    whatsIncluded: [
      { title: "Corporate Websites", description: "Brand-aligned corporate sites built to engage stakeholders." },
      { title: "Enterprise Websites", description: "High-performance, content-rich websites built for large organizations." },
      { title: "Customer Portals", description: "Secure, self-service portals offering seamless client interactions." },
      { title: "Membership Platforms", description: "Robust community and subscription systems with gated content." },
      { title: "Dealer & Distributor Portals", description: "Streamlined partner portals for inventory, sales, and operations." },
      { title: "E-Commerce Platforms", description: "High-converting online stores with secure checkout and payment systems." },
      { title: "Self-Service Applications", description: "User-friendly platforms designed to reduce support overhead." },
      { title: "NGO & Association Platforms", description: "Stakeholder engagement, advocacy, and membership portals." },
      { title: "Multi-Tenant Platforms", description: "SaaS-ready architectures with shared resources and isolated data." },
      { title: "Progressive Web Applications", description: "App-like fast experiences accessible directly from any web browser." }
    ],
    deepDives: [
      { title: "User-Centric Architecture", description: "Every page structure and flow is modeled around actual user patterns to maximize retention, conversion, and task success.", visualCaption: "User journey map" }
    ],
    whoItsFor: "Businesses looking to build next-generation web presences, customer self-service portals, or robust membership ecosystems.",
    faq: [
      { q: "Can you migrate our legacy portal without disrupting operations?", a: "Yes — we plan migrations in parallel phases to ensure seamless transition with zero service disruption." },
      { q: "Will our website be fast and optimized for search engines (SEO)?", a: "Absolutely. We build with modern web performance standards, clean semantic code, and optimized assets, ensuring fast page load speeds and native SEO readiness out of the box." },
      { q: "Do you integrate Content Management Systems (CMS)?", a: "Yes, we integrate easy-to-use headless or traditional CMS options (like Contentful or custom admin panels) so your marketing team can update pages without developer assistance." }
    ]
  },
  {
    slug: "enterprise-applications",
    size: "large",
    accent: "periwinkle",
    tileTitle: "Enterprise Applications",
    tileHeadline: "Building mission-critical software systems that streamline operations and improve productivity.",
    tileDescription:
      "From ERP integrations to bespoke workflow management systems, we engineer software that handles complex business processes smoothly.",
    icon: "LayoutDashboard",
    eyebrow: "Enterprise Applications",
    heroHeadline: "Enterprise Applications",
    heroSubhead: "Building mission-critical software systems that streamline operations and improve productivity.",
    heroVisualCaption: "CRM & ERP operational workflow dashboard",
    capabilities: [
      "Custom Software Development",
      "CRM Solutions & Automation",
      "ERP Solutions",
      "SaaS Product Development",
      "Business Applications",
      "Workflow Management Systems",
      "Mobile Applications",
      "Internal Operations Platforms",
      "Business Process Platforms",
      "Legacy System Modernization"
    ],
    whatsIncluded: [
      { title: "Custom Software Development", description: "Bespoke applications designed from the ground up for your unique operations." },
      { title: "CRM Solutions & Automation", description: "Integrated customer relationship management pipelines that automate follow-ups." },
      { title: "ERP Solutions", description: "Enterprise resource planning systems connecting finance, inventory, and operations." },
      { title: "SaaS Product Development", description: "Launch-ready multi-tenant SaaS architectures built to scale securely." },
      { title: "Business Applications", description: "Purpose-built business logic systems replacing scattered spreadsheets." },
      { title: "Workflow Management Systems", description: "Streamlined operational checklists, approval flows, and data handoffs." },
      { title: "Mobile Applications", description: "High-performance iOS and Android apps connected to your core software." },
      { title: "Internal Operations Platforms", description: "Dashboards built specifically to coordinate internal department teams." },
      { title: "Business Process Platforms", description: "Integrated platforms that enforce operational compliance and data capture." },
      { title: "Legacy System Modernization", description: "Upgrading legacy software into modern, performant cloud-native solutions." }
    ],
    deepDives: [
      { title: "Resilient Architecture", description: "Enterprise systems are designed for high availability, transactional integrity, and scalable database structures.", visualCaption: "System architecture map" }
    ],
    whoItsFor: "Operations teams, enterprises replacing legacy database programs, and founders launching a SaaS.",
    faq: [
      { q: "How do you handle integrations with existing software?", a: "We build secure REST or GraphQL APIs to connect custom modules with your legacy services." },
      { q: "Is our data secure and compliant with privacy regulations?", a: "Yes. We implement robust security protocols, including end-to-end encryption, multi-factor authentication (MFA), role-based access control, and compliance checks suited for your industry." },
      { q: "How does the system scale as our user base grows?", a: "We engineer systems using scalable cloud infrastructure (like AWS serverless or Kubernetes containers) so they automatically adjust resources to handle transaction spikes seamlessly." }
    ]
  },
  {
    slug: "ai-automation",
    size: "large",
    accent: "orchid",
    tileTitle: "Artificial Intelligence & Intelligent Automation",
    tileHeadline: "Empowering organizations through intelligent systems that automate operations and accelerate decision-making.",
    tileDescription:
      "We design and deploy custom AI agents, document parsers, and cognitive workflows that shift routine execution to intelligent automation.",
    icon: "Bot",
    eyebrow: "AI & Intelligent Automation",
    heroHeadline: "Artificial Intelligence & Intelligent Automation",
    heroSubhead: "Empowering organizations through intelligent systems that automate operations and accelerate decision-making.",
    heroVisualCaption: "Intelligent document parsing + agent orchestration flow",
    capabilities: [
      "AI Agents",
      "Enterprise AI Assistants",
      "Generative AI Solutions",
      "Intelligent Document Processing",
      "Knowledge Management Systems",
      "Enterprise Search Solutions",
      "Conversational AI",
      "Workflow Automation",
      "Process Automation",
      "AI Integration Services"
    ],
    whatsIncluded: [
      { title: "AI Agents", description: "Autonomous task-executors carrying out workflows across tools with human oversight." },
      { title: "Enterprise AI Assistants", description: "Custom LLM assistants securely trained on internal company manuals." },
      { title: "Generative AI Solutions", description: "Content creation, layout generation, and dynamic summarization systems." },
      { title: "Intelligent Document Processing", description: "Automated extraction and categorization of invoices, contracts, and PDFs." },
      { title: "Knowledge Management Systems", description: "Smart databases that index, organize, and summarize company knowledge." },
      { title: "Enterprise Search Solutions", description: "Semantic search across folders, databases, and emails for instant lookup." },
      { title: "Conversational AI", description: "Interactive customer-facing voice and chat agents that resolve actual inquiries." },
      { title: "Workflow Automation", description: "Seamless backend connectors that automate triggers across multiple tools." },
      { title: "Process Automation", description: "End-to-end operational automation eliminating manual data re-entry." },
      { title: "AI Integration Services", description: "Embedding intelligence into your existing CRM, CMS, or database stack." }
    ],
    deepDives: [
      { title: "Cognitive Agents", description: "AI agents that read contexts, plan next steps, and access local databases safely.", visualCaption: "Agent flow map" }
    ],
    whoItsFor: "Support teams handling high ticket volumes, operations teams processing large sets of documents, and products adding AI features.",
    faq: [
      { q: "How do you ensure data security with LLMs?", a: "We build using enterprise API contracts or private host models so your business data is never used for public training." },
      { q: "How do you guarantee the accuracy of AI outputs?", a: "We implement strict validation filters, human-in-the-loop oversight checks, and thorough prompt-engineering guardrails to minimize hallucinations or errors." },
      { q: "How long does it take to deploy a custom AI automation workflow?", a: "We typically deliver a working prototype in 3-4 weeks, with full enterprise integrations and production rollout completing within 8-12 weeks." }
    ]
  },
  {
    slug: "cloud-engineering",
    size: "small",
    accent: "deepIris",
    tileTitle: "Cloud, Platform & DevOps Engineering",
    tileHeadline: "Designing and operating scalable, resilient, and future-ready technology infrastructure.",
    tileDescription:
      "We design, build, and optimize secure cloud infrastructure that scales automatically while minimizing runtime costs.",
    icon: "Boxes",
    eyebrow: "Cloud & DevOps Engineering",
    heroHeadline: "Cloud, Platform & DevOps Engineering",
    heroSubhead: "Designing and operating scalable, resilient, and future-ready technology infrastructure.",
    heroVisualCaption: "CI/CD infrastructure and cloud deployment architecture",
    capabilities: [
      "Cloud Strategy & Architecture",
      "Cloud Migration & Modernization",
      "AWS Solutions",
      "Microsoft Azure Solutions",
      "Google Cloud Solutions",
      "Kubernetes & Container Platforms",
      "DevOps Transformation",
      "CI/CD Automation",
      "Infrastructure as Code",
      "Site Reliability Engineering (SRE)",
      "Platform Engineering",
      "Managed Cloud Operations"
    ],
    whatsIncluded: [
      { title: "Cloud Strategy & Architecture", description: "Tailored blue-printing for highly available, cost-effective deployments." },
      { title: "Cloud Migration & Modernization", description: "Moving database servers from local hardware to modern containerized cloud setups." },
      { title: "AWS Solutions", description: "Fully managed AWS deployments utilizing ECS, EKS, RDS, and Lambda serverless." },
      { title: "Microsoft Azure Solutions", description: "Enterprise Azure setups integrated with Active Directory and secure networks." },
      { title: "Google Cloud Solutions", description: "GCP configurations optimized for machine learning pipelines and container tasks." },
      { title: "Kubernetes & Container Platforms", description: "Orchestration of microservices using production-grade Kubernetes." },
      { title: "DevOps Transformation", description: "Bridging the gap between code engineering and production stability." },
      { title: "CI/CD Automation", description: "Automated pipelines that run linting, tests, and build deployments in seconds." },
      { title: "Infrastructure as Code", description: "Terraform configurations tracking your complete network infrastructure." },
      { title: "Site Reliability Engineering (SRE)", description: "Automated error monitoring, metric dashboards, and warning thresholds." },
      { title: "Platform Engineering", description: "Building internal developer portals to speed up deployment times safely." },
      { title: "Managed Cloud Operations", description: "Ongoing server upkeep, security patches, and bandwidth scaling." }
    ],
    deepDives: [
      { title: "Scalable Infrastructure Pipelines", description: "Infrastructure structured as code, deployable across multiple sandbox environments instantly.", visualCaption: "DevOps container pipeline" }
    ],
    whoItsFor: "Product organizations scaling quickly, tech departments moving away from manual servers, and teams with strict compliance needs.",
    faq: [
      { q: "Will cloud migration cause server downtime?", a: "No — we run blue-green deployments to ensure traffic shifts dynamically only after verification." },
      { q: "How do you manage and reduce cloud hosting costs?", a: "We implement automated resource scheduling, configure auto-scaling parameters, clean up orphaned assets, and use serverless computing to keep costs optimized." },
      { q: "Do you offer post-migration monitoring and alerts?", a: "Yes, we build centralized monitoring (using Prometheus, Grafana, or Datadog) to watch system performance and immediately alert on any anomalies." }
    ]
  },
  {
    slug: "enterprise-transformation",
    size: "small",
    accent: "paleIris",
    tileTitle: "Enterprise Transformation",
    tileHeadline: "Helping organizations evolve through technology, process innovation, and operational modernization.",
    tileDescription:
      "Enterprise transformations demand discipline. We guide SAP migrations and cross-system integrations with absolute precision.",
    icon: "Network",
    eyebrow: "Enterprise Transformation",
    heroHeadline: "Enterprise Transformation",
    heroSubhead: "Helping organizations evolve through technology, process innovation, and operational modernization.",
    heroVisualCaption: "Enterprise system transition timeline",
    capabilities: [
      "SAP Transformation",
      "SAP S/4HANA Modernization",
      "Digital Transformation Programs",
      "Business Process Reengineering",
      "Enterprise Integration",
      "Operational Excellence Initiatives",
      "Technology Consulting",
      "Organizational Change Enablement"
    ],
    whatsIncluded: [
      { title: "SAP Transformation", description: "End-to-end strategic advisory for SAP cloud module rollouts." },
      { title: "SAP S/4HANA Modernization", description: "Migrating core ERP schemas to high-performance S/4HANA systems." },
      { title: "Digital Transformation Programs", description: "Full-scale corporate digitization blueprints aligned with business goals." },
      { title: "Business Process Reengineering", description: "Auditing manual procedures and structuring them for software execution." },
      { title: "Enterprise Integration", description: "Bridging core ERP databases with external platforms and logistics tools." },
      { title: "Operational Excellence Initiatives", description: "Fostering company efficiency through standard operating frameworks." },
      { title: "Technology Consulting", description: "Objective evaluations of architecture designs and tool select choices." },
      { title: "Organizational Change Enablement", description: "Custom workshops, manuals, and support helping teams adopt new software." }
    ],
    deepDives: [
      { title: "Phased ERP Migrations", description: "A detailed breakdown of data validation, parallel testing, and rollback plans.", visualCaption: "ERP migration timeline" }
    ],
    whoItsFor: "Enterprises running legacy ERP modules or launching digital transformation campaigns.",
    faq: [
      { q: "How do you validate data integrity during migration?", a: "We run automated checksum verification scripts at database transition checkpoints." },
      { q: "What is your approach to change management for employees?", a: "We provide interactive workshops, detailed onboarding manuals, and step-by-step video guides to ensure smooth transition and fast software adoption rates among your staff." },
      { q: "What is the typical timeframe for a transformation project?", a: "Depending on scope, timelines run between 3 to 6 months, structured in sequential sprints so you receive incremental value early on." }
    ]
  },
  {
    slug: "data-intelligence",
    size: "small",
    accent: "iris",
    tileTitle: "Data, Analytics & Intelligence",
    tileHeadline: "Transforming enterprise data into actionable insights and strategic business value.",
    tileDescription:
      "We design custom business intelligence portals and database structures that turn raw events into dashboards.",
    icon: "Database",
    eyebrow: "Data, Analytics & Intelligence",
    heroHeadline: "Data, Analytics & Intelligence",
    heroSubhead: "Transforming enterprise data into actionable insights and strategic business value.",
    heroVisualCaption: "Enterprise BI reporting dashboard and pipeline",
    capabilities: [
      "Business Intelligence",
      "Executive Dashboards",
      "Data Engineering",
      "Data Warehousing",
      "Analytics Platforms",
      "Reporting Automation",
      "KPI Monitoring",
      "Predictive Analytics",
      "Decision Intelligence"
    ],
    whatsIncluded: [
      { title: "Business Intelligence", description: "Creating custom reports and analytic modules for operations." },
      { title: "Executive Dashboards", description: "High-level summary dashboards aggregating sales, finance, and support metrics." },
      { title: "Data Engineering", description: "Structuring extraction pipelines (ETL) connecting databases and reports." },
      { title: "Data Warehousing", description: "Consolidating siloed department data into a single query warehouse." },
      { title: "Analytics Platforms", description: "Self-service web platforms enabling department managers to filter query data." },
      { title: "Reporting Automation", description: "Configuring automated email reports sent to executives on custom schedules." },
      { title: "KPI Monitoring", description: "Setting automated alerts when key business performance indicators drop." },
      { title: "Predictive Analytics", description: "Utilizing machine learning models to forecast inventory demands and sales." },
      { title: "Decision Intelligence", description: "AI-assisted recommendation pipelines structured inside operations tools." }
    ],
    deepDives: [
      { title: "Scalable Data Pipeline Warehouses", description: "ETL pipelines aggregating raw data from multiple SaaS tools into a warehouse.", visualCaption: "Data warehouse map" }
    ],
    whoItsFor: "C-level executives seeking a single source of truth, and finance teams replacing manual spreadsheets.",
    faq: [
      { q: "Can you query data from multiple independent SaaS APIs?", a: "Yes — we build connectors to extract data from CRM, helpdesk, ads, and stripe APIs." },
      { q: "How do you ensure the cleanliness of extracted data?", a: "We build automated profiling, schema validation, deduplication rules, and error flagging into our ETL pipelines to keep data records pristine." },
      { q: "Do you support real-time data ingestion and streaming?", a: "Yes, we design real-time data streaming architectures (utilizing cloud event streams or webhooks) to feed analytics dashboards instantly." }
    ]
  }
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

import reviewer1 from "../assets/reviewer-1.jpg";
import reviewer2 from "../assets/reviewer-2.jpg";
import reviewer3 from "../assets/reviewer-3.png";
import avinashSingh from "../assets/avinash-singh.jpg";

import indManufacturing from "../assets/ind-manufacturing.png";
import indAutomotive from "../assets/ind-automotive.png";
import indRetail from "../assets/ind-retail.png";
import indHealthcare from "../assets/ind-healthcare.png";
import indLogistics from "../assets/ind-logistics.png";
import indFinance from "../assets/ind-finance.png";
import indProfessional from "../assets/ind-professional.png";
import indNonprofit from "../assets/ind-nonprofit.png";

export const TESTIMONIALS = [
  {
    name: "Prem Suman",
    role: "Managing Partner",
    company: "P Suman & Associates",
    quote: "Navigatte exceeded our expectations by delivering a website that reflects the professionalism and credibility of our firm. They took the time to understand our brand, provided valuable recommendations throughout the project, and created a fast, intuitive, and polished digital experience. Their attention to detail, technical expertise, and proactive communication made the entire engagement seamless. We look forward to working with them again on future digital initiatives.",
    image: reviewer2,
    accent: "iris"
  },
  {
    name: "Avinash Singh",
    role: "Director",
    company: "Crazy Hands NGO",
    quote: "Working with Navigatte was an excellent experience from start to finish. They understood our mission and built a website that truly supports our organization. The member registration and approval system has made managing our community effortless, while the integrated online donation feature has made it easier for supporters to contribute to our cause. The team was responsive, professional, and committed to delivering exactly what we needed. I would gladly recommend Navigatte to any organization looking for a reliable technology partner.",
    image: avinashSingh,
    accent: "periwinkle"
  },
  {
    name: "Nishant Kumar",
    role: "Chairman",
    company: "Bihar Foundation – Kolkata Chapter",
    quote: "The team delivered a clean, modern website that reflects our vision beautifully. Their professionalism, attention to detail, and timely delivery made the entire experience smooth and enjoyable.",
    image: reviewer1,
    accent: "orchid"
  }
];

export const TRUST_STRIP_TEXT = "Trusted by teams across India · US · UK · Australia";

export const INDUSTRIES = [
  {
    slug: "manufacturing",
    icon: "Factory",
    title: "Manufacturing",
    description: "Improve operational efficiency, process visibility, production planning, compliance, and enterprise integration.",
    image: indManufacturing
  },
  {
    slug: "automotive",
    icon: "Car",
    title: "Automotive",
    description: "Enable dealer network transformation, inventory visibility, audit management, customer engagement, and operational intelligence.",
    image: indAutomotive
  },
  {
    slug: "retail-fmcg",
    icon: "ShoppingBag",
    title: "Retail & FMCG",
    description: "Drive supply chain efficiency, inventory optimization, customer experience, and real-time analytics.",
    image: indRetail
  },
  {
    slug: "healthcare-pharma",
    icon: "Activity",
    title: "Healthcare & Pharmaceuticals",
    description: "Enhance compliance, process automation, operational visibility, and data-driven decision-making.",
    image: indHealthcare
  },
  {
    slug: "logistics-supply-chain",
    icon: "Truck",
    title: "Logistics & Supply Chain",
    description: "Improve visibility, operational efficiency, workflow automation, and intelligent planning.",
    image: indLogistics
  },
  {
    slug: "financial-services",
    icon: "Building",
    title: "Financial Services",
    description: "Accelerate digital transformation, process modernization, analytics, and customer engagement.",
    image: indFinance
  },
  {
    slug: "professional-services",
    icon: "Briefcase",
    title: "Professional Services",
    description: "Empower service organizations with intelligent workflows, CRM solutions, automation, and operational excellence.",
    image: indProfessional
  },
  {
    slug: "non-profit-associations",
    icon: "Users",
    title: "Non-Profit & Associations",
    description: "Build member-centric platforms, engagement systems, donor management solutions, and digital ecosystems.",
    image: indNonprofit
  }
];

export const ABOUT_CONTENT = {
  aboutNavigatte: {
    title: "ABOUT NAVIGATTE",
    paragraphs: [
      "In a rapidly evolving digital world, organizations need more than technology implementation—they need intelligent systems that drive efficiency, visibility, agility, and innovation.",
      "Navigatte was founded with a vision to build world-class enterprise technology platforms while helping organizations accelerate their digital transformation journey.",
      "From enterprise applications and AI-powered automation to cloud modernization and business transformation initiatives, we partner with organizations to create meaningful and measurable impact.",
      "Our approach combines strategic thinking, engineering excellence, and emerging technologies to solve complex business challenges and deliver long-term value."
    ]
  },
  vision: {
    title: "VISION",
    description: "To become a globally trusted technology company building intelligent platforms that transform how organizations operate, govern, collaborate, and grow."
  },
  mission: {
    title: "MISSION",
    description: "To empower enterprises through innovative technology, intelligent automation, and transformative solutions that create measurable business impact."
  },
  platforms: {
    title: "OUR PLATFORMS",
    subtitle: "The Future of Enterprise Intelligence",
    description: "Navigatte is building a portfolio of intelligent enterprise platforms designed to help organizations improve governance, operational efficiency, compliance, visibility, and decision-making.",
    items: [
      {
        name: "Navigatte SIMS",
        description: "Smart Inventory Management System for inventory governance, audit, verification, reconciliation, and operational intelligence."
      },
      {
        name: "Navigatte Governance",
        description: "Governance, compliance, policy management, risk monitoring, and operational oversight."
      },
      {
        name: "Navigatte Audit",
        description: "Digital audit management, workflow automation, evidence management, reporting, and compliance tracking."
      },
      {
        name: "Navigatte AI",
        description: "Enterprise AI platform enabling intelligent automation, decision support, knowledge management, and AI-driven operations."
      },
      {
        name: "Future Enterprise Platforms",
        description: "Innovative solutions focused on operational excellence, enterprise intelligence, and digital transformation."
      }
    ]
  },
  approach: {
    title: "OUR APPROACH",
    steps: [
      { title: "Discover", description: "Understanding business goals, challenges, and opportunities." },
      { title: "Design", description: "Creating scalable architectures, platforms, and transformation roadmaps." },
      { title: "Build", description: "Engineering modern software, platforms, and intelligent systems." },
      { title: "Transform", description: "Modernizing operations, processes, and enterprise ecosystems." },
      { title: "Scale", description: "Enabling sustainable growth through continuous innovation and optimization." }
    ]
  },
  whyNavigatte: {
    title: "WHY NAVIGATTE",
    subtitle: "Engineering Excellence. Enterprise Focus.",
    reasons: [
      {
        title: "Product-Led Vision",
        description: "We are building the next generation of enterprise platforms while helping organizations solve today's most critical business challenges."
      },
      {
        title: "Innovation Through Intelligence",
        description: "We leverage AI, automation, and data intelligence to create smarter business systems."
      },
      {
        title: "Enterprise-Grade Engineering",
        description: "Scalable, secure, and resilient solutions built to support long-term growth."
      },
      {
        title: "End-to-End Expertise",
        description: "From strategy and architecture to implementation and ongoing optimization."
      },
      {
        title: "Business-Driven Approach",
        description: "Technology decisions aligned with measurable business outcomes and strategic objectives."
      },
      {
        title: "Long-Term Partnership",
        description: "Focused on delivering sustainable value and becoming a trusted transformation partner."
      }
    ]
  }
};
