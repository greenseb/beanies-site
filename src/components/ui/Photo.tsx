import { PlaceholderBox } from "./ui.styles";
import type { PhotoProps } from "./ui.types";

// Shows the real image when `photo.src` is set, otherwise the dashed placeholder.
// Style it with styled(Photo)`...` so the same sizing applies to both.
export function Photo({ photo, className }: PhotoProps) {
  if (photo.src) {
    // Content paths start with "/"; prefix the base so they work under a subpath too.
    const src = photo.src.replace(/^\//, import.meta.env.BASE_URL);
    return <img className={className} src={src} alt={photo.alt} />;
  }
  return <PlaceholderBox className={className}>{photo.placeholder}</PlaceholderBox>;
}
