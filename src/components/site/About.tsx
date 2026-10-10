import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import founderImg from "@/assets/founder.png";

const points = [
  "15+ years of industry-leading experience",
  "Headquartered in Ahmedabad, serving Pan India",
  "Trusted for reliability, hygiene & professionalism",
  "Customised SLAs for every client engagement",
];

const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-10 md:py-32 bg-gradient-cream overflow-hidden">
      <div className="container-luxe">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={founderImg} alt="Arvind Singh - CEO and Founder, Shree Vinayak Hospitality Services" className="w-full h-full object-cover object-top aspect-square md:aspect-[4/3]" loading="lazy" width={1280} height={1280} />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-8 md:-right-8 glass rounded-2xl px-3.5 py-2.5 md:px-6 md:py-5 shadow-elegant max-w-[160px] md:max-w-[220px] z-10">
              <div className="font-display text-2xl md:text-4xl font-bold text-gradient-gold">15+</div>
              <div className="text-xs md:text-sm text-primary mt-0.5 font-medium leading-tight">Years of Excellence in Hospitality.</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs md:text-sm font-bold text-accent tracking-[0.25em] uppercase">Leadership & Vision</span>
            <h2 className="mt-2 md:mt-4 font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              A legacy of <span className="italic text-gradient-gold">hands-on</span> leadership.
            </h2>
            <div className="mt-4 space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of specialized expertise in the hospitality industry, Arvind Singh 
                brings a potent blend of operational leadership and entrepreneurial vision to 
                Shree Vinayak Hospitality Services.
              </p>
              <p className="hidden md:block">
                Having worked across diverse sectors, he has mastered the art of service excellence 
                and efficient business management. Under his guidance as Founder and CEO, the company 
                has built a reputation for streamlining complex operations and maintaining the 
                highest service standards in industrial catering, facility management, and beyond.
              </p>
              <p className="md:hidden">
                Under his guidance, the company has built a reputation for streamlining complex operations 
                and maintaining the highest service standards.
              </p>
            </div>
 
            <ul className="mt-6 space-y-2 md:space-y-4">
              {points.slice(0, 3).map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary/90 text-sm md:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
