import React from "react";
import { CONTACT_EMAIL } from "@/data/siteData";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: "introduction",
      num: "01",
      title: "Introduction & Scope",
      content: (
        <>
          <p>
            Navigatte ("we", "us", or "our") operates as a technology consultancy and software development agency. We are committed to protecting the privacy of our clients, users, partners, and visitors.
          </p>
          <p className="mt-3">
            This Privacy Policy outlines how we collect, process, utilize, and protect your personal information when you visit our website, interact with our platforms, hire our consultancy services, or engage with our custom software applications. By accessing our services, you consent to the practices described in this document.
          </p>
        </>
      ),
    },
    {
      id: "data-collection",
      num: "02",
      title: "Information We Collect",
      content: (
        <>
          <p>
            We collect information that you provide directly to us, as well as metadata gathered automatically during your engagement with our platforms:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>
              <strong>Client Identification:</strong> Names, business email addresses, phone numbers, and physical corporate offices provided during consulting inquiries, project onboarding, and billing setup.
            </li>
            <li>
              <strong>Technical & Usage Data:</strong> IP addresses, browser types, device identifiers, referral URLs, access timings, and user engagement metrics collected automatically through cookies and server logs.
            </li>
            <li>
              <strong>Project Materials:</strong> Documentation, source code access, database structures, and operations data shared securely with us to facilitate custom platform engineering.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-usage",
      num: "03",
      title: "How We Use Your Information",
      content: (
        <>
          <p>
            Your information is processed to ensure operational excellence, deliver secure custom software, and maintain customer relations. Specifically, we use your data to:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>Design, engineer, deploy, and maintain custom digital platforms and API integrations.</li>
            <li>Process payments, issue invoices, and manage client contracts.</li>
            <li>Respond to support requests, troubleshooting inquiries, and consult requests.</li>
            <li>Monitor platform usage patterns, detect security threats, and optimize load speeds.</li>
            <li>Ensure compliance with legal obligations, industry standards, and contract terms.</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      num: "04",
      title: "Information Sharing & Disclosure",
      content: (
        <>
          <p>
            We do not sell, rent, or trade your personal data to third parties. We only share information with trusted third-party service providers (subprocessors) that are necessary to run our business:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>
              <strong>Infrastructure Providers:</strong> Cloud hosting, server clusters, database managers, and performance monitoring providers (e.g., Vercel, Railway, AWS).
            </li>
            <li>
              <strong>Payment Processors:</strong> Secure gateways to process payments and handle billing compliance.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law, subpoena, or to protect the safety, property, and contractual rights of Navigatte and our clients.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      num: "05",
      title: "Data Security & Retention",
      content: (
        <>
          <p>
            We implement state-of-the-art administrative, technical, and physical security controls to safeguard your data against unauthorized access, disclosure, alteration, or destruction. All web traffic is encrypted via HTTPS/TLS, and credentials/secrets are stored in isolated environment structures.
          </p>
          <p className="mt-3">
            We retain personal data only as long as necessary to fulfill the purposes for which it was collected, including satisfying project contract obligations, billing cycles, or legal requirements.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      num: "06",
      title: "Your Rights & Options",
      content: (
        <>
          <p>
            Depending on your jurisdiction (including GDPR, CCPA, or local statutes), you hold rights regarding your personal information:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li><strong>Right of Access:</strong> Request a copy of the personal information we store about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
            <li><strong>Right to Erasure (To Be Forgotten):</strong> Request deletion of your personal records, subject to contract retention clauses.</li>
            <li><strong>Cookie Preferences:</strong> Disable cookies directly in your browser settings, though some portal features may become unavailable.</li>
          </ul>
        </>
      ),
    },
    {
      id: "contact",
      num: "07",
      title: "Changes & Contact Info",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to reflect operational or regulatory changes. Any modifications will be posted here with an updated "Last Updated" date.
          </p>
          <p className="mt-4 text-cloud">
            If you have questions, concerns, or requests regarding this Privacy Policy, please contact our legal coordinator:
          </p>
          <div className="mt-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] inline-block font-mono text-xs">
            <p>Navigatte Legal Team</p>
            <p className="mt-1 text-iris">Email: {CONTACT_EMAIL}</p>
            <p className="mt-1 text-fog">Subject: Privacy Inquiry</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div data-testid="privacy-page">
      {/* Header section */}
      <section className="bg-obsidian border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-iris/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-14 text-center relative z-10">
          <span className="font-mono-label text-[11px] text-ash">Legal Compliance</span>
          <h1
            data-testid="privacy-page-headline"
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-light text-cloud leading-[0.95] text-balance"
          >
            Privacy Policy
          </h1>
          <p className="mt-5 text-base md:text-lg font-light text-ash max-w-2xl mx-auto leading-relaxed">
            Last updated: July 10, 2026. How we collect, use, protect, and handle your data at Navigatte.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-obsidian">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-3">
                <p className="font-mono-label text-[10px] text-fog mb-2">Sections</p>
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-xs text-ash hover:text-cloud transition-colors duration-250 py-1 font-mono-label flex items-center gap-2 group"
                  >
                    <span className="text-[9px] text-iris group-hover:translate-x-0.5 transition-transform duration-200">{sec.num}</span>
                    <span>{sec.title}</span>
                  </a>
                ))}
              </div>
            </aside>

            {/* Document Body */}
            <article className="max-w-3xl text-sm sm:text-base font-light text-ash leading-relaxed space-y-12">
              {sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-28 border-b border-white/5 pb-10 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-iris bg-iris/10 border border-iris/20 px-2 py-0.5 rounded">
                      {sec.num}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-display font-light text-cloud">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {sec.content}
                  </div>
                </div>
              ))}
            </article>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
