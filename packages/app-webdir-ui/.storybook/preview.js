import React, { useEffect} from "react";
import { MemoryRouter, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useArgs } from '@storybook/client-api';

import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  percy: {
    include: [
      "Web Directory/Templates: Faculty Rank Web Directory\$",
      "Web Directory/Templates: Web Directory Example People\$",
      "Web Directory/Templates: Web Directory Example Departments\$",
      "Search Page/Templates: Search Page Example\$"
    ],
    waitForTimeout: 5000,
  },
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

const Wrapper = ({ args, updateArgs,...props},b,c) => {
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
          {Story()}
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
};

export default preview;
