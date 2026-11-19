import styled from "styled-components";
import { Photo, Wrap } from "../ui";

export const Section = styled.section`
  padding: 72px 0;
  background: ${({ theme }) => theme.colors.navyDeep};
`;

export const Row = styled(Wrap)`
  display: flex; flex-wrap: wrap; gap: 40px; align-items: center;
`;

export const AboutPhoto = styled(Photo)`
  flex: 1 1 280px; height: 320px; border-radius: 16px; object-fit: cover;
`;

export const Copy = styled.div`
  flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 16px;
  h2 { font-size: 32px; }
  p { color: ${({ theme }) => theme.colors.muted}; font-size: 16px; line-height: 1.7; }
`;
