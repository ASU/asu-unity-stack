import classNames from "classnames";
import { StoryFn, ArgsStoryFn, StoryContext } from "@storybook/types";
import React, { FC, ReactElement } from "react";

import { Base } from "./Base";

interface Layout {
  children: ReactElement | ReactElement<StoryFn>,
}

export const FullLayout: FC<Layout> = ({children}) => {
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

interface ContainerProps extends Layout {
  className?: string,
}

export const Container: FC<ContainerProps> = ({children, className = "container", ...rest}) => {
  return (
    <div className={ className } {...rest}>
      <div className="row">
        {children}
      </div>
    </div>
  )
}

export const ContainerFluid: FC<ContainerProps> = ({children, className = "container-fluid mt-2", ...rest}) => {
  return (
    <Container className={ className } {...rest}>
      {children}
    </Container>
  )
}

interface ColumnProps extends ContainerProps {
  col?: "0"|"3"|"4"|"6"|"8"|"9"|"12",
}

export const Column: FC<ColumnProps> = ({children, className = "", col="12", ...rest}) => {
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


export const DefaultContainer:FC<ContainerProps & {id:string}> = ({children, ...rest}) => {
  return (
    <Container>
      <Column {...rest}>
        {children}
      </Column>
    </Container>
  )
}



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

export const fullLayoutDecorator = (story: ArgsStoryFn, context: StoryContext) => <FullLayout><>{story(context.args, context)}</></FullLayout>;
export const defaultDecorator = (story: ArgsStoryFn, context: StoryContext) => <DefaultContainer id="html-root"><>{story(context.args, context)}</></DefaultContainer>;
export const htmlRootDecorator = (story: ArgsStoryFn, context: StoryContext)=><div id="html-root"><>{story(context.args, context)}</></div>;
