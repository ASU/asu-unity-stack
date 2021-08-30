// @ts-check
import React from "react";

import { Layout } from "../../core/components/Layout";
import {
  componentHeaderShape,
  componentCtaButtonShape,
} from "../../core/models/news-prop-types";
import { NewsWrapper } from "./index.styles";

const CardListlNews = ({ header, ctaButton }) => (
  <Layout header={header} ctaButton={ctaButton}>
    <NewsWrapper>ListCardlNews PLACE HOLDER</NewsWrapper>
  </Layout>
);

CardListlNews.propTypes = {
  header: componentHeaderShape,
  ctaButton: componentCtaButtonShape,
};

export { CardListlNews };
