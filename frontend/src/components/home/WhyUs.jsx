import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Globe2, Handshake } from "lucide-react";
import { DIFFERENTIATORS } from "@/data/siteData";

const ICONS = { Layers, ShieldCheck, Globe2, Handshake };

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          Why teams choose us
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                data-testid={`why-us-item-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-iris" />
                </div>
                <h3 className="text-base font-medium text-cloud">{item.title}</h3>
                <p className="mt-2 text-sm text-ash leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
