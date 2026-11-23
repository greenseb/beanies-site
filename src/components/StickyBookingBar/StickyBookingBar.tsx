import { useEffect, useState } from "react";
import { Bar, BarButton } from "./StickyBookingBar.styles";

// The button stays hidden while any of these are on screen: the hero's own buttons
// (see Hero.tsx) and the booking form itself.
const HIDE_WHILE_VISIBLE = ["hero-actions", "book"];

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = HIDE_WHILE_VISIBLE.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (targets.length === 0) {
      setVisible(true);
      return;
    }
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Bar $visible={visible}>
      <BarButton href="#book">Request a booking</BarButton>
    </Bar>
  );
}
