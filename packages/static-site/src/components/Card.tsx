import { FC } from "react";
import { getRelativePath } from "~/utils/baseUrl";

export interface CardProps {
  title: string;
  description: string | JSX.Element;
  href: string;
  linkLabel: string
  isRoute?: boolean;
}
const Card:FC<CardProps> = ({title, description, href,linkLabel, isRoute}) => {
  return (
    <div className="col-md-6 pb-8">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <p>
        {isRoute ? (
          <a
          className="btn btn-maroon btn-medium"
          href={getRelativePath(href)}
          >
          {linkLabel}
          </a>
        ) : (
        <a
          className="btn btn-maroon btn-medium"
          target="_blank" rel="noreferrer"
          href={href}
          >
          {linkLabel}
          </a>
        )}
      </p>
    </div>
  );
};

export default Card;
