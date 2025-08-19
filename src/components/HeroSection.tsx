import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-skyline.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
          Find Your{" "}
          <span className="gradient-text">Dream Home</span>
          <br />
          in the Future of Real Estate
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Discover luxurious properties in prime locations with cutting-edge technology 
          and unparalleled service. Your perfect home awaits.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 hover-glow">
            <Search className="mr-2 h-5 w-5" />
            Explore Properties
          </Button>
          <Button size="lg" variant="outline" className="glass-button text-lg px-8 py-4">
            <MapPin className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse-glow animation-delay-1000"></div>
    </section>
  );
};