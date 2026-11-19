import styled from "styled-components";

export const Bar = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.line}; padding: 40px 24px 48px;
  text-align: center; display: flex; flex-direction: column; gap: 10px; align-items: center;
  img { height: 72px; width: auto; }
  p { font-size: 15px; color: ${({ theme }) => theme.colors.muted}; }
`;

export const Handle = styled.a`
  font-family: ${({ theme }) => theme.fonts.display}; font-size: 18px;
  color: ${({ theme }) => theme.colors.accent}; text-decoration: none;
`;
