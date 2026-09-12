import{r as I,a8 as g}from"./iframe-CCGptS7a.js";import{i}from"./props-mock-DNkiHdQA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoQzFtyr.js";import"./img01-D3m8CBfF.js";const r={None:"","Gray 1":"gray-faint-bg","Gray 2":"gray-light-bg","Gray 7":"gray-dark-bg"},y=()=>i.map(e=>({...e,content:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium …
  `})),f=()=>i.map((e,s)=>({...e,title:`Content ${s+1}`,content:`<p>Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua eiusmod tempo.</p>
    <p>Another line of content</p>`})),k={title:"Components/Image Carousel",component:I,globals:{framework:"react"},tags:["!bootstrap"],args:{imageItems:[],perView:1},argTypes:{imageItems:{table:{disable:!0}},perView:{control:{type:"range",min:1,max:3,step:1}},bgColor:{name:"Background color of the section",description:"Background color is not applied to the component, but to the section wrapper.",options:Object.keys(r),control:{type:"radio"}}},parameters:{}},W="800px",m=({imageItems:e,perView:s,bgColor:l})=>g.jsx("div",{className:r[l],style:{},children:g.jsx(I,{perView:s,maxWidth:W,imageItems:e,bgColor:r[l]})}),a=m.bind({});a.args={imageItems:i};const t=m.bind({});t.args={imageItems:y()};const o=m.bind({});o.args={imageItems:f()};var n,p,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
  imageItems,
  perView,
  bgColor
}) => <div
// @ts-ignore
className={cardCarouselBgColorClassName[bgColor]} style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems}
  // @ts-ignore
  bgColor={cardCarouselBgColorClassName[bgColor]} />
  </div>`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,C;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  imageItems,
  perView,
  bgColor
}) => <div
// @ts-ignore
className={cardCarouselBgColorClassName[bgColor]} style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems}
  // @ts-ignore
  bgColor={cardCarouselBgColorClassName[bgColor]} />
  </div>`,...(C=(u=t.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  imageItems,
  perView,
  bgColor
}) => <div
// @ts-ignore
className={cardCarouselBgColorClassName[bgColor]} style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems}
  // @ts-ignore
  bgColor={cardCarouselBgColorClassName[bgColor]} />
  </div>`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const q=["ImageCarouselDefault","ImageCarouselWithCaption","ImageCarouselWithMoreCaptionContent"];export{a as ImageCarouselDefault,t as ImageCarouselWithCaption,o as ImageCarouselWithMoreCaptionContent,q as __namedExportsOrder,k as default};
