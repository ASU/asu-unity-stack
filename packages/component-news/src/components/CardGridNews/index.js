// @ts-check
import React from "react";

import { Layout } from "../../core/components/Layout";
import {
  componentHeaderShape,
  componentCtaButtonShape,
} from "../../core/models/news-prop-types";
import { NewsWrapper } from "./index.styles";

const CardGridNews = ({ header, ctaButton }) => (
  <Layout header={header} ctaButton={ctaButton}>
    <NewsWrapper>CardGridNews PLACE HOLDER</NewsWrapper>
  </Layout>
);

CardGridNews.propTypes = {
  header: componentHeaderShape,
  ctaButton: componentCtaButtonShape,
};
export { CardGridNews };
