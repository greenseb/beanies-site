import styled from "styled-components";
import { SectionTitle } from "../ui";
import type { StatusKind } from "./BookingForm.types";

export const Section = styled.section`
  max-width: 760px; margin: 0 auto; padding: 72px 24px;
`;

export const Intro = styled(SectionTitle)`
  p { color: ${({ theme }) => theme.colors.muted}; text-align: center; }
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.card}; border-radius: 16px; padding: 28px;
  display: flex; flex-direction: column; gap: 18px;
`;

export const Row = styled.div`
  display: flex; flex-wrap: wrap; gap: 18px;
`;

export const Field = styled.div`
  flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 6px;
  label { font-size: 14px; }
`;

export const Honeypot = styled.input`
  position: absolute; left: -9999px;
`;

export const StatusText = styled.p<{ $kind: StatusKind }>`
  font-size: 15px; min-height: 1.6em;
  color: ${({ $kind, theme }) =>
    $kind === "ok" ? theme.colors.accent : $kind === "err" ? theme.colors.error : "inherit"};
`;
