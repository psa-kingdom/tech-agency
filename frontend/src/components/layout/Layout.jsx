import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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
