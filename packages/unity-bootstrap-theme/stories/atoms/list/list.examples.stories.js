import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/List/Examples",
  decorators: [ defaultDecorator ],
  argTypes: {
    bulletColor: {
      name: "Bullet Color",
      options: ["Default", "Maroon", "Gold"],
      mapping: {
        "Default": null,
        "Maroon": "maroon",
        "Gold": "gold",
      },
      control: {
        type: "radio",
      },
    },
    backgroundColor: {
      name: "Background Color",
      options: ["Default", "Smoke mode", "Light Smoke mode", "Dark mode"],
      mapping: {
        "Default": null,
        "Smoke mode": "smokemode",
        "Light Smoke mode": "light-smokemode",
        "Dark mode": "darkmode",
      },
      control: {
        type: "radio",
      },
    },
  },
  args: {
    bulletColor: "Default",
    backgroundColor: "Default",
  },
};

export const UnorderedListMultiLevel = ({bulletColor, backgroundColor}) => {
  return (
    <ul className={`uds-list ${bulletColor} ${backgroundColor}`}>
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
};

export const OrderedListMultiLevel = ({bulletColor, backgroundColor}) => {
  return (
    <ol className={`uds-list ${bulletColor} ${backgroundColor}`}>
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
};

export const MixedListMultiLevel = ({bulletColor, backgroundColor}) => {
  return (
    <ol className={`uds-list ${bulletColor} ${backgroundColor}`}>
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
};


export const Mixed2ListMultiLevel = ({bulletColor, backgroundColor}) => {
  return (
    <ul className={`uds-list ${bulletColor} ${backgroundColor}`}>
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
};
