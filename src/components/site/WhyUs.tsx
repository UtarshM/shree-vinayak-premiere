import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import whyImg from "@/assets/why-choose-us.jpg";

const reasons = [
  { t: "10+ Years of Experience", d: "Decade-deep expertise across catering, housekeeping & manpower." },
  { t: "Quality Assurance", d: "Defined SLAs, audits and KPIs to guarantee consistent excellence." },
  { t: "Hygienic Practices", d: "FSSAI-compliant kitchens, sanitised tools and certified processes." },
  { t: "Skilled Manpower", d: "Trained, vetted, uniformed and supervised hospitality professionals." },
  { t: "Pan India Reach", d: "Operational capability across major Indian cities and industrial hubs." },
];

const WhyUs = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="py-10 md:py-32 bg-gradient-cream overflow-hidden">
      <div className="container-luxe">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-[9px] md:text-xs font-semibold text-accent tracking-[0.3em] uppercase">Why Choose Us</span>
            <h2 className="mt-2 md:mt-4 font-display text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
              Built on trust. <span className="italic text-gradient-gold">Delivered</span> with care.
            </h2>
            <p className="mt-3 md:mt-6 text-sm md:text-lg text-muted-foreground">
              Five reasons India's leading organizations choose Shree Vinayak.
            </p>
 
            <ul className="mt-6 md:mt-10 space-y-3 md:space-y-5">
              {reasons.map((r) => (
                <li key={r.t} className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-gold group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white stroke-[3]" />
                  </div>
                  <div>
                    <div className="font-display text-base md:text-xl font-semibold text-primary leading-snug">{r.t}</div>
                    <div className="text-[11px] md:text-base text-muted-foreground mt-0.5 leading-relaxed">{r.d}</div>
                  </div>
                </li>
              ))}
            </ul>
 
            <div className="mt-8 md:mt-10">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto text-sm">
                <a href="#contact">Request a Proposal</a>
              </Button>
            </div>
          </div>
 
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[16/9] md:aspect-[4/5]">
              <img src={whyImg} alt="Hospitality team meeting" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
