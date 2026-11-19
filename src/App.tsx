import { About } from "./components/About";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PriceList } from "./components/PriceList";
import { SkipLink } from "./components/SkipLink";
import { StickyBookingBar } from "./components/StickyBookingBar";

export function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <PriceList />
        <Gallery />
        <About />
        <BookingForm />
      </main>
      <Footer />
      <StickyBookingBar />
    </>
  );
}
