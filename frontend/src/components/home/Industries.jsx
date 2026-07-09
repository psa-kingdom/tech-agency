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

const INDUSTRY_THEMES = {
  "manufacturing": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(0, 179, 221, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(0, 179, 221, 0.4)",
    iconBg: "rgba(0, 179, 221, 0.12)",
    iconColor: "#00b3dd"
  },
  "automotive": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(221, 144, 216, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(221, 144, 216, 0.4)",
    iconBg: "rgba(221, 144, 216, 0.12)",
    iconColor: "#dd90d8"
  },
  "retail-fmcg": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(144, 184, 240, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(144, 184, 240, 0.4)",
    iconBg: "rgba(144, 184, 240, 0.12)",
    iconColor: "#90b8f0"
  },
  "healthcare-pharma": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(132, 125, 255, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(132, 125, 255, 0.4)",
    iconBg: "rgba(132, 125, 255, 0.12)",
    iconColor: "#847dff"
  },
  "logistics-supply-chain": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(132, 125, 255, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(132, 125, 255, 0.35)",
    iconBg: "rgba(132, 125, 255, 0.12)",
    iconColor: "#847dff"
  },
  "financial-services": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(245, 158, 11, 0.4)",
    iconBg: "rgba(245, 158, 11, 0.12)",
    iconColor: "#f59e0b"
  },
  "professional-services": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(236, 72, 153, 0.4)",
    iconBg: "rgba(236, 72, 153, 0.12)",
    iconColor: "#ec4899"
  },
  "non-profit-associations": {
    gradient: "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)",
    hoverBorder: "rgba(16, 185, 129, 0.4)",
    iconBg: "rgba(16, 185, 129, 0.12)",
    iconColor: "#10b981"
  }
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
            const theme = INDUSTRY_THEMES[ind.slug] || INDUSTRY_THEMES["professional-services"];
            return (
              <motion.div
                key={ind.slug}
                variants={itemVariants}
                data-testid={`industry-card-${ind.slug}`}
                className="group flex flex-col border border-white/10 rounded-feature p-6 transition-all duration-300 hover:border-[var(--hover-border)] hover:-translate-y-1.5 relative overflow-hidden z-0 bg-graphite/5"
                style={{
                  "--hover-border": theme.hoverBorder
                }}
              >
                {/* Background Layers */}
                <div className="absolute inset-0 bg-graphite/40 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-feature -z-20" />
                
                {/* Grainy Gradient Hover Layer */}
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-100 transition-opacity duration-500 rounded-feature -z-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E"), ${theme.gradient}`
                  }}
                />

                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 shrink-0 transition-transform duration-350 group-hover:scale-110 relative z-10"
                  style={{ backgroundColor: theme.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: theme.iconColor }} />
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
