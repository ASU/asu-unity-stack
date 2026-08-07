import{e,a6 as L,R as P,ad as R,v as h,Y as a,y as A}from"./iframe-CBmFdxU0.js";import{i as C}from"./index-ClHCtqaC.js";import"./preload-helper-Dp1pzeXC.js";e.shape({url:e.string,altText:e.string,cssClass:e.arrayOf(e.string),size:e.oneOf(["small","medium","large"])});e.shape({text:e.string,maxWidth:e.string,cssClass:e.arrayOf(e.string),highlightColor:e.oneOf(["gold","black"])});e.shape({color:e.oneOf(["gold","maroon","gray","dark"]),content:e.shape({icon:e.arrayOf(e.string),header:e.string,body:e.string})});const B=e.shape({text:e.string,name:e.string,event:e.string,action:e.string,type:e.string,region:e.string,section:e.string,component:e.string}),G="staticMarkup";function z(){const i=L.useId().indexOf(G)>-1?!0:void 0;return{isBootstrap:i,isReact:i?void 0:!0}}const y=({gaData:n,prefix:i="",children:l})=>{const{isReact:u}=z(),{onClick:c,...m}=l.props;if(u)return P.cloneElement(l,{...m,onClick:o=>(n&&n.event&&n.action&&R(n),c?c(o):!0)});let s="";["input","header","header-input"].includes(i)&&(s=`-${i}`);const r={[`data-ga${s}`]:n.text,[`data-ga${s}-name`]:n.name,[`data-ga${s}-event`]:n.event,[`data-ga${s}-action`]:n.action,[`data-ga${s}-type`]:n.type,[`data-ga${s}-region`]:n.region,[`data-ga${s}-section`]:n.section,[`data-ga${s}-component`]:n.component};return P.cloneElement(l,{...m,onClick:c,...r})};y.__docgenInfo={description:`@param GaEventWrapper
@returns`,methods:[],displayName:"GaEventWrapper",props:{prefix:{defaultValue:{value:'""',computed:!1},required:!1}}};const O={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},k=({label:n="",cardTitle:i="",gaData:l,ariaLabel:u,block:c,color:m="gray",disabled:s,element:r="button",href:o,icon:t,innerRef:x,onClick:p,size:d="default",variant:v,classes:j,target:N="_self",...q})=>{if(v){const $={borderless:"borderless",outline:"outline",filled:"filled"},_=h("btn",$[v],{[`btn-${$[v]}-${m}`]:!0,"btn-medium":d==="medium","btn-small":d==="small","btn-large":d==="large"||d==="default",disabled:s});let g=r;return o&&r==="button"&&(g="a"),a.jsx(y,{gaData:{...O,section:i,...l,text:n},children:a.jsxs(g,{type:g==="button"&&p?"button":void 0,...q,className:h(j)||_,href:o,ref:x,onClick:p,"aria-label":u,target:g==="a"?N:null,disabled:s,children:[t&&a.jsx("i",{className:`${t==null?void 0:t[0]} fa-${t==null?void 0:t[1]} me-1`}),n]})})}const T=h("btn",{[`btn-${m}`]:!0,"btn-md":d==="small","btn-sm":d==="xsmall","btn-block":c,disabled:s});let f=r;return o&&r==="button"&&(f="a"),a.jsx(y,{gaData:{...O,section:i,...l,text:n},children:a.jsxs(f,{type:f==="button"&&p?"button":void 0,...q,className:h(j)||T,href:o,ref:x,onClick:p,"aria-label":u,target:f==="a"?N:null,children:[t&&a.jsx("i",{className:`${t==null?void 0:t[0]} fa-${t==null?void 0:t[1]} me-1`}),n]})})};k.propTypes={label:e.string,cardTitle:e.string,gaData:B,ariaLabel:e.string,block:e.bool,color:e.oneOf(["gold","maroon","gray","dark"]),disabled:e.bool,element:e.oneOfType([e.func,e.string,e.shape({$$typeof:e.symbol,render:e.func}),e.arrayOf(e.oneOfType([e.func,e.string,e.shape({$$typeof:e.symbol,render:e.func})]))]),href:e.string,icon:e.arrayOf(e.string),innerRef:e.oneOfType([e.object,e.func,e.string]),onClick:e.func,size:e.oneOf(["default","small","xsmall","large","medium"]),variant:e.oneOf(["borderless","outline","filled"]),classes:e.arrayOf(e.string),target:e.oneOf(["_blank","_self","_top","_parent"])};k.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{label:{defaultValue:{value:'""',computed:!1},description:"Button label",type:{name:"string"},required:!1},cardTitle:{defaultValue:{value:'""',computed:!1},description:"@deprecated\nCard title, use `gaData.section` instead",type:{name:"string"},required:!1},color:{defaultValue:{value:'"gray"',computed:!1},description:"Button background color",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"gray"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},element:{defaultValue:{value:'"button"',computed:!1},description:`Pass in a Component to override default button element.
    For example: react-router Link`,type:{name:"union",value:[{name:"func"},{name:"string"},{name:"shape",value:{$$typeof:{name:"symbol",required:!1},render:{name:"func",required:!1}}},{name:"arrayOf",value:{name:"union",value:[{name:"func"},{name:"string"},{name:"shape",value:{$$typeof:{name:"symbol",required:!1},render:{name:"func",required:!1}}}]}}]},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"small"',computed:!1},{value:'"xsmall"',computed:!1},{value:'"large"',computed:!1},{value:'"medium"',computed:!1}]},required:!1},target:{defaultValue:{value:'"_self"',computed:!1},description:"Link target type",type:{name:"enum",value:[{value:'"_blank"',computed:!1},{value:'"_self"',computed:!1},{value:'"_top"',computed:!1},{value:'"_parent"',computed:!1}]},required:!1},gaData:{description:"Google Analytics event data",type:{name:"shape",value:{text:{name:"string",required:!1},name:{name:"string",required:!1},event:{name:"string",required:!1},action:{name:"string",required:!1},type:{name:"string",required:!1},region:{name:"string",required:!1},section:{name:"string",required:!1},component:{name:"string",required:!1}}},required:!1},ariaLabel:{description:"ARIA label for accessibility",type:{name:"string"},required:!1},block:{description:"Render button as a block-button?",type:{name:"bool"},required:!1},disabled:{description:"Disable the button?",type:{name:"bool"},required:!1},href:{description:"Link target url; will cause button to be rendered as `<a>` link",type:{name:"string"},required:!1},icon:{description:"React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']",type:{name:"arrayOf",value:{name:"string"}},required:!1},innerRef:{description:`ref will only get you a reference to the Button component, use innerRef to
get a reference to the DOM element (for things like focus management).`,type:{name:"union",value:[{name:"object"},{name:"func"},{name:"string"}]},required:!1},onClick:{description:"Event handler function for `<button>`",type:{name:"func"},required:!1},variant:{description:"Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.",type:{name:"enum",value:[{value:'"borderless"',computed:!1},{value:'"outline"',computed:!1},{value:'"filled"',computed:!1}]},required:!1},classes:{description:"Classes to add to button",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};const V=""+new URL("anon-CXWQnlvV.png",import.meta.url).href,J={title:"Molecules/Person Profile/Templates",decorators:[A],argTypes:{size:{name:"Size",options:["Small","Large"],mapping:{Small:"small",Large:""},control:{type:"radio"}},fill:{name:"Fill",control:{type:"boolean"}}},args:{size:"Large",fill:!1}},I=({size:n,fill:i})=>a.jsxs("div",{className:`uds-person-profile ${n} ${i?"fill":""}`,children:[a.jsx("div",{className:"profile-img-container",children:a.jsx("div",{className:"profile-img-placeholder",style:{backgroundImage:`url(${V})`},children:a.jsx("img",{className:"profile-img",src:C.demo1,alt:"John Smith",width:"300",height:"300",decoding:"async",loading:"lazy",fetchpriority:"high",onError:l=>l.target.style.display="none"})})}),a.jsxs("div",{className:"person",children:[a.jsx("h3",{className:"person-name",children:"John Smith"}),a.jsxs("div",{className:"person-profession",children:[a.jsx("p",{className:"person-profession-title",children:a.jsx("strong",{children:"Regents Professor"})}),a.jsx("p",{className:"person-profession-title",children:a.jsx("strong",{children:"Edplus at ASU"})})]}),n!=="micro"&&a.jsxs("ul",{className:"person-contact-info",children:[a.jsx("li",{children:a.jsx("a",{href:"mailto:email@asu.edu","aria-label":"Email email@asu.edu","data-ga-event":"link","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"john smith","data-ga":"email@asu.edu",children:"email@asu.edu"})}),a.jsx("li",{children:a.jsx("a",{href:"tel:555-555-5555","aria-label":"Phone 555 555 5555","data-ga-event":"link","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"john smith","data-ga":"555-555-5555",children:"555-555-5555"})}),a.jsx("li",{children:a.jsxs("address",{className:"person-address",children:[a.jsx("span",{className:"person-street",children:"1234 Address St."}),a.jsx("span",{className:"person-city",children:"Tempe AZ 12345"})]})})]}),!["micro","small"].includes(n)&&a.jsxs("div",{children:[a.jsx("p",{className:"person-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis, et dignissim nisi. In sed volutpat lectus. Lorem ipsum dolor sit amet."}),a.jsxs("ul",{className:"person-social-medias",children:[a.jsx("li",{children:a.jsx("a",{href:"#","aria-label":"Go to user Facebook profile","data-ga-event":"link","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"external link","data-ga-region":"main content","data-ga-section":"john smith","data-ga":"facebook icon",children:a.jsx("span",{className:"fab fa-facebook-square"})})}),a.jsx("li",{children:a.jsx("a",{href:"#","aria-label":"Go to user Linkedin profile","data-ga-event":"link","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"external link","data-ga-region":"main content","data-ga-section":"john smith","data-ga":"linkedin icon",children:a.jsx("span",{className:"fab fa-linkedin"})})}),a.jsx("li",{children:a.jsx("a",{href:"#","aria-label":"Go to user Twitter profile","data-ga-event":"link","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"external link","data-ga-region":"main content","data-ga-section":"john smith","data-ga":"twitter icon",children:a.jsx("span",{className:"fab fa-square-x-twitter"})})})]})]}),n==="small"&&a.jsx(k,{color:"maroon",size:"small",label:"View Profile"}),n==="micro"&&a.jsx("span",{className:"more-link",children:"Edplus at ASU"})]})]}),b=I.bind({});var E,w,S;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`({
  size,
  fill
}) => <div className={\`uds-person-profile \${size} \${fill ? "fill" : ""}\`}>
    <div className="profile-img-container">
      <div className="profile-img-placeholder" style={{
      backgroundImage: \`url(\${anonPic})\`
    }}>
        <img className="profile-img" src={imageName.demo1} alt="John Smith" width="300" height="300" decoding="async" loading="lazy" fetchpriority="high" onError={e => e.target.style.display = "none"} />
      </div>
    </div>
    <div className="person">
      <h3 className="person-name">John Smith</h3>
      <div className="person-profession">
        <p className="person-profession-title">
          <strong>Regents Professor</strong>
        </p>
        <p className="person-profession-title">
          <strong>Edplus at ASU</strong>
        </p>
      </div>
      {size !== "micro" && <ul className="person-contact-info">
          <li>
            <a href="mailto:email@asu.edu" aria-label="Email email@asu.edu" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-section="john smith" data-ga="email@asu.edu">
              email@asu.edu
            </a>
          </li>
          <li>
            <a href="tel:555-555-5555" aria-label="Phone 555 555 5555" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-section="john smith" data-ga="555-555-5555">
              555-555-5555
            </a>
          </li>
          <li>
            <address className="person-address">
              <span className="person-street">1234 Address St.</span>
              <span className="person-city">Tempe AZ 12345</span>
            </address>
          </li>
        </ul>}
      {!["micro", "small"].includes(size) && <div>
          <p className="person-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis,
            et dignissim nisi. In sed volutpat lectus. Lorem ipsum dolor sit
            amet.
          </p>
          <ul className="person-social-medias">
            <li>
              <a href="#" aria-label="Go to user Facebook profile" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="john smith" data-ga="facebook icon">
                <span className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Go to user Linkedin profile" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="john smith" data-ga="linkedin icon">
                <span className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Go to user Twitter profile" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="john smith" data-ga="twitter icon">
                <span className="fab fa-square-x-twitter" />
              </a>
            </li>
          </ul>
        </div>}
      {size === "small" && <Button color="maroon" size="small" label="View Profile" />}
      {size === "micro" && <span className="more-link">Edplus at ASU</span>}
    </div>
  </div>`,...(S=(w=b.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const M=["PersonProfileTemplate"];export{b as PersonProfileTemplate,M as __namedExportsOrder,J as default};
