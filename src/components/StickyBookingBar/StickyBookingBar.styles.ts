import styled from "styled-components";
import { ButtonLink } from "../ui";

export const Bar = styled.div<{ $visible: boolean }>`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    background: ${({ theme }) => theme.colors.navy};
    border-top: 1px solid ${({ theme }) => theme.colors.line};
    /* Clear the iPhone home indicator and rounded screen corners (needs viewport-fit=cover) */
    padding: 12px max(16px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
    transform: ${({ $visible }) => ($visible ? "none" : "translateY(100%)")};
    visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
    /* visibility flips after the slide on hide so the hidden bar is out of the tab order */
    transition:
      transform 0.25s ease,
      visibility 0s linear ${({ $visible }) => ($visible ? "0s" : "0.30s")};
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;

export const BarButton = styled(ButtonLink)`
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    min-height: 56px;
  }
`;
