import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 shadow-gentle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/736f31af-76da-4027-928d-ded6610cab7a.png" 
              alt="Healing Touch Homoeopathic Clinic"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-primary">Healing Touch</h1>
              <p className="text-xs text-muted-foreground">Homoeopathic Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('treatments')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Treatments
            </button>
            <button 
              onClick={() => scrollToSection('webinars')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Webinars
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                size="sm"
                onClick={() => scrollToSection('webinars')}
                className="bg-gradient-primary hover:shadow-healing"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-gentle">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('treatments')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
            >
              Treatments
            </button>
            <button 
              onClick={() => scrollToSection('webinars')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
            >
              Webinars
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
            >
              Contact
            </button>
            
            <div className="px-3 py-2 space-y-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                size="sm"
                onClick={() => scrollToSection('webinars')}
                className="w-full bg-gradient-primary hover:shadow-healing"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;