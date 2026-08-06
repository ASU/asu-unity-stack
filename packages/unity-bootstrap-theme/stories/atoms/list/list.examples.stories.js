import React from "react";
import { defaultDecorator } from "@asu/shared";

export default {
  title: "Atoms/List/Examples",
  decorators: [defaultDecorator],
  argTypes: {
    bulletColor: {
      name: "Bullet Color",
      options: ["Default", "Maroon", "Gold"],
      mapping: {
        Default: null,
        Maroon: "maroon",
        Gold: "gold",
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
    reversed: {
      name: "Reversed",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    bulletColor: "Default",
    backgroundColor: "Default",
    reversed: false,
  },
};

export const UnorderedListMultiLevel = ({
  bulletColor,
  backgroundColor,
  reversed = false,
}) => {
  const html = (
    <ul
      className={`uds-list ${bulletColor} ${backgroundColor}`}
      {...(reversed === true && { reversed: "reversed" })}
    >
      <li>
        {Boolean(reversed) && <span>(Reversed has no effect on UL)</span>}
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
  // force rerender to apply reversed attribute correctly
  return reversed ? html : <div>{html}</div>;
};

export const OrderedListMultiLevel = ({
  bulletColor,
  backgroundColor,
  reversed = false,
}) => {
  const html = (
    <ol
      className={`uds-list ${bulletColor} ${backgroundColor}`}
      {...(reversed === true && { reversed: "reversed" })}
    >
      <li>
        Lorem ipsum dolor sit amet{" "}
        {Boolean(reversed) && (
          <span>(Reversed changes Number order, not the html order)</span>
        )}
        <ol
          className="uds-list"
          {...(reversed === true && { reversed: "reversed" })}
        >
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ol
              className="uds-list"
              {...(reversed === true && { reversed: "reversed" })}
            >
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ol
                  className="uds-list"
                  {...(reversed === true && { reversed: "reversed" })}
                >
                  <li>
                    Lorem ipsum dolor sit amet
                    <ol
                      className="uds-list"
                      {...(reversed === true && { reversed: "reversed" })}
                    >
                      <li>
                        Lorem ipsum dolor sit amet
                        <ol
                          className="uds-list"
                          {...(reversed === true && { reversed: "reversed" })}
                        >
                          <li>
                            Lorem ipsum dolor sit amet
                            <ol
                              className="uds-list"
                              {...(reversed === true && {
                                reversed: "reversed",
                              })}
                            >
                              <li>
                                Lorem ipsum dolor sit amet
                                <ol
                                  className="uds-list"
                                  {...(reversed === true && {
                                    reversed: "reversed",
                                  })}
                                >
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ol
                                      className="uds-list"
                                      {...(reversed === true && {
                                        reversed: "reversed",
                                      })}
                                    >
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ol
                                          className="uds-list"
                                          {...(reversed === true && {
                                            reversed: "reversed",
                                          })}
                                        >
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
  // force rerender to apply reversed attribute correctly
  return reversed ? html : <div>{html}</div>;
};

export const ReversedOrderedListMultiLevel = ({
  bulletColor,
  backgroundColor,
  reversed = false,
}) => {
  const html = (
    <>
      <h2>Basic example:</h2>
      {Boolean(reversed) && (
        <p>(Reversed changes Number order, not the html order)</p>
      )}
      <ol
        className={`uds-list ${bulletColor} ${backgroundColor}`}
        {...(reversed === true && { reversed: "reversed" })}
      >
        <li>Lorem ipsum dolor sit amet (1st html element)</li>
        <li>Lorem ipsum dolor sit amet (2nd html element)</li>
        <li>Lorem ipsum dolor sit amet (3rd html element)</li>
        <li>Lorem ipsum dolor sit amet (4th html element)</li>
        <li>Lorem ipsum dolor sit amet (5th html element)</li>
      </ol>
      <hr />
      <h2>A more Complex example:</h2>
      <ol
        className={`uds-list ${bulletColor} ${backgroundColor}`}
        {...(reversed === true && { reversed: "reversed" })}
      >
        <li>
          Lorem ipsum dolor sit amet{" "}
          {Boolean(reversed) && (
            <span>(Reversed changes Number order, not the html order)</span>
          )}
          <ol
            className="uds-list"
            {...(reversed === true && { reversed: "reversed" })}
          >
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <ol
                className="uds-list"
                {...(reversed === true && { reversed: "reversed" })}
              >
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <ol
                    className="uds-list"
                    {...(reversed === true && { reversed: "reversed" })}
                  >
                    <li>
                      Lorem ipsum dolor sit amet
                      <ol
                        className="uds-list"
                        {...(reversed === true && { reversed: "reversed" })}
                      >
                        <li>
                          Lorem ipsum dolor sit amet
                          <ol
                            className="uds-list"
                            {...(reversed === true && { reversed: "reversed" })}
                          >
                            <li>
                              Lorem ipsum dolor sit amet
                              <ol
                                className="uds-list"
                                {...(reversed === true && {
                                  reversed: "reversed",
                                })}
                              >
                                <li>
                                  Lorem ipsum dolor sit amet
                                  <ol
                                    className="uds-list"
                                    {...(reversed === true && {
                                      reversed: "reversed",
                                    })}
                                  >
                                    <li>
                                      Lorem ipsum dolor sit amet
                                      <ol
                                        className="uds-list"
                                        {...(reversed === true && {
                                          reversed: "reversed",
                                        })}
                                      >
                                        <li>
                                          Lorem ipsum dolor sit amet
                                          <ol
                                            className="uds-list"
                                            {...(reversed === true && {
                                              reversed: "reversed",
                                            })}
                                          >
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
    </>
  );
  // force rerender to apply reversed attribute correctly
  return reversed ? html : <div>{html}</div>;
};
ReversedOrderedListMultiLevel.args = {
  reversed: true,
};

export const MixedListMultiLevel = ({
  bulletColor,
  backgroundColor,
  reversed = false,
}) => {
  const html = (
    <ol
      className={`uds-list ${bulletColor} ${backgroundColor}`}
      {...(reversed === true && { reversed: "reversed" })}
    >
      <li>
        Lorem ipsum dolor sit amet{" "}
        {Boolean(reversed) && <span>(Reversed only works on OL)</span>}
        <ol
          className="uds-list"
          {...(reversed === true && { reversed: "reversed" })}
        >
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ol
              className="uds-list"
              {...(reversed === true && { reversed: "reversed" })}
            >
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ol
                  className="uds-list"
                  {...(reversed === true && { reversed: "reversed" })}
                >
                  <li>
                    Lorem ipsum dolor sit amet
                    <ol
                      className="uds-list"
                      {...(reversed === true && { reversed: "reversed" })}
                    >
                      <li>
                        Lorem ipsum dolor sit amet
                        <ul
                          className="uds-list"
                          {...(reversed === true && { reversed: "reversed" })}
                        >
                          <li>
                            Lorem ipsum dolor sit amet
                            <ul
                              className="uds-list"
                              {...(reversed === true && {
                                reversed: "reversed",
                              })}
                            >
                              <li>
                                Lorem ipsum dolor sit amet
                                <ul
                                  className="uds-list"
                                  {...(reversed === true && {
                                    reversed: "reversed",
                                  })}
                                >
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ol
                                      className="uds-list"
                                      {...(reversed === true && {
                                        reversed: "reversed",
                                      })}
                                    >
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ol
                                          className="uds-list"
                                          {...(reversed === true && {
                                            reversed: "reversed",
                                          })}
                                        >
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

  // force rerender to apply reversed attribute correctly
  return reversed ? html : <div>{html}</div>;
};

export const Mixed2ListMultiLevel = ({
  bulletColor,
  backgroundColor,
  reversed = false,
}) => {
  const html = (
    <ul
      className={`uds-list ${bulletColor} ${backgroundColor}`}
      {...(reversed === true && { reversed: "reversed" })}
    >
      <li>
        Lorem ipsum dolor sit amet{" "}
        {Boolean(reversed) && <span>(Reversed has no effect on UL)</span>}
        <ul {...(reversed === true && { reversed: "reversed" })}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ul
              className="uds-list"
              {...(reversed === true && { reversed: "reversed" })}
            >
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ul
                  className="uds-list"
                  {...(reversed === true && { reversed: "reversed" })}
                >
                  <li>
                    Lorem ipsum dolor sit amet
                    <ul {...(reversed === true && { reversed: "reversed" })}>
                      <li>
                        Lorem ipsum dolor sit amet
                        <ol
                          className="uds-list"
                          {...(reversed === true && { reversed: "reversed" })}
                        >
                          <li>
                            Lorem ipsum dolor sit amet{" "}
                            {reversed === true && (
                              <span>(Reversed only works on OL)</span>
                            )}
                            <ol
                              className="uds-list"
                              {...(reversed === true && {
                                reversed: "reversed",
                              })}
                            >
                              <li>
                                Lorem ipsum dolor sit amet
                                <ol
                                  className="uds-list"
                                  {...(reversed === true && {
                                    reversed: "reversed",
                                  })}
                                >
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ul
                                      className="uds-list"
                                      {...(reversed === true && {
                                        reversed: "reversed",
                                      })}
                                    >
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ul
                                          className="uds-list"
                                          {...(reversed === true && {
                                            reversed: "reversed",
                                          })}
                                        >
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

  // force rerender to apply reversed attribute correctly
  return reversed ? html : <div>{html}</div>;
};
