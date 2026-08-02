import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Map from "../components/LocationMap";
import LocationMap from "../components/LocationMap";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";

export default function Home() {
  return (
    <main className="bg-[#0b0613] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Appointment />
      <Contact />
      <LocationMap />
    </main>
  );
}