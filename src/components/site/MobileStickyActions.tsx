import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileStickyActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 lg:hidden animate-slide-up-slow pointer-events-none">
      <div className="container-luxe max-w-md mx-auto pointer-events-auto">
        <div className="glass shadow-elegant rounded-2xl p-2 flex gap-2 border border-white/20">
          <Button asChild className="flex-1 rounded-xl h-12 bg-primary hover:bg-primary/90 text-white shadow-none border-none">
            <a href="https://wa.me/919537336704?text=Hello%2C%20I'm%20interested%20in%20your%20hospitality%20services." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold text-base">Inquiry</span>
            </a>
          </Button>
          
          <Button asChild className="flex-1 rounded-xl h-12 bg-brand-green hover:bg-brand-green/90 text-white shadow-none border-none">
            <a href="tel:+919537336704" className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-base">Call Now</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyActions;
