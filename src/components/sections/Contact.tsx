import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Calendar,
  Navigation
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const clinicInfo = {
    address: "123 Healing Street, Wellness District, Mumbai - 400001",
    phone: "+91 98765 43210",
    email: "info@healingtouchclinic.com",
    whatsapp: "+91 98765 43210",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "10:00 AM - 2:00 PM"
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your healing journey? Contact us for consultation, 
            appointment booking, or any questions about our treatments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Clinic Info Cards */}
            <Card className="border-primary/20 shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  Clinic Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{clinicInfo.address}</p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-secondary/20 shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Phone className="w-5 h-5 mr-2 text-secondary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">Clinic Phone</p>
                  <p className="font-semibold text-foreground">{clinicInfo.phone}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/20 shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-5 h-5 mr-2 text-accent" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">General Inquiries</p>
                  <p className="font-semibold text-foreground text-sm">{clinicInfo.email}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Opening Hours */}
            <Card className="border-primary/20 shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 mr-3 text-primary" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">{clinicInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">{clinicInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">{clinicInfo.hours.sunday}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Emergency consultations available by appointment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Chat */}
            <Card className="border-green-500/20 shadow-gentle bg-green-50/50 dark:bg-green-900/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                      Quick WhatsApp Chat
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get instant answers to your health queries
                    </p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-healing">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your health concerns or questions..."
                      required
                      className="mt-1"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-healing"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy and will never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-healing">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Find Our Clinic</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Healing Touch Homoeopathic Clinic
                  </h3>
                  <p className="text-muted-foreground mb-4">{clinicInfo.address}</p>
                  <Button className="bg-gradient-primary hover:shadow-healing">
                    <Navigation className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center border-primary/20 hover:shadow-healing transition-all duration-300">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Book Appointment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule your consultation with our expert homeopath
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Book Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-secondary/20 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <MessageSquare className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Join Webinar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about natural healing from home
              </p>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Register
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-accent/20 hover:shadow-gentle transition-all duration-300">
            <CardContent className="p-6">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Emergency</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Urgent health concerns? Call us immediately
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;