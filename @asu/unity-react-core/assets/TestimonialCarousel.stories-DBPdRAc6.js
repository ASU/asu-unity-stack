import{Q as f,a8 as r}from"./iframe-Iiz84IEd.js";import{i as o}from"./index-C71UfaeX.js";import"./preload-helper-Dp1pzeXC.js";const A=[{id:1,quote:{title:"Walt Disney",content:"Laughter is timeless, imagination has no age, dreams are forever."},imageSource:o.anon,imageAltText:"Image of Walt Disney"},{id:2,quote:{title:"Walt Disney",content:`We keep opening new doors and doing new things,
      because we’recurious and curiosity keeps leading us down new paths.`},imageSource:o.anon,imageAltText:"Image of Walt Disney"}],Q=[{id:1,quote:{content:"Computers make excellent and efficient servants, but I have no wish to serve under them.",cite:{name:"Spock",description:"First officer, USS Enterprise"}}},{id:2,quote:{content:"I could not deprive you of the revelation of all that you could accomplish together, of a friendship that will define you both in ways you cannot yet realize.",cite:{name:"Spock",description:"First officer, USS Enterprise"}}}],q=[{id:1,quote:{content:"I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it. It’s all true.",cite:{name:"Han Solo"}},imageSource:o.anon,imageAltText:"Pretend this is Han Solo"},{id:2,quote:{content:"Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",cite:{name:"Han Solo"}},imageSource:o.anon,imageAltText:"Pretend this is Han Solo"}],M=[{id:1,quote:{content:"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",cite:{name:"Thomas Jefferson",description:"The Declaration of Independence"}}},{id:2,quote:{content:"Four score and seven years ago our fathers brought forth upon this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",cite:{name:"Abraham Lincoln",description:"Gettysburg Address"}}}],j=[{id:1,quote:{content:"ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.",cite:{name:"Michael M. Crow",description:"ASU Charter"}},imageSource:o.anon,imageAltText:"Pretend this is Michael M. Crow, President of ASU"},{id:2,quote:{content:"Eight design aspirations guide the ongoing evolution of ASU as a New American University. These institutional objectives are integrated in innovative ways throughout the university to achieve excellence, access and impact.",cite:{name:"Michael M. Crow",description:"ASU Charter"}},imageSource:o.anon,imageAltText:"Pretend this is Michael M. Crow, President of ASU"}],U={title:"Components/Testimonial Carousel",component:f,globals:{framework:"react"},tags:["!bootstrap"],args:{itemColor:"None",itemTitleColor:"None",itemQuoteColor:"None",backgroundColor:"White",testimonial:"NoImage",hasNavButtons:!0,hasPositionIndicators:!0},argTypes:{itemColor:{name:"Item Color",options:["Gold","Maroon","Gold White Text","None"],control:{type:"radio"},mapping:{Gold:["accent-gold"],Maroon:["accent-maroon"],"Gold White Text":["text-white","accent-gold"],None:[]}},itemTitleColor:{name:"Item Title Color",options:["Highlight gold","Highlight black","None"],control:{type:"radio"},mapping:{"Highlight gold":["highlight-gold"],"Highlight black":["highlight-black"],None:[]}},itemQuoteColor:{name:"Item Quote Color",options:["White","Maroon","None"],control:{type:"radio"},mapping:{White:["text-white"],Maroon:["text-maroon"],None:[]}},backgroundColor:{name:"Background Color",options:["White","Gray","Black"],control:{type:"radio"},mapping:{White:[],Gray:["bg-gray-2"],Black:["bg-gray-7"]}},testimonial:{name:"Testimonial",options:["NoImage","WithImage","NoImage2","WithImage2","NoCitation"],control:{type:"select"},mapping:{NoImage:Q,WithImage:q,NoImage2:M,WithImage2:j,NoCitation:A}},hasNavButtons:{control:{type:"boolean"}},hasPositionIndicators:{control:{type:"boolean"}}}},s=({itemColor:S,itemTitleColor:W,itemQuoteColor:x,backgroundColor:w,testimonial:k,hasNavButtons:P,hasPositionIndicators:B})=>r.jsx("div",{className:["container",...w].join(" "),children:r.jsx(f,{itemStyle:{containerCssClass:S,contentCssClass:x,titleCssClass:W},maxWidth:"500px",hasNavButtons:P,hasPositionIndicators:B,testimonialItems:k})}),t=s.bind({});t.args={itemColor:"Gold",testimonial:"WithImage"};const e=s.bind({});e.args={itemColor:"Gold",testimonial:"NoImage"};const i=s.bind({});i.args={itemColor:"Gold",testimonial:"WithImage2",hasPositionIndicators:!1};const a=s.bind({});a.args={testimonial:"NoImage2"};const n=s.bind({});n.args={itemColor:"Gold",itemQuoteColor:"",itemTitleColor:"Highlight gold",testimonial:"NoCitation"};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
  itemColor,
  itemTitleColor,
  itemQuoteColor,
  backgroundColor,
  testimonial,
  hasNavButtons,
  hasPositionIndicators
}) => <div className={[\`container\`, ...backgroundColor].join(" ")}>
    <TestimonialCarousel itemStyle={{
    containerCssClass: itemColor,
    contentCssClass: itemQuoteColor,
    titleCssClass: itemTitleColor
  }} maxWidth="500px" hasNavButtons={hasNavButtons} hasPositionIndicators={hasPositionIndicators} testimonialItems={testimonial} />
  </div>`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,h,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  itemColor,
  itemTitleColor,
  itemQuoteColor,
  backgroundColor,
  testimonial,
  hasNavButtons,
  hasPositionIndicators
}) => <div className={[\`container\`, ...backgroundColor].join(" ")}>
    <TestimonialCarousel itemStyle={{
    containerCssClass: itemColor,
    contentCssClass: itemQuoteColor,
    titleCssClass: itemTitleColor
  }} maxWidth="500px" hasNavButtons={hasNavButtons} hasPositionIndicators={hasPositionIndicators} testimonialItems={testimonial} />
  </div>`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var C,g,p;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`({
  itemColor,
  itemTitleColor,
  itemQuoteColor,
  backgroundColor,
  testimonial,
  hasNavButtons,
  hasPositionIndicators
}) => <div className={[\`container\`, ...backgroundColor].join(" ")}>
    <TestimonialCarousel itemStyle={{
    containerCssClass: itemColor,
    contentCssClass: itemQuoteColor,
    titleCssClass: itemTitleColor
  }} maxWidth="500px" hasNavButtons={hasNavButtons} hasPositionIndicators={hasPositionIndicators} testimonialItems={testimonial} />
  </div>`,...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var I,v,N;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`({
  itemColor,
  itemTitleColor,
  itemQuoteColor,
  backgroundColor,
  testimonial,
  hasNavButtons,
  hasPositionIndicators
}) => <div className={[\`container\`, ...backgroundColor].join(" ")}>
    <TestimonialCarousel itemStyle={{
    containerCssClass: itemColor,
    contentCssClass: itemQuoteColor,
    titleCssClass: itemTitleColor
  }} maxWidth="500px" hasNavButtons={hasNavButtons} hasPositionIndicators={hasPositionIndicators} testimonialItems={testimonial} />
  </div>`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var b,y,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`({
  itemColor,
  itemTitleColor,
  itemQuoteColor,
  backgroundColor,
  testimonial,
  hasNavButtons,
  hasPositionIndicators
}) => <div className={[\`container\`, ...backgroundColor].join(" ")}>
    <TestimonialCarousel itemStyle={{
    containerCssClass: itemColor,
    contentCssClass: itemQuoteColor,
    titleCssClass: itemTitleColor
  }} maxWidth="500px" hasNavButtons={hasNavButtons} hasPositionIndicators={hasPositionIndicators} testimonialItems={testimonial} />
  </div>`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const E=["TestimonialCarouselDefault","TestimonialCarouselWithNoImage","TestimonialCarouselWithSlider","TestimonialCarouselWithSliderAndPositionIndicatorDots","TestimonialCarouselWithNoCitation"];export{t as TestimonialCarouselDefault,n as TestimonialCarouselWithNoCitation,e as TestimonialCarouselWithNoImage,i as TestimonialCarouselWithSlider,a as TestimonialCarouselWithSliderAndPositionIndicatorDots,E as __namedExportsOrder,U as default};
