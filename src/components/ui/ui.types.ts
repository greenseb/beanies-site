import type { PhotoSlot } from "../../content/photos";

export interface ButtonProps {
  $variant?: "primary" | "outline";
}

export interface PhotoProps {
  photo: PhotoSlot;
  className?: string;
}
