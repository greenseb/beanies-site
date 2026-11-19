import styled, { css } from "styled-components";
import type { ButtonProps } from "./ui.types";

export const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const buttonBase = css`
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 52px; padding: 0 24px;
  border-radius: 8px; font: inherit; font-size: 16px; font-weight: 600;
  text-decoration: none; cursor: pointer; border: 1px solid transparent;
`;

const primary = css`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.navy};
  &:hover { background: ${({ theme }) => theme.colors.text}; color: ${({ theme }) => theme.colors.navy}; }
`;

const outline = css`
  border-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  &:hover { background: ${({ theme }) => theme.colors.text}; color: ${({ theme }) => theme.colors.navy}; }
`;

const variant = ({ $variant = "primary" }: ButtonProps) => ($variant === "primary" ? primary : outline);

export const ButtonLink = styled.a<ButtonProps>`
  ${buttonBase}
  ${variant}
`;

export const SubmitButton = styled.button<ButtonProps>`
  ${buttonBase}
  ${variant}
`;

export const SectionTitle = styled.div`
  text-align: center; display: flex; flex-direction: column; align-items: center;
  gap: 8px; margin-bottom: 32px;
  h2 { font-size: 32px; }
`;

export const Rule = styled.div`
  width: 120px; height: 2px; background: ${({ theme }) => theme.colors.text};
`;

export const PlaceholderBox = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px dashed ${({ theme }) => theme.colors.accent};
  display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 24px; color: ${({ theme }) => theme.colors.muted}; font-size: 15px;
`;
