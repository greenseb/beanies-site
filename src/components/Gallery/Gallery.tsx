import { galleryPhotos } from "../../content/photos";
import { SectionTitle, Wrap } from "../ui";
import { GalleryPhoto, Grid, Section } from "./Gallery.styles";

export function Gallery() {
  return (
    <Section id="gallery" aria-labelledby="gallery-title">
      <Wrap>
        <SectionTitle><h2 id="gallery-title">Pets we've looked after</h2></SectionTitle>
        <Grid>
          {galleryPhotos.map((photo, i) => (
            <GalleryPhoto key={i} photo={photo} />
          ))}
        </Grid>
      </Wrap>
    </Section>
  );
}
