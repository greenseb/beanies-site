import styled from "styled-components";

export const List = styled.ul`
  list-style: none; padding: 0; margin: 6px 0 0;
  display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
`;

export const IconLink = styled.a`
  width: 48px; height: 48px;
  display: flex; align-items: center; justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.line}; border-radius: 50%;
  &:hover, &:focus-visible { background: ${({ theme }) => theme.colors.card}; border-color: ${({ theme }) => theme.colors.accent}; }
`;

export const Icon = styled.svg`
  width: 24px; height: 24px; fill: currentColor;
`;
