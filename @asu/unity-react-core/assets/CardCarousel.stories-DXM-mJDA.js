import{j as s,a8 as a}from"./iframe-CCGptS7a.js";import{c as C}from"./props-mock-DNkiHdQA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoQzFtyr.js";import"./img01-D3m8CBfF.js";const t={None:"","Gray 1":"gray-faint-bg","Gray 2":"gray-light-bg","Gray 7":"gray-dark-bg"},y={title:"Components/Card Carousel",component:s,parameters:{},argTypes:{bgColor:{name:"Background color of the section",description:"Background color is not applied to the component, but to the section wrapper.",options:Object.keys(t),control:{type:"radio"}}},globals:{framework:"react"},tags:["!bootstrap"]},i=({children:r})=>a.jsx("div",{children:r}),e=({bgColor:r})=>a.jsx(i,{children:a.jsx(s,{perView:"3",cardItems:C,bgColor:t[r]})}),o=({bgColor:r})=>a.jsx(i,{children:a.jsx(s,{perView:"2",cardItems:C,bgColor:t[r]})});e.__docgenInfo={description:"",methods:[],displayName:"ThreeItemCarousel"};o.__docgenInfo={description:"",methods:[],displayName:"TwoItemCarousel"};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  bgColor
}) => <Wrapper>
    <CardCarousel perView="3" cardItems={cardCarouselItems} bgColor={cardCarouselBgColorClassName[bgColor]} />
  </Wrapper>`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,n,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`({
  bgColor
}) => <Wrapper>
    <CardCarousel perView="2" cardItems={cardCarouselItems} bgColor={cardCarouselBgColorClassName[bgColor]} />
  </Wrapper>`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const w=["ThreeItemCarousel","TwoItemCarousel"];export{e as ThreeItemCarousel,o as TwoItemCarousel,w as __namedExportsOrder,y as default};
