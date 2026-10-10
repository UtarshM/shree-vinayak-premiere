import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919537336704?text=Hello%20Shree%20Vinayak%20Hospitality,%20I%27d%20like%20to%20know%20more%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white hidden lg:flex items-center justify-center shadow-elegant hover:scale-110 transition-transform duration-300 animate-glow-pulse"
  >
    <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
  </a>
);

export default FloatingWhatsApp;
