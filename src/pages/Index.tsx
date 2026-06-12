import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import CTASection from "@/components/CTASection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Pillars />
      <HowItWorks />
      <Features />
      <AISection />
      <CTASection />
      <Pricing />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
