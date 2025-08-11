import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/736f31af-76da-4027-928d-ded6610cab7a.png" 
                alt="Healing Touch Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">Healing Touch</h3>
                <p className="text-sm text-background/80">Homoeopathic Clinic</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Natural healing through homeopathy. Trusted care for your family's health 
              and wellness needs for over 15 years.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm">Serving 1000+ happy families</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('treatments')}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Treatments
              </button>
              <button 
                onClick={() => scrollToSection('webinars')}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Webinars
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Patient Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>• Child Health Care</p>
              <p>• Chronic Disease Management</p>
              <p>• Women's Health</p>
              <p>• Mental & Emotional Wellness</p>
              <p>• Skin & Hair Problems</p>
              <p>• Online Consultations</p>
              <p>• Health Webinars</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <p>123 Healing Street</p>
                  <p>Wellness District</p>
                  <p>Mumbai - 400001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+919876543210" 
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:info@healingtouchclinic.com" 
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  info@healingtouchclinic.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-4 border-t border-background/20">
              <h5 className="font-medium text-sm mb-2">Opening Hours</h5>
              <div className="text-xs text-background/80 space-y-1">
                <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-background/80">Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-background/80">Stay updated:</span>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-3 py-2 text-sm bg-background/10 border border-background/20 rounded text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/80">
              © {currentYear} Healing Touch Homoeopathic Clinic. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-background/80">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Medical Disclaimer</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-background/60">
              Disclaimer: Results may vary from person to person. Homeopathic treatment is individualized and may not work for everyone. 
              Please consult with our qualified homeopath for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;