import { FunctionComponent } from 'react';

export interface NewsProps {
  header?: {
    color: string,
    text: string
  },
  ctaButton?: {
    color: string,
    url: string,
    text: string,
  },
  cardButton: {
    color: string,
    text: string,
    size: "default" | "small" | "medium" | "large",
  },
  dataSource: {
    url: string,
    filters?: string,
  },
  maxItems?: number,
}

export const CardCarouselNews: FunctionComponent<NewsProps>;
export const CardGridNews: FunctionComponent<NewsProps>;
export const CardListlNews: FunctionComponent<NewsProps>;
