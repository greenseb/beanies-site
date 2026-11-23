import { About } from "./components/About";
import { BookingForm } from "./components/BookingForm";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PriceList } from "./components/PriceList";
import { SkipLink } from "./components/SkipLink";
import { StickyBookingBar } from "./components/StickyBookingBar";
import { flags } from "./content/flags";

export function App() {
  if (flags.comingSoon) return <ComingSoon />;

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
      {flags.floatingBookingButton && <StickyBookingBar />}
    </>
  );
}
