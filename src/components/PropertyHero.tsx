import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Share2, Heart, Play, X } from "lucide-react";

interface PropertyHeroProps {
  title: string;
  type: string;
  images: string[];
  onBack: () => void;
  onShare?: () => void;
  onFavorite?: () => void;
}

export const PropertyHero = ({ 
  title, 
  type, 
  images, 
  onBack, 
  onShare, 
  onFavorite 
}: PropertyHeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [show360View, setShow360View] = useState(false);

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="glass-button"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Properties
        </Button>
      </div>

      {/* Main Hero Section */}
      <div className="relative h-[70vh] overflow-hidden rounded-3xl">
        {/* Hero Image or 360° View */}
        {!show360View ? (
          <div className="relative w-full h-full">
            <img 
              src={images[currentImage]}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="relative w-full h-full bg-background/10 backdrop-blur-sm">
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">360° Property Tour</h3>
                <p className="text-white/80 mb-6">Upload your 360° video or panoramic images here</p>
                <div className="p-8 border-2 border-dashed border-white/30 rounded-xl">
                  <p className="text-white/60">360° content will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overlay Controls */}
        <div className="absolute top-6 right-6 flex gap-3 z-10">
          <Badge className="bg-gradient-primary text-primary-foreground">
            {type}
          </Badge>
          <Button 
            size="sm" 
            variant="outline"
            className="glass-button"
            onClick={() => setShow360View(!show360View)}
          >
            {show360View ? (
              <>
                <X className="h-4 w-4 mr-2" />
                Gallery
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                360° View
              </>
            )}
          </Button>
          <Button size="sm" variant="outline" className="glass-button" onClick={onShare}>
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="glass-button" onClick={onFavorite}>
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom Gradient Overlay for Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-40" />
      </div>

      {/* Thumbnail Gallery - Only show when not in 360° mode */}
      {!show360View && (
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 relative transition-all duration-300 ${
                currentImage === index 
                  ? 'ring-2 ring-primary transform scale-105' 
                  : 'hover:scale-102 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};