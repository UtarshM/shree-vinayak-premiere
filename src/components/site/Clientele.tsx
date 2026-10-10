import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import welspunLogo from "@/assets/welspun.png";
import capitalLogo from "@/assets/capital.jpg";
import staymoreLogo from "@/assets/staymore.jpg";
import kripalLogo from "@/assets/kripal.jpg";
import sachivalayaLogo from "@/assets/sachivalaya.png";
import dcafeLogo from "@/assets/dcafe.png";
import mkcLogo from "@/assets/mkc.jpg";
import nkProteinsLogo from "@/assets/nk_proteins.jpg";

const clients = [
  { name: "Welspun GCC",          logo: welspunLogo,    since: "2023" },
  { name: "Capital PG",           logo: capitalLogo,    since: "2024" },
  { name: "Stay More Homes",      logo: staymoreLogo,   since: "2024" },
  { name: "Kripal Homes",         logo: kripalLogo,     since: "2024" },
  { name: "Sachivalay Gandhinagar", logo: sachivalayaLogo, since: "2024" },
  { name: "D Cafe & Restro",      logo: dcafeLogo,      since: "2025" },
  { name: "MKC (Rajkot)",         logo: mkcLogo,        since: "2026" },
  { name: "N. K. Proteins Pvt. Ltd.", logo: nkProteinsLogo, since: "2026" },
];


const Clientele = () => {
  const ref = useReveal<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle seamless loop
  useEffect(() => {
    if (currentIndex >= clients.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // Match this with CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section id="clients" className="pt-10 pb-4 md:pt-24 md:pb-10 bg-white overflow-hidden">
      <div className="container-luxe">

        {/* Section Header */}
        <div ref={ref} className="reveal mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-accent rounded-full flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
              Our Trust Clients
            </h2>
            <div className="flex-1 h-1 bg-accent rounded-full ml-2" />
          </div>
        </div>

        {/* Clients Row - Discrete Step-by-Step Scrolling */}
        <div 
          className="relative border border-gray-100 rounded-2xl overflow-hidden shadow-soft bg-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ 
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` 
            }}
          >
            {clients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center justify-center p-8 md:p-12 bg-white border-r border-gray-100"
              >
                <div className="h-20 md:h-28 w-full flex items-center justify-center mb-5">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 md:max-h-28 max-w-full w-auto object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
                <p className="text-base md:text-lg font-bold text-gray-800 text-center">
                  {client.name}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-widest font-medium">Since {client.since}</p>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {clients.map((client, idx) => (
              <div
                key={`${client.name}-dup-${idx}`}
                className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center justify-center p-8 md:p-12 bg-white border-r border-gray-100"
              >
                <div className="h-20 md:h-28 w-full flex items-center justify-center mb-5">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 md:max-h-28 max-w-full w-auto object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
                <p className="text-base md:text-lg font-bold text-gray-800 text-center">
                  {client.name}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-widest font-medium">Since {client.since}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clientele;
