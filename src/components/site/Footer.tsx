import logoFinal from "@/assets/logo-final.webp";
import { Instagram, Facebook, ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
 
const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
 
  const toggle = (s: string) => setOpenSection(openSection === s ? null : s);
 
  return (
    <footer className="bg-brand-green text-primary-foreground py-8 md:py-14">
      <div className="container-luxe">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="h-16 md:h-24 w-auto overflow-hidden bg-white rounded-xl md:rounded-2xl p-2 md:p-3 shadow-elegant flex items-center justify-center">
                <img src={logoFinal} alt="Shree Vinayak Hospitality" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-xs md:text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Premium catering, housekeeping & manpower solutions across India. Beyond expectations, into exceptional hospitality.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-6">
              <a href="https://www.instagram.com/shreevinayakhospitality/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.facebook.com/shreevinayakhospitalityservices" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
 
          {/* Quick Links */}
          <div className="border-t border-white/10 md:border-0 pt-4 md:pt-0 w-full">
            <button 
              onClick={() => toggle('links')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <div className="font-display text-sm md:text-lg mb-0 md:mb-4 uppercase tracking-widest md:normal-case md:tracking-normal">Quick Links</div>
              <ChevronDown className={cn("w-4 h-4 md:hidden transition-transform", openSection === 'links' && "rotate-180")} />
            </button>
            <ul className={cn(
              "space-y-2 text-[11px] md:text-sm text-primary-foreground/70 mt-3 md:mt-0 transition-all duration-300 overflow-hidden",
              "md:block md:max-h-none",
              openSection === 'links' ? "max-h-60" : "max-h-0"
            )}>
              {["About", "Services", "Approach", "Clients", "Gallery", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Reach Us */}
          <div className="border-t border-white/10 md:border-0 pt-4 md:pt-0 w-full">
            <button 
              onClick={() => toggle('reach')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <div className="font-display text-sm md:text-lg mb-0 md:mb-4 uppercase tracking-widest md:normal-case md:tracking-normal">Reach Us</div>
              <ChevronDown className={cn("w-4 h-4 md:hidden transition-transform", openSection === 'reach' && "rotate-180")} />
            </button>
            <div className={cn(
              "text-[11px] md:text-sm text-primary-foreground/70 space-y-3 mt-3 md:mt-0 transition-all duration-300 overflow-hidden",
              "md:block md:max-h-none",
              openSection === 'reach' ? "max-h-[500px]" : "max-h-0"
            )}>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed">
                  T.F-306, Shilp Corner, Nr. Subhash Chowk, Gurukul Road, Memnagar, Ahmedabad
                </div>
              </div>
              <div className="pt-1">
                <div className="font-semibold text-primary-foreground/90 text-[10px] uppercase tracking-wider mb-1">Leadership</div>
                <div className="space-y-1">
                  <a href="tel:+919537336704" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-3 h-3" /> +91 95373 36704
                  </a>
                  <a href="mailto:svh.shreevinayakhospitality@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                    <Mail className="w-3 h-3" /> svh.shreevinayakhospitality@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} Shree Vinayak Hospitality Services.</div>
          <div className="md:block hidden">Crafted for Hospitality Excellence</div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
