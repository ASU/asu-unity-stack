import React from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

interface SidebarItemProps {
  href: string;
  text: string;
  isActive?: boolean;
}

export interface Link {
  href?: string;
  text: string;
  isActive?: boolean;
  items?: SidebarItemProps[];
}

const defaultGaProps = {
  name: "onclick",
  event: "collapse",
  type: "click",
  region: "main content",
};

export interface SidebarProps {
  title: string;
  links: Link[];
}

export const SidebarMenu: React.FC<SidebarProps> = ({ title, links }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
      <h2>{title}</h2>
      <div
        className="sidebar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar-left"
        aria-expanded="false"
        aria-controls="sidebar-left"
      >
        <p>Select Section</p>
        <span className="fas fa-chevron-up" />
      </div>

      <nav
        id="sidebar-left"
        className="sidebar collapse"
        aria-label="Secondary"
      >
        {links.map((link, index) => {
          if (link.items) {
            // Render dropdown card
            const isExpanded = link.items.some(({ isActive }) => isActive);
            return (
              <div key={link.text} className="card card-foldable">
                <div className="card-header">
                  <GaEventWrapper
                    gaData={{ ...defaultGaProps, section: title }}
                  >
                    <a
                      id={`card${index}`}
                      className={`collapsed nav-link${
                        isExpanded ? " is-active" : ""
                      }`}
                      href={`#cardBody${index}`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#cardBody${index}`}
                      aria-expanded={isExpanded}
                      aria-controls={`cardBody${index}`}
                    >
                      {link.text}
                      <span className="fas fa-chevron-down ms-1" />
                    </a>
                  </GaEventWrapper>
                </div>
                <div
                  id={`cardBody${index}`}
                  className={`collapse card-body ${isExpanded ? " show" : ""}`}
                  aria-labelledby={`card${index}`}
                  data-bs-parent=".sidebar"
                >
                  {link.items.map(item => (
                    <a
                      key={`${item.text}${item.href}`}
                      href={item.href}
                      className={`nav-link`}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
            );
          } else {
            // Render regular link
            return (
              <div
                key={`${link.text}${link.href}`}
                className="nav-link-container"
              >
                <a
                  className={`nav-link${link.isActive ? " is-active" : ""}`}
                  href={link.href}
                >
                  {link.text}
                </a>
              </div>
            );
          }
        })}
      </nav>
    </div>
  );
};
