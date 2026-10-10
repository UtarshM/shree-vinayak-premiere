import { ArrowUpRight, ChefHat, Sparkles, Building2, Users, Hospital, Home, UtensilsCrossed } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: ChefHat,
    title: "Industrial Catering",
    desc: "Comprehensive canteen management for factories and industrial hubs, delivering nutritious, large-scale meal solutions with zero compromise on hygiene.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Corporate Catering",
    desc: "Premium dining solutions for offices and corporate parks. From boardroom lunches to employee cafeterias, we prioritize taste and health.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Hospital,
    title: "Hospital Cafe & Catering",
    desc: "Specialized catering for healthcare facilities, focusing on patient nutrition, visitor cafes, and clinical-grade kitchen operations.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    icon: Home,
    title: "Guest House Management",
    desc: "End-to-end management of corporate guest houses, ensuring a seamless 'home-away-from-home' experience for traveling executives.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "Outdoor Catering",
    desc: "Elegantly curated catering services for corporate events, product launches, and social celebrations with customized menus.",
    img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Housekeeping Services",
    desc: "Professional cleaning and facility maintenance for corporate offices, hospitals, and residential complexes using eco-friendly solutions.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    desc: "Vetted and trained workforce for hospitality, operations, and support roles, tailored to meet specific industrial and corporate needs.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
  },
];

const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-10 md:py-32 bg-background">
      <div className="container-luxe">
        <div ref={ref} className="reveal max-w-3xl mb-10 md:mb-16">
          <span className="text-[9px] md:text-xs font-semibold text-accent tracking-[0.3em] uppercase">Our Services</span>
          <h2 className="mt-2 md:mt-4 font-display text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
            Seven pillars of <span className="italic text-gradient-gold">premium</span> hospitality.
          </h2>
          <p className="mt-3 md:mt-6 text-sm md:text-lg text-muted-foreground">
            A complete hospitality stack — designed for businesses that demand consistency,
            quality and operational excellence.
          </p>
        </div>
 
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};
 
const ServiceCard = ({ icon: Icon, title, desc, img, delay }: { icon: any; title: string; desc: string; img: string; delay: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group flex-shrink-0 w-[280px] md:w-auto relative overflow-hidden rounded-2xl md:rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-700 cursor-pointer snap-start"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
          loading="lazy"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute top-4 left-4 md:top-5 md:left-5 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
          <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
      </div>
      <div className="p-5 md:p-8">
        <div className="flex items-start justify-between gap-3 md:gap-4">
          <h3 className="font-display text-lg md:text-2xl font-semibold text-primary leading-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-accent-foreground transition-colors" />
          </div>
        </div>
        <p className="mt-3 text-xs md:text-base text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">{desc}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-[10px] md:text-sm font-semibold text-accent overflow-hidden uppercase tracking-wider">
          <span>Learn More</span>
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
