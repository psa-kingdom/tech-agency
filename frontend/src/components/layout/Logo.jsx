import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const Logo = ({ className = "" }) => {
  const { resolvedTheme } = useTheme();

  // Show dark logo when light theme is active, otherwise default to white (light) logo.
  const isLightTheme = resolvedTheme === "light";
  const logoSrc = isLightTheme ? logoDark : logoLight;

  const handleClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      data-testid="logo-home-link"
      className={`flex items-center group ${className}`}
    >
      <img
        src={logoSrc}
        alt="Navigatte"
        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default Logo;
