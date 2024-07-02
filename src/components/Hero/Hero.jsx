import React from "react";

import HeroContent from "./HeroContent";
import AboutContent from "./AboutContent";
import AboutVideo from "./AboutVideo";
import OfferServices from "./OfferServices";
import OurProducts from "./OurProducts";
import Projects from "./Projects";
import LatestProject from "./LatestProject";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
const Hero = () => {
  return (
    <>
      <HeroContent />
      <AboutContent />
      <AboutVideo />
      <OfferServices />
      <OurProducts />
      <Projects />
      <LatestProject />
      <Testimonials />
      <Blog />
    </>
  );
};

export default Hero;
