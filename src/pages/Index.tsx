import HeroSection from "@/components/landing/HeroSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import HighlightsSection from "@/components/landing/HighlightsSection";
import WhySpecialSection from "@/components/landing/WhySpecialSection";
import EventDetailsSection from "@/components/landing/EventDetailsSection";
import ReservationCTA from "@/components/landing/ReservationCTA";
import SocialMomentSection from "@/components/landing/SocialMomentSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTAFooter from "@/components/landing/FinalCTAFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceSection />
      <HighlightsSection />
      <WhySpecialSection />
      <EventDetailsSection />
      <ReservationCTA />
      <SocialMomentSection />
      <FAQSection />
      <FinalCTAFooter />
    </main>
  );
};

export default Index;
