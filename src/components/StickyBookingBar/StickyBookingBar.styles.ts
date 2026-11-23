import styled from "styled-components";
import { ButtonLink } from "../ui";

// Floating button, not a full-width strip pinned to the bottom edge: on iOS Safari the first
// tap on anything pinned at the bottom only expanded the toolbar, so it sits well above it.
export const Bar = styled.div<{ $visible: boolean }>`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    display: ${({ $visible }) => ($visible ? "flex" : "none")};
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 96px;
    z-index: 40;
    /* Let taps pass through the empty sides to the page */
    pointer-events: none;
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
