import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <div className="page-container">
      <Hero
        title={"Learn More About Us | HealthStack"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </div>
  );
};

export default AboutUs;