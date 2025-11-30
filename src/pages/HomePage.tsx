import { Hero, Button } from "../components/UIElements";
import { useScrollAnimation } from "../utils/utilities";

// image urls
const heroBackground = import.meta.env.BASE_URL + "frontt.jpg";
const abRoom = import.meta.env.BASE_URL + "about_room.jpg";
const lounge = import.meta.env.BASE_URL + "lounge.jpg";

const HomePage = () => {
  const { elementRef: aboutRef, isVisible: isAboutVisible } =
    useScrollAnimation();
  const { elementRef: ctaRef, isVisible: isCtaVisible } = useScrollAnimation();

  return (
    <>
      <Hero
        button={<Button children={<a href="#">Explore</a>} />}
        backgroundUrl={heroBackground}
        heading="WELCOME TO AFO HOTEL & SUITE"
        para="Good people. Good thinking. Good feeling"
      />

      {/* About section */}
      <section
        ref={aboutRef}
        className="bg-zinc-50 py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Layout: Stacks on mobile (grid-cols-1), Side-by-side on desktop (md:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content - Slides up when visible */}
            <div
              className={`flex flex-col justify-center text-left transition-opacity duration-1000 ${
                isAboutVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 mb-4 tracking-wide">
                Redefining Luxury <br />
                <span className="text-(--primary)">in the Heart of Lagos</span>
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Welcome to{" "}
                  <strong className="text-zinc-900">AFO Hotel & Suite</strong>,
                  where timeless elegance meets contemporary comfort. Nestled in
                  the serene Ilero Avenue, our establishment is designed to be
                  your sanctuary away from the bustle of the city.
                </p>
                <p>
                  We believe that true hospitality lies in the details. From our
                  meticulously appointed rooms to our world-class amenities,
                  every aspect of your stay is curated to provide an experience
                  of unmatched sophistication. Whether you are visiting for
                  business or leisure, discover a level of service that makes
                  every moment unforgettable.
                </p>
              </div>
            </div>

            {/* Right Column: Image Section - Fades in with delay when visible */}
            <div
              className={`relative h-[300px] md:h-[400px] w-full rounded-sm overflow-hidden border border-(--primary/20) shadow-lg group transition-opacity duration-1000 ${
                isAboutVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
            >
              {/* Image Placeholder - Replace 'interior.jpg' with your actual image */}
              <img
                src={abRoom}
                alt="AFO Hotel Luxury Interior"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay: Subtle tint for image depth */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <Hero
        backgroundUrl={lounge}
        heading="CELEBRATE IN STYLE"
        para="Lagos's premier destination for exclusive events. Exceptional spaces, exquisite catering, and a team dedicated to making your occasion flawless. From high-profile corporate galas to intimate private celebrations, our versatile venues offer a sophisticated backdrop tailored to your unique vision. Experience the pinnacle of hospitality where state-of-the-art facilities meet timeless elegance, ensuring every moment of your event is nothing short of extraordinary."
      />

      {/* CTA */}
      <section
        ref={ctaRef}
        className="w-full bg-zinc-50 border-y border-(--primary/20) py-16 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-wide transition-opacity duration-700 ${
                isCtaVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              Get a room already.
            </h2>

            <div
              className={`transition-opacity duration-700 ${
                isCtaVisible ? "animate-slide-in-right delay-200" : "opacity-0"
              }`}
            >
              <button
                className="
              inline-block
              px-10 py-4 
              bg-(--primary) text-(--primary-foreground) 
              text-sm md:text-base font-semibold uppercase tracking-[0.2em]
              rounded-sm 
              transition-all duration-300 
              hover:bg-zinc-900 hover:text-(--primary) 
              focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-white
              shadow-lg
              cursor-pointer
            "
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
