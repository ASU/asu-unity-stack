import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Buttons", "Atoms", "Examples");
import { googleAnalytics as initFunc } from "../../../src/js/googleAnalytics";

export const ButtonColorsComponent = createStory(
  <div>
    <br />
    {/* This same google analytics structure is for all the examples */}
    <a
      class="btn btn-primary"
      href="/"
      data-ga="btn-primary link"
      data-ga-name="onclick"
      data-ga-event="link"
      data-ga-action="click"
      data-ga-type="internal link"
      data-ga-region="main content"
    >
      btn-primary link
    </a>
    <hr />
    <button class="btn btn-primary">btn-primary button</button>
    <hr />
    <button class="btn btn-gold" type="submit">
      Button button
    </button>
    <hr />
    <a class="btn btn-gold" type="button" href="#">
      Anchor tag button
    </a>
    <hr />
    <input class="btn btn-gold" type="submit" value="Input button" />
    <hr />
    <button type="button" class="btn btn-maroon">
      Maroon
    </button>
    <hr />
    <button type="button" class="btn btn-gray">
      Light
    </button>
    <hr />
    <button type="button" class="btn btn-dark">
      Dark
    </button>
  </div>,
  { initFunc }
);
ButtonColorsComponent.args = {
  template: 1,
};

const sizesDemoStyle = {
  display: "inline-grid",
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(4, auto)",
  gridTemplateRows: "repeat(4, auto)",
  rowGap: "1rem",
  columnGap: "2rem",
};
export const ButtonSizesComponent = createStory(
  <div>
    <div style={sizesDemoStyle}>
      <div>
        <button type="button" class="btn btn-maroon">
          Default button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-gold">
          Default button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-dark">
          Default button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-gray">
          Default button
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-md btn-maroon">
          Small button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-md btn-gold">
          Small button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-md btn-dark">
          Small button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-md btn-gray">
          Small button
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-sm btn-maroon">
          X-small button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-sm btn-gold">
          X-small button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-sm btn-dark">
          X-small button
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-sm btn-gray">
          X-small button
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-tag-alt-gray">
          Tag item
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);
ButtonSizesComponent.args = {
  template: 1,
};

export const ButtonWithIconComponent = createStory(
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <a href="#" class="btn btn-gold" role="button">
        <span class="fas fa-rocket"></span>&nbsp;&nbsp;Gold button
      </a>
      <hr />
      <a href="#" class="btn btn-maroon" role="button">
        <span class="fas fa-rocket"></span>&nbsp;&nbsp;Maroon button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const DisabledStateComponent = createStory(
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <button type="button" class="btn btn-gold" disabled>
        Gold button
      </button>
      <hr />
      <button type="button" class="btn btn-maroon" disabled>
        Button
      </button>
      <hr />
      <a
        href="#"
        class="btn btn-gold disabled"
        tabindex="-1"
        role="button"
        aria-disabled="true"
      >
        Gold link
      </a>
      <hr />
      <a
        href="#"
        class="btn btn-maroon disabled"
        tabindex="-1"
        role="button"
        aria-disabled="true"
      >
        Link
      </a>
    </div>
  </div>,
  { initFunc }
);

export const ButtonTagsComponent = createStory(
  <div class="container-fluid">
    <div class="row">
      <div class="col col-12 col-lg-4 bg-white p-3">
        <a href="#" class="">
          This is a default link
        </a>
      </div>
      <div class="col col-12 col-lg-4 bg-light p-3">
        <a href="#" class="">
          This is a default link
        </a>
      </div>
      <div class="col col-12 col-lg-4 bg-dark p-3">
        <a href="#" class="text-gold">
          This is a link on a dark background
        </a>
      </div>
    </div>
  </div>,
  { initFunc }
);

export const IconOnlyButtonsColorAndSizesComponent = createStory(
  <div class="container-fluid">
    <div class="row">
      <div class="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-x-large btn-circle-alt-gray"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-large btn-circle-alt-gray"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button type="button" class="btn btn-circle btn-circle-alt-gray">
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>

      <div class="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-x-large btn-circle-alt-white"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-large btn-circle-alt-white"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button type="button" class="btn btn-circle btn-circle-alt-white">
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);
export const IconOnlyButtonsColorCombinationsComponent = createStory(
  <div class="container-fluid">
    <div class="row">
      <div class="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-x-large btn-circle-alt-white"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-large btn-circle-alt-white"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button type="button" class="btn btn-circle btn-circle-alt-white">
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
      <div class="col col-12 col-lg-4 bg-light-gray p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-x-large btn-circle-alt-white"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-large btn-circle-alt-white"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button type="button" class="btn btn-circle btn-circle-alt-white">
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
      <div class="col col-12 col-lg-4 bg-light p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-x-large btn-circle-alt-gray"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-large btn-circle-alt-gray"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button type="button" class="btn btn-circle btn-circle-alt-gray">
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
      <div class="col col-12 col-lg-4 bg-dark p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-x-large btn-circle-alt-gray"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-large btn-circle-alt-gray"
        >
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
        <button type="button" class="btn btn-circle btn-circle-alt-gray">
          <i class="fas fa-times"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);

export const PrevAndNextButtonsComponent = createStory(
  <div class="container-fluid">
    <div class="row">
      <div class="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-white btn-circle-large"
        >
          <i class="fas fa-chevron-left"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-white btn-circle-large"
        >
          <i class="fas fa-chevron-right"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="col col-12 col-lg-4 bg-light p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-gray btn-circle-large"
        >
          <i class="fas fa-chevron-left"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-gray btn-circle-large"
        >
          <i class="fas fa-chevron-right"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="col col-12 col-lg-4 bg-dark p-3">
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-black btn-circle-large"
        >
          <i class="fas fa-chevron-left"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-black btn-circle-large"
        >
          <i class="fas fa-chevron-right"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);

const demoButtonStyle = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "10px",
};
const TestButtons =
  ((
    <div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-gold">
          Gold
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-maroon">
          Maroon
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-link">
          Link
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-light">
          Light
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-dark">
          Dark
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-success">
          Alert: Success
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-danger">
          Alert: Danger
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-warning">
          Alert: Warning
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" class="btn btn-info">
          Alert: Info
        </button>
      </div>
    </div>
  ),
  { initFunc });
