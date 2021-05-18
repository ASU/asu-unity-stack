// @ts-check
import React from "react";

import { IntroContent } from "../../core/components";

/**
 * @typedef {import('../../core/models/app-props').AppProps} AppProps
 */

/**
 *
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const DegreePage = ({ introContent }) => {
  return (
    <>
      {/* <Hero image={hero.image} content={hero.content} /> */}
      <div className="container">
        <main>
          <IntroContent image={introContent.image} />
          {/* todo: add here other components */}
        </main>
      </div>
    </>
  );
};

DegreePage.propTypes = {
  introContent: IntroContent.propTypes,
};

export { DegreePage };
