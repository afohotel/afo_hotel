import { Hero, RoomCard } from "../components/UIElements";

// image urls
const deluxe1 = import.meta.env.BASE_URL + "deluxe1.jpg";
const deluxe2 = import.meta.env.BASE_URL + "deluxe2.jpg";
const standard2 = import.meta.env.BASE_URL + "standard2.jpg";
const standard1 = import.meta.env.BASE_URL + "Standard1.jpg";

const deluxeRooms = [
  {
    image: deluxe1,
    title: "Deluxe Room",
    features: [
      "2 People",
      "Standing fans",
      "A/C",
      "1 Bathroom",
      "Study/Dining Table",
      "Well Spacious",
    ],
  },
  {
    image: deluxe2,
    title: "Deluxe Room",
    features: [
      "2 People",
      "Standing fans",
      "A/C",
      "1 Bathroom",
      "Study/Dining Table",
      "Well Spacious",
    ],
  },
];

const StandardRooms = [
  {
    image: standard1,
    title: "Standard Room",
    features: ["2 People", "Wall fan", "A/C", "1 Bathroom", "Well Spacious"],
  },
  {
    image: standard2,
    title: "Standard Room",
    features: ["2 People", "Wall fan", "A/C", "1 Bathroom", "Well Spacious"],
  },
];

const Rooms = () => {
  return (
    <>
      <Hero backgroundUrl={deluxe1} heading="OUR ROOMS" />
      {/* Requested Stand-Alone H3: Deluxe & Standard Rooms */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-(--primary) my-10 text-center animate-slide-in-up delay-100">
        Deluxe Rooms
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center my-8 mx-12">
        {deluxeRooms.map((room, index) => {
          return (
            <RoomCard
              key={index}
              image={room.image}
              title={room.title}
              features={room.features}
            />
          );
        })}
      </div>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-(--primary) my-10 text-center animate-slide-in-up delay-100">
        Standard Rooms
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center my-8 mx-12">
        {StandardRooms.map((room, index) => {
          return (
            <RoomCard
              key={index}
              image={room.image}
              title={room.title}
              features={room.features}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rooms;
