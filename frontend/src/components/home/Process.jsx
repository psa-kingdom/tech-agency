import React from "react";
import { motion } from "framer-motion";
import { Search, ClipboardList, Code2, Rocket } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteData";

const ICONS = { Search, ClipboardList, Code2, Rocket };

const Process = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 16 
      } 
    },
  };

  return (
    <section id="process" className="bg-obsidian border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          How we work
        </h2>

        <div className="mt-16 relative">
          {/* Animated Connective Line for Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
            className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-iris/40 via-iris to-white/10 origin-left z-0"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  data-testid={`process-step-${i}`}
                  className="relative group text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-obsidian border border-white/20 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-iris group-hover:shadow-[0_0_15px_rgba(132,125,255,0.25)]">
                    <Icon className="w-4.5 h-4.5 text-iris transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <p className="mt-5 font-mono-label text-[11px] text-fog group-hover:text-iris transition-colors duration-200">
                    {step.step}
                  </p>
                  <h3 className="mt-2 text-lg font-display font-light text-cloud group-hover:text-white transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ash leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
