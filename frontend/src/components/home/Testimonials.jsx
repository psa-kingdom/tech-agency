import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1); // 1 = next, -1 = prev

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  // Helper to get stack styling colors
  const getStackColors = (index) => {
    const nextIdx = (index + 1) % TESTIMONIALS.length;
    const thirdIdx = (index + 2) % TESTIMONIALS.length;
    
    const colors = {
      iris: { bg: "bg-iris/10", border: "border-iris/25" },
      periwinkle: { bg: "bg-periwinkle/10", border: "border-periwinkle/25" },
      orchid: { bg: "bg-orchid/10", border: "border-orchid/25" },
    };

    return {
      middle: colors[TESTIMONIALS[nextIdx].accent] || colors.periwinkle,
      back: colors[TESTIMONIALS[thirdIdx].accent] || colors.orchid,
    };
  };

  const stack = getStackColors(activeIndex);

  // Animation variants for horizontal carousel sliding
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 26 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 26 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section className="bg-abyss border-t border-white/10 overflow-hidden">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono-label text-[11px] text-ash">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Stack Container */}
        <div className="relative max-w-4xl mx-auto mt-20 px-2 sm:px-4">
          
          {/* Back Stacked Card */}
          <motion.div
            layout
            className={`absolute left-8 right-8 -top-4 h-full rounded-feature -z-20 transform scale-[0.95] opacity-50 blur-[0.5px] border transition-all duration-500 ${stack.back.bg} ${stack.back.border}`}
          />
          
          {/* Middle Stacked Card */}
          <motion.div
            layout
            className={`absolute left-4 right-4 -top-2 h-full rounded-feature -z-10 transform scale-[0.98] opacity-80 border transition-all duration-500 ${stack.middle.bg} ${stack.middle.border}`}
          />

          {/* Front Active Testimonial Card */}
          <div className="relative overflow-hidden bg-black border border-white/10 rounded-feature min-h-[380px] shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-0 md:min-h-[380px]"
              >
                {/* Left Side: Testimonial review text */}
                <div className="p-8 sm:p-12 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <Quote className="w-4 h-4 text-iris" />
                    </div>
                    <blockquote className="text-base sm:text-lg md:text-xl font-display font-light text-cloud leading-relaxed text-balance">
                      "{current.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <cite className="not-italic block">
                      <span className="text-sm font-medium text-cloud block sm:inline">{current.name}</span>
                      <span className="hidden sm:inline text-fog mx-2">·</span>
                      <span className="text-xs text-ash font-light">{current.role}, {current.company}</span>
                    </cite>
                  </div>
                </div>

                {/* Right Side: Portrait Image of Reviewer */}
                <div className="relative h-64 md:h-full min-h-[280px] md:min-h-0 overflow-hidden bg-zinc-950 border-t md:border-t-0 md:border-l border-white/10 shrink-0">
                  {/* Portrait Image */}
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle vignette layer overlays to blend with the card edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-cloud hover:border-white/30 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2 items-center">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 relative ${
                  activeIndex === idx ? "bg-iris w-6" : "bg-white/25 w-2 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-cloud hover:border-white/30 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
