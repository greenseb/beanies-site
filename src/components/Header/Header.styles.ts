import styled from "styled-components";
import { Wrap } from "../ui";

export const Bar = styled.header`
  position: relative;
`;

export const Row = styled(Wrap)`
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 16px; padding-bottom: 16px;
  img { height: 56px; width: auto; display: block; }
`;

export const MenuButton = styled.button`
  width: 48px; height: 48px;
  background: transparent; color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text}; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
`;

export const Menu = styled.nav`
  position: absolute; top: 84px; right: 24px;
  width: 280px; max-width: calc(100% - 48px);
  background: ${({ theme }) => theme.colors.card}; border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius}; padding: 8px; z-index: 50;
  display: flex; flex-direction: column;
  &[hidden] { display: none; }
  a {
    color: ${({ theme }) => theme.colors.text}; text-decoration: none;
    padding: 14px 16px; border-radius: 8px;
  }
  a:hover, a:focus-visible { background: ${({ theme }) => theme.colors.navy}; color: ${({ theme }) => theme.colors.accent}; }
`;
