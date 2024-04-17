import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Dividers/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const Divider = () => (
  <div>
    <h2>
      <span className="highlight-gold">Horizontal Rules</span>
    </h2>
    <h3>
      <span className="highlight-black">Margin-width content divider</span>
    </h3>
    <hr />
    <h3>
      <span className="highlight-black">Gold body copy divider</span>
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id
      semper risus in. Lacus sed viverra tellus in. Mauris vitae ultricies leo
      integer malesuada nunc vel risus commodo. Gravida rutrum quisque non
      tellus orci. Cursus sit amet dictum sit. Venenatis cras sed felis eget
      velit. Gravida cum sociis natoque penatibus et magnis. Quis hendrerit
      dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae
      aliquet nec ullamcorper sit amet. Tristique et egestas quis ipsum
      suspendisse ultrices. Ultricies leo integer malesuada nunc vel risus
      commodo. Aliquam purus sit amet luctus venenatis lectus. Felis eget nunc
      lobortis mattis aliquam faucibus purus in. Senectus et netus et malesuada
      fames ac turpis egestas. Id aliquet risus feugiat in ante metus dictum.
      Donec et odio pellentesque diam volutpat commodo. Sed velit dignissim
      sodales ut eu sem integer. Adipiscing enim eu turpis egestas pretium.
    </p>
    <hr className="copy-divider" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id
      semper risus in. Lacus sed viverra tellus in. Mauris vitae ultricies leo
      integer malesuada nunc vel risus commodo. Gravida rutrum quisque non
      tellus orci. Cursus sit amet dictum sit. Venenatis cras sed felis eget
      velit. Gravida cum sociis natoque penatibus et magnis. Quis hendrerit
      dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae
      aliquet nec ullamcorper sit amet. Tristique et egestas quis ipsum
      suspendisse ultrices. Ultricies leo integer malesuada nunc vel risus
      commodo. Aliquam purus sit amet luctus venenatis lectus. Felis eget nunc
      lobortis mattis aliquam faucibus purus in. Senectus et netus et malesuada
      fames ac turpis egestas. Id aliquet risus feugiat in ante metus dictum.
      Donec et odio pellentesque diam volutpat commodo. Sed velit dignissim
      sodales ut eu sem integer. Adipiscing enim eu turpis egestas pretium.
    </p>
  </div>
);
