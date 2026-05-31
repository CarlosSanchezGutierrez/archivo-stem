import { ConceptSection } from "@/components/home/ConceptSection";
import { FeaturedProfileSection } from "@/components/home/FeaturedProfileSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { KnowledgeSystemSection } from "@/components/home/KnowledgeSystemSection";
import { ModesPreviewSection } from "@/components/home/ModesPreviewSection";
import { MuseumExperienceSection } from "@/components/home/MuseumExperienceSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <MuseumExperienceSection />
      <FeaturedProfileSection />
      <KnowledgeSystemSection />
      <ModesPreviewSection />
      <FinalCtaSection />
    </>
  );
}

