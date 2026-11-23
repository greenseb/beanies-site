import styled from "styled-components";

export const Page = styled.main`
  /* dvh: 100vh is taller than the visible area on phones while the browser toolbar shows */
  min-height: 100vh; min-height: 100dvh; padding: 24px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;
  text-align: center;
  img { width: 280px; max-width: 80%; height: auto; }
  h1 {
    font-family: ${({ theme }) => theme.fonts.display}; font-weight: 400;
    font-size: 32px; color: ${({ theme }) => theme.colors.accent};
  }
`;
