import{i as V,a8 as g}from"./iframe-BsxT1CET.js";import{i as q}from"./index-BoQzFtyr.js";import"./preload-helper-Dp1pzeXC.js";import"./img01-D3m8CBfF.js";const e=q(),te={title:"Components/Card Arrangement",component:V,argTypes:{cards:{description:'Array of card objects to render. Each object should contain props for the Card, Image or RankingCard component. Cards will wrap naturally based on their intrinsic min/max widths. When using the Card component, cards can supply a type of "default", "degree", "event" or "story"'}},parameters:{docs:{description:{component:`The CardArrangement component renders multiple cards that wrap naturally based on their intrinsic sizing.

## Usage

CardArrangement component receives Array of card objects to render. Each object should contain props for the Card, Image or RankingCard component. Cards will wrap naturally based on their intrinsic min/max widths. When using the Card component, cards can supply a type of "default", "degree", "event" or "story"

The parent container determines the overall width - this component simply handles laying out the cards
with appropriate spacing and letting them wrap naturally.

This design works seamlessly with Drupal and other CMS environments where the container width is controlled externally.

View component examples and source code below.
        `}}}},J=[{type:"default",image:e,imageAltText:"Sample image 1",title:"Card Title One",body:"This is the body content for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{color:"maroon",size:"default",label:"Learn more",href:"#"}]},{type:"default",image:e,imageAltText:"Sample image 2",title:"Card Title Two",body:"This is the body content for the second card. Sed do eiusmod tempor incididunt ut labore.",buttons:[{color:"gold",size:"default",label:"Explore",href:"#"}]},{type:"default",image:e,imageAltText:"Sample image 3",title:"Card Title Three",body:"This is the body content for the third card. Ut enim ad minim veniam, quis nostrud exercitation.",tags:[{color:"gray",label:"tag1",href:"#"},{color:"gray",label:"tag2",href:"#"}]}],G=[{type:"event",image:e,imageAltText:"Event image 1",title:"Innovation Summit 2024 with a very long title that should wrap to multiple lines and test the card height consistency across cards in the same row",body:"Join us for a day of innovation and collaboration with industry leaders. Also a long body text to test height consistency across cards in the same row.",eventFormat:"stack",eventTime:"Wed, March 15, 2024<br />9:00 a.m - 5:00 p.m.",eventLocation:"Tempe campus",buttons:[{color:"maroon",size:"default",label:"Register",href:"#"}]},{type:"event",image:e,imageAltText:"Event image 2",title:"Research Symposium",body:"Discover cutting-edge research from ASU scholars and students.",eventFormat:"stack",eventTime:"Fri, April 20, 2024<br />10:00 a.m - 2:00 p.m.",eventLocation:"West campus",buttons:[{color:"maroon",size:"default",label:"Learn more",href:"#"}]}],Q=[{type:"story",image:e,imageAltText:"Story image 1",title:"Student Success Story",body:"Read about how our programs are transforming lives and careers.",linkLabel:"Read full story",linkUrl:"#",tags:[{color:"gray",label:"Students",href:"#"},{color:"gray",label:"Success",href:"#"}]},{type:"story",image:e,imageAltText:"Story image 2",title:"Research Breakthrough",body:"ASU researchers make significant advances in renewable energy technology.",linkLabel:"Learn more",linkUrl:"#",tags:[{color:"gray",label:"Research",href:"#"},{color:"gray",label:"Innovation",href:"#"}]},{type:"story",image:e,imageAltText:"Story image 3",title:"Community Impact",body:"How ASU is making a difference in local communities through service.",linkLabel:"Read more",linkUrl:"#",tags:[{color:"gray",label:"Community",href:"#"},{color:"gray",label:"Service",href:"#"}]}],K=[{type:"degree",image:e,imageAltText:"Degree program 1",title:"Computer Science, BS",body:"Learn programming, algorithms, and software development from industry experts."},{type:"degree",image:e,imageAltText:"Degree program 2",title:"Business Administration, MBA",body:"Advance your career with strategic thinking and leadership skills."},{type:"degree",image:e,imageAltText:"Degree program 3",title:"Biomedical Engineering, MS",body:"Innovate at the intersection of medicine and technology."},{type:"degree",image:e,imageAltText:"Degree program 4",title:"Psychology, BA",body:"Understand human behavior and mental processes through scientific inquiry."}],X=[{type:"image",src:e,alt:"Image card 1",captionTitle:"Image Card One",caption:"This is the body content for the first image card with dropshadow and with cardLink prop provided. Card acts as anchor/link",border:!0,dropShadow:!0,cardLink:"https://example.com",title:"example"},{type:"image",src:e,alt:"Image card 2",captionTitle:"Image Card Two",caption:"This is the body content for the second image card with no border"},{type:"image",src:e,alt:"Image card 3",captionTitle:"Image Card Three",caption:"This is the body content for the third image card with no drop shadow.",border:!0,dropShadow:!1}],a=_=>g.jsx("div",{className:"container",children:g.jsx(V,{..._})}),r=a.bind({});r.args={cards:J,columns:3};r.storyName="Three cards example";r.parameters={docs:{description:{story:`
Example with three cards that will wrap naturally based on container width.

\`\`\`jsx
<CardArrangement
  cards={cards}
/>
\`\`\`
      `}}};const t=a.bind({});t.args={cards:G,columns:2};t.storyName="Two cards example";t.parameters={docs:{description:{story:`
Example with two event cards that will wrap naturally.

\`\`\`jsx
<CardArrangement
  cards={eventCards}
/>
\`\`\`
      `}}};const i=a.bind({});i.args={cards:K,columns:4};i.storyName="Four cards example";i.parameters={docs:{description:{story:`
Example with four degree cards that will wrap based on available space.

\`\`\`jsx
<CardArrangement
  cards={degreeCards}
/>
\`\`\`
      `}}};const o=a.bind({});o.args={cards:[{type:"default",title:"Horizontal",body:"Body",horizontal:!0},{type:"default",title:"Horizontal",body:"Body",horizontal:!0}]};o.storyName="Horizontal cards example";o.parameters={docs:{description:{story:`
Example with horizontal cards. Each card is set to horizontal layout.

\`\`\`jsx
<CardArrangement
  cards={horizontalCards}
/>
\`\`\`
      `}}};const n=a.bind({});n.args={cards:Q,columns:1};n.storyName="Multiple story cards";n.parameters={docs:{description:{story:`
Example with multiple story cards.

\`\`\`jsx
<CardArrangement
  cards={storyCards}
/>
\`\`\`
      `}}};const s=a.bind({});s.args={cards:[{type:"default",image:e,imageAltText:"Default card",title:"Default Card",body:"This is a default card with a button.",buttons:[{color:"maroon",size:"default",label:"Action",href:"#"}]},{type:"event",image:e,imageAltText:"Event card",title:"Upcoming Event",body:"Join us for this exciting event.",eventFormat:"inline",eventTime:"March 15, 2024",eventLocation:"Tempe campus"},{type:"story",image:e,imageAltText:"Story card",title:"Featured Story",body:"Read about this amazing story.",linkLabel:"Read more",linkUrl:"#",tags:[{color:"gray",label:"Featured",href:"#"}]},{type:"degree",image:e,imageAltText:"Degree card",title:"Degree Program",body:"Explore our degree offerings."}]};s.storyName="Mixed card types (no columns specified)";s.parameters={docs:{description:{story:`
Example showing different card types in the same arrangement.
The CardArrangement component works with any card type (default, event, story, degree).

\`\`\`jsx
<CardArrangement
  cards={mixedCardsNoColProvided}
/>
\`\`\`
      `}}};const d=a.bind({});d.args={cards:[{type:"default",icon:["fas","newspaper"],title:"News Update",body:"Stay informed with the latest news from ASU.",buttons:[{color:"maroon",size:"default",label:"Read more",href:"#"}]},{type:"default",icon:["fas","calendar"],title:"Event Calendar",body:"Discover upcoming events and activities.",buttons:[{color:"gold",size:"default",label:"View calendar",href:"#"}]},{type:"default",icon:["fas","graduation-cap"],title:"Academic Programs",body:"Explore our wide range of degree programs.",buttons:[{color:"maroon",size:"default",label:"Explore",href:"#"}]}],columns:2};d.storyName="Cards with icons";d.parameters={docs:{description:{story:`
Cards can use icons instead of images for a cleaner, icon-based layout.

\`\`\`jsx
<CardArrangement
  cards={cardsWithIcons}
/>
\`\`\`
      `}}};const Y=[{imageSize:"large",image:e,imageAlt:"Ranking image 1",heading:"Top Research University",body:"ASU ranks among the top research universities in innovation and impact.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 2",heading:"Innovation Leader",body:"Recognized as the most innovative school in the nation for multiple consecutive years.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 3",heading:"Sustainability Excellence",body:"Leading the way in sustainable practices and environmental initiatives.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 1",heading:"Top Research University",body:"ASU ranks among the top research universities in innovation and impact.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 2",heading:"Innovation Leader",body:"Recognized as the most innovative school in the nation for multiple consecutive years.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 3",heading:"Sustainability Excellence",body:"Leading the way in sustainable practices and environmental initiatives.",readMoreLink:"#"}],Z=[{imageSize:"small",image:e,imageAlt:"Ranking image 1",heading:"Best Value University",body:"Delivering exceptional education at an affordable cost.",citation:"U.S. News & World Report 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 2",heading:"Top Online Programs",body:"Ranked #1 for online bachelor's programs nationwide.",citation:"U.S. News & World Report 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 3",heading:"Research Impact",body:"Highest research activity classification from Carnegie.",citation:"Carnegie Classification 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 4",heading:"Graduate Employability",body:"Top 10 in the U.S. for graduate employment outcomes.",citation:"QS World Rankings 2024"}],c=a.bind({});c.args={cards:Y,cardType:"ranking",columns:4};c.storyName="Ranking cards (large)";c.parameters={docs:{description:{story:`
Example with large ranking cards that display an expandable info layer overlay.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsLarge}
  cardType="ranking"
/>
\`\`\`
      `}}};const l=a.bind({});l.args={cards:Z,cardType:"ranking",columns:2};l.storyName="Ranking cards (small)";l.parameters={docs:{description:{story:`
Example with small ranking cards that include citations and compact layout.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsSmall}
  cardType="ranking"
/>
\`\`\`
      `}}};const m=a.bind({});m.args={cards:X,cardType:"image",columns:3};m.storyName="Image cards";m.parameters={docs:{description:{story:`
Example with image cards that display a visual representation along with heading and body text.

\`\`\`jsx
<CardArrangement
  cards={imageCards}
  cardType="image"
/>
\`\`\`
      `}}};var p,h,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var u,b,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,C,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,x,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,k,R;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var z,L,E;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(E=(L=s.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var N,I,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(U=(I=d.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var j,M,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var W,B,F;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,P,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const ie=["ThreeColumns","TwoColumns","FourColumns","HorizontalCards","SingleColumn","MixedCardTypesNoColProvided","WithoutImages","RankingCardsLarge","RankingCardsSmall","ImageCards"];export{i as FourColumns,o as HorizontalCards,m as ImageCards,s as MixedCardTypesNoColProvided,c as RankingCardsLarge,l as RankingCardsSmall,n as SingleColumn,r as ThreeColumns,t as TwoColumns,d as WithoutImages,ie as __namedExportsOrder,te as default};
