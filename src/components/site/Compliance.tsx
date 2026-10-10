import { ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const certs = [
  "GST Registered",
  "FSSAI Licensed",
  "PF & ESIC Registered",
  "Labour License",
  "MSE Certified",
  "BCAS Certified",
];

const Compliance = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-10 md:py-32 bg-background">
      <div className="container-luxe">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <span className="text-[9px] md:text-xs font-semibold text-accent tracking-[0.3em] uppercase">Compliance & Certifications</span>
          <h2 className="mt-2 md:mt-4 font-display text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
            Fully compliant. <span className="italic text-accent">Government registered.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {certs.map((c, i) => (
            <div
              key={c}
              className="group glass rounded-2xl p-6 text-center hover:shadow-gold transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div className="font-semibold text-primary text-sm md:text-base">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
