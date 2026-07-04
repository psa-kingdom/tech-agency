import React from "react";
import { Link } from "react-router-dom";
import { AGENCY_NAME } from "@/data/siteData";

const Logo = ({ className = "" }) => {
  return (
    <Link
      to="/"
      data-testid="logo-home-link"
      className={`flex items-center gap-2.5 group ${className}`}
    >
      <span className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-iris to-iris-deep flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-cloud text-sm font-normal">A</span>
      </span>
      <span className="font-sans text-base font-medium text-cloud tracking-tight">
        {AGENCY_NAME}
      </span>
    </Link>
  );
};

export default Logo;
