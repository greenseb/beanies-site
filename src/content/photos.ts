// To use a real photo: put the file in public/images/ and set `src` to e.g. "/images/hero.jpg",
// then write a short description of the photo in `alt`. Leave `src` out to show the placeholder.
export interface PhotoSlot {
  src?: string;
  alt: string;
  placeholder: string;
}

export const heroPhoto: PhotoSlot = {
  src: "/images/winnie-field.jpg",
  alt: "Describe the photo",
  placeholder: "Hero photo placeholder: a happy pet",
};

export const galleryPhotos: PhotoSlot[] = [
  { alt: "Describe the photo", placeholder: "Photo placeholder" },
  { alt: "Describe the photo", placeholder: "Photo placeholder" },
  { alt: "Describe the photo", placeholder: "Photo placeholder" },
];

export const aboutPhoto: PhotoSlot = {
  alt: "Describe the photo",
  placeholder: "Photo placeholder: you and your pets",
};

export const logo = {
  src: "/images/beanies-logo.png",
  alt: "Beanies Pet Services",
};
