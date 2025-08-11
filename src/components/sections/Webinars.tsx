import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  CreditCard, 
  CheckCircle,
  IndianRupee,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Webinars = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const { toast } = useToast();

  const upcomingWebinar = {
    title: "Natural Healing for Common Health Issues",
    date: "March 25, 2024",
    time: "7:00 PM - 8:30 PM IST",
    cost: 299,
    description: "Learn about effective homeopathic remedies for everyday health concerns like cold, cough, digestive issues, and stress management. Interactive Q&A session included.",
    topics: [
      "Common Cold & Flu Management",
      "Digestive Health Solutions",
      "Stress & Anxiety Relief",
      "Child Health Basics",
      "Immune System Boosting",
      "Q&A with Dr. [Name]"
    ],
    benefits: [
      "Live interaction with expert",
      "Practical remedies you can use",
      "Recorded session access",
      "Follow-up consultation discount"
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and phone number are required.",
        variant: "destructive"
      });
      return;
    }

    setIsRegistering(true);
    
    // Simulate registration process
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "You will receive webinar details via email and SMS.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
      setIsRegistering(false);
    }, 2000);
  };

  return (
    <section id="webinars" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Webinar</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our educational webinars to learn about natural healing and get expert guidance 
            from the comfort of your home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Webinar Details */}
          <div className="space-y-8">
            <Card className="border-primary/20 shadow-healing">
              <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    <Video className="w-4 h-4 mr-1" />
                    Live Webinar
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹{upcomingWebinar.cost}</div>
                    <div className="text-sm opacity-90">per person</div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl mt-4">{upcomingWebinar.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Date & Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{upcomingWebinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{upcomingWebinar.time}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{upcomingWebinar.description}</p>

                {/* Topics Covered */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {upcomingWebinar.topics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What You'll Get:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {upcomingWebinar.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-secondary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-secondary" />
                  Webinar Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">90 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform:</span>
                    <span className="font-medium">Zoom (link via email)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Recording:</span>
                    <span className="font-medium">Available for 7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Q&A Session:</span>
                    <span className="font-medium">Last 30 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div>
            <Card className="shadow-healing">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Register for Webinar</CardTitle>
                <p className="text-muted-foreground">Fill out the form below to secure your spot</p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your city"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Questions/Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any specific questions for the webinar?"
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Webinar Fee:</span>
                      <span className="text-xl font-bold text-primary">₹{upcomingWebinar.cost}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CreditCard className="w-4 h-4 mr-2" />
                      <span>Secure payment via UPI, Cards, Net Banking</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isRegistering}
                    className="w-full bg-gradient-primary hover:shadow-healing"
                    size="lg"
                  >
                    {isRegistering ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <IndianRupee className="w-5 h-5 mr-2" />
                        Register & Pay ₹{upcomingWebinar.cost}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    After registration, you'll receive webinar link and joining instructions via email & SMS
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact for Custom Webinars */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need a Custom Webinar for Your Organization?
              </h3>
              <p className="text-muted-foreground mb-6">
                We conduct specialized webinars for schools, corporates, and community groups. 
                Contact us to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Webinars;