import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.6;
  }

  a { color: ${({ theme }) => theme.colors.accent}; }
  a:hover { color: ${({ theme }) => theme.colors.text}; }

  h1, h2, h3 { font-weight: 500; line-height: 1.2; margin: 0; }
  p { margin: 0; }

  :focus-visible { outline: 3px solid ${({ theme }) => theme.colors.accent}; outline-offset: 2px; }

  input, select, textarea {
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.fieldLine};
    border-radius: 8px;
    font: inherit; font-size: 16px; padding: 0 12px; min-height: 48px; width: 100%;
  }
  textarea { padding: 12px; resize: vertical; }
  input::placeholder, textarea::placeholder { color: ${({ theme }) => theme.colors.placeholder}; }

  @media ${({ theme }) => theme.mobile} {
    body { padding-bottom: 80px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
`;
