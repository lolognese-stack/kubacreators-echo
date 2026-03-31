import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Gallery />
      <VideoSection />
      <WhySection />
      <PricingSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
