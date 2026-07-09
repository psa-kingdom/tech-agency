import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { SERVICES, AGENCY_NAME, CONTACT_EMAIL, TWITTER_URL, LINKEDIN_URL } from "@/data/siteData";
import { DottedSurface } from "@/components/ui/dotted-surface";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-abyss border-t border-white/10 relative overflow-hidden">
      <DottedSurface className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="relative z-10 max-w-content mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
        <div>
          <Logo />
          <p className="mt-4 text-xs font-mono text-fog tracking-wider uppercase">
            Enterprise Technology · Intelligence · Transformation
          </p>
          <p className="mt-2 text-sm text-ash leading-relaxed max-w-xs font-light">
            Building Intelligent Enterprises. <br />
            Navigate Complexity. Accelerate Growth.
          </p>
        </div>

        <div>
          <p className="font-mono-label text-[11px] text-fog mb-4">Services</p>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`footer-service-link-${s.slug}`}
                  className="text-sm text-ash hover:text-cloud transition-colors duration-200"
                >
                  {s.tileTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[11px] text-fog mb-4">Company</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/#why-us"
                data-testid="footer-link-about"
                className="text-sm text-ash hover:text-cloud transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                data-testid="footer-link-contact"
                className="text-sm text-ash hover:text-cloud transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[11px] text-fog mb-4">Connect</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-testid="footer-link-email"
                className="text-sm text-ash hover:text-cloud transition-colors duration-200 flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-linkedin"
                className="text-sm text-ash hover:text-cloud transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-twitter"
                className="text-sm text-ash hover:text-cloud transition-colors duration-200 flex items-center gap-2"
              >
                <Twitter className="w-3.5 h-3.5" /> Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-fog">
          © {year} {AGENCY_NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            data-testid="footer-link-privacy"
            className="text-xs text-fog hover:text-ash transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            data-testid="footer-link-terms"
            className="text-xs text-fog hover:text-ash transition-colors duration-200"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
