import styled from "styled-components";

export const Section = styled.section`
  padding: 72px 0;
  background: ${({ theme }) => theme.colors.navyDeep};
`;

export const Cards = styled.div`
  display: flex; flex-wrap: wrap; gap: 20px;
`;

export const Card = styled.article<{ $soon?: boolean }>`
  flex: 1 1 320px; min-width: 0;
  background: ${({ theme }) => theme.colors.card}; border-radius: ${({ theme }) => theme.radius}; padding: 24px;
  display: flex; flex-direction: column; gap: 12px;
  ${({ $soon, theme }) => $soon && `border: 1px dashed ${theme.colors.accent};`}
  h3 { font-size: 20px; }
  p { font-size: 15px; color: ${({ theme }) => theme.colors.muted}; }
`;

export const Head = styled.div`
  display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap;
`;

export const Price = styled.span`
  font-size: 20px; font-weight: 600; color: ${({ theme }) => theme.colors.accent};
  small { font-size: 13px; font-weight: 400; color: ${({ theme }) => theme.colors.muted}; }
`;

export const Duration = styled.span`
  font-size: 14px; color: ${({ theme }) => theme.colors.muted};
`;

export const Badge = styled.span`
  font-size: 13px; font-weight: 600; color: ${({ theme }) => theme.colors.accent};
`;

export const Tiers = styled.ul`
  list-style: none; margin: 0; padding: 10px 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  display: flex; flex-direction: column; gap: 8px;
  li { display: flex; justify-content: space-between; font-size: 15px; }
  b { color: ${({ theme }) => theme.colors.accent}; font-weight: 600; }
`;
