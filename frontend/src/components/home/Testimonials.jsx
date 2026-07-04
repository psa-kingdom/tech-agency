import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

const Testimonials = () => {
  return (
    <section className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          What clients say
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              data-testid={`testimonial-card-${i}`}
              className="bg-graphite/50 border border-white/10 rounded-feature p-8"
            >
              <Quote className="w-6 h-6 text-iris/60" />
              <p className="mt-5 text-sm text-ash leading-relaxed italic">
                {t.quote}
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-cloud">{t.name}</p>
                <p className="text-xs text-fog mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
