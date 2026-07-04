import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  LayoutDashboard,
  Boxes,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";

const ICONS = { Globe, Bot, LayoutDashboard, Boxes, Megaphone };

const ACCENT_STYLES = {
  iris: { iconBg: "bg-iris/15", iconText: "text-iris", border: "hover:border-iris/40" },
  periwinkle: { iconBg: "bg-periwinkle/15", iconText: "text-periwinkle", border: "hover:border-periwinkle/40" },
  orchid: { iconBg: "bg-orchid/15", iconText: "text-orchid", border: "hover:border-orchid/40" },
  deepIris: { iconBg: "bg-iris-deep/20", iconText: "text-iris-deep", border: "hover:border-iris-deep/40" },
  paleIris: { iconBg: "bg-iris-pale/15", iconText: "text-iris-pale", border: "hover:border-iris-pale/40" },
};

const LargeTile = ({ service, index }) => {
  const Icon = ICONS[service.icon];
  const accent = ACCENT_STYLES[service.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        to={`/services/${service.slug}`}
        data-testid={`bento-tile-${service.slug}`}
        className={`group h-full flex flex-col bg-graphite/60 border border-white/10 rounded-feature p-8 transition-all duration-300 ${accent.border} hover:-translate-y-1`}
      >
        <div className={`w-12 h-12 rounded-xl ${accent.iconBg} flex items-center justify-center mb-6`}>
          <Icon className={`w-6 h-6 ${accent.iconText}`} />
        </div>
        <h3 className="font-display font-light text-2xl text-cloud">{service.tileTitle}</h3>
        <p className="mt-2 text-base font-light text-cloud/90">{service.tileHeadline}</p>
        <p className="mt-3 text-sm text-ash leading-relaxed flex-1">{service.tileDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-label text-[10px] text-ash bg-white/5 border border-white/10 rounded-pill px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-cloud group-hover:gap-2.5 transition-all duration-200">
          {service.tileLink}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </motion.div>
  );
};

const SmallTile = ({ service, index }) => {
  const Icon = ICONS[service.icon];
  const accent = ACCENT_STYLES[service.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        to={`/services/${service.slug}`}
        data-testid={`bento-tile-${service.slug}`}
        className={`group flex items-start gap-4 h-full bg-graphite/40 border border-white/10 rounded-feature p-6 transition-all duration-300 ${accent.border} hover:-translate-y-1`}
      >
        <div className={`w-10 h-10 rounded-lg ${accent.iconBg} flex items-center justify-center shrink-0`}>
          <Icon className={`w-5 h-5 ${accent.iconText}`} />
        </div>
        <div>
          <h3 className="font-display font-light text-lg text-cloud">{service.tileTitle}</h3>
          <p className="mt-1.5 text-sm text-ash leading-relaxed">{service.tileOneLiner}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-cloud group-hover:gap-2.5 transition-all duration-200">
            {service.tileLink}
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const BentoGrid = () => {
  const large = SERVICES.filter((s) => s.size === "large");
  const small = SERVICES.filter((s) => s.size === "small");

  return (
    <section id="services" className="bg-obsidian">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono-label text-[11px] text-ash">What We Do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
            One team. Every layer of your tech stack.
          </h2>
          <p className="mt-5 text-base md:text-lg font-light text-ash leading-relaxed">
            From the first pixel of your website to the AI agents running
            behind the scenes — we design, build, and integrate it all.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {large.map((s, i) => (
            <LargeTile key={s.slug} service={s} index={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {small.map((s, i) => (
            <SmallTile key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
