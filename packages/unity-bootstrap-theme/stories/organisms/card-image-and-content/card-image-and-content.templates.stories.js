import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../helpers/wrapper.js";
import { cardNoTemplates as Card } from "../../molecules/cards/cards.templates.stories";
export default createComponent(
  "Content Sections/Card Image And Content",
  "Organisms",
  "Templates"
);
import { googleAnalytics } from "@asu/unity-bootstrap-theme/js/data-layer.js";

const initFunc = () => {
  googleAnalytics()
}
export const CardAndImageContent = createStory(
  <div className="uds-card-image-and-content">
    <div
      className="uds-card-image-and-content-image-container"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
      }}
    ></div>
    <div className="uds-card-image-and-content-content-container uds-content-align">
      <div className="uds-card-image-and-content-content-container-headline uds-content-align">
        Section headline goes here
      </div>
      <div className="content">
        Here is some introductory text about the topic featured in this section.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </div>
      {Card({
        cardHeader: "image",
        event: false,
        link: true,
        tags: true,
        numButtons: 1,
      })}
    </div>
  </div>,
  {
    initFunc,
  }
);
CardAndImageContent.parameters = {
  uds:{
    template: {
      include: [0]
    }
  }
}

