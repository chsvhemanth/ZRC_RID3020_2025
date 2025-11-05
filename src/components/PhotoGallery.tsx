import { useState } from "react";
import { Card } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/rac-rgb-logo.png";

interface MediaItem {
  id: number;
  title: string;
  category: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
}

const PhotoGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  // Gallery with images and videos
  const galleryItems: MediaItem[] = [
    { 
      id: 1, 
      title: "Opening Ceremony 2024", 
      category: "Events",
      type: "image",
      src: logo,
    },
    { 
      id: 2, 
      title: "Workshop Highlights", 
      category: "Workshops",
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: logo,
    },
    { 
      id: 3, 
      title: "Team Building", 
      category: "Activities",
      type: "image",
      src: logo,
    },
    { 
      id: 4, 
      title: "Networking Dinner", 
      category: "Events",
      type: "image",
      src: logo,
    },
    { 
      id: 5, 
      title: "Panel Discussion", 
      category: "Sessions",
      type: "video",
      src: "https://www.w3schools.com/html/movie.mp4",
      thumbnail: logo,
    },
    { 
      id: 6, 
      title: "Award Ceremony", 
      category: "Events",
      type: "image",
      src: logo,
    },
    { 
      id: 7, 
      title: "Group Activities", 
      category: "Activities",
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: logo,
    },
    { 
      id: 8, 
      title: "Closing Ceremony", 
      category: "Events",
      type: "image",
      src: logo,
    },
  ];

  const handlePrevious = () => {
    if (selectedMedia !== null && selectedMedia > 0) {
      setSelectedMedia(selectedMedia - 1);
    }
  };

  const handleNext = () => {
    if (selectedMedia !== null && selectedMedia < galleryItems.length - 1) {
      setSelectedMedia(selectedMedia + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedMedia(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Photo & Video Gallery</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Moments from previous zonal conferences and events
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedMedia(index)}
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-primary-foreground font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/80 text-xs">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedMedia !== null} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent 
            className="max-w-5xl p-0 bg-transparent border-none"
            onKeyDown={handleKeyPress}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
              >
                <X className="h-6 w-6 text-primary-foreground" />
              </button>

              {/* Navigation Buttons */}
              {selectedMedia !== null && selectedMedia > 0 && (
                <Button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-12 h-12 p-0 bg-secondary hover:bg-secondary/80"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              )}
              
              {selectedMedia !== null && selectedMedia < galleryItems.length - 1 && (
                <Button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-12 h-12 p-0 bg-secondary hover:bg-secondary/80"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              )}

              {/* Media Content */}
              {selectedMedia !== null && (
                <div className="relative">
                  {galleryItems[selectedMedia].type === "image" ? (
                    <img
                      src={galleryItems[selectedMedia].src}
                      alt={galleryItems[selectedMedia].title}
                      className="w-full h-auto rounded-lg max-h-[80vh] object-contain bg-secondary/50"
                    />
                  ) : (
                    <video
                      src={galleryItems[selectedMedia].src}
                      controls
                      autoPlay
                      className="w-full h-auto rounded-lg max-h-[80vh] bg-secondary/50"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                  
                  {/* Media Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-sm p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-primary-foreground font-bold text-xl mb-2">
                          {galleryItems[selectedMedia].title}
                        </h3>
                        <p className="text-primary-foreground/80">{galleryItems[selectedMedia].category}</p>
                      </div>
                      <div className="text-primary-foreground/60 text-sm">
                        {selectedMedia + 1} / {galleryItems.length}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;
