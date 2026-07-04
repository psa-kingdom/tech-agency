import React from "react";
import { motion } from "framer-motion";
import { Search, ClipboardList, Code2, Rocket } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteData";

const ICONS = { Search, ClipboardList, Code2, Rocket };

const Process = () => {
  return (
    <section id="process" className="bg-obsidian border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          How we work
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-white/10" />
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                data-testid={`process-step-${i}`}
                className="relative"
              >
                <div className="w-10 h-10 rounded-full bg-obsidian border border-white/20 flex items-center justify-center relative z-10">
                  <Icon className="w-4.5 h-4.5 text-iris" />
                </div>
                <p className="mt-5 font-mono-label text-[11px] text-fog">
                  {step.step}
                </p>
                <h3 className="mt-2 text-lg font-display font-light text-cloud">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ash leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
