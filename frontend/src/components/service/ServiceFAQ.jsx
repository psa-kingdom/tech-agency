import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceFAQ = ({ faq }) => {
  return (
    <section className="bg-obsidian border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-24 max-w-2xl">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
          Frequently asked
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/10"
              >
                <AccordionTrigger
                  data-testid={`faq-question-${i}`}
                  className="text-left text-base text-cloud hover:no-underline py-5"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-answer-${i}`}
                  className="text-sm text-ash leading-relaxed"
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
