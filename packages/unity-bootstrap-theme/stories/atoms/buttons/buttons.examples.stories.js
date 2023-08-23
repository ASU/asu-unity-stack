import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Buttons", "Atoms", "Examples");
import { googleAnalytics } from "@asu/unity-bootstrap-theme/js/data-layer.js";

const initFunc = () => {
  googleAnalytics()
}
export const ButtonColorsComponent = createStory(
  <div>
    <br />
    {/* This same google analytics structure is for all the examples */}
    <a
      className="btn btn-primary"
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
    <button className="btn btn-primary">btn-primary button</button>
    <hr />
    <button className="btn btn-gold" type="submit">
      Button button
    </button>
    <hr />
    <a className="btn btn-gold" type="button" href="#">
      Anchor tag button
    </a>
    <hr />
    <input className="btn btn-gold" type="submit" value="Input button" />
    <hr />
    <button type="button" className="btn btn-maroon">
      Maroon
    </button>
    <hr />
    <button type="button" className="btn btn-gray">
      Light
    </button>
    <hr />
    <button type="button" className="btn btn-dark">
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
        <button type="button" className="btn btn-maroon">
          Default button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-gold">
          Default button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-dark">
          Default button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-gray">
          Default button
        </button>
      </div>

      <div>
        <button type="button" className="btn btn-md btn-maroon">
          Small button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-md btn-gold">
          Small button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-md btn-dark">
          Small button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-md btn-gray">
          Small button
        </button>
      </div>

      <div>
        <button type="button" className="btn btn-sm btn-maroon">
          X-small button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-sm btn-gold">
          X-small button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-sm btn-dark">
          X-small button
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-sm btn-gray">
          X-small button
        </button>
      </div>

      <div>
        <button type="button" className="btn btn-tag-alt-gray">
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
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <a href="#" className="btn btn-gold" role="button">
        <span className="fas fa-rocket"></span>&nbsp;&nbsp;Gold button
      </a>
      <hr />
      <a href="#" className="btn btn-maroon" role="button">
        <span className="fas fa-rocket"></span>&nbsp;&nbsp;Maroon button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const DisabledStateComponent = createStory(
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <button type="button" className="btn btn-gold" disabled>
        Gold button
      </button>
      <hr />
      <button type="button" className="btn btn-maroon" disabled>
        Button
      </button>
      <hr />
      <a
        href="#"
        className="btn btn-gold disabled"
        tabIndex="-1"
        role="button"
        aria-disabled="true"
      >
        Gold link
      </a>
      <hr />
      <a
        href="#"
        className="btn btn-maroon disabled"
        tabIndex="-1"
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
  <div className="container-fluid">
    <div className="row">
      <div className="col col-12 col-lg-4 bg-white p-3">
        <a href="#" className="">
          This is a default link
        </a>
      </div>
      <div className="col col-12 col-lg-4 bg-light p-3">
        <a href="#" className="">
          This is a default link
        </a>
      </div>
      <div className="col col-12 col-lg-4 bg-dark p-3">
        <a href="#" className="text-gold">
          This is a link on a dark background
        </a>
      </div>
    </div>
  </div>,
  { initFunc }
);

export const IconOnlyButtonsColorAndSizesComponent = createStory(
  <div className="container-fluid">
    <div className="row">
      <div className="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-x-large btn-circle-alt-gray"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-gray"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button type="button" className="btn btn-circle btn-circle-alt-gray">
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
      </div>

      <div className="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-x-large btn-circle-alt-white"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-white"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button type="button" className="btn btn-circle btn-circle-alt-white">
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);
export const IconOnlyButtonsColorCombinationsComponent = createStory(
  <div className="container-fluid">
    <div className="row">
      <div className="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-x-large btn-circle-alt-white"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-white"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button type="button" className="btn btn-circle btn-circle-alt-white">
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
      </div>
      <div className="col col-12 col-lg-4 bg-light-gray p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-x-large btn-circle-alt-white"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-white"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button type="button" className="btn btn-circle btn-circle-alt-white">
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
      </div>
      <div className="col col-12 col-lg-4 bg-light p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-x-large btn-circle-alt-gray"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-gray"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button type="button" className="btn btn-circle btn-circle-alt-gray">
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
      </div>
      <div className="col col-12 col-lg-4 bg-dark p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-x-large btn-circle-alt-gray"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-gray"
        >
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <button type="button" className="btn btn-circle btn-circle-alt-gray">
          <i className="fas fa-times"></i>
          <span className="visually-hidden">Close</span>
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);

export const PrevAndNextButtonsComponent = createStory(
  <div className="container-fluid">
    <div className="row">
      <div className="col col-12 col-lg-4 bg-white p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-white btn-circle-large"
        >
          <i className="fas fa-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-white btn-circle-large"
        >
          <i className="fas fa-chevron-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col col-12 col-lg-4 bg-light p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-gray btn-circle-large"
        >
          <i className="fas fa-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-gray btn-circle-large"
        >
          <i className="fas fa-chevron-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col col-12 col-lg-4 bg-dark p-3">
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-black btn-circle-large"
        >
          <i className="fas fa-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-black btn-circle-large"
        >
          <i className="fas fa-chevron-right"></i>
          <span className="visually-hidden">Next</span>
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
        <button type="button" className="btn btn-gold">
          Gold
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-maroon">
          Maroon
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-light">
          Light
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-success">
          Alert: Success
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-danger">
          Alert: Danger
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-warning">
          Alert: Warning
        </button>
      </div>
      <div style={demoButtonStyle}>
        <button type="button" className="btn btn-info">
          Alert: Info
        </button>
      </div>
    </div>
  ),
  { initFunc });
