import React, { useEffect, useRef } from "react";
import { MemoryRouter, useLocation, useSearchParams } from "react-router-dom";
import { useArgs } from "storybook/preview-api";

import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const argTypes = {
  searchParams: {
    name: "Url Search Parameters",
    control: {
      type: "object",
    },
  },
};

const args = {
  searchParams: {},
};

const getParamObject = (paramArray = []) => {
  const result = {};
  for (const entry of paramArray.entries()) {
    result[entry[0]] = entry[1];
  }
  return result;
};

const areObjectsEqual = (left = {}, right = {}) =>
  JSON.stringify(left) === JSON.stringify(right);

const Wrapper = ({ args, updateArgs, ...props }) => {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const seededFromArgsRef = useRef(false);

  useEffect(() => {
    const nextSearchParams = getParamObject(new URLSearchParams(location.search));
    if (!areObjectsEqual(args.searchParams, nextSearchParams)) {
      updateArgs({
        searchParams: nextSearchParams,
      });
    }
  }, [args.searchParams, location.search, updateArgs]);

  useEffect(() => {
    if (seededFromArgsRef.current) {
      return;
    }

    const currentSearchParams = getParamObject(new URLSearchParams(location.search));
    if (
      Object.keys(currentSearchParams).length === 0 &&
      Object.keys(args.searchParams || {}).length > 0
    ) {
      setSearchParams(args.searchParams, { replace: true });
    }

    seededFromArgsRef.current = true;
  }, [args.searchParams, location.search, setSearchParams]);

  return props.children;
};

const decorators = [
  Story => {
    const [args, updateArgs] = useArgs();
    return (
      <MemoryRouter>
        <Wrapper args={args} updateArgs={updateArgs}>
          <Story />
        </Wrapper>
      </MemoryRouter>
    );
  },
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
  argTypes,
  args,
  decorators,
};

export default preview;
