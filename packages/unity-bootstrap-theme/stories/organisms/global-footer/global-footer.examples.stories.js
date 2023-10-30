import React from "react";
// import { createComponent, createStory } from "../../../helpers/wrapper.js";

import {
  Footer,
  // GlobalElementsOnly,
  // ZeroColumns,
  // OneColumn,
  // OneColumnNoLogoOrSocial,
  // TwoColumns,
  // ThreeColumns,
  // FourColumns,
  // FiveColumns,
  // SixColumns,
} from "./global-footer.templates.stories.js";
// import { initFooterGA as initFunc } from "./global-footer";

// const options = {
  //   initFunc,
  //   omitTemplate: true
  // }
  // export const GlobalElementsOnlyExample = createStory(GlobalElementsOnly, options);
  // export const ZeroColumnsExample = createStory(ZeroColumns, options);
  // export const OneColumnExample = createStory(OneColumn, options);
  // export const OneColumnNoLogoOrSocialExample = createStory(OneColumnNoLogoOrSocial, options);
  // export const TwoColumnsExample = createStory(TwoColumns, options);
  // export const ThreeColumnsExample = createStory(ThreeColumns, options);
  // export const FourColumnsExample = createStory(FourColumns, options);
  // export const FiveColumnsExample = createStory(FiveColumns, options);
  // export const SixColumnsExample = createStory(SixColumns, options);

  const FooterTemplate = {
    render: (args) => <div id="html-root"><Footer {...args}/></div>,
  }

  export const GlobalElementsOnlyExample = {
    ...FooterTemplate,
  }

  export const ZeroColumnsExample = {
    ...FooterTemplate,
    args: {logo: false}
  }

  export const OneColumnExample = {
    ...FooterTemplate,
    args: {columns: 1 }
  }


  export const OneColumnNoLogoOrSocialExample = {
    ...FooterTemplate,
    args: {logo: false, columns: 1}
  }

  export const TwoColumnsExample = {
    ...FooterTemplate,
    args: {columns: 2}
  }

  export const ThreeColumnsExample = {
    ...FooterTemplate,
    args: {columns: 3}
  }

export const FourColumnsExample  = {
  ...FooterTemplate,
  args: {columns: 4}
}

export const FiveColumnsExample  = {
  ...FooterTemplate,
  args: {columns: 5}
}

export const SixColumnsExample = {
  ...FooterTemplate,
  args: {columns: 6}
}


export default {
  title: "Organisms/Global Footer/Examples",
  component: Footer,
  argTypes: {
    logo: {
      control: {
        type: "boolean"
      }
    },
    columns:{
      control: {
        type: "range",
        min:0,
        max:6,
        step:1

      }
    }
  },
  args: {...Footer.defaultProps},
  parameters: {
    footer: {
      disable: true
    }
  }
};
