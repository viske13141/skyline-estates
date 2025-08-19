import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Find Your Perfect Property
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Select>
              <SelectTrigger className="glass-button h-14 text-base">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent className="glass-card border-glass-border">
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="glass-button h-14 text-base">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="glass-card border-glass-border">
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="glass-button h-14 text-base">
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent className="glass-card border-glass-border">
                <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                <SelectItem value="100-250">₹1Cr - ₹2.5Cr</SelectItem>
                <SelectItem value="250-500">₹2.5Cr - ₹5Cr</SelectItem>
                <SelectItem value="500+">₹5Cr+</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="glass-button h-14 text-base">
                <SelectValue placeholder="BHK" />
              </SelectTrigger>
              <SelectContent className="glass-card border-glass-border">
                <SelectItem value="1">1 BHK</SelectItem>
                <SelectItem value="2">2 BHK</SelectItem>
                <SelectItem value="3">3 BHK</SelectItem>
                <SelectItem value="4">4+ BHK</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-12 py-4 text-lg hover-glow">
              <Search className="mr-2 h-5 w-5" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};