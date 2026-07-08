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
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
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
    <section id="industries" className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono-label text-[11px] text-ash">Industries</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
            Industry Solutions
          </h2>
          <p className="mt-5 text-base md:text-lg font-light text-ash leading-relaxed">
            Tailored digital platforms and intelligent automation configured for your sector's operational requirements.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-65px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.icon] || Briefcase;
            return (
              <motion.div
                key={ind.slug}
                variants={itemVariants}
                data-testid={`industry-card-${ind.slug}`}
                className="group flex flex-col border border-white/10 rounded-feature p-6 transition-all duration-300 hover:border-iris/40 hover:-translate-y-1.5 relative overflow-hidden z-0 bg-graphite/5"
              >
                {/* Background Layers */}
                <div className="absolute inset-0 bg-graphite/40 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-feature -z-20" />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.22] transition-opacity duration-500 rounded-feature -z-10"
                  style={{ backgroundImage: `url(${ind.image})` }}
                />

                <div className="w-10 h-10 rounded-lg bg-iris/15 flex items-center justify-center mb-5 shrink-0 transition-transform duration-350 group-hover:scale-110 relative z-10">
                  <Icon className="w-5 h-5 text-iris" />
                </div>
                <h3 className="text-base font-medium text-cloud relative z-10 group-hover:text-white transition-colors duration-200">{ind.title}</h3>
                <p className="mt-2 text-sm text-ash leading-relaxed flex-1 relative z-10 group-hover:text-cloud/90 transition-colors duration-200">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
