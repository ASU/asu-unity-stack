/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import React from "react";

import { AnchorMenu } from ".";

export default {
  title: "UDS/AnchorMenu",
  component: AnchorMenu,
  parameters: {
    docs: {
      description: {
        component: `The Anchor Menu component can be used to generate a responsive anchor menu.
        ## Usage

        Anchor menu users are responsible to meet all UDS design guidelines with their menu,
        including rules on the use of Call-to-Action buttons and tags.

        View component examples and source code below.

        This story includes another components for demostration purposes.
        `,
      },
    },
  },
};

const Template = args => (
  <div className={classNames("container")}>
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        {/* Component */}
        <AnchorMenu {...args} />
        {/* Demostration purposes containers */}
        <div id="first-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur lectus nec laoreet elementum. Mauris ut sapien nibh.
            Aenean consequat pellentesque rutrum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam sollicitudin neque vel risus volutpat, nec hendrerit nisl
            tempus. Etiam suscipit purus imperdiet, ultrices enim et, maximus
            lectus. Aenean hendrerit, nibh eget vehicula sollicitudin, nulla
            tellus accumsan justo, quis gravida sapien quam ultricies magna.
            Nulla ullamcorper odio id risus pretium, sed ornare turpis luctus.
            Integer ac semper ex, ac convallis lorem. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In eleifend lobortis lacus sed efficitur. Ut rhoncus consectetur
            accumsan. Nulla massa lorem, maximus eu venenatis in, ultrices sit
            amet purus. Duis et rutrum mi, id dictum risus. Fusce suscipit metus
            congue, fermentum sem non, molestie sem. Donec tortor quam,
            imperdiet vel dui at, finibus vestibulum neque. Nulla facilisi. Sed
            fermentum vulputate enim, at aliquam diam tincidunt vitae. Nunc
            eleifend volutpat pellentesque. Aliquam consectetur enim ac lectus
            dapibus bibendum. Cras eget erat magna. Donec turpis quam, efficitur
            in leo in, elementum interdum lorem. Duis tempor tempor nulla, at
            faucibus leo commodo vel. Nunc in tincidunt diam, ac ultrices
            mauris. Nunc quis vehicula tellus. Mauris vehicula gravida eros,
            eget facilisis elit viverra faucibus. Sed viverra rhoncus erat, eget
            dignissim orci tincidunt et. Nullam sodales elit eu metus lobortis,
            ut posuere lectus convallis. Maecenas id lectus id ligula bibendum
            congue ac ut risus. Integer eget neque volutpat, mollis nisi sed,
            lobortis mauris. In est metus, rhoncus in tristique nec, blandit sed
            mauris. Maecenas non risus mauris. Nunc pretium urna sit amet sapien
            venenatis mollis. Sed facilisis libero nisi, fermentum malesuada
            magna commodo at. Phasellus sed hendrerit ipsum. Donec ultrices
            sodales posuere. Proin a finibus mauris, non ornare arcu. Donec eget
            cursus augue. Nulla vel porta massa. Ut hendrerit mauris a suscipit
            ullamcorper. Donec sagittis tellus non ultrices feugiat. Mauris
            sodales, eros id vulputate porttitor, nunc augue aliquet tortor,
            eget mattis turpis mauris nec enim. Proin ac rhoncus lacus. Aliquam
            venenatis lorem ac arcu commodo tristique id eget dolor. Nam gravida
            nisi vel purus interdum, faucibus suscipit arcu placerat. Phasellus
            congue velit et quam elementum, a fermentum velit efficitur. Nunc
            lobortis, lacus at faucibus vestibulum, mauris nisl facilisis odio,
            at elementum nisi mauris nec tortor. Nullam commodo pellentesque
            ante ac porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
            dictum ac elit at elementum. In sit amet hendrerit lacus.
          </p>
        </div>
        <div id="second-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur lectus nec laoreet elementum. Mauris ut sapien nibh.
            Aenean consequat pellentesque rutrum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam sollicitudin neque vel risus volutpat, nec hendrerit nisl
            tempus. Etiam suscipit purus imperdiet, ultrices enim et, maximus
            lectus. Aenean hendrerit, nibh eget vehicula sollicitudin, nulla
            tellus accumsan justo, quis gravida sapien quam ultricies magna.
            Nulla ullamcorper odio id risus pretium, sed ornare turpis luctus.
            Integer ac semper ex, ac convallis lorem. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In eleifend lobortis lacus sed efficitur. Ut rhoncus consectetur
            accumsan. Nulla massa lorem, maximus eu venenatis in, ultrices sit
            amet purus. Duis et rutrum mi, id dictum risus. Fusce suscipit metus
            congue, fermentum sem non, molestie sem. Donec tortor quam,
            imperdiet vel dui at, finibus vestibulum neque. Nulla facilisi. Sed
            fermentum vulputate enim, at aliquam diam tincidunt vitae. Nunc
            eleifend volutpat pellentesque. Aliquam consectetur enim ac lectus
            dapibus bibendum. Cras eget erat magna. Donec turpis quam, efficitur
            in leo in, elementum interdum lorem. Duis tempor tempor nulla, at
            faucibus leo commodo vel. Nunc in tincidunt diam, ac ultrices
            mauris. Nunc quis vehicula tellus. Mauris vehicula gravida eros,
            eget facilisis elit viverra faucibus. Sed viverra rhoncus erat, eget
            dignissim orci tincidunt et. Nullam sodales elit eu metus lobortis,
            ut posuere lectus convallis. Maecenas id lectus id ligula bibendum
            congue ac ut risus. Integer eget neque volutpat, mollis nisi sed,
            lobortis mauris. In est metus, rhoncus in tristique nec, blandit sed
            mauris. Maecenas non risus mauris. Nunc pretium urna sit amet sapien
            venenatis mollis. Sed facilisis libero nisi, fermentum malesuada
            magna commodo at. Phasellus sed hendrerit ipsum. Donec ultrices
            sodales posuere. Proin a finibus mauris, non ornare arcu. Donec eget
            cursus augue. Nulla vel porta massa. Ut hendrerit mauris a suscipit
            ullamcorper. Donec sagittis tellus non ultrices feugiat. Mauris
            sodales, eros id vulputate porttitor, nunc augue aliquet tortor,
            eget mattis turpis mauris nec enim. Proin ac rhoncus lacus. Aliquam
            venenatis lorem ac arcu commodo tristique id eget dolor. Nam gravida
            nisi vel purus interdum, faucibus suscipit arcu placerat. Phasellus
            congue velit et quam elementum, a fermentum velit efficitur. Nunc
            lobortis, lacus at faucibus vestibulum, mauris nisl facilisis odio,
            at elementum nisi mauris nec tortor. Nullam commodo pellentesque
            ante ac porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
            dictum ac elit at elementum. In sit amet hendrerit lacus.
          </p>
        </div>
        <div id="third-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur lectus nec laoreet elementum. Mauris ut sapien nibh.
            Aenean consequat pellentesque rutrum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam sollicitudin neque vel risus volutpat, nec hendrerit nisl
            tempus. Etiam suscipit purus imperdiet, ultrices enim et, maximus
            lectus. Aenean hendrerit, nibh eget vehicula sollicitudin, nulla
            tellus accumsan justo, quis gravida sapien quam ultricies magna.
            Nulla ullamcorper odio id risus pretium, sed ornare turpis luctus.
            Integer ac semper ex, ac convallis lorem. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In eleifend lobortis lacus sed efficitur. Ut rhoncus consectetur
            accumsan. Nulla massa lorem, maximus eu venenatis in, ultrices sit
            amet purus. Duis et rutrum mi, id dictum risus. Fusce suscipit metus
            congue, fermentum sem non, molestie sem. Donec tortor quam,
            imperdiet vel dui at, finibus vestibulum neque. Nulla facilisi. Sed
            fermentum vulputate enim, at aliquam diam tincidunt vitae. Nunc
            eleifend volutpat pellentesque. Aliquam consectetur enim ac lectus
            dapibus bibendum. Cras eget erat magna. Donec turpis quam, efficitur
            in leo in, elementum interdum lorem. Duis tempor tempor nulla, at
            faucibus leo commodo vel. Nunc in tincidunt diam, ac ultrices
            mauris. Nunc quis vehicula tellus. Mauris vehicula gravida eros,
            eget facilisis elit viverra faucibus. Sed viverra rhoncus erat, eget
            dignissim orci tincidunt et. Nullam sodales elit eu metus lobortis,
            ut posuere lectus convallis. Maecenas id lectus id ligula bibendum
            congue ac ut risus. Integer eget neque volutpat, mollis nisi sed,
            lobortis mauris. In est metus, rhoncus in tristique nec, blandit sed
            mauris. Maecenas non risus mauris. Nunc pretium urna sit amet sapien
            venenatis mollis. Sed facilisis libero nisi, fermentum malesuada
            magna commodo at. Phasellus sed hendrerit ipsum. Donec ultrices
            sodales posuere. Proin a finibus mauris, non ornare arcu. Donec eget
            cursus augue. Nulla vel porta massa. Ut hendrerit mauris a suscipit
            ullamcorper. Donec sagittis tellus non ultrices feugiat. Mauris
            sodales, eros id vulputate porttitor, nunc augue aliquet tortor,
            eget mattis turpis mauris nec enim. Proin ac rhoncus lacus. Aliquam
            venenatis lorem ac arcu commodo tristique id eget dolor. Nam gravida
            nisi vel purus interdum, faucibus suscipit arcu placerat. Phasellus
            congue velit et quam elementum, a fermentum velit efficitur. Nunc
            lobortis, lacus at faucibus vestibulum, mauris nisl facilisis odio,
            at elementum nisi mauris nec tortor. Nullam commodo pellentesque
            ante ac porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
            dictum ac elit at elementum. In sit amet hendrerit lacus.
          </p>
        </div>
        <div id="fourth-container" style={{ marginBottom: 400 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur lectus nec laoreet elementum. Mauris ut sapien nibh.
            Aenean consequat pellentesque rutrum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam sollicitudin neque vel risus volutpat, nec hendrerit nisl
            tempus. Etiam suscipit purus imperdiet, ultrices enim et, maximus
            lectus. Aenean hendrerit, nibh eget vehicula sollicitudin, nulla
            tellus accumsan justo, quis gravida sapien quam ultricies magna.
            Nulla ullamcorper odio id risus pretium, sed ornare turpis luctus.
            Integer ac semper ex, ac convallis lorem. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In eleifend lobortis lacus sed efficitur. Ut rhoncus consectetur
            accumsan. Nulla massa lorem, maximus eu venenatis in, ultrices sit
            amet purus. Duis et rutrum mi, id dictum risus. Fusce suscipit metus
            congue, fermentum sem non, molestie sem. Donec tortor quam,
            imperdiet vel dui at, finibus vestibulum neque. Nulla facilisi. Sed
            fermentum vulputate enim, at aliquam diam tincidunt vitae. Nunc
            eleifend volutpat pellentesque. Aliquam consectetur enim ac lectus
            dapibus bibendum. Cras eget erat magna. Donec turpis quam, efficitur
            in leo in, elementum interdum lorem. Duis tempor tempor nulla, at
            faucibus leo commodo vel. Nunc in tincidunt diam, ac ultrices
            mauris. Nunc quis vehicula tellus. Mauris vehicula gravida eros,
            eget facilisis elit viverra faucibus. Sed viverra rhoncus erat, eget
            dignissim orci tincidunt et. Nullam sodales elit eu metus lobortis,
            ut posuere lectus convallis. Maecenas id lectus id ligula bibendum
            congue ac ut risus. Integer eget neque volutpat, mollis nisi sed,
            lobortis mauris. In est metus, rhoncus in tristique nec, blandit sed
            mauris. Maecenas non risus mauris. Nunc pretium urna sit amet sapien
            venenatis mollis. Sed facilisis libero nisi, fermentum malesuada
            magna commodo at. Phasellus sed hendrerit ipsum. Donec ultrices
            sodales posuere. Proin a finibus mauris, non ornare arcu. Donec eget
            cursus augue. Nulla vel porta massa. Ut hendrerit mauris a suscipit
            ullamcorper. Donec sagittis tellus non ultrices feugiat. Mauris
            sodales, eros id vulputate porttitor, nunc augue aliquet tortor,
            eget mattis turpis mauris nec enim. Proin ac rhoncus lacus. Aliquam
            venenatis lorem ac arcu commodo tristique id eget dolor. Nam gravida
            nisi vel purus interdum, faucibus suscipit arcu placerat. Phasellus
            congue velit et quam elementum, a fermentum velit efficitur. Nunc
            lobortis, lacus at faucibus vestibulum, mauris nisl facilisis odio,
            at elementum nisi mauris nec tortor. Nullam commodo pellentesque
            ante ac porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
            dictum ac elit at elementum. In sit amet hendrerit lacus.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      text: "First container",
      targetIdName: "first-container",
      icon: ["fas", "link"],
    },
    { text: "Second container", targetIdName: "second-container" },
    { text: "Third container", targetIdName: "third-container" },
    {
      text: "Fourth container",
      targetIdName: "fourth-container",
      icon: ["fas", "link"],
    },
  ],
};
