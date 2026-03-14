import { ContactForm } from "@/components/contact-form";
import { CoverageSection } from "@/components/coverage-section";
import { HeroBlueprint } from "@/components/hero-blueprint";
import { ProcessTimeline } from "@/components/process-timeline";
import { ProjectShowcase } from "@/components/project-showcase";
import { ResourcesFooter } from "@/components/resources-footer";
import { ServicesGrid } from "@/components/services-grid";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StatsSection } from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SiteNav />
      <main>
        <HeroBlueprint />
        <StatsSection />
        <ServicesGrid />
        <ProjectShowcase />
        <ProcessTimeline />
        <CoverageSection />
        <ContactForm />
      </main>
      <ResourcesFooter />
    </>
  );
}
