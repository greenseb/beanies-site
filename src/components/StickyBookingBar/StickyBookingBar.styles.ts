import styled from "styled-components";
import { ButtonLink } from "../ui";

export const Bar = styled.div<{ $visible: boolean }>`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    display: ${({ $visible }) => ($visible ? "block" : "none")};
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
  }
`;

export const BarButton = styled(ButtonLink)`
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    min-height: 56px;
  }
`;
