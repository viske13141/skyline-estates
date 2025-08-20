import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X } from "lucide-react";

export const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+1234567890", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Options */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 transform ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <Button
          onClick={handleWhatsApp}
          className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          size="icon"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={handleCall}
          className="rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          size="icon"
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>

      {/* Main FAB */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`rounded-full w-14 h-14 bg-gradient-primary hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
          isExpanded ? 'rotate-45' : 'hover:scale-105'
        }`}
        size="icon"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        
        {/* Icon */}
        <div className="relative z-10 transition-transform duration-300">
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
      </Button>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-ping"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 500}ms`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};