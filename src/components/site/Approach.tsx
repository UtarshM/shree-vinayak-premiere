import { Globe, GraduationCap, HeartHandshake } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    icon: Globe,
    title: "Pan India Operations",
    desc: "A scalable operational footprint that delivers consistent service quality across cities and states.",
  },
  {
    icon: GraduationCap,
    title: "Trained & Groomed Staff",
    desc: "Continuous training in hospitality, hygiene and grooming ensures every interaction reflects excellence.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Model",
    desc: "Custom SLAs, dedicated account managers, and transparent reporting tailored to each engagement.",
  },
];

const Approach = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="approach" className="py-10 md:py-32 bg-gradient-to-br from-[#0a2118] to-[#05140f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
 
      <div className="container-luxe relative z-10">
        <div ref={ref} className="reveal max-w-3xl mb-10 md:mb-20 text-center mx-auto">
          <span className="text-xs md:text-sm font-bold text-accent tracking-[0.25em] uppercase mb-3 block">Our Excellence</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.2] md:leading-[1.1]">
            The Shree Vinayak <br />
            <span className="italic text-gradient-gold">Advantage</span>
          </h2>
          <p className="mt-4 md:mt-6 text-white/70 text-base md:text-lg max-w-xl mx-auto">
            Combining traditional values with modern operational precision to deliver unmatched hospitality solutions.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {items.map((it, i) => {
            const cardRef = useReveal<HTMLDivElement>();
            return (
              <div
                key={it.title}
                ref={cardRef}
                className="reveal group relative bg-white/5 backdrop-blur-md rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-white/10 hover:border-primary/50 transition-all duration-700 hover:-translate-y-3"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <it.icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
                </div>
                
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-3xl bg-gradient-gold flex items-center justify-center shadow-orange-glow mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <it.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-primary transition-colors">{it.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/90 transition-colors line-clamp-3 md:line-clamp-none">{it.desc}</p>
                
                <div className="mt-4 md:mt-8 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
