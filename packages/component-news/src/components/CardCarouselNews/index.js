// @ts-check
import React from "react";

import { Layout } from "../../core/components/Layout";
import {
  componentHeaderShape,
  componentCtaButtonShape,
} from "../../core/models/news-prop-types";
import { NewsWrapper } from "./index.styles";

const CardCarouselNews = ({ header, ctaButton }) => (
  <Layout header={header} ctaButton={ctaButton}>
    <NewsWrapper>CardCarouselNews PLACE HOLDER</NewsWrapper>
  </Layout>
);

CardCarouselNews.propTypes = {
  header: componentHeaderShape,
  ctaButton: componentCtaButtonShape,
};

export { CardCarouselNews };
