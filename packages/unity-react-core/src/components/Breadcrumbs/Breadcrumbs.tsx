import cx from "classnames";
import React, { ComponentProps } from "react";

export const breadcrumbBgColors = [
  "",
  "bg-white",
  "bg-grayscale-7",
  "bg-grayscale-6",
  "bg-grayscale-1",
] as const;

export interface BreadcrumbsProps extends ComponentProps<"nav"> {
  backgroundColor?: (typeof breadcrumbBgColors)[number];
  linkItems: Array<{ label: string; active: boolean; href: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  linkItems = [],
  backgroundColor = "",
  ...rest
}) => {
  if (linkItems.length === 0) {
    return null;
  }
  return (
    <nav className="uds-content-align" aria-label="breadcrumbs" {...rest}>
      <ol className={cx("breadcrumb", backgroundColor)}>
        {linkItems.map(item => (
          <li
            aria-current={item.active ? "page" : undefined}
            className={cx("breadcrumb-item", { active: item.active })}
            key={item.href}
          >
            {
              /* UDS-1851 - active page should not be link */
              item.active ? <span>{item.label}</span> : <a href={item.href}>{item.label}</a>
            }
          </li>
        ))}
      </ol>
    </nav>
  );
};
