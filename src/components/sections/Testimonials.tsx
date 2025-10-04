





// import { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Star, Quote, MapPin, User } from "lucide-react";
// import { AnimatedElement } from "@/hooks/use-scroll-animation";

// // Your Google Maps Place ID
// const PLACE_ID = "ChIJoXWX6d7rwjsRgqgtls1PoDE"; 

// const Testimonials = () => {
//   const [reviews, setReviews] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const res = await fetch(
//           `https://client-place-reviews.ishapathak515.workers.dev/?place_id=${PLACE_ID}`
//         );
//         const data = await res.json();
//         if (data.result?.reviews) {
//           // Sort reviews to show the newest ones first and take top 6
//           const sortedReviews = data.result.reviews.sort((a: any, b: any) => b.time - a.time);
//           setReviews(sortedReviews.slice(0, 6));
//         }
//       } catch (error) {
//         console.error("Error fetching Google Reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   // A helper function to truncate the review text
//   const truncateText = (text: string, maxLength: number) => {
//     if (text.length <= maxLength) {
//       return text;
//     }
//     return text.substring(0, maxLength) + "...";
//   };
//   const stats = [
//     { number: "1000+", label: "Happy Patients" },
//     { number: "95%", label: "Success Rate" },
//     { number: "15+", label: "Years Experience" },
//     { number: "50+", label: "Conditions Treated" }
//   ];

//   return (
//     <section id="testimonials" className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedElement animation="fadeIn" className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-foreground mb-4">
//             What Our Patients Say
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Real stories from real people who have shared their experiences on Google.
//           </p>
//         </AnimatedElement>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//        {stats.map((stat, index) => (
//             <AnimatedElement
//               key={index}
//               animation="scaleIn"
//               delay={index * 100}
//               className="text-center group"
//             >
//               <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
//                 {stat.number}
//               </div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </AnimatedElement>
//           ))}
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((review, index) => (
//             <AnimatedElement
//               key={index}
//               animation="fadeInUp"
//               delay={index * 150}
//               as="div"
//             >
//               <Card className="group hover:shadow-healing transition-all duration-300 border-border hover:border-primary/30 relative transform hover:scale-[1.02] hover:-translate-y-2 h-full">
//                 <CardContent className="p-6 h-full flex flex-col">
//                   {/* Quote Icon */}
//                   <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <Quote className="w-4 h-4 text-primary-foreground" />
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center mb-4">
//                     {[...Array(review.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>

//                   {/* Review Text */}
//                   <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic flex-grow">
//                     "{truncateText(review.text, 150)}"
//                     {review.text.length > 150 && (
//                       <a
//                         href={review.author_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-primary hover:underline font-semibold ml-1"
//                       >
//                         Read More
//                       </a>
//                     )}
//                   </p>

//                   {/* Reviewer Info */}
//                   <div className="flex items-start justify-between mt-auto">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
//                         {review.profile_photo_url ? (
//                           <img
//                             src={review.profile_photo_url}
//                             alt={review.author_name}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           "👤"
//                         )}
//                       </div>
//                       <div>
//                         <div className="font-semibold text-foreground">
//                           {review.author_name}
//                         </div>
//                         <div className="flex items-center text-xs text-muted-foreground">
//                           <MapPin className="w-3 h-3 mr-1" />
//                           Google Review
//                         </div>
//                       </div>
//                     </div>

//                     <Badge
//                       variant="secondary"
//                       className="text-xs bg-primary/10 text-primary"
//                     >
//                       Verified
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             </AnimatedElement>
            
//           ))}
//         </div>
//         <AnimatedElement animation="fadeInUp" delay={1000} className="text-center">
//           <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500 mt-[80px]">
//             <div className="bg-card rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-foreground mb-4">
//                 Ready to Start Your Healing Journey?
//               </h3>
//               <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//                 Join thousands of satisfied patients who have found natural relief through homeopathy. 
//                 Book your consultation today and take the first step towards better health.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a 
//                   href="#contact" 
//                   className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-healing transition-all duration-300 font-medium transform hover:scale-105"
//                 >
//                   <User className="w-5 h-5 mr-2" />
//                   Book Consultation
//                 </a>
//                 {/* <a 
//                   href="#webinars" 
//                   className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
//                 >
//                   Join Webinar
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </AnimatedElement>
//          <AnimatedElement animation="fadeIn" delay={1200} className="mt-16 text-center">
//           <p className="text-sm text-muted-foreground mb-4">Trusted by patients across India</p>
//           <div className="flex justify-center items-center space-x-8 text-muted-foreground">
//             <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
//               <Star className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
//               <span className="text-sm">4.9/5 Rating</span>
//             </div>
//             <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
//               <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
//               <span className="text-sm">1000+ Reviews</span>
//             </div>
//             <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
//               <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
//               <span className="text-sm">All Major Cities</span>
//             </div>
//           </div>
//         </AnimatedElement>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, User } from "lucide-react";
import { AnimatedElement } from "@/hooks/use-scroll-animation";

// Your Google Maps Place ID
const PLACE_ID = "ChIJoXWX6d7rwjsRgqgtls1PoDE";

const Testimonials = () => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://client-place-reviews.ishapathak515.workers.dev/?place_id=${PLACE_ID}`
        );
        const data = await res.json();
        if (data.result?.reviews) {
          // Sort reviews to show the newest ones first and take top 6
          const sortedReviews = data.result.reviews.sort(
            (a: any, b: any) => b.time - a.time
          );
          setReviews(sortedReviews.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching Google Reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // A helper function to truncate the review text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  
  const stats = [
    { number: "1000+", label: "Happy Patients" },
    { number: "95%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Conditions Treated" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who have shared their experiences on
            Google.
          </p>
        </AnimatedElement>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <AnimatedElement
              key={index}
              animation="scaleIn"
              delay={index * 100}
              className="text-center group"
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </AnimatedElement>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <AnimatedElement
              key={index}
              animation="fadeInUp"
              delay={index * 150}
              as="div"
            >
              <Card className="group hover:shadow-healing transition-all duration-300 border-border hover:border-primary/30 relative transform hover:scale-[1.02] hover:-translate-y-2 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic flex-grow">
                    "{truncateText(review.text, 150)}"
                    {review.text.length > 150 && (
                      <a
                        href={review.author_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold ml-1"
                      >
                        Read More
                      </a>
                    )}
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-start justify-between mt-auto">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        {review.profile_photo_url ? (
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          "👤"
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {review.author_name}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          Google Review
                        </div>
                      </div>
                    </div>

                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* CTA Block */}
        <AnimatedElement
          animation="fadeInUp"
          delay={300} // Reduced delay for quicker appearance after reviews
          className="text-center mt-20" // Increased top margin for better separation
        >
          <div className="bg-gradient-healing rounded-3xl p-8 shadow-healing max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have found natural
                relief through homeopathy. Book your consultation today and
                take the first step towards better health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-healing transition-all duration-300 font-medium transform hover:scale-105"
                >
                  <User className="w-5 h-5 mr-2" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Trust Indicators */}
        <AnimatedElement
          animation="fadeIn"
          delay={500} // Reduced delay
          className="mt-12 text-center" // Adjusted margin for a tighter but clean look
        >
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by patients across India
          </p>
          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
              <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">1000+ Reviews</span>
            </div>
            <div className="flex items-center space-x-2 group hover:text-primary transition-colors duration-300">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">All Major Cities</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Testimonials;
