import styled from "styled-components";
import { ButtonLink } from "../ui";

export const Bar = styled.div<{ $visible: boolean }>`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    display: ${({ $visible }) => ($visible ? "block" : "none")};
    /* Sticky, not fixed: on iOS Safari the first tap on a fixed bar near the bottom only expands the toolbar */
    position: sticky;
    bottom: 0;
    z-index: 40;
    background: ${({ theme }) => theme.colors.navy};
    border-top: 1px solid ${({ theme }) => theme.colors.line};
    /* 24px sides keep the button's bottom corners inside the iPhone's rounded screen corners */
    padding: 12px 24px;
  }
`;

export const BarButton = styled(ButtonLink)`
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    min-height: 56px;
  }
`;
