import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Cpu,
  Shield,
  Award,
  BarChart3,
  Handshake,
  ArrowRight,
  Sparkles,
  Database,
  ShieldAlert,
  FileCheck2,
  Brain,
  Lightbulb,
} from "lucide-react";
import { ABOUT_CONTENT } from "@/data/siteData";
import GetInTouch from "@/components/layout/GetInTouch";

const REASON_ICONS = {
  "Product-Led Vision": Target,
  "Innovation Through Intelligence": Cpu,
  "Enterprise-Grade Engineering": Shield,
  "End-to-End Expertise": Award,
  "Business-Driven Approach": BarChart3,
  "Long-Term Partnership": Handshake,
};

const PLATFORM_ICONS = {
  "Navigatte SIMS": Database,
  "Navigatte Governance": ShieldAlert,
  "Navigatte Audit": FileCheck2,
  "Navigatte AI": Brain,
  "Future Enterprise Platforms": Sparkles,
};

const AboutPage = () => {
  const {
    aboutNavigatte,
    vision,
    mission,
    platforms,
    approach,
    whyNavigatte,
  } = ABOUT_CONTENT;

  return (
    <div data-testid="about-page" className="bg-obsidian text-cloud min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-iris/[0.08] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-content mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block font-mono-label text-[11px] text-ash bg-white/[0.06] border border-white/10 rounded-pill px-4 py-2"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-[1.05] text-balance max-w-4xl mx-auto"
          >
            {aboutNavigatte.title}
          </motion.h1>
          <div className="mt-12 max-w-3xl mx-auto space-y-6 text-base md:text-lg font-light text-ash leading-relaxed text-left">
            {aboutNavigatte.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.05, ease: "easeOut" }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-abyss border-t border-white/10 py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-graphite/40 border border-white/10 rounded-feature p-8 md:p-10 flex flex-col justify-between hover:border-iris/25 transition-colors duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-iris/15 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-iris" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-light text-cloud leading-tight">
                {vision.title}
              </h2>
              <p className="mt-4 text-base text-ash font-light leading-relaxed">
                {vision.description}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-graphite/40 border border-white/10 rounded-feature p-8 md:p-10 flex flex-col justify-between hover:border-periwinkle/25 transition-colors duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-periwinkle/15 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-periwinkle" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-light text-cloud leading-tight">
                {mission.title}
              </h2>
              <p className="mt-4 text-base text-ash font-light leading-relaxed">
                {mission.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Platforms */}
      <section className="bg-obsidian border-t border-white/10 py-20 md:py-28">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-[11px] text-ash">{platforms.title}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
              {platforms.subtitle}
            </h2>
            <p className="mt-5 text-base md:text-lg font-light text-ash leading-relaxed">
              {platforms.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.items.map((plat, i) => {
              const Icon = PLATFORM_ICONS[plat.name] || Sparkles;
              const isFuture = plat.name.toLowerCase().includes("future");
              return (
                <motion.div
                  key={plat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-feature p-8 border transition-all duration-300 hover:-translate-y-1 ${
                    isFuture
                      ? "bg-gradient-to-br from-graphite/40 to-iris/5 border-white/10 hover:border-iris/40"
                      : "bg-graphite/40 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    isFuture ? "bg-iris/15" : "bg-white/5"
                  }`}>
                    <Icon className={`w-5 h-5 ${isFuture ? "text-iris" : "text-cloud/90"}`} />
                  </div>
                  <h3 className="text-lg font-medium text-cloud">{plat.name}</h3>
                  <p className="mt-3 text-sm text-ash leading-relaxed">
                    {plat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach (Stepper) */}
      <section className="bg-abyss border-t border-white/10 py-20 md:py-28">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-[11px] text-ash">Methodology</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
              {approach.title}
            </h2>
          </div>

          <div className="relative">
            {/* Center Line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-20 relative">
              {approach.steps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 relative ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Visual node on timeline */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-abyss border-2 border-iris items-center justify-center z-10">
                      <span className="text-xs font-mono font-medium text-iris">0{i + 1}</span>
                    </div>

                    {/* Content Block */}
                    <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}>
                      <span className="inline-block lg:hidden font-mono text-xs text-iris mb-2">STEP 0{i + 1}</span>
                      <h3 className="text-xl md:text-2xl font-display font-light text-cloud">{step.title}</h3>
                      <p className="mt-3 text-sm md:text-base text-ash font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                        {step.description}
                      </p>
                    </div>

                    {/* Empty block to balance layout on desktop */}
                    <div className="hidden lg:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Navigatte */}
      <section className="bg-obsidian border-t border-white/10 py-20 md:py-28">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-[11px] text-ash">{whyNavigatte.title}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
              {whyNavigatte.subtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyNavigatte.reasons.map((reason, i) => {
              const Icon = REASON_ICONS[reason.title] || Award;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-iris" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-cloud">{reason.title}</h3>
                    <p className="mt-2 text-sm text-ash leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default AboutPage;
