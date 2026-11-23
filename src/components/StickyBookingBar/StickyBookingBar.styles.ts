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
    /* 24px sides keep the button's bottom corners inside the iPhone's rounded screen corners.
       The 56px bottom lifts it clear of the bottom edge on iOS Safari. */
    padding: 12px 24px 56px;
    padding: 12px 24px;
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
