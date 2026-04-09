import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Advantages } from "@/components/sections/Advantages";
import { Process } from "@/components/sections/Process";
import { CostOfInaction } from "@/components/sections/CostOfInaction";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Team } from "@/components/sections/Team";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Process />
      <CostOfInaction />
      <CaseStudy />
      <Team />
      <Pricing />
      <FAQ />
    </main>
  );
}
