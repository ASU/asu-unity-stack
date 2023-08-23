import React from 'react';
import classNames from 'classnames';

export const _FullContainer = ({children}) => (
  <div className="row g-0">
    <div className="col uds-full-width">
    {children}
    </div>
  </div>
);


export const _Container = ({children}) => (
  <div className="container">
    <div className="row">
      { Array.isArray(children) ?
        children.map((child, i)=><React.Fragment key={i}>
          {child}
        </React.Fragment>) :
        <div className="col-12">
          {children}
        </div>
        }
    </div>
  </div>
);


export const _Section = ({className, children, ...props}) => (
        <section className={["uds-section", className].join(" ")} {...props}>
          {children}
        </section>
);
