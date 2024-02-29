import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  percy: {
    include: [
      "Card Carousel: Three Item Carousel\$",
      "Image Carousel: Image Carousel Default\$",
      "Image Gallery Carousel: Image Carousel With More Content\$",
      "Testimonial Carousel: Testimonial Carousel Default\$",
    ],
  },
};
