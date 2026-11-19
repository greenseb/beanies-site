import styled from "styled-components";
import { ButtonLink } from "../ui";

export const Bar = styled.div`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    display: block; position: fixed; left: 0; right: 0; bottom: 0; z-index: 40;
    background: ${({ theme }) => theme.colors.navy}; border-top: 1px solid ${({ theme }) => theme.colors.line};
    padding: 12px 16px;
  }
`;

export const BarButton = styled(ButtonLink)`
  @media ${({ theme }) => theme.mobile} {
    width: 100%; min-height: 56px;
  }
`;
