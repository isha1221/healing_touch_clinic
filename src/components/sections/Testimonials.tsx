import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      condition: "Child Health",
      rating: 5,
      review: "Dr. [Name] has been treating my 8-year-old son for recurring respiratory issues. The improvement has been remarkable! No more frequent colds and his energy levels have increased significantly. The gentle approach of homeopathy worked wonders where other treatments failed.",
      image: "👩‍💼"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      condition: "Digestive Issues",
      rating: 5,
      review: "I suffered from chronic acidity and irregular digestion for years. After 3 months of treatment, I'm completely symptom-free. The personalized approach and detailed consultation made all the difference. Highly recommended!",
      image: "👨‍💼"
    },
    {
      name: "Meera Patel",
      location: "Bangalore",
      condition: "Anxiety & Stress",
      rating: 5,
      review: "The webinar on stress management was eye-opening. Dr. [Name] provided practical remedies that I could implement immediately. My anxiety levels have reduced drastically, and I sleep much better now.",
      image: "👩‍🏫"
    },
    {
      name: "Aman Singh",
      location: "Pune",
      condition: "Joint Pain",
      rating: 5,
      review: "Years of knee pain made daily activities difficult. Homeopathic treatment not only reduced the pain but also improved my mobility without any side effects. The natural approach was exactly what I needed.",
      image: "👨‍🔧"
    },
    {
      name: "Sneha Agarwal",
      location: "Chennai",
      condition: "Skin Issues",
      rating: 5,
      review: "My teenage daughter's acne problem was affecting her confidence. The treatment plan was gentle yet effective. Within 4 months, her skin cleared up beautifully. Thank you for giving her confidence back!",
      image: "👩‍🎓"
    },
    {
      name: "Vikram Gupta",
      location: "Hyderabad",
      condition: "Hypertension",
      rating: 5,
      review: "Managing blood pressure naturally seemed impossible until I found this clinic. The holistic approach helped me reduce my BP medication while maintaining healthy levels. The lifestyle guidance was invaluable.",
      image: "👨‍💻"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Patients" },
    { number: "95%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Conditions Treated" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Patients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who found healing through natural homeopathic treatments.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 animate-gentle-pulse">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-healing transition-all duration-300 border-border hover:border-primary/30 relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Patient Info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-lg">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {testimonial.condition}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have found natural relief through homeopathy. 
                Book your consultation today and take the first step towards better health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-healing transition-all duration-300 font-medium"
                >
                  <User className="w-5 h-5 mr-2" />
                  Book Consultation
                </a>
                <a 
                  href="#webinars" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 font-medium"
                >
                  Join Webinar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by patients across India</p>
          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">1000+ Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">All Major Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;