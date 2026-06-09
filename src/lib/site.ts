import {
  Bath,
  BedDouble,
  BellRing,
  CalendarCheck,
  Car,
  CheckCircle2,
  CookingPot,
  Fan,
  FireExtinguisher,
  Home,
  KeyRound,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  Microwave,
  ParkingCircle,
  Refrigerator,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Star,
  ThermometerSun,
  Tv,
  UsersRound,
  WashingMachine,
  Wifi
} from "lucide-react";

export const site = {
  name: "Florants Residence",
  headline: "Your Urban Haven",
  tagline: "Stay in Serenity.",
  description:
  "Florants Residence is a premium private 2BHK Airbnb stay in Kochi, Kerala, offering comfortable bedrooms, modern amenities, self check-in, WiFi, and a convenient location near Lakeshore Hospital, Forum Mall, and major city attractions.",
  bookingUrl: "https://www.airbnb.co.in/rooms/1424620787859594103",
  mapsUrl: "https://maps.app.goo.gl/UUgF7wGMijQ969Gu8",
  instagramUrl: "https://www.instagram.com/florants_bnb?igsh=MWY5ejNta2Y0NWpndA==",
  phone: "+919633735295",
  displayPhone: "+91 96337 35295",
  whatsappMessage: "Hi Aldrin, I would like to know more about Florants Residence.",
  host: "Aldrin",
  location: "Kochi, India",
  rating: "4.8"
};

export const whatsappUrl = `https://wa.me/${site.phone.replace("+", "")}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Host", href: "#host" },
  { label: "Book Now", href: "#book" }
];

export const propertyDetails = [
  { label: "4 Guests", description: "Comfortably planned for family, friends, or work stays.", icon: UsersRound },
  { label: "2 Bedrooms", description: "Two calm AC bedrooms with restful layouts.", icon: BedDouble },
  { label: "2 Beds", description: "Prepared for relaxed private sleeping arrangements.", icon: Home },
  { label: "2 Bathrooms", description: "Convenient private bathrooms for easy mornings.", icon: Bath },
  { label: "Self Check-in", description: "Arrive smoothly with lockbox access.", icon: KeyRound },
  { label: "WiFi", description: "Reliable connectivity for work, streaming, and calls.", icon: Wifi },
  { label: "AC Rooms", description: "Climate comfort in both bedrooms.", icon: ThermometerSun },
  { label: "CCTV Security", description: "Discreet exterior security for peace of mind.", icon: ShieldCheck },
  { label: "Long-Term Stays", description: "Practical amenities for extended visits.", icon: CalendarCheck }
];

export const amenities = [
  { label: "WiFi", icon: Wifi },
  { label: "TV", icon: Tv },
  { label: "Kitchen", icon: CookingPot },
  { label: "Fridge", icon: Refrigerator },
  { label: "Microwave", icon: Microwave },
  { label: "Kettle", icon: BellRing },
  { label: "Dining Table", icon: Sparkles },
  { label: "AC", icon: ThermometerSun },
  { label: "Ceiling Fan", icon: Fan },
  { label: "Shampoo", icon: ShowerHead },
  { label: "Shower Gel", icon: Bath },
  { label: "CCTV", icon: ShieldCheck },
  { label: "Fire Extinguisher", icon: FireExtinguisher },
  { label: "Washing Machine", icon: WashingMachine },
  { label: "Free Parking", icon: ParkingCircle },
  { label: "Lockbox", icon: LockKeyhole },
  { label: "Cleaning During Stay", icon: CheckCircle2 }
];

export const nearbyPlaces = [
  "Lakeshore Hospital",
  "Forum Mall Kochi",
  "Kochi city access",
  "Restaurants nearby",
  "Uber, Swiggy, and Blinkit availability"
];

export const reviews = [
  {
    name: "Nina",
    context: "Family stay",
    text: "Quiet, clean, and easy to settle into. The location made hospital and mall visits very convenient."
  },
  {
    name: "Rahul",
    context: "Work visit",
    text: "A calm apartment with everything needed for a comfortable longer stay. Aldrin was responsive and helpful."
  },
  {
    name: "Meera",
    context: "Weekend in Kochi",
    text: "The bedrooms, kitchen, and living space worked beautifully for our group. Peaceful without feeling far away."
  }
];

export const reviewStars = Array.from({ length: 5 }, (_, index) => ({ index, icon: Star }));

export const contactActions = [
  { label: "WhatsApp", href: whatsappUrl, icon: MessageCircle },
  { label: "Airbnb", href: site.bookingUrl, icon: Home },
  { label: "Call", href: `tel:${site.phone}`, icon: BellRing },
  { label: "Directions", href: site.mapsUrl, icon: MapPinned },
  { label: "Instagram", href: site.instagramUrl, icon: Sparkles }
];
