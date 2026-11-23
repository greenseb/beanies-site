import { useEffect, useRef, useState } from "react";
import { Bar, BarButton, BarSpace } from "./StickyBookingBar.styles";

// The button stays hidden while any of these are on screen: the hero's own buttons
// (see Hero.tsx) and the booking form itself.
const HIDE_WHILE_VISIBLE = ["hero-actions", "book"];

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Safari's toolbar changes the visible height as it collapses and expands. The tallest height
  // seen for the current width is the collapsed state, so how much shorter it is now is the
  // toolbar's height. The styles use this to keep the button's offset steady (see --toolbar-extra).
  useEffect(() => {
    let width = window.innerWidth;
    let tallest = window.innerHeight;
    function update() {
      if (window.innerWidth !== width) {
        width = window.innerWidth;
        tallest = 0;
      }
      tallest = Math.max(tallest, window.innerHeight);
      barRef.current?.style.setProperty("--toolbar-extra", `${tallest - window.innerHeight}px`);
    }
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

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
    <>
      <BarSpace />
      <Bar ref={barRef} $visible={visible}>
        <BarButton href="#book">Request a booking</BarButton>
      </Bar>
    </>
  );
}
