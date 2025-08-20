import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Futuristic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.15),transparent_70%)]" />
      
      <div className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Skyline Estates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner in finding the perfect home in the world's most desirable locations. Experience the future of real estate.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                  <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Properties', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Cities</h4>
              <ul className="space-y-3">
                {['Dubai', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'].map((city) => (
                  <li key={city}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact Info</h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  info@skylineestates.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  123 Business Avenue, Suite 100
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Skyline Estates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};