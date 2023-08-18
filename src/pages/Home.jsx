import "./Home.css";

import HeroBookingForm from "../components/HeroBookingForm";
import FeaturedLocations from "../components/FeaturedLocations";

export default function Home() {
  return (
    <>
      <section className="hero--container container">
        <div className="hero--banner">
          <h2>Enjoy your dream vacation</h2>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
        </div>
        <HeroBookingForm />
      </section>
      <section className="featured--locations container">
        <div>
          <h2>Enjoy your dream vacation</h2>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
        </div>
        <FeaturedLocations />
      </section>
    </>
  );
}
