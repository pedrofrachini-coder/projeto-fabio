import { SiteNavbar } from "@/components/portfolio/site-navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ActivitiesSection } from "@/components/portfolio/activities-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EventsSection } from "@/components/portfolio/events-section";
import { SitesSection } from "@/components/portfolio/sites-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { ScrollTopButton } from "@/components/portfolio/scroll-top-button";

/**
 * Página única do portfólio — as seções seguem a ordem pedida
 * e cada uma possui o id usado pelo menu de navegação.
 */
const Index = () => (
  <div className="min-h-screen bg-background">
    <SiteNavbar />

    <main>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <ProjectsSection />
      <EventsSection />
      <SitesSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <SiteFooter />
    <ScrollTopButton />
  </div>
);

export default Index;
