import React from 'react';
import { createComponent, createStory } from '../../../../helpers/wrapper.js';

const extraOptions = {
  right: {
    name: 'Right',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  bgColor: {
    name: 'Background Color',
    options: ['', 'gray-1-bg', 'gray-2-bg', 'gray-7-bg'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'None',
        'gray-1-bg': 'gray-1-bg',
        'gray-2-bg': 'gray-2-bg',
        'gray-7-bg': 'gray-7-bg',
      },
    },
  },
};

export default createComponent(
  'Content Sections/Image And Text Block',
  'Molecules',
  'Templates',
  extraOptions
);

export const ImageLeftOrRight = createStory((args) => {
  return (
    <div
      class={`uds-image-text-block-container ${
        args.right ? 'uds-image-text-block-container-right' : ''
      }`}
    >
      <div class="uds-image-text-block-image-container">
        <img
          src="https://source.unsplash.com/WLUHO9A_xik/1200x750"
          class="img-fluid"
          alt="Random image. REPLACE with appropriate alt text for accessibility."
        ></img>
      </div>
      <div class={`uds-image-text-block-text-container ${args.bgColor}`}>
        <h3>This is a heading</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </p>
        <div class="row">
          <div class="col-12 col-md-6 py-1">
            <a
              href="#"
              class={`btn ${
                args.bgColor === 'gray-7-bg' ? 'btn-gold' : 'btn-dark'
              }`}
            >
              Button link here
            </a>
          </div>
          <div class="col-12 col-md-6 py-1">
            <a
              href="#"
              class={`btn ${
                args.bgColor === 'gray-7-bg' ? 'btn-gold' : 'btn-dark'
              }`}
            >
              Button link here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
ImageLeftOrRight.args = {
  template: 1,
};
