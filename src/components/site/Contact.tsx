import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, User, Send } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  requirement: z.string().trim().min(5, "Tell us briefly about your requirement").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", phone: "", requirement: "" });
  const [submitting, setSubmitting] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please review the form", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const msg = `Hello Shree Vinayak Hospitality,%0A%0AName: ${encodeURIComponent(form.name)}%0ACompany: ${encodeURIComponent(form.company || "—")}%0APhone: ${encodeURIComponent(form.phone)}%0ARequirement: ${encodeURIComponent(form.requirement)}`;
    window.open(`https://wa.me/919537336704?text=${msg}`, "_blank");
    toast({ title: "Request sent!", description: "Our team will contact you shortly." });
    setForm({ name: "", company: "", phone: "", requirement: "" });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-10 md:py-32 bg-gradient-cream">
      <div className="container-luxe">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-[9px] md:text-xs font-semibold text-accent tracking-[0.3em] uppercase">Contact</span>
          <h2 className="mt-2 md:mt-4 font-display text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
            Let's start a <span className="italic text-accent">conversation.</span>
          </h2>
          <p className="mt-3 md:mt-6 text-sm md:text-lg text-muted-foreground">
            Share your requirement — we'll get back shortly.
          </p>
        </div>
 
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-card rounded-2xl md:rounded-3xl shadow-elegant p-6 md:p-10 space-y-4 md:space-y-5">
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="text-xs font-medium text-primary mb-1 block">Your Name *</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" required maxLength={100} className="h-10 md:h-12 rounded-lg md:rounded-xl text-sm" />
                </div>
                <div>
                  <label className="text-xs font-medium text-primary mb-1 block">Company</label>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" maxLength={120} className="h-10 md:h-12 rounded-lg md:rounded-xl text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-primary mb-1 block">Phone *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." required maxLength={20} className="h-10 md:h-12 rounded-lg md:rounded-xl text-sm" />
              </div>
              <div>
                <label className="text-xs font-medium text-primary mb-1 block">Your Requirement *</label>
                <Textarea value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} placeholder="Describe your requirement..." required rows={4} maxLength={1000} className="rounded-lg md:rounded-xl resize-none text-sm" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full text-sm h-11 md:h-auto" disabled={submitting}>
                <Send className="w-4 h-4 mr-2" /> Send via WhatsApp
              </Button>
              <p className="text-[10px] text-muted-foreground text-center">By submitting, your message opens in WhatsApp.</p>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={MapPin} title="Visit Us">
              <div className="leading-relaxed">
                <strong className="text-primary">Shree Vinayak Hospitality Services</strong><br />
                T.F-306, Shilp Corner,<br />
                Nr. Subhash Chowk, Gurukul Road,<br />
                Memnagar, Ahmedabad
              </div>
            </InfoCard>

            <InfoCard icon={User} title="Leadership">
              <div className="space-y-3">
                <div>
                  <div><strong>Mr. Arvind Singh</strong> <span className="text-muted-foreground">(CEO and Founder)</span></div>
                  <a href="tel:+919537336704" className="flex items-center gap-1.5 mt-1 hover:text-primary transition-colors">
                    <Phone className="w-3.5 h-3.5 text-primary" /> +91-9537336704
                  </a>
                  <a href="tel:+918240159322" className="flex items-center gap-1.5 mt-0.5 hover:text-primary transition-colors">
                    <Phone className="w-3.5 h-3.5 text-primary" /> +91-8240159322
                  </a>
                </div>
              </div>
            </InfoCard>

            <InfoCard icon={Mail} title="Email Us">
              <div className="space-y-1.5">
                <a href="mailto:svh.shreevinayakhospitality@gmail.com" className="block hover:text-primary transition-colors break-all">
                  svh.shreevinayakhospitality@gmail.com
                </a>
                <a href="mailto:info@shreevinayakhospitality.com" className="block hover:text-primary transition-colors break-all">
                  info@shreevinayakhospitality.com
                </a>
              </div>
            </InfoCard>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-elegant aspect-[16/7]">
          <iframe
            title="Shree Vinayak Hospitality Location — Memnagar, Ahmedabad"
            src="https://www.google.com/maps?q=Shilp+Corner,+Nr.+Subhash+Chowk,+Gurukul+Road,+Memnagar,+Ahmedabad&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

const InfoCard = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="glass rounded-2xl p-6 hover:shadow-gold transition-all duration-500 hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="font-display text-lg font-semibold text-primary mb-1">{title}</div>
        <div className="text-foreground/80 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export default Contact;
