import "./i18n";
import Layout from "./components/Layout";
import ContactSection, { ContactBlock } from "./components/ContactSection";
import GoToAppModal from "./components/GoToAppModal";
import { HeroSection } from "./components/HeroSection";
import { ToolsSection } from "./components/ToolsSection";
import { PegBoardSection } from "./components/PegBoardSection";
import { Section } from "./components/styles";

export function PmPage() {
  return (
    <Layout>
      <PegBoardSection id="home">
        <HeroSection />
      </PegBoardSection>
      <Section id="features">
        <ToolsSection />
      </Section>
      <ContactSection id="contact">
        <ContactBlock />
      </ContactSection>
      <GoToAppModal />
    </Layout>
  );
}
