import{j as e}from"./jsx-runtime-Dmx1myWC.js";import"./index-mEo-t6td.js";import{a as m}from"./props-mock-BXQRJ45J.js";import{I as n}from"./ImageGalleryCarousel-CTYr6yhA.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./index-8TXC-oMP.js";import"./index-Cqy-YfF9.js";import"./index-UMp4X3uH.js";import"./GaEventWrapper-D-bs3D7C.js";import"./googleAnalytics-bhG-ZSut.js";const x=()=>m.map((t,s)=>{const i=s===2?`
    Content ${s+1}

    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium,
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium,
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium
  `:`
  Content ${s+1}
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  `;return{...t,content:i}}),b=()=>{const t=`Body copy goes <span style="font-weight: bold; display: inline;">here in bold!</span>. Then there's a <a href="https://google.com">link!!!!</a>
  Limit to 5 lines max`,s=`
  <div>
    <p>
      <strong>Lorem ipsum is </strong>
    </p>
    <br />
    <p>
      <strong>p</strong>laceholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups. Lorem ipsum is placeholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups. Lorem ipsum is placeholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups.&nbsp;<a href="https://packagist.org/packages/asuwebplatforms/webspark-module-webspark_blocks">
      https://packagist.org/packages/asuwebplatforms/webspark-module-webspark_blocks</a></p>
  </div>
  `;return m.map((i,p)=>({...i,title:`Content ${p+1}`,content:p%2===1?t:s}))},N={title:"Components/Image Gallery Carousel",component:n,globals:{framework:"react"},tags:["!bootstrap"],parameters:{controls:{disable:!0}}},l="996px",k="600px",u=({children:t=null})=>e.jsx("div",{className:"container",style:{display:"flex",maxHeight:k},children:t}),a=()=>e.jsx(u,{children:e.jsx(n,{maxWidth:l,imageItems:m})}),o=()=>e.jsx(u,{children:e.jsx(n,{maxWidth:l,imageItems:x(),hasContent:!0})}),r=()=>e.jsx(u,{children:e.jsx(n,{maxWidth:l,imageItems:b(),hasContent:!0})});a.__docgenInfo={description:"",methods:[],displayName:"ImageGalleryCarouselDefault"};o.__docgenInfo={description:"",methods:[],displayName:"ImageGalleryCarouselWithContent"};r.__docgenInfo={description:"",methods:[],displayName:"ImageCarouselWithMoreContent"};var c,d,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Wrapper>
    <ImageGalleryCarousel maxWidth={maxWidth} imageItems={imageGalleryCarouselItems} />
  </Wrapper>`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,C,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Wrapper>
    <ImageGalleryCarousel maxWidth={maxWidth} imageItems={mockItemWithContent()} hasContent />
  </Wrapper>`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var y,W,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Wrapper>
    <ImageGalleryCarousel maxWidth={maxWidth} imageItems={mockItemWithMoreContent()} hasContent />
  </Wrapper>`,...(f=(W=r.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};const S=["ImageGalleryCarouselDefault","ImageGalleryCarouselWithContent","ImageCarouselWithMoreContent"];export{r as ImageCarouselWithMoreContent,a as ImageGalleryCarouselDefault,o as ImageGalleryCarouselWithContent,S as __namedExportsOrder,N as default};
