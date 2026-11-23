import { useEffect, useState } from "react";
import { Bar, BarButton } from "./StickyBookingBar.styles";

// The hero's own buttons (see Hero.tsx). The bar stays hidden while they're on screen.
const HERO_ACTIONS_ID = "hero-actions";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(HERO_ACTIONS_ID);
    if (!target) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <Bar $visible={visible}>
      <BarButton href="#book">
        Request a booking
      </BarButton>
    </Bar>
  );
}
