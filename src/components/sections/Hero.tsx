import { Button } from "@/components/ui/button";
import { Calendar, Shield, Heart, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Natural Healing
                <span className="block text-primary">For Your Family</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Experience gentle, effective homeopathic treatments that work with your body's natural healing power. 
                Trusted care for over 15 years.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary hover:shadow-healing text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm">Natural Healing</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">1000+ Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image/Clinic */}
          <div className="relative animate-healing-float">
            <div className="relative rounded-3xl overflow-hidden shadow-healing bg-gradient-healing p-8">
              <div className="bg-card rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm">
                 
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Dr. [Doctor Name]</h3>
                <p className="text-muted-foreground mb-4">M.D. (Homoeopathy), 15+ Years Experience</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Specialized in Child & Family Health</p>
                  <p>✓ Chronic Disease Management</p>
                  <p>✓ Holistic Wellness Approach</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full animate-gentle-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Conditions Treated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


