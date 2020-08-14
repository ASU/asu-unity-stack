/** @jsx h */

import { h } from "preact";

import { FoldableCard } from ".";
import {H4} from "../Heading/styles";

export default {
  component: FoldableCard,
  title: "FoldableCard",
};

export const base = () => (
  <FoldableCard
    id="foldable-card-1"
    head={
      <H4>
        <span class="fa fa-mobile" />
        <a
          id="mobile-app-header"
          class=""
          onClick={(e) => {e.preventDefault();}}
          href="#mobile-app-content"
          role="button"
          aria-expanded="true"
          aria-controls="mobile-app-content"
        >
          ASU Mobile App (push notifications)
        </a>
      </H4>
    }
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud
  </FoldableCard>
);
