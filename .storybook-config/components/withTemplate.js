import React from "react";

const OneTemplate = ({ children }) => {
  return (
      <div className="container">
        <div className="row">
          <div id="html-root" className="col-12">
            {children}
          </div>
        </div>
      </div>
  )
}

const TwoTemplate = ({ children }) => {
  return (
      <div className="container">
        <div className="row">
          <div id="html-root" className="col-md-6">
            {children}
          </div>
          <div className="col-6">
          <div className="gray-2-bg" style={{height:'100%'}}><br/></div>
          </div>
        </div>
      </div>
  )
}

const ThreeTemplate = ({ children }) => {
  return (
    <div className="container my-5">
        <div className="row mt-4">
            <div className="pb-4 col-md-4">
            <div className="gray-2-bg" style={{height:'100%'}}><br/></div>
            </div>
            <div id="html-root" className="pb-4 col-md-8">
                {children}
            </div>
        </div>
    </div>
  )
}

const FourTemplate = ({ children }) => {
  return (
    <div className="container my-5">
        <div className="row mt-4">
            <div id="html-root" className="pb-4 col-md-4">
                {children}
            </div>
            <div className="pb-4 col-md-8">
              <div className="gray-2-bg" style={{height:'max(3rem,100%)'}}>
                <br/>
              </div>
            </div>
        </div>
    </div>
  )
}

const FullTemplate = ({ children }) => {
  return (
    <div>
      <div className="row g-0">
        <div id="html-root" className="col uds-full-width">
          {children}
        </div>
      </div>
    </div>
  )
}

const OmitTemplate = ({ children }) => {
  return (
      <div id="html-root">
        {children}
      </div>
  )
}


export const withTemplate = (StoryFn, context, c) => {
  if (context.viewMode !== 'story') {
    return <StoryFn/>;
  }

  const { globals, parameters, args } = context;
  const argsTemplate = args.template;
  const globalTemplate = globals.template;


  const toolParameters = parameters.uds.template;

const template = globalTemplate;

  let Template = OneTemplate;

  if(template == "0") {
    Template = FullTemplate;
  } else if(template == "1") {
    Template = OneTemplate;
  } else if(template == "2") {
    Template = TwoTemplate;
  } else if(template == "3") {
    Template = ThreeTemplate;
  } else if(template == "4") {
    Template = FourTemplate;
  } else if(template == "x") {
    Template = OmitTemplate;
  }

  return <Template>
    <StoryFn />
  </Template>;
};
