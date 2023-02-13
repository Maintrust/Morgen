import React from "react";
import WebsiteWrapper from "./website-wrapper";
import Hero from "./sections/hero";
import Welcome from "./sections/welcome";
import Club from "./sections/club";
import Chip from "./sections/chip";
import Team from "./sections/team";

export default function Home() {
  return (
    <WebsiteWrapper>
      <Hero />
      <Welcome />
      <Club />
      <Chip />
      <Team />
    </WebsiteWrapper>
  )
}