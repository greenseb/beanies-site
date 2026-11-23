import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh; padding: 24px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;
  text-align: center;
  img { width: 280px; max-width: 80%; height: auto; }
  h1 {
    font-family: ${({ theme }) => theme.fonts.display}; font-weight: 400;
    font-size: 32px; color: ${({ theme }) => theme.colors.accent};
  }
`;
