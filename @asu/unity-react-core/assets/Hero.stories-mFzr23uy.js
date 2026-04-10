import{H as f,j as q}from"./iframe-C7TZkQQm.js";import{i as E}from"./index-BMjp-peT.js";import"./preload-helper-Dp1pzeXC.js";const s=E(),R={title:"Components/Heroes",component:f,parameters:{docs:{description:{component:" "}}},argTypes:{title:{control:{type:"object"},description:"Options for highlightColor are gold, white, black, or none"}}},i=({image:z,title:P,contents:_,contentsColor:k})=>q.jsx(f,{title:P,image:z,contents:_,contentsColor:k}),e=i.bind({});e.args={image:{url:s,altText:"Hero image",size:"small"},title:{text:"Heading with a long title 1",highlightColor:"none"}};e.parameters={docs:{description:{story:" "}}};const t=i.bind({});t.args={image:{url:s,altText:"Hero image",size:"small"},title:{text:"Heading with a long title 2",highlightColor:"gold",maxWidth:"100%"}};t.parameters={docs:{description:{story:" "}}};const o=i.bind({});o.args={image:{url:s,altText:"Hero image",size:"medium"},title:{text:"Heading 1",highlightColor:"black"},contentsColor:"white",contents:[{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}]};o.parameters={docs:{description:{story:" "}}};const r=i.bind({});r.args={image:{url:s,altText:"Hero image",size:"large"},title:{text:"Heading 1",color:"white"},contentsColor:"white",contents:[{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}]};r.parameters={docs:{description:{story:" "}}};var n,a,c,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  image,
  title,
  contents,
  contentsColor
}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,d,g,u,H;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  image,
  title,
  contents,
  contentsColor
}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(H=(u=t.parameters)==null?void 0:u.docs)==null?void 0:H.description}}};var h,C,x,y,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  image,
  title,
  contents,
  contentsColor
}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var j,T,w,L,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`({
  image,
  title,
  contents,
  contentsColor
}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.description}}};const W=["HeroSmall","HeroLongTitle","HeroMedium","HeroLarge"];export{r as HeroLarge,t as HeroLongTitle,o as HeroMedium,e as HeroSmall,W as __namedExportsOrder,R as default};
