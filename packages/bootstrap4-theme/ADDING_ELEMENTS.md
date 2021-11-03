# Adding new Elements

## Templates
Each element in this design system is either an atom, a molecule, or an organism, these definitions are
taken from the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/).

When creating a new element, once you've decided whether it's an atom, a molecule, or an organism, you should create a
template for it. A template is what the element will look like in the real world. In order to provide the best experience,
we've provided a wrapper function which takes your element's markup (/JSX) so that you can take advantage of Storybook.

Your template file should be located in:

`packages/bootstrap4-theme/stories/{element_type}/{element_name}/{element_name}.templates.js

where element_type is one of 'atoms', 'molecules', or 'organisms'.

That file should look something like this (where element_type is one of 'Atoms', 'Molecules', or 'Organisms'):

```
  import React from 'react';

  import { createComponent, createStory } from '../../../helpers/wrapper.js';
  export default createComponent('{element_name}', '{element_type}', 'Templates');

  export const MyElementTemplate = createStory(
    <div>
      Here's my element!
    </div>
  );
```

Once you view this in Storybook, you'll already be able to see it in various layouts like full-width,
single-column fixed-with, etc. You'll also be able to switch on and off the header and footer previews
so as to check the alignment of your component. These are located in the Storybook Controls panel and
are provided to your element through the `createStory` function.

## Examples
Usually you'll want to provide different examples of your component in use. These should be thinks that can be
used as extra reference, like a story with no content, and another story with lots of content, etc.

Your examples file should be located in:

`packages/bootstrap4-theme/stories/{element_type}/{element_name}/{element_name}.examples.js

where element_type is one of 'atoms', 'molecules', or 'organisms'.

That file should look something like this (where element_type is one of 'Atoms', 'Molecules', or 'Organisms'):

```
  import React from 'react';

  import { createComponent, createStory } from '../../../helpers/wrapper.js';
  export default createComponent('{element_name}', '{element_type}', 'Examples');

  export const MyElementExampleWithoutContent = createStory(
    <div>
      Here's my element! No extra content!
    </div>
  );

  export const MyElementExampleWithContent = createStory(
    <div>
      Here's my element!
      <span>
        So much content!
      </span>
      <img src="thing.jpg" alt="example" />
    </div>
  );
```
![divider](./divider.png)
## Customising the controls

### The options object

You can also provide a second argument to `createStory`, which is an options object. You can pass the
following data:

#### initFunc
A function that will be called when the component is first rendered. This will run when
someone opens the story in storybook.
There's an example of this in the [modals element](./stories/atoms/modals/modals.templates.js)

#### supportedTemplates

An array which can contain any of the following values:
- layoutNames.FULL_WIDTH
- layoutNames.ONE_COLUMN
- layoutNames.TWO_COLUMN
- layoutNames.THREE_COLUMN
- layoutNames.FOUR_COLUMN
If provided, only these layout options will be available for your element.
Typically this is used to stop users from viewing layouts that aren't
supported by your element. Like four-column for a hero component.
You should change your imports at the top of the file to be:
```
import { createComponent, createStory, layoutNames } from '../../../helpers/wrapper.js';
```
There's an example of this in the [alerts element](./stories/atoms/alerts/alerts.templates.js)

#### omitTemplate
This removes the wrapper provided by `createStory` and renders your story as-is.
This shouldn't be used very often, as by doing so you're removing the guarantee that
if a CMS has templates similar to ours, the story will render in a predictable way.

There's an example of this in the [modals element](./stories/atoms/modals/modals.templates.js)


### Custom controls
Often, you'll want to add some custom controls so that you can cut down on stories.
For example your element might support four different colours.

In order to achieve this, we use the same `createStory` function, but instead of
passing markup, we pass a function which takes arguments and returns markup.

We'll also need to declare the option to storybook.

It will look like this:
```
  import React from 'react';

  import { createComponent, createStory } from '../../../helpers/wrapper.js';

  const extraOptions = {
  color: {
    name: 'Color',
    options: [
      '',
      'maroon',
      'gold'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'Default',
        'maroon': 'Maroon',
        'gold': 'Gold'
      },
    },
  },
}

  export default createComponent('{element_name}', '{element_type}', 'Templates', extraOptions);

  export const MyElementTemplate = createStory(
    (args) => {
      return (
        <div class={`${args.color}`}>
          Here's my element!
        </div>
      )
    }
  );
```

Note that `extraOptions` is passed to `createComponent`.

You can see examples of this in the [list template](./stories/atoms/list/list.templates.js) and the [button template](./stories/atoms/button/button.templates.js).
