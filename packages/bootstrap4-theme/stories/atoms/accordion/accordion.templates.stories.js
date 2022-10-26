import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Accordions', 'Atoms', 'Templates');
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics';

const FoldableCardElement = (
  accordionID = null,
  linkID = null,
  bodyID = null
) => (
  <div class="card card-foldable">
    <div class="card-header">
      <h4>
        <a
          id={`${linkID}`}
          class="collapsed"
          data-toggle="collapse"
          data-target={bodyID ? `#${bodyID}` : ''}
          href={bodyID ? `#${bodyID}` : ''}
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
          <span class="fas fa-chevron-up"></span>
        </a>
      </h4>
    </div>
    <div
      id={`${bodyID}`}
      class="collapse card-body"
      aria-labelledby={`${linkID}`}
      data-parent={accordionID ? `#${accordionID}` : ''}
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
);

export const FoldableCard = createStory(
  FoldableCardElement('', 'card', 'cardBody'),
  { initFunc }
);

export const Accordion = createStory(
  <div class="accordion" id="accordionExample">
    {FoldableCardElement('accordionExample', 'cardOne', 'cardBodyOne')}
    {FoldableCardElement('accordionExample', 'cardTwo', 'cardBodyTwo')}
    {FoldableCardElement('accordionExample', 'cardThree', 'cardBodyThree')}
  </div>,
  { initFunc }
);
