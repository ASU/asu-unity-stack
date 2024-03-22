import { createComponent, createStory } from "../../../helpers/wrapper.js";

const extraOptions = {
  bulletColor: {
    name: "Bullet Color",
    options: [null, "maroon", "gold"],
    defaultValue: null,
    control: {
      type: "radio",
      labels: {
        null: "Default",
        "maroon": "Maroon",
        "gold": "Gold",
      },
    },
  },
  backgroundColor: {
    name: "Size",
    options: [null, "smokemode", "light-smokemode", "darkmode"],
    defaultValue: null,
    control: {
      type: "radio",
      labels: {
        null: "Default",
        "smokemode": "Smoke mode",
        "light-smokemode": "Light Smoke mode",
        "darkmode": "Dark mode",
      },
    },
  },
};

export default createComponent("List", "Atoms", "Examples", extraOptions);

export const UnorderedListMultiLevel = createStory(args => {
  return (
    <ul className={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>
        Lorem ipsum dolor sit amet
        <ul className="uds-list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ul className="uds-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ul className="uds-list">
                  <li>
                    Lorem ipsum dolor sit amet
                    <ul className="uds-list">
                      <li>
                        Lorem ipsum dolor sit amet
                        <ul className="uds-list">
                          <li>
                            Lorem ipsum dolor sit amet
                            <ul className="uds-list">
                              <li>
                                Lorem ipsum dolor sit amet
                                <ul className="uds-list">
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ul className="uds-list">
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ul className="uds-list">
                                          <li>Lorem ipsum dolor sit amet</li>
                                          <li>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                      </li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                  </li>
                                  <li>Lorem ipsum dolor sit amet</li>
                                </ul>
                              </li>
                              <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                          </li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                      </li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>
  );
});
UnorderedListMultiLevel.args = {
  template: 1,
};

export const OrderedListMultiLevel = createStory(args => {
  return (
    <ol className={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>
        Lorem ipsum dolor sit amet
        <ol className="uds-list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ol className="uds-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ol className="uds-list">
                  <li>
                    Lorem ipsum dolor sit amet
                    <ol className="uds-list">
                      <li>
                        Lorem ipsum dolor sit amet
                        <ol className="uds-list">
                          <li>
                            Lorem ipsum dolor sit amet
                            <ol className="uds-list">
                              <li>
                                Lorem ipsum dolor sit amet
                                <ol className="uds-list">
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ol className="uds-list">
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ol className="uds-list">
                                          <li>Lorem ipsum dolor sit amet</li>
                                          <li>Lorem ipsum dolor sit amet</li>
                                        </ol>
                                      </li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ol>
                                  </li>
                                  <li>Lorem ipsum dolor sit amet</li>
                                </ol>
                              </li>
                              <li>Lorem ipsum dolor sit amet</li>
                            </ol>
                          </li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ol>
                      </li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ol>
  );
});
OrderedListMultiLevel.args = {
  template: 1,
};

export const MixedListMultiLevel = createStory(args => {
  return (
    <ol className={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>
        Lorem ipsum dolor sit amet
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ol className="uds-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ol className="uds-list">
                  <li>
                    Lorem ipsum dolor sit amet
                    <ol>
                      <li>
                        Lorem ipsum dolor sit amet
                        <ul className="uds-list">
                          <li>
                            Lorem ipsum dolor sit amet
                            <ul className="uds-list">
                              <li>
                                Lorem ipsum dolor sit amet
                                <ul className="uds-list">
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ol className="uds-list">
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ol className="uds-list">
                                          <li>Lorem ipsum dolor sit amet</li>
                                          <li>Lorem ipsum dolor sit amet</li>
                                        </ol>
                                      </li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ol>
                                  </li>
                                  <li>Lorem ipsum dolor sit amet</li>
                                </ul>
                              </li>
                              <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                          </li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                      </li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ol>
  );
});
MixedListMultiLevel.args = {
  template: 1,
};


export const Mixed2ListMultiLevel = createStory(args => {
  return (
    <ul className={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>
        Lorem ipsum dolor sit amet
        <ul >
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ul className="uds-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ul className="uds-list">
                  <li>
                    Lorem ipsum dolor sit amet
                    <ul >
                      <li>
                        Lorem ipsum dolor sit amet
                        <ol className="uds-list">
                          <li>
                            Lorem ipsum dolor sit amet
                            <ol className="uds-list">
                              <li>
                                Lorem ipsum dolor sit amet
                                <ol className="uds-list">
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ul className="uds-list">
                                      <li>
                                        Lorem ipsum dolor sit amet
                                          <ul className="uds-list">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                          </ul>
                                      </li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                  </li>
                                  <li>Lorem ipsum dolor sit amet</li>
                                </ol>
                              </li>
                              <li>Lorem ipsum dolor sit amet</li>
                            </ol>
                          </li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ol>
                      </li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>
  );
});
Mixed2ListMultiLevel.args = {
  template: 1,
};
