import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = location.hash.replace("#", "");
    // Give the target route a moment to mount before scrolling into view.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-obsidian text-cloud flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[73px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
