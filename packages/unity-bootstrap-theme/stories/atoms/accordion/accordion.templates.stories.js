import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Accordions", "Atoms", "Templates");

const FoldableCardElement = (
  accordionID = null,
  linkID = null,
  bodyID = null
) => (
  <div className="accordion">
    <div className="accordion-item mt-3">
      <div className="accordion-header">
        <h3>
          <a
            id={`${linkID}`}
            className="collapsed"
            data-bs-toggle="collapse"
            data-bs-target={bodyID ? `#${bodyID}` : ""}
            href={bodyID ? `#${bodyID}` : ""}
            role="button"
            aria-expanded="false"
            aria-controls={`${bodyID}`}
            data-ga="This card unfolds"
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            This card unfolds.
            <span className="fas fa-chevron-up"></span>
          </a>
        </h3>
      </div>
      <div
        id={`${bodyID}`}
        className="collapse accordion-body"
        aria-labelledby={`${linkID}`}
        data-bs-parent={accordionID ? `#${accordionID}` : ""}
      >
        <h4>This is a quaternary headline</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud
        </p>
        <h5>This is a level five headline. There's a fancy word for that too.</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
        </p>
      </div>
    </div>
  </div>
);

export const FoldableCard = createStory(
  FoldableCardElement("", "card", "cardBody")
);

export const Accordion = createStory(
  <div className="accordion" id="accordionExample">
    {FoldableCardElement("accordionExample", "cardOne", "cardBodyOne")}
    {FoldableCardElement("accordionExample", "cardTwo", "cardBodyTwo")}
    {FoldableCardElement("accordionExample", "cardThree", "cardBodyThree")}
  </div>
);
