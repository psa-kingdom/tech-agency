import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Globe2, Handshake } from "lucide-react";
import { DIFFERENTIATORS } from "@/data/siteData";

const ICONS = { Layers, ShieldCheck, Globe2, Handshake };

const WhyUs = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="why-us" className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          Why teams choose us
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                data-testid={`why-us-item-${i}`}
                className="group border border-white/5 rounded-feature p-6 bg-graphite/10 transition-all duration-300 hover:border-iris/25 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-iris" />
                </div>
                <h3 className="text-base font-medium text-cloud group-hover:text-white transition-colors duration-200">{item.title}</h3>
                <p className="mt-2 text-sm text-ash leading-relaxed font-light">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
