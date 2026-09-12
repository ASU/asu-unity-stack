import{i as G,a8 as p}from"./iframe-CCGptS7a.js";import{i as K}from"./index-BoQzFtyr.js";import"./preload-helper-Dp1pzeXC.js";import"./img01-D3m8CBfF.js";const e=K(),de={title:"Components/Card Arrangement",component:G,argTypes:{cards:{description:'Array of card objects to render. Each object should contain props for the Card, Image or RankingCard component. Cards will wrap naturally based on their intrinsic min/max widths. When using the Card component, cards can supply a type of "default", "degree", "event" or "story"'}},parameters:{docs:{description:{component:`The CardArrangement component renders multiple cards that wrap naturally based on their intrinsic sizing.

## Usage

CardArrangement component receives Array of card objects to render. Each object should contain props for the Card, Image or RankingCard component. Cards will wrap naturally based on their intrinsic min/max widths. When using the Card component, cards can supply a type of "default", "degree", "event" or "story"

The parent container determines the overall width - this component simply handles laying out the cards
with appropriate spacing and letting them wrap naturally.

This design works seamlessly with Drupal and other CMS environments where the container width is controlled externally.

View component examples and source code below.
        `}}}},X=[{type:"default",image:e,imageAltText:"Sample image 1",title:"Card Title One",body:"This is the body content for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{color:"maroon",size:"default",label:"Learn more",href:"#"}]},{type:"default",image:e,imageAltText:"Sample image 2",title:"Card Title Two",body:"This is the body content for the second card. Sed do eiusmod tempor incididunt ut labore.",buttons:[{color:"gold",size:"default",label:"Explore",href:"#"}]},{type:"default",image:e,imageAltText:"Sample image 3",title:"Card Title Three",body:"This is the body content for the third card. Ut enim ad minim veniam, quis nostrud exercitation.",tags:[{color:"gray",label:"tag1",href:"#"},{color:"gray",label:"tag2",href:"#"}]}],Y=[{type:"event",image:e,imageAltText:"Event image 1",title:"Innovation Summit 2024 with a very long title that should wrap to multiple lines and test the card height consistency across cards in the same row",body:"Join us for a day of innovation and collaboration with industry leaders. Also a long body text to test height consistency across cards in the same row.",eventFormat:"stack",eventTime:"Wed, March 15, 2024<br />9:00 a.m - 5:00 p.m.",eventLocation:"Tempe campus",buttons:[{color:"maroon",size:"default",label:"Register",href:"#"}]},{type:"event",image:e,imageAltText:"Event image 2",title:"Research Symposium",body:"Discover cutting-edge research from ASU scholars and students.",eventFormat:"stack",eventTime:"Fri, April 20, 2024<br />10:00 a.m - 2:00 p.m.",eventLocation:"West campus",buttons:[{color:"maroon",size:"default",label:"Learn more",href:"#"}]}],Z=[{type:"story",image:e,imageAltText:"Story image 1",title:"Student Success Story",body:"Read about how our programs are transforming lives and careers.",linkLabel:"Read full story",linkUrl:"#",tags:[{color:"gray",label:"Students",href:"#"},{color:"gray",label:"Success",href:"#"}]},{type:"story",image:e,imageAltText:"Story image 2",title:"Research Breakthrough",body:"ASU researchers make significant advances in renewable energy technology.",linkLabel:"Learn more",linkUrl:"#",tags:[{color:"gray",label:"Research",href:"#"},{color:"gray",label:"Innovation",href:"#"}]},{type:"story",image:e,imageAltText:"Story image 3",title:"Community Impact",body:"How ASU is making a difference in local communities through service.",linkLabel:"Read more",linkUrl:"#",tags:[{color:"gray",label:"Community",href:"#"},{color:"gray",label:"Service",href:"#"}]}],$=[{type:"degree",image:e,imageAltText:"Degree program 1",title:"Computer Science, BS",body:"Learn programming, algorithms, and software development from industry experts."},{type:"degree",image:e,imageAltText:"Degree program 2",title:"Business Administration, MBA",body:"Advance your career with strategic thinking and leadership skills."},{type:"degree",image:e,imageAltText:"Degree program 3",title:"Biomedical Engineering, MS",body:"Innovate at the intersection of medicine and technology."},{type:"degree",image:e,imageAltText:"Degree program 4",title:"Psychology, BA",body:"Understand human behavior and mental processes through scientific inquiry."}],ee=[{type:"image",src:e,alt:"Image card 1",captionTitle:"Image Card One",caption:"This is the body content for the first image card with dropshadow and with cardLink prop provided. Card acts as anchor/link",border:!0,dropShadow:!0,cardLink:"https://example.com",title:"example"},{type:"image",src:e,alt:"Image card 2",captionTitle:"Image Card Two",caption:"This is the body content for the second image card with no border"},{type:"image",src:e,alt:"Image card 3",captionTitle:"Image Card Three",caption:"This is the body content for the third image card with no drop shadow.",border:!0,dropShadow:!1}],ae=[{type:"default",image:e,alt:"Image button card 1",title:"Example",body:"This is the body content for the first card.",buttons:[{color:"gold",size:"default",label:"Explore",ariaLabel:"Explore",href:"#"}]},{type:"default",image:e,alt:"Image button card 2",buttons:[{color:"gold",size:"default",label:"Explore",ariaLabel:"Explore",href:"#"}]}],a=Q=>p.jsx("div",{className:"container",children:p.jsx(G,{...Q})}),r=a.bind({});r.args={cards:X,columns:3};r.storyName="Three cards example";r.parameters={docs:{description:{story:`
Example with three cards that will wrap naturally based on container width.

\`\`\`jsx
<CardArrangement
  cards={cards}
/>
\`\`\`
      `}}};const t=a.bind({});t.args={cards:Y,columns:2};t.storyName="Two cards example";t.parameters={docs:{description:{story:`
Example with two event cards that will wrap naturally.

\`\`\`jsx
<CardArrangement
  cards={eventCards}
/>
\`\`\`
      `}}};const o=a.bind({});o.args={cards:$,columns:4};o.storyName="Four cards example";o.parameters={docs:{description:{story:`
Example with four degree cards that will wrap based on available space.

\`\`\`jsx
<CardArrangement
  cards={degreeCards}
/>
\`\`\`
      `}}};const i=a.bind({});i.args={cards:[{type:"default",title:"Horizontal",body:"Body",horizontal:!0},{type:"default",title:"Horizontal",body:"Body",horizontal:!0}]};i.storyName="Horizontal cards example";i.parameters={docs:{description:{story:`
Example with horizontal cards. Each card is set to horizontal layout.

\`\`\`jsx
<CardArrangement
  cards={horizontalCards}
/>
\`\`\`
      `}}};const n=a.bind({});n.args={cards:Z,columns:1};n.storyName="Multiple story cards";n.parameters={docs:{description:{story:`
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
      `}}};const re=[{imageSize:"large",image:e,imageAlt:"Ranking image 1",heading:"Top Research University",body:"ASU ranks among the top research universities in innovation and impact.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 2",heading:"Innovation Leader",body:"Recognized as the most innovative school in the nation for multiple consecutive years.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 3",heading:"Sustainability Excellence",body:"Leading the way in sustainable practices and environmental initiatives.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 1",heading:"Top Research University",body:"ASU ranks among the top research universities in innovation and impact.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 2",heading:"Innovation Leader",body:"Recognized as the most innovative school in the nation for multiple consecutive years.",readMoreLink:"#"},{imageSize:"large",image:e,imageAlt:"Ranking image 3",heading:"Sustainability Excellence",body:"Leading the way in sustainable practices and environmental initiatives.",readMoreLink:"#"}],te=[{imageSize:"small",image:e,imageAlt:"Ranking image 1",heading:"Best Value University",body:"Delivering exceptional education at an affordable cost.",citation:"U.S. News & World Report 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 2",heading:"Top Online Programs",body:"Ranked #1 for online bachelor's programs nationwide.",citation:"U.S. News & World Report 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 3",heading:"Research Impact",body:"Highest research activity classification from Carnegie.",citation:"Carnegie Classification 2024"},{imageSize:"small",image:e,imageAlt:"Ranking image 4",heading:"Graduate Employability",body:"Top 10 in the U.S. for graduate employment outcomes.",citation:"QS World Rankings 2024"}],c=a.bind({});c.args={cards:re,cardType:"ranking",columns:4};c.storyName="Ranking cards (large)";c.parameters={docs:{description:{story:`
Example with large ranking cards that display an expandable info layer overlay.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsLarge}
  cardType="ranking"
/>
\`\`\`
      `}}};const l=a.bind({});l.args={cards:te,cardType:"ranking",columns:2};l.storyName="Ranking cards (small)";l.parameters={docs:{description:{story:`
Example with small ranking cards that include citations and compact layout.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsSmall}
  cardType="ranking"
/>
\`\`\`
      `}}};const m=a.bind({});m.args={cards:ee,cardType:"image",columns:3};m.storyName="Image cards";m.parameters={docs:{description:{story:`
Example with image cards that display a visual representation along with heading and body text.

\`\`\`jsx
<CardArrangement
  cards={imageCards}
  cardType="image"
/>
\`\`\`
      `}}};const g=a.bind({});g.args={cards:ae,cardType:"default",columns:2};g.storyName="Cards with image and buttons";g.parameters={docs:{description:{story:`
Example with cards that display a visual representation along with a button.

\`\`\`jsx
<CardArrangement
  cards={imageButtonCards}
  cardType="image"
/>
\`\`\`
      `}}};var h,u,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,f,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,w,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var A,T,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,R,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(z=(R=n.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var E,L,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var I,U,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var M,B,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var W,F,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(H=(F=l.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var P,O,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,q,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => <div className="container">
    <CardArrangement {...args} />
  </div>`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const ce=["ThreeColumns","TwoColumns","FourColumns","HorizontalCards","SingleColumn","MixedCardTypesNoColProvided","WithoutImages","RankingCardsLarge","RankingCardsSmall","ImageCards","ImageButtonCards"];export{o as FourColumns,i as HorizontalCards,g as ImageButtonCards,m as ImageCards,s as MixedCardTypesNoColProvided,c as RankingCardsLarge,l as RankingCardsSmall,n as SingleColumn,r as ThreeColumns,t as TwoColumns,d as WithoutImages,ce as __namedExportsOrder,de as default};
