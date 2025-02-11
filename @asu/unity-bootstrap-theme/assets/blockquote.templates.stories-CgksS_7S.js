import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{i as b}from"./index-CkB89wqo.js";import{d as y}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";function x(){window.addEventListener("load",()=>{const t=document.querySelectorAll('mark[class^="pen-"]'),i=new IntersectionObserver(c=>{c.forEach(o=>{o.isIntersecting?o.target.classList.add("animate-bg-in-scroll"):o.target.classList.remove("animate-bg-in-scroll")})},{threshold:.1});t.forEach(c=>{i.observe(c)})})}const A={title:"Atoms/Blockquotes and Testimonials/Templates",parameters:{initFunc:{disable:!1,code:x}},args:{type:"On White",reversed:!1},argTypes:{type:{name:"Color",options:["On White","On Gray","On Black"],mapping:{"On White":null,"On Gray":"bg-gray-2","On Black":"bg-gray-7"},control:{type:"radio"}},reversed:{name:"Reversed",control:{type:"boolean"}}},decorators:[y]},a=({type:t})=>e.jsx("div",{className:t,children:e.jsxs("div",{className:`uds-blockquote ${t==="bg-gray-7"?"accent-gold text-white":"accent-maroon"} uds-content-align`,children:[e.jsx("svg",{title:"Open quote",role:"presentation",viewBox:"0 0 302.87 245.82",children:e.jsx("path",{d:"M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"})}),e.jsxs("blockquote",{children:[e.jsx("p",{children:"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."}),e.jsx("div",{className:"citation",children:e.jsxs("div",{className:"citation-content",children:[e.jsx("cite",{className:"name",children:"Thomas Jefferson"}),e.jsx("cite",{className:"description",children:"The Declaration of Independence"})]})})]})]})}),n=({type:t,reversed:i})=>e.jsx("div",{className:t,children:e.jsxs("div",{className:`uds-blockquote ${t==="bg-gray-7"?"accent-gold text-white":"accent-maroon"} with-image ${i?"reversed":""} uds-content-align`,children:[e.jsx("img",{src:b.anon,alt:"Pretend this is Michael M. Crow, President of ASU",width:"600",height:"400",loading:"lazy",decoding:"async",fetchpriority:"high"}),e.jsxs("blockquote",{children:[e.jsx("p",{children:"ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves."}),e.jsx("div",{className:"citation",children:e.jsxs("div",{className:"citation-content",children:[e.jsx("cite",{className:"name",children:"Michael M. Crow"}),e.jsx("cite",{className:"description",children:"ASU Charter"})]})})]})]})}),s=({type:t})=>e.jsx("div",{className:t,children:e.jsx("div",{className:`uds-blockquoteAnimated ${t==="bg-gray-7"?"accent-gold text-white":"accent-maroon"} uds-content-align`,children:e.jsxs("blockquote",{children:[e.jsx("h4",{children:e.jsx("strong",{children:"The ASU difference:"})}),e.jsx("h2",{children:e.jsxs("p",{children:["We are measured not by whom we exclude, but by ",e.jsx("mark",{className:"pen-yellow",children:"whom we include"})," and",e.jsx("mark",{className:"pen-yellow",children:" how they succeed"})]})}),e.jsx("div",{className:"citation",children:e.jsx("div",{className:"citation-content",children:e.jsx("cite",{className:"description",children:"Excerpt from ASU charter"})})})]})})});a.__docgenInfo={description:"",methods:[],displayName:"BasicBlockquote"};n.__docgenInfo={description:"",methods:[],displayName:"BlockquoteWithImage"};s.__docgenInfo={description:"",methods:[],displayName:"BlockquoteAnimated"};var r,l,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
  type
}) => {
  return <div className={type}>
      <div className={\`uds-blockquote \${type === "bg-gray-7" ? "accent-gold text-white" : "accent-maroon"} uds-content-align\`}>
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            We hold these truths to be self-evident, that all men are created
            equal, that they are endowed by their Creator with certain
            unalienable Rights, that among these are Life, Liberty and the
            pursuit of Happiness.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Thomas Jefferson</cite>
              <cite className="description">The Declaration of Independence</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>;
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,h,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  type,
  reversed
}) => {
  return <div className={type}>
      <div className={\`uds-blockquote \${type === "bg-gray-7" ? "accent-gold text-white" : "accent-maroon"} with-image \${reversed ? "reversed" : ""} uds-content-align\`}>
        <img src={imageName.anon} alt="Pretend this is Michael M. Crow, President of ASU" width="600" height="400" loading="lazy" decoding="async" fetchpriority="high" />
        <blockquote>
          <p>
            ASU is a comprehensive public research university, measured not by
            whom we exclude, but rather by whom we include and how they succeed;
            advancing research and discovery of public value; and assuming
            fundamental responsibility for the economic, social, cultural and
            overall health of the communities it serves.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Michael M. Crow</cite>
              <cite className="description">ASU Charter</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>;
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,g,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  type
}) => {
  return <div className={type}>
      <div className={\`uds-blockquoteAnimated \${type === "bg-gray-7" ? "accent-gold text-white" : "accent-maroon"} uds-content-align\`}>
        <blockquote>
          <h4><strong>The ASU difference:</strong></h4>
          <h2>
            <p>
            We are measured not by whom we exclude, but by <mark className="pen-yellow">whom we include</mark> and
            <mark className="pen-yellow"> how they succeed</mark>
            </p>
          </h2>
          <div className="citation">
            <div className="citation-content">
              <cite className="description">Excerpt from ASU charter</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>;
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const B=["BasicBlockquote","BlockquoteWithImage","BlockquoteAnimated"];export{a as BasicBlockquote,s as BlockquoteAnimated,n as BlockquoteWithImage,B as __namedExportsOrder,A as default};
