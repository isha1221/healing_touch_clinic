

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Stethoscope, Users, Award } from "lucide-react";
import { AnimatedElement } from "@/hooks/use-scroll-animation"; // Import the hook

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Our Clinic</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing natural, gentle, and effective homeopathic treatments 
            for individuals and families seeking holistic wellness solutions.
          </p>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Doctor Bio */}
          <AnimatedElement animation="fadeInLeft" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Dr. Pooja Oswal</h3>
              <p className="text-lg text-primary font-medium">M.D. (Homoeopathy) | 10+ Years Experience</p>
            </div>
            
            <div className="space-y-4 ">
              <p>
                With over 10 years of dedicated practice in homeopathy, Dr. Pooja has helped thousands 
                of patients achieve natural healing and wellness. Specializing in chronic conditions, 
                child health, and family wellness, our approach combines traditional homeopathic principles 
                with modern understanding of health and wellness.
              </p>
              
              <p>
                Our mission is to provide gentle, effective, and personalized treatment plans that address 
                the root cause of illness while supporting the body's natural healing mechanisms. We believe 
                in treating the whole person, not just the symptoms.
              </p>
            </div>

            <AnimatedElement 
              animation="fadeIn" 
              delay={300}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Safe with no side effects</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Stethoscope className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Improves quality of life</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Boosts Natural immunity</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Personalized treatement</span>
              </div>
            </AnimatedElement>
          </AnimatedElement>

          {/* Clinic Image/Visual */}
       

          {/* Clinic Image/Visual */}
<AnimatedElement animation="fadeInRight" className="relative">
  <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing transform hover:scale-[1.02] transition-all duration-500">
    <div className="bg-card rounded-2xl p-10">
      {/* Title centered at the top */}
      <h3 className="text-xl font-medium text-foreground mb-10 text-center">
        Trearments We Offer
      </h3>
      
      {/* Properly aligned grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-12">
        <AnimatedElement animation="scaleIn" delay={200} className="text-center group">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
            <img src="/icons/anxiety.png"/>
          </div>
          <h4 className="font-semibold text-foreground mb-1">Anxiety</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">Gentle remedies that work with your body</p>
        </AnimatedElement>
        
        <AnimatedElement animation="scaleIn" delay={300} className="text-center group">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors duration-300">
            <Users className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h4 className="font-semibold text-foreground mb-1">PCOS</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">Treatment for all ages and conditions</p>
        </AnimatedElement>
        
        <AnimatedElement animation="scaleIn" delay={400} className="text-center group">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
            <img src="/icons/autism.png"></img>
          </div>
          <h4 className="font-semibold text-foreground mb-1">Autism</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">10+ years of professional experience</p>
        </AnimatedElement>
        
        <AnimatedElement animation="scaleIn" delay={500} className="text-center group">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
            <img src="/icons/infertility.png"></img>
          </div>
          <h4 className="font-semibold text-foreground mb-1">Infertility</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">95% patient satisfaction rate</p>
        </AnimatedElement>
      </div>
    </div>
  </div>
</AnimatedElement>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement 
            animation="fadeInUp" 
            delay={100}
          >
            <Card className="border-primary/20 shadow-gentle hover:shadow-healing transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                 To be a leading center for natural healing, promoting wellness through safe, effective homeopathic treatments that empower individuals and families to achieve optimal health naturally.

                </p>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement 
            animation="fadeInUp" 
            delay={200}
          >
            <Card className="border-secondary/20 shadow-gentle hover:shadow-warm transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide compassionate, personalized homeopathic care that addresses the root cause of illness, supports natural healing, and promotes long-term wellness for every patient who walks through our doors.
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;