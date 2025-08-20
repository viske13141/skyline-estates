import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Skyline Estates helped me find the perfect villa in Bangalore. Their 360° property tours saved me so much time, and the service was exceptional!"
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Amazing experience! Found my dream apartment in Mumbai with their futuristic search platform. The team was professional and guided me throughout."
  },
  {
    name: "Ahmed Hassan",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The Dubai property I purchased through Skyline Estates exceeded my expectations. Their virtual tours are incredibly detailed and accurate."
  },
  {
    name: "Lisa Chen",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Professional service from start to finish. The team understood exactly what I was looking for and delivered beyond my expectations."
  }
];

export const CircularTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from thousands of satisfied customers who found their perfect homes with us.
          </p>
        </div>

        <div className="relative">
          {/* Review Text - Fades in/out */}
          <div className="text-center mb-12 min-h-[120px] flex items-center justify-center">
            <div 
              key={activeIndex}
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-6 w-6 text-yellow-400 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Circular Image Container */}
          <div className="flex items-center justify-center mb-8">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="mr-8 glass-button rounded-full w-12 h-12 hover:bg-primary/20"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Central Circle with Glowing Border */}
            <div className="relative">
              {/* Animated Glowing Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-pulse">
                <div className="w-32 h-32 rounded-full bg-background" />
              </div>
              
              {/* Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-transparent bg-gradient-primary p-1">
                <img
                  key={activeIndex}
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className={`w-full h-full rounded-full object-cover transition-all duration-500 ${
                    isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}
                />
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute inset-0 rounded-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/50 rounded-full animate-pulse"
                    style={{
                      top: `${20 + Math.sin(i * Math.PI / 4) * 60}%`,
                      left: `${20 + Math.cos(i * Math.PI / 4) * 60}%`,
                      animationDelay: `${i * 200}ms`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="ml-8 glass-button rounded-full w-12 h-12 hover:bg-primary/20"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Client Info */}
          <div className="text-center">
            <div 
              key={`info-${activeIndex}`}
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <h4 className="text-xl font-bold text-foreground mb-1">
                {currentTestimonial.name}
              </h4>
              <p className="text-muted-foreground">{currentTestimonial.role}</p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};