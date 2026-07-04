import React from "react";
import { motion } from "framer-motion";
import VisualPlaceholder from "@/components/shared/VisualPlaceholder";

const DeepDive = ({ deepDives, accent }) => {
  return (
    <section className="bg-obsidian border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-24 flex flex-col gap-20 md:gap-28">
        {deepDives.map((item, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={item.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                reversed ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: reversed ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                data-testid={`deep-dive-visual-${i}`}
              >
                <VisualPlaceholder
                  variant="deepdive"
                  accent={accent}
                  caption={item.visualCaption}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: reversed ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                data-testid={`deep-dive-text-${i}`}
              >
                <h3 className="text-2xl md:text-3xl font-display font-light text-cloud leading-[1.05]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base text-ash leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeepDive;
