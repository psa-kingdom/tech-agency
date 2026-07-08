import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/70 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden lg:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="nav-services-dropdown-trigger"
                className="flex items-center gap-1 px-4 py-2 rounded-navitems text-sm text-ash hover:text-cloud hover:bg-white/5 transition-colors duration-200"
              >
                Solutions
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-graphite border-white/10 text-cloud min-w-[260px] p-2"
            >
              {SERVICES.map((s) => (
                <DropdownMenuItem key={s.slug} asChild>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`nav-services-dropdown-${s.slug}`}
                    className="cursor-pointer rounded-md px-3 py-2.5 text-sm text-ash hover:text-cloud focus:text-cloud hover:bg-white/5 focus:bg-white/5"
                  >
                    {s.tileTitle}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/projects"
            data-testid="nav-link-projects"
            className="px-4 py-2 rounded-navitems text-sm text-ash hover:text-cloud hover:bg-white/5 transition-colors duration-200"
          >
            Projects
          </Link>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="px-4 py-2 rounded-navitems text-sm text-ash hover:text-cloud hover:bg-white/5 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            data-testid="nav-book-call-button"
            className="bg-pure text-void hover:bg-cloud rounded-lg px-5 h-10 text-sm font-medium"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              data-testid="nav-mobile-menu-toggle"
              className="p-2 text-cloud"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-obsidian border-white/10 text-cloud w-full sm:max-w-sm"
          >
            <div className="flex flex-col gap-1 mt-10">
              <p className="font-mono-label text-[10px] text-fog px-3 mb-2">
                Solutions
              </p>
              {SERVICES.map((s) => (
                <SheetClose asChild key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`mobile-nav-services-${s.slug}`}
                    className="px-3 py-3 rounded-lg text-sm text-ash hover:text-cloud hover:bg-white/5"
                  >
                    {s.tileTitle}
                  </Link>
                </SheetClose>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <SheetClose asChild>
                <Link
                  to="/projects"
                  data-testid="mobile-nav-link-projects"
                  className="px-3 py-3 rounded-lg text-sm text-ash hover:text-cloud hover:bg-white/5"
                >
                  Projects
                </Link>
              </SheetClose>
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.label}>
                  <Link
                    to={link.href}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                    className="px-3 py-3 rounded-lg text-sm text-ash hover:text-cloud hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <Button
                asChild
                data-testid="mobile-nav-book-call-button"
                className="mt-4 bg-pure text-void hover:bg-cloud rounded-lg h-11 text-sm font-medium"
              >
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Call
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
