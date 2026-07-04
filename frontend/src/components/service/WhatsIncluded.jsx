import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WhatsIncluded = ({ items }) => {
  return (
    <section className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-24">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          What's Included
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              data-testid={`whats-included-item-${i}`}
              className="bg-graphite/50 border border-white/10 rounded-feature p-6"
            >
              <div className="w-8 h-8 rounded-lg bg-iris/15 flex items-center justify-center mb-4">
                <Check className="w-4 h-4 text-iris" />
              </div>
              <h3 className="text-base font-medium text-cloud">{item.title}</h3>
              <p className="mt-2 text-sm text-ash leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
