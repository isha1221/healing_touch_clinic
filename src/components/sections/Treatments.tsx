import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Baby, 
  Heart, 
  Wind, 
  Brain, 
  Utensils, 
  Bone, 
  Users, 
  Flower,
  Activity,
  Thermometer,
  Shield,
  Zap
} from "lucide-react";

const Treatments = () => {
  const treatments = [
    {
      icon: Baby,
      title: "Child Health",
      description: "Gentle, safe treatments for growing children",
      conditions: ["Colic", "Teething", "Growth Issues", "Behavioral Problems", "ADHD", "Asthma in Children"],
      color: "primary",
      gradient: "bg-primary/10"
    },
    {
      icon: Wind,
      title: "Respiratory Conditions",
      description: "Natural relief for breathing and lung-related issues",
      conditions: ["Asthma", "Bronchitis", "Allergies", "Sinusitis", "Cough", "COPD"],
      color: "secondary",
      gradient: "bg-secondary/10"
    },
    {
      icon: Utensils,
      title: "Digestive Disorders",
      description: "Holistic approach to digestive health and wellness",
      conditions: ["IBS", "Acidity", "Constipation", "Food Allergies", "Gastritis", "Ulcers"],
      color: "accent",
      gradient: "bg-accent/10"
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Supporting heart health through natural remedies",
      conditions: ["Hypertension", "Palpitations", "High Cholesterol", "Cardiac Anxiety", "Circulation Issues"],
      color: "primary",
      gradient: "bg-primary/10"
    },
    {
      icon: Brain,
      title: "Mental & Emotional",
      description: "Addressing psychological and emotional well-being",
      conditions: ["Anxiety", "Depression", "Stress", "Insomnia", "Panic Attacks", "Mood Disorders"],
      color: "secondary",
      gradient: "bg-secondary/10"
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Specialized care for women's unique health needs",
      conditions: ["PCOD/PCOS", "Menstrual Issues", "Menopause", "Fertility", "Pregnancy Care", "Hormonal Issues"],
      color: "accent",
      gradient: "bg-accent/10"
    },
    {
      icon: Bone,
      title: "Joint & Bone Health",
      description: "Natural treatments for musculoskeletal conditions",
      conditions: ["Arthritis", "Joint Pain", "Osteoporosis", "Back Pain", "Sciatica", "Sports Injuries"],
      color: "primary",
      gradient: "bg-primary/10"
    },
    {
      icon: Shield,
      title: "Autoimmune Conditions",
      description: "Supporting immune system balance naturally",
      conditions: ["Thyroid Disorders", "Diabetes", "Rheumatoid Arthritis", "Lupus", "Psoriasis", "Allergic Rhinitis"],
      color: "secondary",
      gradient: "bg-secondary/10"
    },
    {
      icon: Flower,
      title: "Skin Conditions",
      description: "Gentle care for various skin-related issues",
      conditions: ["Eczema", "Psoriasis", "Acne", "Urticaria", "Warts", "Hair Loss"],
      color: "accent",
      gradient: "bg-accent/10"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      default: return 'text-primary';
    }
  };

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Treatments & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive homeopathic treatments for a wide range of conditions, 
            focusing on natural healing and long-term wellness solutions.
          </p>
        </div>

        {/* Featured Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flower className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Natural & Safe</h3>
            <p className="text-sm text-muted-foreground">No harmful side effects</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Holistic Approach</h3>
            <p className="text-sm text-muted-foreground">Treats root causes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Long-lasting</h3>
            <p className="text-sm text-muted-foreground">Sustainable results</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">All Ages</h3>
            <p className="text-sm text-muted-foreground">From infants to elderly</p>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-healing transition-all duration-300 border-border hover:border-primary/30"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${treatment.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${getIconColor(treatment.color)}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {treatment.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {treatment.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground text-sm">Conditions Treated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {treatment.conditions.map((condition, conditionIndex) => (
                        <Badge 
                          key={conditionIndex} 
                          variant="secondary" 
                          className="text-xs bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't See Your Condition Listed?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We treat many more conditions not listed here. Every case is unique, and we provide 
                personalized treatment plans based on individual symptoms and constitution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-healing transition-all duration-300"
                >
                  <Thermometer className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
                <a 
                  href="#webinars" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  Join Our Webinar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;