import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Base } from "./Base";

export const FullLayout = ({children}) => {
  return (
    <div>
      <div className="row g-0">
        <div id="html-root" className="col uds-full-width">
          {children}
        </div>
      </div>
    </div>
  );
};

FullLayout.propTypes = {
  ...Base.propTypes,
};

export const Container = ({children, className = "container", ...rest}) => {
  return (
    <div className={ className } {...rest}>
      <div className="row">
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: Base.propTypes.children,
};
export const ContainerFluid = ({children, className = "container-fluid mt-2", ...rest}) => {
  return (
    <Container className={ className } {...rest}>
      {children}
    </Container>
  )
}

ContainerFluid.propTypes = {
  ...Container.propTypes,
};

export const Column = ({children, className = "", col="12", ...rest}) => {
  const colInt = parseInt(col, 10);

  return (
        <div {...rest} className={classNames(className, {
          "col": colInt === 0,
          "col-12": colInt === 12,
          "col-xl-3 col-lg-4 col-md-5 col-sm-12": colInt === 3,
          "col-lg-4 col-md-5 col-sm-12": colInt === 4,
          "col-md-6 col-sm-12": colInt === 6,
          "col-lg-8 col-md-7 col-sm-12": colInt === 8,
          "col-xl-9 col-lg-8 col-md-7 col-sm-12": colInt === 9,
        })}>
          {children}
        </div>
  )
}

Column.propTypes = {
  children: Base.propTypes.children,
  col: PropTypes.oneOf(["0","3","4","6","8","9","12"])
};


export const DefaultContainer = ({children, ...rest}) => {

  return (
    <Container>
      <Column {...rest}>
        {children}
      </Column>
    </Container>
  )
}

DefaultContainer.propTypes = {
  children: Base.propTypes.children,
};


export const LoremContent = () => {
  return (<>
    <h2>Ligula aenean leo porttitor eu conseq</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa{" "}
      <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
      enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede{" "}
      <a className="external ext" href="#">
        link
      </a>{" "}
      mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
      semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
      dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
      ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
      felis, ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
    <h2>Aenean commodo ligula eget dolor aenean massa</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
      felis, ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
    <ul className="uds-list">
      <li>Lorem ipsum dolor sit amet consectetuer.</li>
      <li>Aenean commodo ligula eget dolor.</li>
      <li>Aenean massa cum sociis natoque penatibus.</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
      felis, ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
    <blockquote>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa{" "}<strong>strong</strong>. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
      fringilla vel, aliquet nec, vulputate eget, arcu. In <em>em</em>
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam{" "}
      <a className="external ext" href="#">
        link
      </a>{" "}
      dictum felis eu pede mollis pretium.
    </blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
      felis, ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
  </>);
}

export const fullLayoutDecorator = (story, context) => <FullLayout>{story(context)}</FullLayout>;
export const defaultDecorator = (story, context) => <DefaultContainer id="html-root">{story(context)}</DefaultContainer>;
export const htmlRootDecorator = (story, context)=><div id="html-root">{story(context)}</div>;
