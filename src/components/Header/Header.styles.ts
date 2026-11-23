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

export const MenuButton = styled.button<{ $open: boolean }>`
  width: 48px; height: 48px;
  background: transparent; color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text}; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  path {
    transform-box: fill-box; transform-origin: center;
    transition: transform 0.25s ease, opacity 0.2s ease;
  }
  path:nth-child(1) { transform: ${({ $open }) => ($open ? "translateY(5px) rotate(45deg)" : "none")}; }
  path:nth-child(2) { opacity: ${({ $open }) => ($open ? 0 : 1)}; }
  path:nth-child(3) { transform: ${({ $open }) => ($open ? "translateY(-5px) rotate(-45deg)" : "none")}; }
  @media (prefers-reduced-motion: reduce) {
    path { transition: none; }
  }
`;

export const Menu = styled.nav<{ $open: boolean }>`
  position: absolute; top: 84px; right: 24px;
  width: 280px; max-width: calc(100% - 48px);
  background: ${({ theme }) => theme.colors.card}; border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius}; padding: 8px; z-index: 50;
  display: flex; flex-direction: column;
  transform-origin: top right;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "none" : "translateY(-8px) scale(0.97)")};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  /* visibility flips after the fade on close so the menu stays out of the tab order once hidden */
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear ${({ $open }) => ($open ? "0s" : "0.2s")};
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  a {
    color: ${({ theme }) => theme.colors.text}; text-decoration: none;
    padding: 14px 16px; border-radius: 8px;
  }
  a:hover, a:focus-visible { background: ${({ theme }) => theme.colors.navy}; color: ${({ theme }) => theme.colors.accent}; }
`;
