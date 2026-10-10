import { useReveal } from "@/hooks/useReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, X } from "lucide-react";
import { useState } from "react";

const photos = [
  { url: "/gallery/images/image_1.jpg", title: "Premium Catering Operations", category: "Catering" },
  { url: "/gallery/images/image_4.jpg", title: "Quality Service Delivery", category: "Catering" },
  { url: "/gallery/images/image_6.jpg", title: "Corporate Event Catering", category: "Corporate" },
  { url: "/gallery/images/image_7.jpg", title: "Food Safety Standards", category: "Quality" },
  { url: "/gallery/images/image_8.jpg", title: "Bulk Food Production", category: "Industrial" },
  { url: "/gallery/images/image_9.jpg", title: "Standard Operations Management", category: "Operations" },
  { url: "/gallery/images/image_10.jpg", title: "Staff Service Excellence", category: "Hospitality" }
];

const videos = [
  { 
    thumbnail: "/gallery/thumbnails/thumb_1.jpg", 
    title: "Kitchen Service Operations", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_1.mp4",
    description: "Overview of our kitchen and catering preparation processes."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_2.jpg", 
    title: "Industrial Catering Prep", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_2.mp4",
    description: "Preparing nutritious meals for corporate and industrial clients."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_3.jpg", 
    title: "Daily Operations Review", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_3.mp4",
    description: "Maintaining peak service and safety standards on site."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_4.jpg", 
    title: "Food Production Standards", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_4.mp4",
    description: "Strict hygiene and quality control during preparation."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_5.jpg", 
    title: "Hospitality Management Overview", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_5.mp4",
    description: "Ensuring high satisfaction across all services."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_6.jpg", 
    title: "Corporate Catering Logistics", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_6.mp4",
    description: "Professional setup and delivery for corporate clients."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_7.jpg", 
    title: "Site Service Management", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_7.mp4",
    description: "Efficient team coordination and service execution."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_8.jpg", 
    title: "Kitchen Logistics Showcase", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_8.mp4",
    description: "State of the art equipment and production methods."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_9.jpg", 
    title: "Team Operational Standards", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_9.mp4",
    description: "Focusing on efficiency, safety, and hygiene."
  },
  { 
    thumbnail: "/gallery/thumbnails/thumb_10.jpg", 
    title: "Catering Event Highlights", 
    duration: "0:15",
    videoUrl: "/gallery/videos/video_10.mp4",
    description: "A glance at our premium event catering execution."
  }
];

const Gallery = () => {
  const ref = useReveal<HTMLDivElement>();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  return (
    <section id="gallery" className="pt-6 pb-10 md:pt-16 md:pb-24 bg-white">
      <div className="container-luxe">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs md:text-sm font-bold text-accent tracking-[0.25em] uppercase">Showcase</span>
          <h2 className="mt-2 md:mt-4 font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Excellence in <span className="italic text-brand-green">Every Detail.</span>
          </h2>
        </div>
 
        <Tabs defaultValue="images" className="w-full">
          <div className="flex justify-center mb-8 md:mb-12">
            <TabsList className="bg-muted/50 p-1 rounded-full">
              <TabsTrigger value="images" className="rounded-full px-6 md:px-8 py-1.5 md:py-2 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-white">Images</TabsTrigger>
              <TabsTrigger value="videos" className="rounded-full px-6 md:px-8 py-1.5 md:py-2 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-white">Videos</TabsTrigger>
            </TabsList>
          </div>
 
          <TabsContent value="images" className="animate-fade-in outline-none">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {photos.map((p, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl md:rounded-3xl bg-muted animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img src={p.url} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-8">
                    <span className="text-xs md:text-xs font-semibold text-white/90 uppercase tracking-wider mb-1">{p.category}</span>
                    <h3 className="text-sm md:text-xl font-bold text-white line-clamp-1">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
 
          <TabsContent value="videos" className="animate-fade-in outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {videos.map((v, i) => (
                <div 
                  key={i} 
                  className="group relative rounded-xl md:rounded-3xl overflow-hidden bg-muted aspect-video animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(v.videoUrl)}
                      className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <Play className="w-4 h-4 md:w-6 md:h-6 text-white fill-current" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-end">
                      <div className="max-w-[80%]">
                        <h3 className="text-sm md:text-lg font-bold text-white line-clamp-1">{v.title}</h3>
                        <p className="text-xs text-white/80 mt-0.5 line-clamp-1">{v.description}</p>
                      </div>
                      <span className="text-xs font-medium text-white/90 bg-white/10 px-2 py-0.5 rounded">{v.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Premium Video Modal Player */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div 
            className="w-full max-w-4xl px-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-full rounded-xl md:rounded-3xl shadow-2xl border border-white/10 object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

