import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Gallery />
      <WhySection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
