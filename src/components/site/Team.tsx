import { useReveal } from "@/hooks/useReveal";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Arvind Singh",
    role: "CEO and Founder",
    bio: "A visionary leader with 15+ years of hospitality expertise, driving excellence through operational mastery and entrepreneurial spirit.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
];

const Team = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-cream/30">
      <div className="container-luxe">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-accent tracking-[0.3em] uppercase">Our Leadership</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary leading-tight">
            The faces behind <span className="italic text-gradient-gold">excellence.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Meet the dedicated professional leading Shree Vinayak Hospitality Services 
            towards a new standard of service.
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto w-full">
          {team.map((member, i) => (
            <div 
              key={member.name} 
              className="reveal group flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-soft hover:shadow-elegant transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden shadow-elegant border-4 border-white">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">{member.name}</h3>
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mt-1">{member.role}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
