import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Download, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const GalleryEvent = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const folderName = eventId ?? "";

  useEffect(() => {
    if (!folderName) return;

    // Use a static glob pattern (all subfolders) and filter for the requested folderName at runtime.
    const modules = (import.meta as any).glob(`/src/assets/*/*.{png,jpg,jpeg,webp,mp4}`);
    let cancelled = false;
    const load = async () => {
      const entries = (Object.entries(modules) as [string, () => Promise<any>][]).filter(([path]) =>
        path.includes(`/src/assets/${folderName}/`)
      );
      const loaded = await Promise.all(
        entries.map(async ([path, resolver], idx) => {
          try {
            const mod = await resolver();
            const src = mod?.default ?? mod;
            const isVideo = /\.mp4$/i.test(path);
            return { id: String(idx), src, alt: `${folderName} ${idx + 1}`, isVideo };
          } catch (e) {
            console.error('Failed to load', path, e);
            return null;
          }
        })
      );

      const imgs = loaded.filter(Boolean).map((it: any, idx: number) => ({ id: String(idx), src: it.src, alt: `${folderName} ${idx + 1}` }));
      if (!cancelled) setImages(imgs);
    };

    load();
    return () => { cancelled = true; };
  }, [folderName]);

  const handleDownload = async (imageSrc: string, imageAlt: string) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${imageAlt.replace(/\s+/g, "-")}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      // Fallback: open image in new tab
      window.open(imageSrc, "_blank");
    }
  };

  const handleDownloadAll = async () => {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      await new Promise((resolve) => setTimeout(resolve, 300)); // Delay between downloads
      handleDownload(image.src, `${folderName}-${i + 1}`);
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{folderName.replace(/[-_]/g, ' ')}</h1>
          <p className="text-muted-foreground text-lg mb-4">Photos & videos from {folderName.replace(/[-_]/g, ' ')}</p>
          {images.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {images.length} {images.length === 1 ? "Photo" : "Photos"}
              </span>
              <Button onClick={handleDownloadAll} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>
          )}
        </div>

        {/* Images Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(image.src, image.alt);
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">
              Photos will be available soon after the event!
            </p>
            <p className="text-sm text-muted-foreground">
              Check back later to view all photos from {folderName.replace(/[-_]/g, ' ')}.
            </p>
          </div>
        )}

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent
            className="max-w-6xl p-0 bg-transparent border-none"
            onKeyDown={handleKeyPress}
          >
                {selectedImage !== null && (
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                >
                  <X className="h-6 w-6 text-primary-foreground" />
                </button>

                {/* Navigation Buttons */}
                {selectedImage > 0 && (
                  <Button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-12 h-12 p-0 bg-secondary hover:bg-secondary/80"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                )}

                {selectedImage < images.length - 1 && (
                  <Button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-12 h-12 p-0 bg-secondary hover:bg-secondary/80"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                )}

                {/* Image Content */}
                <div className="relative">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="w-full h-auto rounded-lg max-h-[85vh] object-contain bg-secondary/50"
                  />

                  {/* Image Info and Download */}
                  <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-sm p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-primary-foreground font-bold text-xl mb-2">
                          {images[selectedImage].alt}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm">
                          {selectedImage + 1} / {images.length}
                        </p>
                      </div>
                      <Button
                        onClick={() => handleDownload(images[selectedImage].src, images[selectedImage].alt)}
                        variant="default"
                        className="ml-4"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryEvent;

