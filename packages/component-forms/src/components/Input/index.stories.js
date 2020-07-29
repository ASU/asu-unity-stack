/** @jsx h */

import { h } from "preact";
import {Input} from ".";

export default {
  component: Input,
  title: "Input",
};

export const base = () => (
  <Input type="checkbox" />
);
