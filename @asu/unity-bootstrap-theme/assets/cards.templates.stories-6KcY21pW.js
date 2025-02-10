import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as s}from"./Layout-Bte-rkYZ.js";import{c}from"./cards-image-BPXBy_xd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const p={title:"Molecules/Cards/Templates",decorators:[s],argTypes:{cardHeader:{name:"Header ",options:["none","image","icon"],control:{type:"radio",labels:{none:"None",image:"Image",icon:"Icon"}}},event:{name:"Event Details",control:{type:"boolean"}},link:{name:"Link",control:{type:"boolean"}},tags:{name:"Tags",control:{type:"boolean"}},numButtons:{name:"Number Of Buttons",options:[0,1,2],control:{type:"radio"}}},args:{cardHeader:"none",event:!1,link:!1,tags:!1,numButtons:0}},t=e=>a.jsxs("div",{className:"card",children:[e.cardHeader==="icon"&&a.jsx("span",{className:"far fa-calendar fa-2x card-icon-top",title:"Calendar Icon"}),e.cardHeader==="image"&&a.jsx("img",{className:"card-img-top",src:c,alt:"Card image cap",width:"600",height:"337",loading:"lazy",decoding:"async",fetchpriority:"high"}),a.jsx("div",{className:"card-header pt-2",children:a.jsx("h3",{children:"Heading"})}),a.jsx("div",{className:"card-body",children:a.jsx("p",{className:"card-text",children:"Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."})}),e.event&&a.jsx("div",{className:"card-event-details",children:a.jsxs("div",{className:"card-event-icons",children:[a.jsx("div",{children:a.jsx("i",{className:"fas fa-map-marker-alt"})}),a.jsx("div",{children:"Downtown Phoenix campus"})]})}),e.numButtons>0&&a.jsxs("div",{className:"card-buttons",children:[a.jsx("div",{className:"card-button",children:a.jsx("a",{href:"#",className:"btn btn-dark","data-ga":"Button link here","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"heading",children:"Button link here"})}),e.numButtons===2&&a.jsx("div",{className:"card-button",children:a.jsx("a",{href:"#",className:"btn btn-md btn-dark","data-ga":"Button link here","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"heading",children:"Button link here"})})]}),e.link&&a.jsx("div",{className:"card-link",children:a.jsx("a",{href:"#",className:"","data-ga":"Regular text link here","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"heading",children:"Regular text link here"})}),e.tags&&a.jsxs("div",{className:"card-tags",children:[a.jsx("a",{className:"btn btn-tag btn-tag-alt-white",href:"#",children:"test tag"}),a.jsx("a",{className:"btn btn-tag btn-tag-alt-white",href:"#",children:"test tag 2"}),a.jsx("a",{className:"btn btn-tag btn-tag-alt-white",href:"#",children:"test tag 3"})]})]});t.__docgenInfo={description:"",methods:[],displayName:"cardNoTemplates"};var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <div className="card">
      {args.cardHeader === "icon" && <span className="far fa-calendar fa-2x card-icon-top" title="Calendar Icon" />}
      {args.cardHeader === "image" && <img className="card-img-top" src={cardsImage} alt="Card image cap" width="600" height="337" loading="lazy" decoding="async" fetchpriority="high" />}
      <div className="card-header pt-2">
        <h3>Heading</h3>
      </div>
      <div className="card-body">
        <p className="card-text">
          Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua eiusmod tempo.
        </p>
      </div>
      {args.event && <div className="card-event-details">
          <div className="card-event-icons">
            <div>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>Downtown Phoenix campus</div>
          </div>
        </div>}
      {args.numButtons > 0 && <div className="card-buttons">
          <div className="card-button">
            <a href="#" className="btn btn-dark" data-ga="Button link here" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="heading">
              Button link here
            </a>
          </div>
          {args.numButtons === 2 && <div className="card-button">
              <a href="#" className="btn btn-md btn-dark" data-ga="Button link here" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="heading">
                Button link here
              </a>
            </div>}
        </div>}
      {args.link && <div className="card-link">
          <a href="#" className="" data-ga="Regular text link here" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="heading">
            Regular text link here
          </a>
        </div>}
      {args.tags && <div className="card-tags">
          <a className="btn btn-tag btn-tag-alt-white" href="#">
            test tag
          </a>
          <a className="btn btn-tag btn-tag-alt-white" href="#">
            test tag 2
          </a>
          <a className="btn btn-tag btn-tag-alt-white" href="#">
            test tag 3
          </a>
        </div>}
    </div>;
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["cardNoTemplates"];export{u as __namedExportsOrder,t as cardNoTemplates,p as default};
