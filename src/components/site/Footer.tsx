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
            <div className="flex items-center mb-5 md:mb-6">
              <div className="h-20 md:h-24 w-auto bg-white rounded-2xl px-5 py-2.5 shadow-elegant flex items-center justify-center">
                <img src={logoFinal} alt="Shree Vinayak Hospitality" className="h-full w-auto max-h-16 md:max-h-20 object-contain" />
              </div>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-sm">
              Premium catering, housekeeping & manpower solutions across India. Beyond expectations, into exceptional hospitality.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-6">
              <a href="https://www.instagram.com/shreevinayakhospitality/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/shreevinayakhospitalityservices" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/10 md:border-0 pt-4 md:pt-0 w-full">
            <button 
              onClick={() => toggle('links')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <div className="font-display text-base md:text-lg mb-0 md:mb-4 uppercase tracking-wider md:normal-case font-bold">Quick Links</div>
              <ChevronDown className={cn("w-5 h-5 md:hidden transition-transform", openSection === 'links' && "rotate-180")} />
            </button>
            <ul className={cn(
              "space-y-2.5 text-sm md:text-base text-primary-foreground/80 mt-3 md:mt-0 transition-all duration-300 overflow-hidden",
              "md:block md:max-h-none",
              openSection === 'links' ? "max-h-80" : "max-h-0"
            )}>
              {["About", "Services", "Approach", "Clients", "Gallery", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-white transition-colors block py-0.5">{l}</a>
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
              <div className="font-display text-base md:text-lg mb-0 md:mb-4 uppercase tracking-wider md:normal-case font-bold">Reach Us</div>
              <ChevronDown className={cn("w-5 h-5 md:hidden transition-transform", openSection === 'reach' && "rotate-180")} />
            </button>
            <div className={cn(
              "text-sm md:text-base text-primary-foreground/85 space-y-4 mt-3 md:mt-0 transition-all duration-300 overflow-hidden",
              "md:block md:max-h-none",
              openSection === 'reach' ? "max-h-[500px]" : "max-h-0"
            )}>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                <div className="leading-relaxed">
                  T.F-306, Shilp Corner, Nr. Subhash Chowk, Gurukul Road, Memnagar, Ahmedabad
                </div>
              </div>
              <div className="pt-1">
                <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">Leadership</div>
                <div className="space-y-2">
                  <a href="tel:+919537336704" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                    <Phone className="w-4 h-4" /> +91 95373 36704
                  </a>
                  <a href="mailto:svh.shreevinayakhospitality@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all font-medium">
                    <Mail className="w-4 h-4" /> svh.shreevinayakhospitality@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-primary-foreground/70">
          <div>© {new Date().getFullYear()} Shree Vinayak Hospitality Services.</div>
          <div className="md:block hidden">Crafted for Hospitality Excellence</div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
