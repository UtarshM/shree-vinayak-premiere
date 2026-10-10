import { Award, Globe2, Users, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Globe2, value: "Pan India", label: "Operations Reach" },
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: ShieldCheck, value: "Certified", label: "Fully Compliant" },
];

const TrustBar = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative -mt-12 md:-mt-16 z-20 px-4">
      <div className="container-luxe">
        <div ref={ref} className="reveal glass rounded-3xl shadow-elegant px-5 md:px-10 py-6 md:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <it.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <div className="font-display text-xl md:text-2xl font-bold text-primary leading-none">{it.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider font-medium">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
