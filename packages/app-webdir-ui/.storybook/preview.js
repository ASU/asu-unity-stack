import React, { useEffect} from "react";
import { MemoryRouter, useLocation, useSearchParams } from "react-router-dom";
import { initialize, mswLoader } from "msw-storybook-addon";
import { useArgs } from 'storybook/preview-api';

import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

// The live Web Directory API blocks requests from localhost, so msw mocks
// those endpoints in Storybook. See src/helpers/webDirectoryMockHandlers.js.
initialize({
  serviceWorker: {
    url: "./mockServiceWorker.js",
  },
});

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const argTypes = {
  searchParams: {
    name: "Url Search Parameters",
    control: {
      type: "object",
    },
  }
};

const args = {
  searchParams: {}
};

const getParamObject = (paramArray = []) => {
  const result = {};
  for (const entry of (paramArray.entries())) {
    result[entry[0]] = entry[1];
  }
  return result;
}

const Wrapper = ({ args, updateArgs,...props}) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    updateArgs({
      ...args,
      searchParams: getParamObject(new URLSearchParams(location.search)),
    })
  },[location.search])

  useEffect(()=>{
    setSearchParams({
      ...getParamObject(searchParams),
      ...args.searchParams,
    });
  },[args.searchParams])

  return props.children;
}

const decorators = [
  (Story) => {
    const [args, updateArgs] = useArgs();
  return <MemoryRouter>
        <Wrapper args={args} updateArgs={updateArgs}>
          <Story />
        </Wrapper>
    </MemoryRouter>
  },
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
  argTypes,
  args,
  decorators,
  loaders: [mswLoader],
};

export default preview;
