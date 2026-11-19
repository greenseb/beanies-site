export type StatusKind = "idle" | "sending" | "ok" | "err";

export interface Status {
  kind: StatusKind;
  message: string;
}
