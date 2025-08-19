import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Looking for Your Dream Property?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let our expert team help you find the perfect home that matches your lifestyle and budget. 
              Start your journey today with personalized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 hover-glow">
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="glass-button text-lg px-8 py-4">
                <Mail className="mr-2 h-5 w-5" />
                Request Callback
              </Button>
              <Button size="lg" variant="outline" className="glass-button text-lg px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};