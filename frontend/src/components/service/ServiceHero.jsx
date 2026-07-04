import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VisualPlaceholder from "@/components/shared/VisualPlaceholder";
import { CTA_LINK } from "@/data/siteData";

const ServiceHero = ({ service }) => {
  return (
    <section className="relative bg-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-iris/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-content mx-auto px-6 pt-16 md:pt-20 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          data-testid="service-hero-eyebrow"
          className="inline-block font-mono-label text-[11px] text-ash bg-white/[0.06] border border-white/10 rounded-pill px-4 py-2"
        >
          {service.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          data-testid="service-hero-headline"
          className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-display font-light leading-[0.95] text-cloud text-balance max-w-4xl mx-auto"
        >
          {service.heroHeadline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          data-testid="service-hero-subheadline"
          className="mt-6 text-base md:text-lg font-light text-ash max-w-2xl mx-auto leading-relaxed"
        >
          {service.heroSubhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            asChild
            data-testid="service-hero-cta-button"
            className="bg-pure text-void hover:bg-cloud rounded-lg px-6 h-12 text-sm font-medium"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 md:mt-20"
        >
          <VisualPlaceholder
            testId="service-hero-visual-placeholder"
            variant="hero"
            accent={service.accent}
            caption={service.heroVisualCaption}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
