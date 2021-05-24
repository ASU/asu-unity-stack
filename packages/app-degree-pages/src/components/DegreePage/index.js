// @ts-check
import PropTypes from "prop-types";
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

      <main className="container">
        <IntroContent
          type={introContent.type}
          header={introContent.header}
          title={introContent.title}
          contents={introContent.contents}
          image={introContent.image}
          photoGrid={introContent.photoGrid}
        />

        {/* todo: add here other components */}
      </main>
    </>
  );
};

DegreePage.propTypes = {
  introContent: PropTypes.shape(IntroContent.propTypes),
};

export { DegreePage };
