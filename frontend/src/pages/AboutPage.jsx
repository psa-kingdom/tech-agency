import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Cpu,
  Shield,
  Award,
  BarChart3,
  Handshake,
  Sparkles,
  Database,
  ShieldAlert,
  FileCheck2,
  Brain,
  Lightbulb,
} from "lucide-react";
import { ABOUT_CONTENT } from "@/data/siteData";
import grainyBg from "../assets/grainy-gradient.jpg";
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

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  return (
    <div data-testid="about-page" className="bg-obsidian text-cloud min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-iris/[0.08] via-transparent to-transparent pointer-events-none" />
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-content mx-auto px-6 text-center relative z-10"
        >
          <motion.span
            variants={heroItemVariants}
            className="inline-block font-mono-label text-[11px] text-ash bg-white/[0.06] border border-white/10 rounded-pill px-4 py-2"
          >
            About Us
          </motion.span>
          <motion.h1
            variants={heroItemVariants}
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-[1.05] text-cloud text-balance max-w-4xl mx-auto"
          >
            {aboutNavigatte.title}
          </motion.h1>
          <div className="mt-12 max-w-3xl mx-auto space-y-6 text-base md:text-lg font-light text-ash leading-relaxed text-left">
            {aboutNavigatte.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                variants={heroItemVariants}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-abyss border-t border-white/10 py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-graphite/40 border border-white/10 rounded-feature p-8 md:p-10 flex flex-col justify-between hover:border-iris/25 transition-colors duration-300 bg-graphite/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-iris/15 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-iris animate-pulse" />
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-graphite/40 border border-white/10 rounded-feature p-8 md:p-10 flex flex-col justify-between hover:border-periwinkle/25 transition-colors duration-300 bg-graphite/5"
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

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
            className="flex flex-wrap justify-center gap-6"
          >
            {platforms.items.map((plat, i) => {
              const Icon = PLATFORM_ICONS[plat.name] || Sparkles;
              const isFuture = plat.name.toLowerCase().includes("future");
              return (
                <motion.div
                  key={plat.name}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } }
                  }}
                  className={`group relative overflow-hidden rounded-feature p-8 border transition-all duration-300 hover:-translate-y-1.5 z-0 border-white/10 bg-graphite/5 flex flex-col items-center text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                    isFuture ? "hover:border-iris/40" : "hover:border-white/20"
                  }`}
                >
                  {/* Background Layers */}
                  <div className={`absolute inset-0 group-hover:opacity-10 transition-opacity duration-500 rounded-feature -z-20 ${
                    isFuture ? "bg-gradient-to-br from-graphite/40 to-iris/5" : "bg-graphite/40"
                  }`} />
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.25] transition-opacity duration-500 rounded-feature -z-10"
                    style={{ backgroundImage: `url(${grainyBg})` }}
                  />

                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                    isFuture ? "bg-iris/15" : "bg-white/5"
                  }`}>
                    <Icon className={`w-5 h-5 relative z-10 ${isFuture ? "text-iris" : "text-cloud/90"}`} />
                  </div>
                  <h3 className="text-lg font-medium text-cloud relative z-10 group-hover:text-white transition-colors duration-200">{plat.name}</h3>
                  <p className="mt-3 text-sm text-ash leading-relaxed relative z-10">
                    {plat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
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

          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {approach.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative bg-graphite/40 border border-white/10 rounded-feature p-8 hover:bg-graphite/60 hover:border-iris/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_24px_rgba(132,125,255,0.06)] flex flex-col items-center text-center h-full overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Glow indicator source */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-iris/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number Badge */}
                <div className="text-4xl sm:text-5xl font-display font-extralight text-iris/20 group-hover:text-iris/50 transition-colors duration-300 mb-6 select-none">
                  0{i + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-cloud group-hover:text-white transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-ash leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative bottom border slide */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-iris scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
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

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyNavigatte.reasons.map((reason, i) => {
              const Icon = REASON_ICONS[reason.title] || Award;
              return (
                <motion.div
                  key={reason.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } }
                  }}
                  className="flex gap-4 group p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-350"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-iris" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-cloud group-hover:text-white transition-colors duration-200">{reason.title}</h3>
                    <p className="mt-2 text-sm text-ash leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default AboutPage;
