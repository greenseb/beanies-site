import styled from "styled-components";
import { Photo, Wrap } from "../ui";

export const Section = styled(Wrap)`
  display: flex; flex-wrap: wrap; gap: 40px; align-items: center;
  padding-top: 48px; padding-bottom: 72px;
`;

export const Copy = styled.div`
  flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 20px;
  h1 { font-size: clamp(32px, 6vw, 44px); line-height: 1.15; }
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.display}; font-size: 18px;
  letter-spacing: 2px; color: ${({ theme }) => theme.colors.accent};
`;

export const Lead = styled.p`
  font-size: 18px; color: ${({ theme }) => theme.colors.muted};
`;

export const Actions = styled.div`
  display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;
`;

export const HeroPhoto = styled(Photo)`
  flex: 1 1 320px; min-width: 0; height: 360px;
  border-radius: 16px; object-fit: cover; object-position: center top; width: 100%;
`;
