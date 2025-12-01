import { useScrollAnimation } from "../utils/utilities";
import { PageHeader } from "../components/UIElements";

//image imports
const main = "frontt.jpg";
const reception = "reception.jpg";
const lounge = "lounge.jpg";
const lounge1 = "lounge1.jpg";
const staircase = "staircase.jpg";
const bar = "bar.jpg";
const bar2 = "bar2.jpg";
const hallway = "hallway.jpg";
const standard2 = "standard2.jpg";
const deluxe2 = "deluxe2.jpg";
const bathroom = "bathroom.jpg";

const Gallery: React.FunctionComponent = () => {
  const { elementRef: galleryRef, isVisible } = useScrollAnimation(0.1);

  // Mock data for 12 luxury gallery items
  const galleryItems = [
    {
      id: 1,
      src: main,
      desc: "Main Hotel Building",
    },
    {
      id: 2,
      src: reception,
      desc: "Reception",
    },
    {
      id: 3,
      src: lounge,
      desc: "Executive Lounge",
    },
    {
      id: 4,
      src: lounge1,
      desc: "Another view of Executive Lounge",
    },
    {
      id: 5,
      src: staircase,
      desc: "Staicase",
    },
    {
      id: 6,
      src: bar,
      desc: "Bar Lounge",
    },
    {
      id: 7,
      src: bar2,
      desc: "Another view of the Bar Lounge",
    },
    {
      id: 8,
      src: hallway,
      desc: "Hallway",
    },
    {
      id: 9,
      src: standard2,
      desc: "Standard Room",
    },
    {
      id: 10,
      src: deluxe2,
      desc: "Deluxe room",
    },
    {
      id: 11,
      src: bathroom,
      desc: "Clean Bathroom",
    },
  ];

  return (
    <>
      <PageHeader title="Gallery" />
      <section
        ref={galleryRef}
        className="w-full bg-(--foreground) py-16 sm:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-opacity duration-1000 ${
              isVisible ? "animate-slide-in-down" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-(--primary) mb-4 tracking-wide">
              Our Gallery
            </h2>
            <p className="text-(--muted-foreground) max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
              A glimpse into the elegance, comfort, and luxury that awaits you
              at AFO Hotel & Suite.
            </p>
          </div>

          {/* Gallery Grid 
            - Responsive: 1 col (mobile), 2 cols (sm), 3 cols (md), 4 cols (lg)
            - Gap: Consistent spacing
        */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                group flex flex-col bg-(--card) border border-(--primary/20) rounded-sm overflow-hidden shadow-md hover:border-(--primary/50) transition-colors duration-300
                ${
                  isVisible
                    ? `animate-fade-in delay-${(index % 4) * 100}`
                    : "opacity-0"
                }
              `}
              >
                {/* Image Container 
                  - Fixed height for uniformity
                  - No scale effects on hover
                  - Image centered properly
              */}
                <div className="w-full h-64 relative overflow-hidden bg-black/10">
                  <img
                    src={item.src}
                    alt={item.desc}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Subtle Overlay for luxury depth */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Text Description Container */}
                <div className="p-4 text-center border-t border-(--primary/10)">
                  <p className="text-sm font-light text-(--muted-foreground) group-hover:text-(--foreground) transition-colors duration-300 tracking-wide font-serif">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
