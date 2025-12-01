import { RoomSection, PageHeader } from "../components/UIElements";
import { type roomData } from "../utils/utilities";

const deluxe2 = "deluxe2.jpg";
const standard2 = "standard2.jpg";

const deluxeRoomData: roomData = {
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
};

const standardRoomData: roomData = {
  image: standard2,
  title: "Standard Room",
  features: ["2 People", "Wall fan", "A/C", "1 Bathroom", "Well Spacious"],
};

const Rooms = () => {
  return (
    <>
      <PageHeader title="Our Rooms" />
      <section className="w-full bg-(--foreground) py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Deluxe Room Section */}
          <RoomSection
            title="Deluxe Room"
            description="Experience elevated comfort in our Deluxe Room, a stylish retreat designed for guests seeking premium relaxation. This room features a plush king-size bed, warm lighting, and a spacious layout perfect for unwinding after a busy day. Large windows fill the space with natural light, while the modern ensuite bathroom offers soft towels and quality amenities. Ideal for couples, business travelers, or anyone looking for affordable luxury, the Deluxe Room delivers comfort, convenience, and a peaceful hotel stay that feels truly rewarding."
            roomData={deluxeRoomData}
          />

          {/* Divider (Optional, just spacing here) */}
          <div className="my-12 md:my-20" />

          {/* Standard Room Section (Reversed Layout) */}
          <RoomSection
            title="Standard Room"
            description="Relax in our Standard Room, a clean, comfortable space crafted for travelers who want value without sacrificing quality. Enjoy a cozy bed, soft lighting, and a practical workspace that makes planning your day easy. The room includes smart storage and an ensuite bathroom with all essential amenities. Perfect for solo guests, students, or quick business trips, the Standard Room offers a calm, budget-friendly stay and the dependable comfort you expect from a well-rated hotel."
            roomData={standardRoomData}
            reverse={true}
          />
        </div>
      </section>
    </>
  );
};

export default Rooms;
