import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Luxury Sky Villa",
    location: "Dubai Marina",
    price: "₹12.5 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
    beds: 4,
    baths: 3,
    area: "3500 sq ft",
    type: "Villa"
  },
  {
    id: 2,
    title: "Modern Penthouse",
    location: "Bangalore Central",
    price: "₹8.2 Cr",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
    beds: 3,
    baths: 2,
    area: "2800 sq ft",
    type: "Penthouse"
  },
  {
    id: 3,
    title: "Waterfront Apartment",
    location: "Mumbai Marine Drive",
    price: "₹15.8 Cr",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=300&fit=crop",
    beds: 3,
    baths: 3,
    area: "2200 sq ft",
    type: "Apartment"
  },
  {
    id: 4,
    title: "Tech Park Villa",
    location: "Hyderabad Gachibowli",
    price: "₹6.5 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
    beds: 4,
    baths: 4,
    area: "4200 sq ft",
    type: "Villa"
  }
];

export const FeaturedProperties = () => {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyId: number) => {
    navigate(`/property/${propertyId}`);
  };

  const handleViewDetails = (e: React.MouseEvent, propertyId: number) => {
    e.stopPropagation();
    navigate(`/property/${propertyId}`);
  };

  return (
    <section id="properties" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked premium properties with state-of-the-art amenities and unmatched luxury.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id}
              className="group glass-card border-glass-border/50 overflow-hidden hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handlePropertyClick(property.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {property.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    className="glass-button opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    360° View
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold gradient-text">{property.price}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="mr-1 h-4 w-4" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="mr-1 h-4 w-4" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="mr-1 h-4 w-4" />
                    {property.area}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    onClick={(e) => handleViewDetails(e, property.id)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="glass-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/property/${property.id}`);
                    }}
                  >
                    Schedule Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass-button px-8 py-4">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};