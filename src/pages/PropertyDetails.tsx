import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Share2,
  Heart,
  Car,
  Wifi,
  Dumbbell,
  Shield
} from "lucide-react";
import { useState } from "react";

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
  const [currentImage, setCurrentImage] = useState(0);
  const [show360View, setShow360View] = useState(false);

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
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="glass-button"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </div>

          {/* Property Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <Card className="glass-card overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.images[currentImage]}
                    alt={property.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass-button"
                      onClick={() => setShow360View(!show360View)}
                    >
                      360° View
                    </Button>
                    <Button size="sm" variant="outline" className="glass-button">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="glass-button">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {property.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all hover:opacity-80 ${
                      currentImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>

              {/* 360° View */}
              {show360View && (
                <Card className="glass-card p-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={property.streetViewUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="360° Street View"
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Property Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">
                  {property.title}
                </h1>
                <p className="text-muted-foreground flex items-center text-lg mb-6">
                  <MapPin className="mr-2 h-5 w-5" />
                  {property.location}
                </p>
                <p className="text-5xl font-bold gradient-text mb-6">
                  {property.price}
                </p>
              </div>

              {/* Property Stats */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <Bed className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">{property.beds}</p>
                      <p className="text-muted-foreground">Bedrooms</p>
                    </div>
                    <div>
                      <Bath className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">{property.baths}</p>
                      <p className="text-muted-foreground">Bathrooms</p>
                    </div>
                    <div>
                      <Square className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">{property.area}</p>
                      <p className="text-muted-foreground">Area</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Visit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full glass-button text-lg py-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>

          {/* Property Description & Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {getAmenityIcon(amenity)}
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;