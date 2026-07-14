import{r as I,a8 as m}from"./iframe-v6l6KEB_.js";import{i as o}from"./props-mock-C6T-khv4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoQzFtyr.js";import"./img01-D3m8CBfF.js";const C=()=>o.map(e=>({...e,content:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium …
  `})),f=()=>o.map((e,i)=>({...e,title:`Content ${i+1}`,content:`<p>Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua eiusmod tempo.</p>
    <p>Another line of content</p>`})),q={title:"Components/Image Carousel",component:I,globals:{framework:"react"},tags:["!bootstrap"],args:{imageItems:[],perView:1},argTypes:{imageItems:{table:{disable:!0}},perView:{control:{type:"range",min:1,max:3,step:1}}}},y="800px",r=({imageItems:e,perView:i})=>m.jsx("div",{style:{},children:m.jsx(I,{perView:i,maxWidth:y,imageItems:e})}),t=r.bind({});t.args={imageItems:o};const a=r.bind({});a.args={imageItems:C()};const s=r.bind({});s.args={imageItems:f()};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var g,u,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,h,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const v=["ImageCarouselDefault","ImageCarouselWithCaption","ImageCarouselWithMoreCaptionContent"];export{t as ImageCarouselDefault,a as ImageCarouselWithCaption,s as ImageCarouselWithMoreCaptionContent,v as __namedExportsOrder,q as default};
