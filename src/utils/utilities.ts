import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/Rooms" },
  { name: "Facilities", href: "/Facilities" },
  { name: "Contact", href: "/Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }): string => {
  const baseClasses =
    "relative group text-md font-light block py-1 px-4 transition-colors duration-300 ease-in-out";
  const hoverTextClass = "hover:text-primary";

  if (isActive) {
    // Active: Light Text
    return `${baseClasses} text-[#f5f5f5] ${hoverTextClass}`;
  } else {
    // Inactive: Muted Text
    return `${baseClasses} text-[#AAAAAA] ${hoverTextClass}`;
  }
};

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};

export { navLinks, linkClass, useScrollAnimation };
