// @ts-check
import React from "react";

import { Hero, IntroContent } from "../../core/components";

/**
 * @typedef {import('../../core/models/app-props').AppProps} AppProps
 */

/**
 *
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const DegreePage = ({ hero }) => {
  return (
    <>
      <Hero image={hero.image} content={hero.content} />
      <div className="container">
        <main>
          <IntroContent />
          {/* todo: add here other components */}
        </main>
      </div>
    </>
  );
};

DegreePage.propTypes = {
  hero: Hero.propTypes,
};

export { DegreePage };
