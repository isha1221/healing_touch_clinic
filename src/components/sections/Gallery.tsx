


import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

// === STEP 1: Import all your images ===
// These paths are based on your folder structure (using the '@' alias for 'src')
import img1 from '@/asset/img1.jpg';
import img2 from '@/asset/img2.jpg';
import img3 from '@/asset/img3.jpg';
import img4 from '@/asset/img4.jpg';
import img5 from '@/asset/img5.jpg';
import img6 from '@/asset/img6.jpg';
import img7 from '@/asset/img7.jpg';
import img8 from '@/asset/img8.jpg';
import img9 from '@/asset/img9.jpg';
import img10 from '@/asset/img10.jpg'; 
import img11 from '@/asset/img11.jpg';
import img12 from '@/asset/img12.jpg';
import img13 from '@/asset/img13.jpg';
import img14 from '@/asset/img14.jpg';
import img15 from '@/asset/img15.jpg';
import img16 from '@/asset/img16.jpg';
import img17 from '@/asset/img17.jpg';
import img18 from '@/asset/img18.jpg';
// === End of image imports ===

interface BeforeAfterImage {
  id: number;
  title: string;

  before: string; 
  after: string; 
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<BeforeAfterImage | null>(null);
  
  // Track the starting index for the current view
  const [startIndex, setStartIndex] = useState(0);
  const IMAGES_PER_PAGE = 3;

  // === STEP 2: Use the imported images in your data array ===
  const galleryImages: BeforeAfterImage[] = [
    {
      id: 1,
      title: "Targeted Treatment for Adult Acne",
    
      before: img1,
      after: img2,
      description: "Achieved significant reduction in active inflammatory lesions and improved overall skin texture and clarity."
    },
      {
      id: 7,
      title: "Recovery from Alopecia Areata",
    
      before: img13,
      after: img14,
      description: "Stimulated natural hair follicle regrowth in localized bald patches, restoring density and scalp health. (Note: The image shows a scalp/hair condition)."},
    {
      id: 3,
      title: "Relief from Chronic Psoriasis/Eczema",
      before: img5,
      after: img6,
      description: "Successfully calmed intense redness and scaled plaques, restoring the skin's natural barrier and smoothness."
    },
    {
      id: 4,
      title: "Treatment of Planar Warts & Calluses",
      before: img7,
      after: img8,
      description: "Effectively cleared painful growths on the sole of the foot, resulting in healthy, regenerated skin tissue."
    },
    {
      id: 5,
      title: "Resolution of Acute Dermatitis",
      before: img9,
      after: img10, 
      description: "Rapidly soothed localized itching and red, weeping patches to reveal clear, healed skin on the lower limb."
    },
    {
      id: 6,
      title: "Healing of Recurrent Oral Ulcers",
      before: img11,
      after: img12,
      description: "Accelerated the healing process of painful mouth sores and prevented further recurrence for improved oral comfort."
    },
  
    {
      id: 2,
      title: "Management of Lymphatic or Glandular Swelling ",
      before: img3,
      after: img4,
      description: "Visible reduction in localized inflammation and swelling of the neck area through non-invasive internal therapy."
    },
    {
      id: 8,
      title: "Treatment of Fungal Infections (Ringworm)",
      before: img15,
      after: img16,
      description:"Completely cleared circular fungal lesions and hyperpigmentation, restoring even skin tone to the neck and upper back."
    },
    {
      id: 9,
      title: "Management of Extensive Skin Pigmentation",
      before: img17,
      after: img18,
      description: "Significantly lightened deep-seated skin discoloration and smoothed rough patches across the abdominal region."
    },
  ];
  // === End of your image data ===

  // Total number of items
  const totalItems = galleryImages.length;
  
  // 💡 NEW LOGIC: Use modulo for infinite looping
  const handleNext = () => {
    // Moves the start index by 3, then wraps around using the modulo operator
    setStartIndex((prevIndex) => (prevIndex + IMAGES_PER_PAGE) % totalItems);
  };

  const handlePrev = () => {
    // Calculates the new index. If it goes below zero, it wraps back to the end.
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - IMAGES_PER_PAGE;
      // If newIndex is negative, wrap it to the end of the list (e.g., -3 => 6)
      return (newIndex < 0 ? newIndex + totalItems : newIndex) % totalItems;
    });
  };

  // 💡 NEW LOGIC: Get the three visible images, handling wrap-around
  const visibleImages = [];
  for (let i = 0; i < IMAGES_PER_PAGE; i++) {
      // Use modulo to calculate the index of the image in the original array
      const imageIndex = (startIndex + i) % totalItems;
      visibleImages.push(galleryImages[imageIndex]);
  }

  // With infinite looping, the buttons are never disabled!
  const isPrevDisabled = false; 
  const isNextDisabled = false;


  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 ">
            Patient <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from our homeopathic treatments. See the transformative power of natural healing.
          </p>
        </div>

        {/* Gallery Controls & Grid Container */}
        <div className="flex items-center justify-center space-x-4">
            
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              // Disabled logic removed for infinite loop
              className='p-3 rounded-full transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary/90'
            >
              <ChevronLeft size={24} />
            </button>

            {/* Gallery Grid - Only show 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 max-w-6xl">
              {visibleImages.map((image, index) => (
                <Card
                  // Note: Use a combination of id and current index for a stable key in a dynamic list
                  key={`${image.id}-${startIndex}-${index}`}
                  className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative">
                    {/* Before/After Comparison */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 relative overflow-hidden">
                          <img
                            src={image.before}
                            alt={`${image.title} - Before`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-secondary text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            Before
                          </div>
                        </div>
                        <div className="w-1/2 relative overflow-hidden">
                          <img
                            src={image.after}
                            alt={`${image.title} - After`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            After
                          </div>
                        </div>
                      </div>
                      {/* Divider line */}
                      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 z-10"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block bg-mint-light text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {image.condition}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              // Disabled logic removed for infinite loop
              className='p-3 rounded-full transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary/90'
            >
              <ChevronRight size={24} />
            </button>
            
        </div>
      </div>

      {/* Modal for enlarged view (Unchanged) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <span className="inline-block bg-mint-light text-primary px-3 py-1 rounded-full text-sm font-semibold">
                   
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-2xl font-bold hover:text-primary transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <img
                    src={selectedImage.before}
                    alt="Before treatment"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <p className="text-center mt-2 font-semibold text-accent">Before Treatment</p>
                </div>
                <div>
                  <img
                    src={selectedImage.after}
                    alt="After treatment"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <p className="text-center mt-2 font-semibold text-primary">After Treatment</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;