import React from "react";
import { motion } from "framer-motion";

const WhoItsFor = ({ description }) => {
  return (
    <section className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono-label text-[11px] text-ash">Who It's For</span>
          <p
            data-testid="who-its-for-description"
            className="mt-5 text-2xl md:text-3xl font-display font-light text-cloud leading-[1.15] max-w-2xl mx-auto text-balance"
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
