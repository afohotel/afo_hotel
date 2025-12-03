import { useScrollAnimation, type roomData } from "../utils/utilities";

//image imports
const pageHeaderImage = "deluxe2.jpg";

const Button: React.FunctionComponent<{
  children: React.ReactNode;
  url: string;
}> = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="  px-9 py-2
              bg-(--primary) text-(--primary-foreground)
              text-xs md:text-md font-light tracking-[0.1em]
              rounded-sm 
              transition-all duration-300 
          hover:bg-zinc-900 hover:text-(--primary) 
              focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-white"
    >
      {children}
    </a>
  );
};

const Herro: React.FunctionComponent<{
  children: React.ReactNode;
  bgUrl?: string;
}> = ({ children, bgUrl }) => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[60vh] min-h-[550px] bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url("${bgUrl || ""}")`,
      }}
    >
      {/* Centered Div:
        - bg-(--primary): Gold Background
        - text-(--primary-foreground): Black Text (Contrast)
        - shadow-2xl: Strong shadow for depth ("Attractive look")
        - rounded-sm: Consistent with your theme
      */}
      <div
        className={`
          relative z-10 
          w-[85%] max-w-[320px] md:max-w-[900px] min-h-[480px] justify-center
          mx-4 p-8 md:p-12

          bg-[var(--primary)]/50
          backdrop-blur-md


          text-(--primary-foreground) 
          rounded-sm 
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          border-t border-white/20
          flex flex-col items-center text-center gap-4
          transition-all duration-1000 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};

const Hero: React.FunctionComponent<{
  children: React.ReactNode;
  bgUrl?: string;
}> = ({ children, bgUrl }) => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url("${bgUrl || ""}")`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content wrapper with animation */}
      <div
        className={`
          relative z-10 flex flex-col items-center justify-center text-center
          transition-all duration-700
          ${
            isVisible
              ? "animate-slide-in-up delay-100"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};

const RoomCard: React.FunctionComponent<{
  image: string;
  title: string;
  features: string[];
  message: string;
}> = ({
  image = "room-placeholder.jpg",
  title = "Executive Suite",
  features = ["King Size Bed & Jacuzzi", "Complimentary Breakfast & WiFi"],
  message,
}) => {
  const { elementRef: cardRef, isVisible: isCardVisible } =
    useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`
        group flex flex-col w-full max-w-sm mx-auto bg-(--card) rounded-sm overflow-hidden shadow-lg 
        transition-all duration-300 hover:shadow-2xl hover:border-(--primary/50)
        ${isCardVisible ? "animate-slide-in-up" : "opacity-0"}
      `}
    >
      {/* 1. Image Section: Reduced height to h-40/h-48 (approx 65% of previous size) */}
      <div className="w-full h-40 md:h-48 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 w-full h-full 
            object-cover object-center 
            transition-transform duration-700 ease-out 
            group-hover:scale-105
          "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* 2. Content Section: Reduced padding to p-4/p-5 */}
      <div className="w-full p-4 md:p-5 flex flex-col justify-center items-start text-left bg-(--card)">
        {/* Header: Reduced font size to text-xl */}
        <h3 className="text-xl md:text-2xl font-serif font-light text-(--foreground) mb-3 tracking-wide group-hover:text-(--primary) transition-colors duration-300">
          {title}
        </h3>

        {/* List Items: Reduced font size to text-xs */}
        <ul className="space-y-2 mb-6 w-full">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-(--muted-foreground) text-xs md:text-sm font-light"
            >
              <span className="w-1.5 h-1.5 bg-(--primary) rounded-full mr-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <div className="mt-auto w-full">
          {/* Added class override to make button slightly more compact */}
          <WhatsAppEnquiry message={message} />
        </div>
      </div>
    </div>
  );
};

// Sub-component to handle individual section animation and layout
const RoomSection: React.FunctionComponent<{
  title: string;
  description: string;
  roomData: roomData;
  reverse?: boolean;
}> = ({ title, description, roomData, reverse = false }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`
        w-full flex flex-col items-center gap-12 py-12
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      {/* Text Content Side */}
      <div className="w-full md:w-1/2 hidden md:flex flex-col gap-6 px-4 md:px-8 text-center md:text-left">
        <h3
          className={`
            text-3xl md:text-4xl font-serif font-light text-(--primary) 
            transition-opacity duration-700
            ${isVisible ? "animate-slide-in-up" : "opacity-0"}
          `}
        >
          {title}
        </h3>
        <p
          className={`
            text-base md:text-lg font-light text-(--muted-foreground) leading-relaxed tracking-wide
            transition-opacity duration-700
            ${isVisible ? "animate-slide-in-up delay-200" : "opacity-0"}
          `}
        >
          {description}
        </p>
      </div>

      {/* Card Side */}
      <div className="w-full md:w-1/2 flex justify-center px-4">
        <RoomCard
          image={roomData.image}
          title={roomData.title}
          features={roomData.features}
          message={roomData.message}
        />
      </div>
    </div>
  );
};

const PageHeader: React.FunctionComponent<{
  title: string;
}> = ({ title = "Page Title" }) => {
  return (
    <div
      className="relative w-full h-14 md:h-16  bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url("${pageHeaderImage}")`,
      }}
    >
      {/* Overlay: Primary Gold with high opacity for the 'solid' look */}
      <div className="absolute inset-0 bg-(--primary) mix-blend-multiply" />

      {/* Content Container: Flex aligned to the right */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end right-8 md:right-12">
        {/* Header Text */}
        <h1 className="text-xl md:text-2xl font-serif font-light text-white tracking-wide uppercase animate-slide-in-right">
          {title}
        </h1>
      </div>
    </div>
  );
};

const WhatsAppEnquiry: React.FunctionComponent<{ message: string }> = ({
  message,
}) => {
  const phone = "2348024409982";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return <Button url={url} children={<span>Book Now</span>} />;
};

export {
  Button,
  Hero,
  RoomCard,
  Herro,
  RoomSection,
  PageHeader,
  WhatsAppEnquiry,
};
