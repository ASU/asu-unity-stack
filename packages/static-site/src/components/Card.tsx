import React, { FC } from "react";
import { getRelativePath } from "~/utils/baseUrl";

export interface CardWrapperProps {
  title: string;
  description: string | React.JSX.Element;
  href: string;
  linkLabel: string;
  ariaLabel?: string;
  isRoute?: boolean;
}
const CardWrapper: FC<CardWrapperProps> = ({
  title,
  description,
  href,
  linkLabel,
  ariaLabel,
  isRoute,
}) => {
  return (
    <div className="col-lg-4 col-md-6 pb-8">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <a
          className="btn btn-maroon btn-medium"
          href={isRoute ? getRelativePath(href) : href}
          target={isRoute ? undefined : "_blank"}
          rel={isRoute ? undefined : "noreferrer"}
          aria-label={ariaLabel}
        >
          {linkLabel}
        </a>
      </p>
    </div>
  );
};

export default CardWrapper;
