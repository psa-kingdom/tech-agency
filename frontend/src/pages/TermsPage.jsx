import React from "react";

const TermsPage = () => {
  const sections = [
    {
      id: "agreement",
      num: "01",
      title: "Agreement & Scope",
      content: (
        <>
          <p>
            These Terms of Service ("Terms") govern your engagement with Navigatte ("we", "us", or "our") for custom software development, digital experience design, database engineering, workflow automation, and general technology consulting services.
          </p>
          <p className="mt-3">
            By signing a Statement of Work (SOW), issuing a purchase order, paying a project deposit, or accessing code deliverables produced by us, you agree to comply with and be bound by these Terms.
          </p>
        </>
      ),
    },
    {
      id: "services",
      num: "02",
      title: "Professional Services & Project Deliverables",
      content: (
        <>
          <p>
            We will provide software engineering, design, and consulting services as outlined in individual Statements of Work (SOW) mutually signed by Navigatte and the client.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>
              <strong>Scope Control:</strong> Any changes or additions to the deliverables specified in an active SOW represent a Change Request and may trigger fee revisions.
            </li>
            <li>
              <strong>Project Schedule:</strong> Timelines and delivery milestones are estimates. While we aim to meet dates, we are not liable for scheduling shifts caused by client feedback delays or technical dependencies.
            </li>
            <li>
              <strong>Client Assets:</strong> The client must provide text content, brand assets, APIs, and credentials required for platform execution. Delays in providing assets will extend project timelines.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "intellectual-property",
      num: "03",
      title: "Intellectual Property Rights",
      content: (
        <>
          <p>
            Unless explicitly agreed otherwise in a signed Statement of Work, intellectual property rights are allocated as follows:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>
              <strong>Client Materials:</strong> The client retains all right, title, and interest in assets, logos, copy, and database contents provided to us.
            </li>
            <li>
              <strong>Project Deliverables:</strong> Upon receipt of full and final payment, the custom code, designs, and database structures developed specifically for the client will be transferred to the client.
            </li>
            <li>
              <strong>Navigatte Frameworks:</strong> We retain ownership of all generic modules, design layouts, CLI configurations, and proprietary source libraries developed prior to or independently of the SOW. We grant the client a perpetual, non-exclusive license to use these libraries inside their project.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "payment-terms",
      num: "04",
      title: "Payments, Invoicing, & Late Fees",
      content: (
        <>
          <p>
            Client agrees to pay the fees set forth in the SOW under the specified schedule:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>
              <strong>Deposits:</strong> Projects typically require an upfront deposit (e.g., 50%) before engineering resources are scheduled or work begins.
            </li>
            <li>
              <strong>Invoices:</strong> Invoices are net-15 days from date of issue unless specified otherwise.
            </li>
            <li>
              <strong>Suspension:</strong> If invoices remain unpaid 30 days past due, we reserve the right to suspend development, revoke staging access, and pause active operations without penalty.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "warranties",
      num: "05",
      title: "Testing, Sign-Off, & Warranties",
      content: (
        <>
          <p>
            We test code deliverables before delivery, but the client must perform User Acceptance Testing (UAT) on the staging server:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>
              <strong>Sign-Off:</strong> Once the client confirms the staging platform works as intended or deploys the platform to production, this acts as formal client sign-off.
            </li>
            <li>
              <strong>Warranty Window:</strong> We offer a 30-day warranty starting on formal sign-off to address any functional bugs. Any requests after 30 days are handled under separate support agreements.
            </li>
            <li>
              <strong>Disclaimer:</strong> Custom software is provided "as-is". We do not warrant that execution will be entirely uninterrupted, secure, or free from server environment latency.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "liability",
      num: "06",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by law, Navigatte's total liability under these Terms or any active Statement of Work for any claims, damages, or breaches shall be strictly limited to the actual amount paid by the client to us under the specific SOW in the three (3) months preceding the event.
          </p>
          <p className="mt-3">
            In no event shall we be liable for indirect, incidental, special, consequential, or punitive damages (including loss of profits, revenue, or business data) arising from custom code deployment.
          </p>
        </>
      ),
    },
    {
      id: "termination",
      num: "07",
      title: "Agreement Termination",
      content: (
        <>
          <p>
            Either party may terminate a project agreement or these Terms:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-ash">
            <li>For convenience, by providing thirty (30) days written notice.</li>
            <li>Immediately, if the other party breaches a material obligation and fails to cure the breach within fifteen (15) days of notice.</li>
            <li>Upon termination, the client will be invoiced for all work performed up to the termination date. Handovers of code assets occur only after invoice settlements.</li>
          </ul>
        </>
      ),
    },
    {
      id: "governing-law",
      num: "08",
      title: "Governing Law & Disputes",
      content: (
        <>
          <p>
            These Terms and all Statements of Work shall be governed by, construed, and enforced in accordance with the laws of India.
          </p>
          <p className="mt-3">
            Any dispute arising out of or relating to these Terms shall first be resolved through good faith negotiations. If unresolved, the dispute shall be referred to and finally resolved by arbitration in accordance with local arbitration statutes, with the seat of arbitration being Kolkata, India.
          </p>
        </>
      ),
    },
  ];

  return (
    <div data-testid="terms-page">
      {/* Header section */}
      <section className="bg-obsidian border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-iris/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-14 text-center relative z-10">
          <span className="font-mono-label text-[11px] text-ash">Client Terms</span>
          <h1
            data-testid="terms-page-headline"
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-light text-cloud leading-[0.95] text-balance"
          >
            Terms of Service
          </h1>
          <p className="mt-5 text-base md:text-lg font-light text-ash max-w-2xl mx-auto leading-relaxed">
            Last updated: July 10, 2026. Standard terms governing consulting and custom development agreements.
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

export default TermsPage;
