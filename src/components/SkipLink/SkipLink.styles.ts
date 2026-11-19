import styled from "styled-components";

export const Skip = styled.a`
  position: absolute; left: -999px; top: 8px;
  background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.navy};
  padding: 8px 12px; border-radius: 8px; z-index: 100;
  &:focus { left: 8px; }
`;
