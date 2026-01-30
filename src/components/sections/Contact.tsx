
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
import { AnimatedElement } from "@/hooks/use-scroll-animation";

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
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, [name]: digitsOnly });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://healing_touch_backend.ishapathak515.workers.dev/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || `HTTP ${res.status}`);
      }

      await res.json();
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you soon.",
        variant: "default",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Error sending message:", err);
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clinicInfo = {
    address: "Shop no 6, Rahul society, chowk, near Ganga Dham, Hamal Nagar, Market Yard, Bibwewadi, Pune, Maharashtra 411037",
    phone: "+91 80879 94395",
    email: "healingtouch20@yahoo.com",
    whatsapp: "+91 80879 94395",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "10:00 AM - 2:00 PM"
    },
    googleMapsLink:"https://maps.app.goo.gl/kQTXrTCC7vxKU4u59"

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
            <AnimatedElement animation="fadeInLeft">
              <Card className="border-primary/20 shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    Clinic Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{clinicInfo.address}</p>
                  {/* <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button> */}
                  <Button 
  variant="outline" 
  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  onClick={() => window.open(clinicInfo.googleMapsLink, '_blank')}
>
  <Navigation className="w-4 h-4 mr-2" />
  Get Directions
</Button>
                </CardContent>
              </Card>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedElement animation="fadeInUp" delay={100}>
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
  onClick={() => window.location.href = `tel:${clinicInfo.phone}`}
>
  Call Now
</Button>
                  </CardContent>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="fadeInUp" delay={200}>
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
  onClick={() => window.location.href = `mailto:${clinicInfo.email}?subject=Inquiry from Website`}
>
  Send Email
</Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>

            <AnimatedElement animation="fadeInLeft" delay={300}>
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
            </AnimatedElement>
          </div>

          {/* Contact Form */}
          <AnimatedElement animation="fadeInRight">
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
                      <div className="flex items-center">
                        <span className="px-3">+91</span>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter 10-digit number"
                          className="mt-1 rounded-l-none"
                          maxLength={10}
                        />
                      </div>
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
          </AnimatedElement>
        </div>

        {/* Map Section */}
        <AnimatedElement animation="scaleIn" delay={200}>
          <div className="mt-16">
            <Card className="overflow-hidden shadow-healing">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">Find Our Clinic</CardTitle>
              </CardHeader>
           
              <CardContent className="p-0">
  <div className="relative w-full h-[450px] bg-muted group">
    {/* The Live Interactive Map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30274.048826385166!2d73.85366788299018!3d18.472055134011914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebdee99775a1%3A0x31a04fcd962da882!2sHealing%20Touch%20Homoeopathic%20Clinic!5e0!3m2!1sen!2sin!4v1768123553593!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Clinic Location"
      className="grayscale hover:grayscale-0 transition-all duration-500"
    />

    {/* Optional: Floating Button Overlay (Visible on hover or mobile) */}
    <div className="absolute bottom-4 right-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Button 
        onClick={() => window.open("https://maps.google.com/?q=Healing+Touch+Homoeopathic+Clinic+Pune", "_blank")}
        className="bg-white text-primary hover:bg-primary hover:text-white shadow-lg"
      >
        <Navigation className="w-4 h-4 mr-2" />
        Open in Google Maps
      </Button>
    </div>
  </div>
</CardContent>
            </Card>
          </div>
        </AnimatedElement>

      
        <div className="mt-16 grid md:grid-cols-2 gap-6">
  {[
    { 
      icon: <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />, 
      title: "Book Appointment", 
      text: "Schedule your consultation with our expert homeopath" 
    },
    { 
      icon: <Phone className="w-12 h-12 text-accent mx-auto mb-4" />, 
      title: "Emergency", 
      text: "Urgent health concerns? Call us immediately" 
    }
  ].map((item, i) => (
    <AnimatedElement key={i} animation="slideUp" delay={i * 200}>
      <Card className="text-center border-primary/20 hover:shadow-healing transition-all duration-300">
        <CardContent className="p-6">
          {item.icon}
          <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{item.text}</p>
          
          {/* Added onClick handler with the tel: protocol */}
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = "tel:+918087994395"}
          >
            {item.title === "Book Appointment" ? "Book Now" : "Call Now"}
          </Button>
        </CardContent>
      </Card>
    </AnimatedElement>
  ))}
</div>
      </div>
    </section>
  );
};

export default Contact;
