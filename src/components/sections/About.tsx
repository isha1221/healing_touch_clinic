// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Stethoscope, Users, Award } from "lucide-react";

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-foreground mb-4">About Our Clinic</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Dedicated to providing natural, gentle, and effective homeopathic treatments 
//             for individuals and families seeking holistic wellness solutions.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           {/* Doctor Bio */}
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <h3 className="text-3xl font-bold text-foreground">Dr. [Doctor Name]</h3>
//               <p className="text-lg text-primary font-medium">M.D. (Homoeopathy) | 15+ Years Experience</p>
//             </div>
            
//             <div className="space-y-4 text-muted-foreground">
//               <p>
//                 With over 15 years of dedicated practice in homeopathy, Dr. [Name] has helped thousands 
//                 of patients achieve natural healing and wellness. Specializing in chronic conditions, 
//                 child health, and family wellness, our approach combines traditional homeopathic principles 
//                 with modern understanding of health and wellness.
//               </p>
              
//               <p>
//                 Our mission is to provide gentle, effective, and personalized treatment plans that address 
//                 the root cause of illness while supporting the body's natural healing mechanisms. We believe 
//                 in treating the whole person, not just the symptoms.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div className="flex items-center space-x-2">
//                 <Award className="w-5 h-5 text-primary" />
//                 <span className="text-sm">Certified Practitioner</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Stethoscope className="w-5 h-5 text-primary" />
//                 <span className="text-sm">Modern Facilities</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-5 h-5 text-primary" />
//                 <span className="text-sm">Holistic Approach</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Users className="w-5 h-5 text-primary" />
//                 <span className="text-sm">Family Care</span>
//               </div>
//             </div>
//           </div>

//           {/* Clinic Image/Visual */}
//           <div className="relative">
//             <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing">
//               <div className="bg-card rounded-2xl p-8">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <Heart className="w-8 h-8 text-primary" />
//                     </div>
//                     <h4 className="font-semibold text-foreground mb-2">Natural Healing</h4>
//                     <p className="text-sm text-muted-foreground">Gentle remedies that work with your body</p>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <Users className="w-8 h-8 text-secondary" />
//                     </div>
//                     <h4 className="font-semibold text-foreground mb-2">Family Care</h4>
//                     <p className="text-sm text-muted-foreground">Treatment for all ages and conditions</p>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <Stethoscope className="w-8 h-8 text-accent" />
//                     </div>
//                     <h4 className="font-semibold text-foreground mb-2">Expert Care</h4>
//                     <p className="text-sm text-muted-foreground">15+ years of professional experience</p>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <Award className="w-8 h-8 text-primary" />
//                     </div>
//                     <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
//                     <p className="text-sm text-muted-foreground">95% patient satisfaction rate</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Vision & Mission Cards */}
//         <div className="grid md:grid-cols-2 gap-8">
//           <Card className="border-primary/20 shadow-gentle hover:shadow-healing transition-all duration-300">
//             <CardContent className="p-8">
//               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//                 <Heart className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 To be a leading center for natural healing, promoting wellness through safe, 
//                 effective homeopathic treatments that empower individuals and families to 
//                 achieve optimal health naturally.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-secondary/20 shadow-gentle hover:shadow-warm transition-all duration-300">
//             <CardContent className="p-8">
//               <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
//                 <Stethoscope className="w-6 h-6 text-secondary" />
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 To provide compassionate, personalized homeopathic care that addresses the 
//                 root cause of illness, supports natural healing, and promotes long-term 
//                 wellness for every patient who walks through our doors.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

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
              <h3 className="text-3xl font-bold text-foreground">Dr. [Doctor Name]</h3>
              <p className="text-lg text-primary font-medium">M.D. (Homoeopathy) | 15+ Years Experience</p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years of dedicated practice in homeopathy, Dr. [Name] has helped thousands 
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
                <span className="text-sm">Certified Practitioner</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Stethoscope className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Modern Facilities</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Holistic Approach</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
                <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Family Care</span>
              </div>
            </AnimatedElement>
          </AnimatedElement>

          {/* Clinic Image/Visual */}
          <AnimatedElement animation="fadeInRight" className="relative">
            <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing transform hover:scale-[1.02] transition-all duration-500">
              <div className="bg-card rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <AnimatedElement animation="scaleIn" delay={200} className="text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Heart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Natural Healing</h4>
                    <p className="text-sm text-muted-foreground">Gentle remedies that work with your body</p>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="scaleIn" delay={300} className="text-center group">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors duration-300">
                      <Users className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Family Care</h4>
                    <p className="text-sm text-muted-foreground">Treatment for all ages and conditions</p>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="scaleIn" delay={400} className="text-center group">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                      <Stethoscope className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Expert Care</h4>
                    <p className="text-sm text-muted-foreground">15+ years of professional experience</p>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="scaleIn" delay={500} className="text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Award className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
                    <p className="text-sm text-muted-foreground">95% patient satisfaction rate</p>
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
                  To be a leading center for natural healing, promoting wellness through safe, 
                  effective homeopathic treatments that empower individuals and families to 
                  achieve optimal health naturally.
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
                  To provide compassionate, personalized homeopathic care that addresses the 
                  root cause of illness, supports natural healing, and promotes long-term 
                  wellness for every patient who walks through our doors.
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