import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Approach from "@/components/site/Approach";
import Clientele from "@/components/site/Clientele";
import WhyUs from "@/components/site/WhyUs";
import Compliance from "@/components/site/Compliance";
import CTASection from "@/components/site/CTASection";
import Contact from "@/components/site/Contact";
import Gallery from "@/components/site/Gallery";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import MobileStickyActions from "@/components/site/MobileStickyActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Approach />
        <Clientele />
        <Gallery />
        <WhyUs />
        <Compliance />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyActions />
    </div>
  );
};

export default Index;
