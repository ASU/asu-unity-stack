import{j as c}from"./jsx-runtime-VU7BY01E.js";import"./index-BebQxa19.js";import"./Layout-XUDhei8Q.js";import{i as P}from"./index-BMjp-peT.js";import{C as W}from"./CardArrangement-CSHuVa5f.js";import"./_commonjsHelpers-NT8qMgGI.js";import"./index-X6w4Ppxe.js";import"./Card-CHmVUjxO.js";import"./html-utils-Cf06jDgj.js";import"./Button-BMwDIIqX.js";import"./shared-prop-types-BiNDl1K6.js";import"./GaEventWrapper-rhUm1Goq.js";import"./ButtonTag-CKtay90f.js";import"./Image-DPWP6VF1.js";import"./styled-components.browser.esm-BltV_-4f.js";import"./RankingCard-CvtPND4b.js";const e=P(),le={title:"Components/Card Arrangement",component:W,parameters:{docs:{description:{component:`The CardArrangement component renders multiple cards that wrap naturally based on their intrinsic sizing.

## Usage

The component accepts an array of card objects and automatically arranges them with flexbox wrapping.
Cards will flow and wrap based on their min/max width constraints and the available space in the parent container.

The parent container determines the overall width - this component simply handles laying out the cards
with appropriate spacing and letting them wrap naturally.

This design works seamlessly with Drupal and other CMS environments where the container width is controlled externally.

View component examples and source code below.
        `}}}},O=[{type:"default",image:e,imageAltText:"Sample image 1",title:"Card Title One",body:"This is the body content for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{color:"maroon",size:"default",label:"Learn more",href:"#"}]},{type:"default",image:e,imageAltText:"Sample image 2",title:"Card Title Two",body:"This is the body content for the second card. Sed do eiusmod tempor incididunt ut labore.",buttons:[{color:"gold",size:"default",label:"Explore",href:"#"}]},{type:"default",image:e,imageAltText:"Sample image 3",title:"Card Title Three",body:"This is the body content for the third card. Ut enim ad minim veniam, quis nostrud exercitation.",tags:[{color:"gray",label:"tag1",href:"#"},{color:"gray",label:"tag2",href:"#"}]}],V=[{type:"event",image:e,imageAltText:"Event image 1",title:"Innovation Summit 2024",body:"Join us for a day of innovation and collaboration with industry leaders.",eventFormat:"stack",eventTime:"Wed, March 15, 2024<br />9:00 a.m - 5:00 p.m.",eventLocation:"Tempe campus",buttons:[{color:"maroon",size:"default",label:"Register",href:"#"}]},{type:"event",image:e,imageAltText:"Event image 2",title:"Research Symposium",body:"Discover cutting-edge research from ASU scholars and students.",eventFormat:"stack",eventTime:"Fri, April 20, 2024<br />10:00 a.m - 2:00 p.m.",eventLocation:"West campus",buttons:[{color:"maroon",size:"default",label:"Learn more",href:"#"}]}],_=[{type:"story",image:e,imageAltText:"Story image 1",title:"Student Success Story",body:"Read about how our programs are transforming lives and careers.",linkLabel:"Read full story",linkUrl:"#",tags:[{color:"gray",label:"Students",href:"#"},{color:"gray",label:"Success",href:"#"}]},{type:"story",image:e,imageAltText:"Story image 2",title:"Research Breakthrough",body:"ASU researchers make significant advances in renewable energy technology.",linkLabel:"Learn more",linkUrl:"#",tags:[{color:"gray",label:"Research",href:"#"},{color:"gray",label:"Innovation",href:"#"}]},{type:"story",image:e,imageAltText:"Story image 3",title:"Community Impact",body:"How ASU is making a difference in local communities through service.",linkLabel:"Read more",linkUrl:"#",tags:[{color:"gray",label:"Community",href:"#"},{color:"gray",label:"Service",href:"#"}]}],q=[{type:"degree",image:e,imageAltText:"Degree program 1",title:"Computer Science, BS",body:"Learn programming, algorithms, and software development from industry experts."},{type:"degree",image:e,imageAltText:"Degree program 2",title:"Business Administration, MBA",body:"Advance your career with strategic thinking and leadership skills."},{type:"degree",image:e,imageAltText:"Degree program 3",title:"Biomedical Engineering, MS",body:"Innovate at the intersection of medicine and technology."},{type:"degree",image:e,imageAltText:"Degree program 4",title:"Psychology, BA",body:"Understand human behavior and mental processes through scientific inquiry."}],a=H=>c.jsx("div",{className:"container",children:c.jsx(W,{...H})}),r=a.bind({});r.args={cards:O};r.storyName="Three cards example";r.parameters={docs:{description:{story:`
Example with three cards that will wrap naturally based on container width.

\`\`\`jsx
<CardArrangement
  cards={cards}
/>
\`\`\`
      `}}};const t=a.bind({});t.args={cards:V};t.storyName="Two cards example";t.parameters={docs:{description:{story:`
Example with two event cards that will wrap naturally.

\`\`\`jsx
<CardArrangement
  cards={eventCards}
/>
\`\`\`
      `}}};const i=a.bind({});i.args={cards:q};i.storyName="Four cards example";i.parameters={docs:{description:{story:`
Example with four degree cards that will wrap based on available space.

\`\`\`jsx
<CardArrangement
  cards={degreeCards}
/>
\`\`\`
      `}}};const n=a.bind({});n.args={cards:[{type:"default",title:"Horizontal",body:"Body",horizontal:!0},{type:"default",title:"Horizontal",body:"Body",horizontal:!0}]};n.storyName="Horizontal cards example";n.parameters={docs:{description:{story:`
Example with horizontal cards. Each card is set to horizontal layout.

\`\`\`jsx
<CardArrangement
  cards={horizontalCards}
/>
\`\`\`
      `}}};const o=a.bind({});o.args={cards:_};o.storyName="Multiple story cards";o.parameters={docs:{description:{story:`
Example with multiple story cards.

\`\`\`jsx
<CardArrangement
  cards={storyCards}
/>
\`\`\`
      `}}};const s=a.bind({});s.args={cards:[{type:"default",image:e,imageAltText:"Default card",title:"Default Card",body:"This is a default card with a button.",buttons:[{color:"maroon",size:"default",label:"Action",href:"#"}]},{type:"event",image:e,imageAltText:"Event card",title:"Upcoming Event",body:"Join us for this exciting event.",eventFormat:"inline",eventTime:"March 15, 2024",eventLocation:"Tempe campus"},{type:"story",image:e,imageAltText:"Story card",title:"Featured Story",body:"Read about this amazing story.",linkLabel:"Read more",linkUrl:"#",tags:[{color:"gray",label:"Featured",href:"#"}]},{type:"degree",image:e,imageAltText:"Degree card",title:"Degree Program",body:"Explore our degree offerings."}]};s.storyName="Mixed card types";s.parameters={docs:{description:{story:`
Example showing different card types in the same arrangement.
The CardArrangement component works with any card type (default, event, story, degree).

\`\`\`jsx
<CardArrangement
  cards={mixedCards}
/>
\`\`\`
      `}}};const d=a.bind({});d.args={cards:[{type:"default",icon:["fas","newspaper"],title:"News Update",body:"Stay informed with the latest news from ASU.",buttons:[{color:"maroon",size:"default",label:"Read more",href:"#"}]},{type:"default",icon:["fas","calendar"],title:"Event Calendar",body:"Discover upcoming events and activities.",buttons:[{color:"gold",size:"default",label:"View calendar",href:"#"}]},{type:"default",icon:["fas","graduation-cap"],title:"Academic Programs",body:"Explore our wide range of degree programs.",buttons:[{color:"maroon",size:"default",label:"Explore",href:"#"}]}]};d.storyName="Cards with icons";d.parameters={docs:{description:{story:`
Cards can use icons instead of images for a cleaner, icon-based layout.

\`\`\`jsx
<CardArrangement
  cards={cardsWithIcons}
/>
\`\`\`
      `}}};const J=[{imageSize:"large",image:e,imageAlt:"Ranking image 1",heading:"Top Research University",body:"ASU ranks among the top research universities in innovation and impact.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 2",heading:"Innovation Leader",body:"Recognized as the most innovative school in the nation for multiple consecutive years.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 3",heading:"Sustainability Excellence",body:"Leading the way in sustainable practices and environmental initiatives.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 1",heading:"Top Research University",body:"ASU ranks among the top research universities in innovation and impact.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 2",heading:"Innovation Leader",body:"Recognized as the most innovative school in the nation for multiple consecutive years.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 3",heading:"Sustainability Excellence",body:"Leading the way in sustainable practices and environmental initiatives.",readMoreLink:"#"}],G=[{imageSize:"small",image:e,imageAlt:"Ranking image 1",heading:"Best Value University",body:"Delivering exceptional education at an affordable cost.",citation:"U.S. News & World Report 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 2",heading:"Top Online Programs",body:"Ranked #1 for online bachelor's programs nationwide.",citation:"U.S. News & World Report 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 3",heading:"Research Impact",body:"Highest research activity classification from Carnegie.",citation:"Carnegie Classification 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 4",heading:"Graduate Employability",body:"Top 10 in the U.S. for graduate employment outcomes.",citation:"QS World Rankings 2024"}],m=a.bind({});m.args={cards:J,cardType:"ranking"};m.storyName="Ranking cards (large)";m.parameters={docs:{description:{story:`
Example with large ranking cards that display an expandable info layer overlay.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsLarge}
  cardType="ranking"
/>
\`\`\`
      `}}};const l=a.bind({});l.args={cards:G,cardType:"ranking"};l.storyName="Ranking cards (small)";l.parameters={docs:{description:{story:`
Example with small ranking cards that include citations and compact layout.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsSmall}
  cardType="ranking"
/>
\`\`\`
      `}}};var g,p,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,A,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var w,k,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var R,z,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var E,N,U;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(U=(N=d.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var M,j,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(D=(j=m.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,B,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const ce=["ThreeColumns","TwoColumns","FourColumns","HorizontalCards","SingleColumn","MixedCardTypes","WithoutImages","RankingCardsLarge","RankingCardsSmall"];export{i as FourColumns,n as HorizontalCards,s as MixedCardTypes,m as RankingCardsLarge,l as RankingCardsSmall,o as SingleColumn,r as ThreeColumns,t as TwoColumns,d as WithoutImages,ce as __namedExportsOrder,le as default};
