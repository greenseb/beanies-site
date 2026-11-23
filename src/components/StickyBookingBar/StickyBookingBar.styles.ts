import styled from "styled-components";
import { ButtonLink } from "../ui";

// Floating button, not a full-width strip pinned to the bottom edge: on iOS Safari the first
// tap on anything pinned at the bottom only expanded the toolbar, so it sits well above it.
export const Bar = styled.div<{ $visible: boolean }>`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    /* iOS only: lvh - dvh is the height of Safari's toolbar while it's showing (0 once collapsed).
       Fixed offsets are measured from the top of the toolbar, so without this the button rises by the
       toolbar's height when it appears. This keeps it 50px up when collapsed and settles near 16px
       above the toolbar when expanded. */
    @supports (-webkit-touch-callout: none) and (height: 100lvh) {
      bottom: max(16px, calc(50px - (100lvh - 100dvh)));
    }
    z-index: 40;
    /* Let taps pass through the empty sides to the page */
    pointer-events: none;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: ${({ $visible }) => ($visible ? "none" : "translateY(12px)")};
    visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
    /* visibility flips after the fade on hide so the hidden button is out of the tab order */
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      visibility 0s linear ${({ $visible }) => ($visible ? "0s" : "0.2s")};
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;

export const BarButton = styled(ButtonLink)`
  @media ${({ theme }) => theme.mobile} {
    pointer-events: auto;
    min-height: 56px;
    padding: 0 32px;
    border-radius: 999px;
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.navyDeep};
  }
`;
