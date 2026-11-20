import{o as f,a7 as E}from"./iframe-BM-lbz-d.js";import{i as M}from"./index-BoQzFtyr.js";import"./preload-helper-Dp1pzeXC.js";import"./img01-D3m8CBfF.js";const s=M(),v={title:"Components/Heroes",component:f,parameters:{docs:{description:{component:" "}}},argTypes:{title:{control:{type:"object"},description:"Options for highlightColor are gold, white, black, or none"}}},i=({image:z,title:P,subTitle:q,contents:_,contentsColor:k})=>E.jsx(f,{title:P,subTitle:q,image:z,contents:_,contentsColor:k}),e=i.bind({});e.args={image:{url:s,altText:"Hero image",size:"small"},title:{text:"Heading with a long title 1",highlightColor:"none"},subTitle:{text:"Subtitle with example text",highlightColor:"none"},contentsColor:"white",contents:[{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}]};e.parameters={docs:{description:{story:" "}}};const t=i.bind({});t.args={image:{url:s,altText:"Hero image",size:"small"},title:{text:"Heading with a long title 2",highlightColor:"gold",maxWidth:"100%"}};t.parameters={docs:{description:{story:" "}}};const o=i.bind({});o.args={image:{url:s,altText:"Hero image",size:"medium"},title:{text:"Heading 1",highlightColor:"black"},contentsColor:"white",contents:[{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}]};o.parameters={docs:{description:{story:" "}}};const r=i.bind({});r.args={image:{url:s,altText:"Hero image",size:"large"},title:{text:"Heading 1",color:"white"},contentsColor:"white",contents:[{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}]};r.parameters={docs:{description:{story:" "}}};const B=["HeroSmall","HeroLongTitle","HeroMedium","HeroLarge"];var n,a,c,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  image,
  title,
  subTitle,
  contents,
  contentsColor
}) => <Hero title={title} subTitle={subTitle} image={image} contents={contents} contentsColor={contentsColor} />`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var d,p,g,u,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  image,
  title,
  subTitle,
  contents,
  contentsColor
}) => <Hero title={title} subTitle={subTitle} image={image} contents={contents} contentsColor={contentsColor} />`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};var H,h,C,T,x;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`({
  image,
  title,
  subTitle,
  contents,
  contentsColor
}) => <Hero title={title} subTitle={subTitle} image={image} contents={contents} contentsColor={contentsColor} />`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};var y,w,j,L,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`({
  image,
  title,
  subTitle,
  contents,
  contentsColor
}) => <Hero title={title} subTitle={subTitle} image={image} contents={contents} contentsColor={contentsColor} />`,...(j=(w=r.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.description}}};export{r as HeroLarge,t as HeroLongTitle,o as HeroMedium,e as HeroSmall,B as __namedExportsOrder,v as default};
