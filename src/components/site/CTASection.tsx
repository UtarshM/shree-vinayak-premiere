import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";
import heroImg from "@/assets/hero-hospitality.jpg";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container-luxe">
        <div className="relative rounded-3xl overflow-hidden shadow-elegant">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />

          <div className="relative px-6 md:px-16 lg:px-20 py-16 md:py-24 text-white">
            <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1.5 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-[10px] md:text-xs font-medium tracking-wide uppercase">Fast Onboarding · Customised Solutions</span>
            </div>
            <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl">
              Looking for reliable <span className="italic text-white">hospitality services?</span>
            </h2>
            <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Talk to our team today and receive a tailored proposal within 48 hours.
            </p>
 
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Request a Proposal <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button asChild variant="outline-light" size="lg" className="w-full sm:w-auto">
                <a href="tel:+919537336704"><Phone className="w-5 h-5" /> Talk to an Expert</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
