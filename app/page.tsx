import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <main className="bg-[#0b0613] text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="appointment">
        <Appointment />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="location">
        <LocationMap />
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}