import React from "react";
import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import GetInTouch from "@/components/layout/GetInTouch";

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <Hero />
      <BentoGrid />
      <WhyUs />
      <Process />
      <Testimonials />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
