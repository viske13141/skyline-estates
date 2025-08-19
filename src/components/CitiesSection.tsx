import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import dubaiImage from "@/assets/dubai.jpg";
import bangaloreImage from "@/assets/bangalore.jpg";
import hyderabadImage from "@/assets/hyderabad.jpg";
import chennaiImage from "@/assets/chennai.jpg";
import mumbaiImage from "@/assets/mumbai.jpg";

const cities = [
  {
    name: "Dubai",
    image: dubaiImage,
    properties: "150+ Properties"
  },
  {
    name: "Bangalore",
    image: bangaloreImage,
    properties: "200+ Properties"
  },
  {
    name: "Hyderabad",
    image: hyderabadImage,
    properties: "120+ Properties"
  },
  {
    name: "Chennai",
    image: chennaiImage,
    properties: "180+ Properties"
  },
  {
    name: "Mumbai",
    image: mumbaiImage,
    properties: "250+ Properties"
  },
  {
    name: "Pune",
    image: dubaiImage, // Reusing for demo
    properties: "100+ Properties"
  }
];

export const CitiesSection = () => {
  return (
    <section id="cities" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Explore Prime Cities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exceptional properties across major metropolitan cities with the best infrastructure and lifestyle amenities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div
              key={city.name}
              className="group relative overflow-hidden rounded-3xl hover-glow cursor-pointer h-80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${city.image})` }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 city-card-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-white/80 mb-4 flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {city.properties}
                  </p>
                  <Button 
                    className="bg-gradient-primary hover:opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    size="sm"
                  >
                    View Properties
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};