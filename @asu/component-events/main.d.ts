import { FunctionComponent } from 'react';

export interface EventProps {
  header?: {
    color: string,
    text: string
  },
  ctaButton?: {
    color: string,
    url: string,
    text: string,
  },
  dataSource: {
    url: string,
    filters?: string,
  },
  maxItems?: number,
}

export const CardsGridEvents: FunctionComponent<EventProps>;
export const CardsListEvents: FunctionComponent<EventProps>;
