import { Button } from "@/components/ui/button";
import { Home, Phone, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">
              Skyline Estates
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <a 
              href="/#properties" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Properties
            </a>
            <a 
              href="/#cities" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Cities
            </a>
            <a 
              href="/#about" 
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a 
              href="/#contact" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="glass-button hidden md:flex">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};