import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-hospitality.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium hospitality service — chef plating gourmet food at a corporate event"
          className="w-full h-full object-cover scale-105 animate-fade-in-slow"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Floating gold orb */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="container-luxe relative z-10 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1.5 mb-6 md:mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
              Trusted Pan-India Hospitality Partner · Since 2014
            </span>
          </div>
 
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] md:leading-[1.05] animate-slide-up">
            Beyond Expectations.
            <br />
            <span className="text-white italic">Into Exceptional</span>
            <br />
            Hospitality.
          </h1>
 
          <p className="mt-6 md:mt-8 text-base md:text-xl text-white/80 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "150ms" }}>
            End-to-end catering, housekeeping & manpower solutions for corporates,
            factories and institutions across India.
          </p>
 
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <Button asChild variant="hero" size="lg" className="md:px-8 md:py-7 md:text-lg">
              <a href="#contact">
                Get a Proposal <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </Button>
            <Button asChild variant="outline-light" size="lg" className="md:px-8 md:py-7 md:text-lg">
              <a href="tel:+919537336704">
                <Phone className="w-4 h-4 md:w-5 md:h-5" /> Call Now
              </a>
            </Button>
          </div>
 
          {/* Quick stats */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl animate-fade-in" style={{ animationDelay: "500ms" }}>
            {[
              { v: "10+", l: "Years Experience" },
              { v: "100+", l: "Clients Served" },
              { v: "Pan", l: "India Operations" },
              { v: "100%", l: "Compliant" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-accent/60 pl-4">
                <div className="font-display text-3xl md:text-4xl font-bold text-white">{s.v}</div>
                <div className="text-xs md:text-sm text-white/70 mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
