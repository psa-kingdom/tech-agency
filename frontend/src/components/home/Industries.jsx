import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Car,
  ShoppingBag,
  Activity,
  Truck,
  Building,
  Briefcase,
  Users,
} from "lucide-react";
import { INDUSTRIES } from "@/data/siteData";

const ICONS = {
  Factory,
  Car,
  ShoppingBag,
  Activity,
  Truck,
  Building,
  Briefcase,
  Users,
};

const Industries = () => {
  return (
    <section id="industries" className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono-label text-[11px] text-ash">Industries</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
            Industry Solutions
          </h2>
          <p className="mt-5 text-base md:text-lg font-light text-ash leading-relaxed">
            Tailored digital platforms and intelligent automation configured for your sector's operational requirements.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.icon] || Briefcase;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                data-testid={`industry-card-${ind.slug}`}
                className="group flex flex-col bg-graphite/40 border border-white/10 rounded-feature p-6 transition-all duration-300 hover:border-iris/40 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-iris/15 flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-iris" />
                </div>
                <h3 className="text-base font-medium text-cloud">{ind.title}</h3>
                <p className="mt-2 text-sm text-ash leading-relaxed flex-1">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
