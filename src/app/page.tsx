import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { BookingCTA } from "@/components/BookingCTA";
import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Host } from "@/components/Host";
import { Location } from "@/components/Location";
import { Navbar } from "@/components/Navbar";
import { PropertyDetails } from "@/components/PropertyDetails";
import { Reviews } from "@/components/Reviews";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import { SplashScreen } from "@/components/SplashScreen";
import { getGalleryImages, getHeroImages, getHostImage, getLogoImage } from "@/lib/gallery";

export default function Home() {
  const heroImages = getHeroImages();
  const galleryImages = getGalleryImages();
  const hostImage = getHostImage();
  const logoImage = getLogoImage();

  return (
    <>
      <ScrollRestoration />
      <SplashScreen logoSrc={logoImage} />
      <Navbar logoSrc={logoImage} />
      <main id="main-content">
        <Hero images={heroImages} />
        <About />
        <PropertyDetails />
        <Amenities />
        <Gallery images={galleryImages} />
        <Location />
        <Host imageSrc={hostImage} />
        <Reviews />
        <BookingCTA />
        <Contact />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
