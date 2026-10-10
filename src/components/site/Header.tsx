import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoFinal from "@/assets/logo-final.webp";

const links = [
  { href: "#top", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#clients", label: "Clients" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-elegant border-b border-border/50 transition-all duration-300">
      <div className="container-luxe py-2.5 md:py-4">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <a href="#top" className="flex items-center group">
            <div className="relative h-16 md:h-20 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src={logoFinal} 
                alt="Shree Vinayak Hospitality Services" 
                className="h-full w-auto max-h-16 md:max-h-20 object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-primary/80 hover:text-primary transition-all relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="tel:+919537336704" className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 95373 36704</span>
            </a>
            <Button asChild variant="hero" size="lg" className="hidden md:inline-flex shadow-orange-glow">
              <a href="#contact">Get Proposal</a>
            </Button>
            <button
              className="lg:hidden p-2 text-primary hover:bg-muted rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white border border-border/50 rounded-3xl p-6 shadow-2xl animate-fade-in">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-primary hover:text-accent transition-colors py-2 border-b border-muted last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:+919537336704" className="flex items-center gap-3 text-primary font-bold">
                  <Phone className="w-5 h-5" /> +91 95373 36704
                </a>
                <Button asChild variant="hero" className="w-full py-6 text-lg shadow-orange-glow">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Proposal</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
