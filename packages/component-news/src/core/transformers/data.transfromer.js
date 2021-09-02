import { shortenText } from "../utils/shorten-text";

// @ts-check
const transformData = ({ node }, index) => ({
  index,
  id: node.nid,
  imageUrl: node.image_url,
  imageAltText: node.image_url,
  title: shortenText(node.title, 80),
  content: shortenText(node?.clas_teaser, 140),
  buttonLink: node.path,
  interests: node.interests,
});

export { transformData };
