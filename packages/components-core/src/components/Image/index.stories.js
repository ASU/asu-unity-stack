// @ts-check
import React from "react";

import { Image } from ".";

export default {
  title: "UDS/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component: 'The image component is basically a wrapper for the \`<img>\` HTML element. It accepts some of the properties available for the native element, but only those that are necessary to function optimally. These properties are documented in the PropTypes object and you can see the specifications there. It is important to note that this component was specifically created for use within the UDS library and its React components, and should not be used directly outside of that context.'
      }
    }
  }
}

const Template = args => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://source.unsplash.com/WLUHO9A_xik/800x600",
  alt: "Placeholder image",
}

const GridTemplate = args => {
  return (
    <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {
        [...Array(20)].map((_, idx) => {
          return <Image key={idx} {...args} />
        })
      }
    </div>
  )
}

export const GridImages = GridTemplate.bind({});
GridImages.args = {
  alt: "Placeholder image",
  width: '100%',
  src: 'https://source.unsplash.com/WLUHO9A_xik/800x600'
}
