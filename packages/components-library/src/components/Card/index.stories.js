/** @jsx h */

import { h } from 'preact';
import { withA11y } from "@storybook/addon-a11y";

import { FoldableCard } from '.';

export default {
  component: FoldableCard,
  title: "FoldableCard",
  decorators: [withA11y],
};

export const base = () => <FoldableCard head={<h1>Header</h1>}> Some content here.</FoldableCard>;
