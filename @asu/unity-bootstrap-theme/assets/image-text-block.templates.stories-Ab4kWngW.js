import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{i as l}from"./index-CwXpTYmw.js";import{d as m}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const x={title:"Molecules/Content Sections/Image And Text Block/Templates",decorators:[m],argTypes:{right:{name:"Right",control:{type:"boolean"}},bgColor:{name:"Background Color",options:["None","gray-1-bg","gray-2-bg","gray-7-bg"],mapping:{None:null},control:{type:"radio"}},extraContent:{name:"Extra Content",control:{type:"boolean"}}},args:{right:!1,bgColor:"None",extraContent:!1}},i=()=>e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."}),t=({right:r,bgColor:a,extraContent:c})=>e.jsxs("div",{className:`uds-image-text-block-container ${r?"uds-image-text-block-container-right":""}`,children:[e.jsx("div",{className:"uds-image-text-block-image-container",children:e.jsx("img",{src:l.cardsImage,className:"img-fluid",alt:"Random image. REPLACE with appropriate alt text for accessibility.",width:"1200",height:"750",loading:"lazy",decoding:"async",fetchpriority:"high"})}),e.jsxs("div",{className:`uds-image-text-block-text-container ${a}`,children:[e.jsx("h3",{children:"This is a heading"}),e.jsx("h4",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(i,{}),c&&e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(i,{})]}),e.jsxs("div",{className:"uds-buttons py-1",children:[e.jsx("a",{href:"#",className:`btn ${a==="gray-7-bg"?"btn-gold":"btn-dark"}`,children:"Button link here"}),e.jsx("a",{href:"#",className:`btn ${a==="gray-7-bg"?"btn-gold":"btn-dark"}`,children:"Button link here"})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"ImageLeftOrRight"};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  right,
  bgColor,
  extraContent
}) => <div className={\`uds-image-text-block-container \${right ? "uds-image-text-block-container-right" : ""}\`}>
    <div className="uds-image-text-block-image-container">
      <img src={imageName.cardsImage} className="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility." width="1200" height="750" loading="lazy" decoding="async" fetchpriority="high"></img>
    </div>
    <div className={\`uds-image-text-block-text-container \${bgColor}\`}>
      <h3>This is a heading</h3>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      <ContentBlock />
      {extraContent && <>
        <ContentBlock />
        <ContentBlock />
        </>}
      <div className="uds-buttons py-1">
        <a href="#" className={\`btn \${bgColor === "gray-7-bg" ? "btn-gold" : "btn-dark"}\`}>
          Button link here
        </a>
        <a href="#" className={\`btn \${bgColor === "gray-7-bg" ? "btn-gold" : "btn-dark"}\`}>
          Button link here
        </a>
      </div>
    </div>
  </div>`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const k=["ImageLeftOrRight"];export{t as ImageLeftOrRight,k as __namedExportsOrder,x as default};
