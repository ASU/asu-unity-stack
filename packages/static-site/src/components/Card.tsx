import { FC } from "react";
import { getRelativePath } from "~/utils/baseUrl";

export interface CardWrapperProps {
  title: string;
  description: string | JSX.Element;
  href: string;
  linkLabel: string;
  isRoute?: boolean;
}
const CardWrapper: FC<CardWrapperProps> = ({
  title,
  description,
  href,
  linkLabel,
  isRoute,
}) => {
  return (
    <div className="col-lg-4 col-md-6 pb-8">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        {isRoute ? (
          <a className="btn btn-maroon btn-medium" href={getRelativePath(href)}>
            {linkLabel}
          </a>
        ) : (
          <a
            className="btn btn-maroon btn-medium"
            target="_blank"
            rel="noreferrer"
            href={href}
          >
            {linkLabel}
          </a>
        )}
      </p>
    </div>
  );
};

export default CardWrapper;
