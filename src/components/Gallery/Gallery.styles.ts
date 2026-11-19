import styled from "styled-components";
import { Photo } from "../ui";

export const Section = styled.section`
  padding: 72px 0;
`;

export const Grid = styled.div`
  display: flex; flex-wrap: wrap; gap: 16px;
`;

export const GalleryPhoto = styled(Photo)`
  flex: 1 1 240px; min-width: 0; height: 240px;
  border-radius: ${({ theme }) => theme.radius}; object-fit: cover;
`;
