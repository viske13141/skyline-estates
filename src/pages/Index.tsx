import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { CitiesSection } from "@/components/CitiesSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { CircularTestimonials } from "@/components/CircularTestimonials";
import { AnimatedStats } from "@/components/AnimatedStats";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <CitiesSection />
      <FeaturedProperties />
      <AnimatedStats />
      <CircularTestimonials />
      <CTASection />
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Index;