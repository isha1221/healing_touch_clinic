import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Treatments from "@/components/sections/Treatments";
import Webinars from "@/components/sections/Webinars";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <Webinars />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
