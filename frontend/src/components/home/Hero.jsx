import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VisualPlaceholder from "@/components/shared/VisualPlaceholder";
import { CTA_LINK, AGENCY_NAME, TRUST_STRIP_TEXT } from "@/data/siteData";

const Hero = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-iris/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-content mx-auto px-6 pt-20 md:pt-28 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          data-testid="hero-eyebrow"
          className="inline-block font-mono-label text-[11px] text-ash bg-white/[0.06] border border-white/10 rounded-pill px-4 py-2"
        >
          Software · AI · Automation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          data-testid="hero-headline"
          className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-[0.95] text-cloud text-balance max-w-4xl mx-auto"
        >
          We build the software, AI, and automation your business runs on.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          data-testid="hero-subheadline"
          className="mt-6 text-base md:text-lg font-light text-ash max-w-2xl mx-auto leading-relaxed"
        >
          {AGENCY_NAME} is a tech consulting studio partnering with founders
          and enterprises to design, build, and ship websites, custom
          software, and AI systems that actually move the business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            data-testid="hero-primary-cta"
            className="bg-pure text-void hover:bg-cloud rounded-lg px-6 h-12 text-sm font-medium w-full sm:w-auto"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <button
            onClick={scrollToServices}
            data-testid="hero-secondary-cta"
            className="rounded-lg px-6 h-12 text-sm font-medium border border-white/20 text-cloud hover:bg-white/5 transition-colors duration-200 w-full sm:w-auto"
          >
            See Our Services
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 md:mt-20"
        >
          <VisualPlaceholder
            testId="hero-visual-placeholder"
            variant="hero"
            accent="iris"
            caption="composite mockup collage — browser window + dashboard + AI chat/agent interface"
          />
        </motion.div>

        <p
          data-testid="hero-trust-strip"
          className="mt-10 font-mono-label text-[11px] text-fog"
        >
          {TRUST_STRIP_TEXT}
        </p>
      </div>
    </section>
  );
};

export default Hero;
