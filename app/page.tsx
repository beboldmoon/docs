import { Hero } from "./components/sections/Hero";
import { StatsMarquee } from "./components/sections/StatsMarquee";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { FLLSpotlight } from "./components/sections/FLLSpotlight";
import { Stats } from "./components/sections/Stats";
import { CareerTimeline } from "./components/sections/CareerTimeline";
import { Portfolio } from "./components/sections/Portfolio";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsMarquee />
      <About />
      <Expertise />
      <FLLSpotlight />
      <Stats />
      <CareerTimeline />
      <Portfolio />
      <Certifications />
      <Contact />
    </div>
  );
}
