import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Image } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type MediaItem = { src: string; isVideo: boolean };

const PhotoGallery: React.FC = () => {
  const [groups, setGroups] = useState<Record<string, MediaItem[]>>({});
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

  // Use Vite's import.meta.glob to lazily load assets at runtime when the gallery mounts.
  const modules = (import.meta as any).glob('/src/assets/**/*.{png,jpg,jpeg,webp,mp4}');

  useEffect(() => {
    let canceled = false;
    const load = async () => {
      try {
        const map: Record<string, MediaItem[]> = {};
        const entries = Object.entries(modules) as [string, () => Promise<any>][];

        const loaded = await Promise.all(
          entries.map(async ([path, resolver]) => {
            try {
              const mod = await resolver();
              const src = mod?.default ?? mod;
              return { path, src };
            } catch (e) {
              console.error('Failed to import', path, e);
              return null;
            }
          })
        );

        loaded.forEach((res) => {
          if (!res) return;
          const { path, src } = res as { path: string; src: string };
          const parts = path.split('/src/assets/');
          if (parts.length < 2) return;
          const relative = parts[1];
          const segments = relative.split('/');
          // Ignore files directly in the assets root; only include files inside subfolders
          if (segments.length <= 1) return;
          const folder = segments[0];
          const isVideo = /\.mp4$/i.test(path);

          if (!map[folder]) map[folder] = [];
          map[folder].push({ src, isVideo });
        });

        // sort items in each group so images first then videos
        Object.keys(map).forEach((k) => {
          map[k].sort((a, b) => Number(a.isVideo) - Number(b.isVideo));
        });

        if (!canceled) setGroups(map);
      } catch (err) {
        console.error('Error loading gallery assets', err);
      }
    };

    load();
    return () => { canceled = true; };
  }, [modules]);

  const groupEntries = useMemo(() => Object.entries(groups), [groups]);

  const openLightbox = (groupName: string, startIndex = 0) => {
    setOpenGroup(groupName);
    setCurrentIndex(startIndex);
  };

  const closeLightbox = () => {
    setOpenGroup(null);
    setCurrentIndex(0);
  };

  const next = () => {
    if (!openGroup) return;
    const arr = groups[openGroup];
    setCurrentIndex((i) => (i + 1) % arr.length);
  };

  const prev = () => {
    if (!openGroup) return;
    const arr = groups[openGroup];
    setCurrentIndex((i) => (i - 1 + arr.length) % arr.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!openGroup) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openGroup, groups]);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Photo & Video Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore moments from the Pragathi Zonal Meet. Click any album to view all media inside.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {groupEntries.length === 0 && (
            <div className="text-center text-muted-foreground col-span-full">Please stay tuned.Images will be uploaded post Pragathi.</div>
          )}

          {groupEntries.map(([folder, items]) => (
            <Card
              key={folder}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 relative bg-card/80 backdrop-blur-sm"
              onClick={() => navigate(`/gallery/${folder}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="aspect-square relative overflow-hidden bg-muted">
                {items[0]?.isVideo ? (
                  <video src={items[0].src} className="w-full h-full object-cover" muted playsInline />
                ) : (
                  <img src={items[0]?.src} alt={folder} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
                    <Image className="relative h-12 w-12 text-primary-foreground mb-2" />
                  </div>
                  <p className="text-primary-foreground font-bold text-base">{items.length} items</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6 relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {folder.replace(/[-_]/g, ' ')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {items.length} media files
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1.5 bg-primary/10 rounded-full text-primary font-semibold group-hover:bg-primary/20 transition-colors">
                    Album
                  </span>
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation opens the dedicated gallery page for the folder */}
    </section>
  );
};

export default PhotoGallery;
