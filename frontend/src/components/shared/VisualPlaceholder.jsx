import React from "react";
import { cn } from "@/lib/utils";

// Placeholder block used everywhere a real screenshot/mockup will eventually go.
// Intentionally styled as an obvious placeholder (dashed border) rather than
// faked artwork, so it's clear where real visuals should be dropped in later.
const ACCENT_MAP = {
  iris: "border-iris/40 text-iris",
  periwinkle: "border-periwinkle/40 text-periwinkle",
  orchid: "border-orchid/40 text-orchid",
  deepIris: "border-iris-deep/40 text-iris-deep",
  paleIris: "border-iris-pale/40 text-iris-pale",
  signal: "border-signal/40 text-signal",
};

const VisualPlaceholder = ({
  caption,
  accent = "iris",
  variant = "hero",
  className,
  testId,
}) => {
  const accentClasses = ACCENT_MAP[accent] || ACCENT_MAP.iris;
  const heightClass =
    variant === "hero"
      ? "aspect-[16/9] md:aspect-[16/8]"
      : "aspect-[4/3] md:aspect-[16/11]";

  return (
    <div
      data-testid={testId}
      className={cn(
        "relative w-full rounded-feature border border-dashed bg-graphite/40 flex flex-col items-center justify-center gap-3 overflow-hidden",
        heightClass,
        accentClasses,
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <svg
        className="relative w-10 h-10 md:w-12 md:h-12 opacity-70"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <p className="relative font-mono-label text-[10px] md:text-xs text-ash px-6 text-center max-w-md">
        Visual placeholder — {caption}
      </p>
    </div>
  );
};

export default VisualPlaceholder;
