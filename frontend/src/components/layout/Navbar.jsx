import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, ArrowRight, Globe, Bot, LayoutDashboard, Boxes, Network, Database } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SERVICES, NAV_LINKS, CTA_LINK } from "@/data/siteData";

const ICONS = { Globe, Bot, LayoutDashboard, Boxes, Network, Database };

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  const mobileContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 16 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-obsidian/90 backdrop-blur-xl shadow-md border-white/10"
          : "bg-obsidian/50 backdrop-blur-md border-white/5"
      )}
    >
      <nav
        className={cn(
          "max-w-content mx-auto flex items-center justify-between px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <Logo />

        <div className="hidden lg:flex items-center gap-1 relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="nav-services-dropdown-trigger"
                className="flex items-center gap-1 px-4 py-2 rounded-navitems text-sm text-ash hover:text-cloud hover:bg-white/5 transition-colors duration-200 relative z-10"
              >
                Solutions
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-graphite border-white/10 text-cloud min-w-[260px] p-2"
            >
              {SERVICES.map((s) => {
                const isActive = location.pathname === `/services/${s.slug}`;
                const IconComponent = ICONS[s.icon];
                return (
                  <DropdownMenuItem key={s.slug} asChild>
                    <Link
                      to={`/services/${s.slug}`}
                      data-testid={`nav-services-dropdown-${s.slug}`}
                      className={cn(
                        "cursor-pointer rounded-md px-3 py-2.5 text-sm transition-colors duration-150 flex items-center justify-between",
                        isActive
                          ? "text-iris bg-white/5 font-medium"
                          : "text-ash hover:text-cloud focus:text-cloud hover:bg-white/5 focus:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        {IconComponent && <IconComponent className="w-4 h-4 shrink-0 opacity-75" />}
                        <span>{s.tileTitle}</span>
                      </div>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-iris" />}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/projects"
            data-testid="nav-link-projects"
            className={cn(
              "px-4 py-2 rounded-navitems text-sm relative z-10 transition-colors duration-200",
              isLinkActive("/projects") ? "text-cloud font-medium" : "text-ash hover:text-cloud"
            )}
          >
            {isLinkActive("/projects") && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-white/5 rounded-navitems -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Projects
          </Link>

          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={cn(
                  "px-4 py-2 rounded-navitems text-sm relative z-10 transition-colors duration-200",
                  active ? "text-cloud font-medium" : "text-ash hover:text-cloud"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/5 rounded-navitems -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            data-testid="nav-book-call-button"
            className="bg-pure text-void hover:bg-cloud rounded-lg px-5 h-10 text-sm font-medium transition-transform duration-200 active:scale-95 flex items-center gap-1.5"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book a Free Call
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              data-testid="nav-mobile-menu-toggle"
              className="p-2 text-cloud transition-transform duration-100 active:scale-90"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-obsidian border-white/10 text-cloud w-full sm:max-w-sm"
          >
            <AnimatePresence>
              {open && (
                <motion.div
                  variants={mobileContainerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-1 mt-10"
                >
                  <motion.p
                    variants={mobileItemVariants}
                    className="font-mono-label text-[10px] text-fog px-3 mb-2"
                  >
                    Solutions
                  </motion.p>
                  {SERVICES.map((s) => {
                    const isActive = location.pathname === `/services/${s.slug}`;
                    const IconComponent = ICONS[s.icon];
                    return (
                      <motion.div key={s.slug} variants={mobileItemVariants}>
                        <SheetClose asChild>
                          <Link
                            to={`/services/${s.slug}`}
                            data-testid={`mobile-nav-services-${s.slug}`}
                            className={cn(
                              "px-3 py-3 rounded-lg text-sm flex items-center justify-between",
                              isActive
                                ? "text-iris bg-white/5 font-medium"
                                : "text-ash hover:text-cloud hover:bg-white/5"
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              {IconComponent && <IconComponent className="w-4.5 h-4.5 shrink-0 opacity-75" />}
                              <span>{s.tileTitle}</span>
                            </div>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-iris" />}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    );
                  })}
                  <motion.div variants={mobileItemVariants} className="h-px bg-white/10 my-2" />
                  <motion.div variants={mobileItemVariants}>
                    <SheetClose asChild>
                      <Link
                        to="/projects"
                        data-testid="mobile-nav-link-projects"
                        className={cn(
                          "px-3 py-3 rounded-lg text-sm flex items-center justify-between",
                          isLinkActive("/projects")
                            ? "text-iris bg-white/5 font-medium"
                            : "text-ash hover:text-cloud hover:bg-white/5"
                        )}
                      >
                        Projects
                      </Link>
                    </SheetClose>
                  </motion.div>
                  {NAV_LINKS.map((link) => (
                    <motion.div key={link.label} variants={mobileItemVariants}>
                      <SheetClose asChild>
                        <Link
                          to={link.href}
                          data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                          className={cn(
                            "px-3 py-3 rounded-lg text-sm flex items-center justify-between",
                            isLinkActive(link.href)
                              ? "text-iris bg-white/5 font-medium"
                              : "text-ash hover:text-cloud hover:bg-white/5"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                  <motion.div variants={mobileItemVariants}>
                    <Button
                      asChild
                      data-testid="mobile-nav-book-call-button"
                      className="mt-4 bg-pure text-void hover:bg-cloud rounded-lg h-11 text-sm font-medium w-full flex items-center justify-center gap-1.5"
                    >
                      <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                        Book a Free Call
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
