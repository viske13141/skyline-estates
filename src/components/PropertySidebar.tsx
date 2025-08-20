import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertySidebarProps {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  className?: string;
}

export const PropertySidebar = ({ 
  title, 
  location, 
  price, 
  beds, 
  baths, 
  area,
  className = ""
}: PropertySidebarProps) => {
  return (
    <div className={`sticky top-24 space-y-6 ${className}`}>
      {/* Price Card */}
      <Card className="glass-card border-glass-border">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
            <p className="text-muted-foreground flex items-center mb-4">
              <MapPin className="mr-2 h-4 w-4" />
              {location}
            </p>
            <p className="text-4xl font-bold gradient-text">{price}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
            <div className="text-center">
              <Bed className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-lg font-bold">{beds}</p>
              <p className="text-xs text-muted-foreground">Beds</p>
            </div>
            <div className="text-center">
              <Bath className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-lg font-bold">{baths}</p>
              <p className="text-xs text-muted-foreground">Baths</p>
            </div>
            <div className="text-center">
              <Square className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-lg font-bold">{area}</p>
              <p className="text-xs text-muted-foreground">Area</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 animate-pulse bg-primary/20" />
              <Calendar className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">Schedule Visit</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full glass-button text-lg py-6 group hover:bg-secondary/20"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contact Agent
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Agent Card */}
      <Card className="glass-card border-glass-border">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
              alt="Agent"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <p className="text-sm text-muted-foreground">Senior Property Advisor</p>
            </div>
          </div>
          <Badge variant="secondary" className="mb-4">
            Available Now
          </Badge>
          <Button variant="outline" size="sm" className="w-full glass-button">
            View Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};