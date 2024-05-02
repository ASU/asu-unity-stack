import React from "react";

export interface Link {
  url: string;
  title: string;
  text: string;
}

export interface Column {
  title: string;
  links: Link[];
}

export interface Social {
  logoUrl: string;
  unitLogo: string;
  mediaLinks?: {
    facebook?: string,
    twitter?: string,
    instagram?: string,
    linkedIn?: string,
    youtube?: string
  };
}

export interface Contact {
  title: string;
  contactLink: string;
  contributionLink?: string;
  columns?: Column[];
}

export interface AsuFooterProps{
 social: Social;
 contact: Contact;
}

export const ASUFooter: React.FunctionComponent<AsuFooterProps>
