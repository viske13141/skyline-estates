import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyHero } from "@/components/PropertyHero";
import { PropertySidebar } from "@/components/PropertySidebar";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { 
  ArrowLeft,
  MapPin, 
  Car,
  Wifi,
  Dumbbell,
  Shield
} from "lucide-react";

// Extended property data - in a real app this would come from an API
const propertyData = {
  1: {
    id: 1,
    title: "Luxury Sky Villa",
    location: "Dubai Marina",
    price: "₹12.5 Cr",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    beds: 4,
    baths: 3,
    area: "3500 sq ft",
    type: "Villa",
    description: "Stunning luxury villa with breathtaking views of Dubai Marina. This architectural masterpiece features floor-to-ceiling windows, premium finishes, and world-class amenities.",
    amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Wi-Fi", "Garden"],
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE9fZ0h4VDBOM1A!2m2!1d25.0762677!2d55.1396!3f90!4f0!5f0.7820865974627469"
  },
  2: {
    id: 2,
    title: "Modern Penthouse",
    location: "Bangalore Central",
    price: "₹8.2 Cr",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    beds: 3,
    baths: 2,
    area: "2800 sq ft",
    type: "Penthouse",
    description: "Ultra-modern penthouse in the heart of Bangalore with panoramic city views. Features smart home technology and premium luxury amenities.",
    amenities: ["Smart Home", "Gym", "Parking", "Security", "Wi-Fi", "Terrace"],
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE9fZ0h4VDBOM1A!2m2!1d12.9716!2d77.5946!3f90!4f0!5f0.7820865974627469"
  },
  3: {
    id: 3,
    title: "Waterfront Apartment",
    location: "Mumbai Marine Drive",
    price: "₹15.8 Cr",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    beds: 3,
    baths: 3,
    area: "2200 sq ft",
    type: "Apartment",
    description: "Exclusive waterfront apartment with unobstructed views of the Arabian Sea. Located on the iconic Marine Drive with luxury amenities.",
    amenities: ["Sea View", "Gym", "Parking", "Security", "Wi-Fi", "Concierge"],
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE9fZ0h4VDBOM1A!2m2!1d18.9220!2d72.8347!3f90!4f0!5f0.7820865974627469"
  },
  4: {
    id: 4,
    title: "Tech Park Villa",
    location: "Hyderabad Gachibowli",
    price: "₹6.5 Cr",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
    ],
    beds: 4,
    baths: 4,
    area: "4200 sq ft",
    type: "Villa",
    description: "Contemporary villa in the tech hub of Hyderabad. Perfect for IT professionals with modern amenities and excellent connectivity.",
    amenities: ["Garden", "Gym", "Parking", "Security", "Wi-Fi", "Home Office"],
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE9fZ0h4VDBOM1A!2m2!1d17.4262!2d78.3359!3f90!4f0!5f0.7820865974627469"
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertyData[parseInt(id!) as keyof typeof propertyData];

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'parking': return <Car className="h-4 w-4" />;
      case 'wi-fi': return <Wifi className="h-4 w-4" />;
      case 'gym': return <Dumbbell className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Hero Section */}
          <PropertyHero
            title={property.title}
            type={property.type}
            images={property.images}
            onBack={() => navigate(-1)}
            onShare={() => console.log('Share property')}
            onFavorite={() => console.log('Add to favorites')}
          />

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Description */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">About This Property</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {property.description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Features</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Premium flooring throughout</li>
                        <li>• Modern kitchen with island</li>
                        <li>• Walk-in closets</li>
                        <li>• Smart home integration</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Nearby</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Shopping mall - 2 km</li>
                        <li>• Metro station - 1.5 km</li>
                        <li>• International airport - 15 km</li>
                        <li>• Tech parks - 5 km</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        {getAmenityIcon(amenity)}
                        <span className="text-foreground font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Location</h2>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive map will be embedded here</p>
                  </div>
                  <div className="mt-4 flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>{property.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PropertySidebar
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                area={property.area}
              />
            </div>
          </div>
        </div>
      </main>

      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default PropertyDetails;