import { ConceptSection } from "@/components/home/ConceptSection";
import { FeaturedProfileSection } from "@/components/home/FeaturedProfileSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { KnowledgeSystemSection } from "@/components/home/KnowledgeSystemSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <FeaturedProfileSection />
      <KnowledgeSystemSection />
      <FinalCtaSection />
    </>
  );
}
