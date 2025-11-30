import { useScrollAnimation } from "../utils/utilities";

const Button: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button
      className="  px-9 py-2
              bg-(--primary) text-(--primary-foreground)
              text-xs md:text-md font-light tracking-[0.1em]
              rounded-sm 
              transition-all duration-300 
          hover:bg-zinc-900 hover:text-(--primary) 
              focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-white"
    >
      {children}
    </button>
  );
};

const Hero: React.FunctionComponent<{
  button?: React.ReactNode;
  backgroundUrl: string;
  heading: string;
  para?: string;
}> = ({ button, backgroundUrl, heading, para }) => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[75vh] min-h-[550px] bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
      }}
    >
      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-5">
          {/* Heading: Slide In Down when visible */}
          <h1
            className={`text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-serif font-bold text-(--primary) tracking-wide drop-shadow-lg transition-opacity duration-700 ${
              isVisible ? "animate-slide-in-down" : "opacity-0"
            }`}
          >
            {heading}
          </h1>

          {/* Paragraph: Slide In Up (Delayed) when visible */}
          <p
            className={`text-base sm:text-sm md:text-lg text-white font-light tracking-wider drop-shadow-md transition-opacity duration-700 ${
              isVisible ? "animate-slide-in-up delay-200" : "opacity-0"
            }`}
          >
            {para}
          </p>

          {/* Button: Slide In Up (More Delayed) when visible */}
          <div
            className={`pt-4 transition-opacity duration-700 ${
              isVisible ? "animate-slide-in-up delay-400" : "opacity-0"
            }`}
          >
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomCard: React.FunctionComponent<{
  image: string;
  title: string;
  features: string[];
}> = ({
  image = "room-placeholder.jpg",
  title = "Executive Suite",
  features = ["King Size Bed & Jacuzzi", "Complimentary Breakfast & WiFi"],
}) => {
  const { elementRef: cardRef, isVisible: isCardVisible } =
    useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`
        group flex flex-col w-full mx-auto bg-(--card) rounded-sm overflow-hidden shadow-lg 
        transition-all duration-300 hover:shadow-2xl 
        ${isCardVisible ? "animate-slide-in-up" : "opacity-0"}
      `}
    >
      {/* 1. Image Section */}
      <div className="w-full h-64 md:h-72 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
    absolute inset-0 w-full h-full object-cover
    scale-100              
    transition-transform duration-700 ease-out
    group-hover:scale-102    
  "
        />
        {/* Overlay: Adds a slight dark tint that vanishes on hover */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* 2. Content Section */}
      <div className="w-full p-6 md:p-8 flex flex-col justify-center items-start text-left bg-(--card)">
        {/* Header */}
        <h3 className="text-2xl font-serif font-bold text-(--foreground) mb-4 tracking-wide group-hover:text-(--primary) transition-colors duration-300">
          {title}
        </h3>

        {/* List Items */}
        <ul className="space-y-3 mb-8 w-full">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-(--muted-foreground) text-sm font-light"
            >
              {/* Custom Gold Bullet Point */}
              <span className="w-1.5 h-1.5 bg-(--primary) rounded-full mr-3 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Book Now Button - Full width for better UX on cards */}
        <div className="mt-auto w-full">
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export { Button, Hero, RoomCard };
