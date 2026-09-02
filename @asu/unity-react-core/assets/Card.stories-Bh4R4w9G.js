import{C as u,a8 as e,a1 as p}from"./iframe-B2kAdwp0.js";import{i as F}from"./index-BoQzFtyr.js";import"./preload-helper-Dp1pzeXC.js";import"./img01-D3m8CBfF.js";const o=F(),K={title:"Components/Card",component:u,parameters:{docs:{description:{component:`The Card component can be used to generate UDS-compliant default, degree, story, news and event cards.

## Usage

Most props are valid options for all card types, except for the event-specific props.
Card users are responsible to meet all UDS design guidelines with their Cards,
including rules on the use of Call-to-Action buttons and tags.

View component examples and source code below.
        `}}}},a=g=>e.jsx("div",{className:"container",children:e.jsx("div",{className:p("row","row-spaced","pt-2","pb-2"),children:e.jsx("div",{className:p("col","col-12"),children:e.jsx(u,{...g})})})}),P=g=>e.jsx("div",{className:"container",children:e.jsx("div",{className:p("row","row-spaced","pt-2","pb-2"),children:e.jsx("div",{className:p("col","col-12","col-md-12","col-lg-6"),children:e.jsx(u,{...g})})})}),s=a.bind({});s.args={type:"default",horizontal:!1,image:o,imageAltText:"An example image",title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"CTA button"},{color:"gold",size:"small",label:"Link Button",href:"/",target:"_top"}],tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}],showBorders:!0};const t=a.bind({});t.args={...s.args,title:"Default card - borderless",showBorders:!1};t.storyName="Default (borderless)";const c=a.bind({});c.args={type:"default",horizontal:!1,title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"Button text"}],icon:["fas","newspaper"]};const r=a.bind({});r.args={type:"degree",horizontal:!1,image:o,imageAltText:"An example image",title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."};r.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        image=img1
        imageAltText="An example image"
        title="Default title"
        type="degree"
      />`}}};const i=a.bind({});i.args={type:"event",horizontal:!1,image:o,imageAltText:"An example image",title:"Sun Devil Women's Tennis: NCAA Singles and Doubles Championships",cardLink:"#example-link",eventFormat:"stack",eventTime:"Wed, November 21st, 2021<br />11:30 a.m.–12:30 p.m. (MST)",eventLocation:"Downtown Phoenix campus"};i.parameters={docs:{description:{story:`
Event cards use a single arrow link at the bottom instead of CTA buttons.
The \`cardLink\` prop provides the destination URL.

The event props \`eventLocation\` and \`eventTime\` support basic HTML like \`<br>\`.

    <Card
        cardLink="#example-link"
        eventFormat="stack"
        eventLocation="Downtown Phoenix campus"
        eventTime="Wed, November 21st, 2021<br>11:30 a.m.–12:30 p.m. (MST)"
        image={img1}
        imageAltText="An example image"
        title="Sun Devil Women's Tennis: NCAA Singles and Doubles Championships"
        type="event"
      />`}}};const l=a.bind({});l.args={type:"news",horizontal:!1,image:o,imageAltText:"An example image",title:"ASU researchers discover DNA-based electronic storage system",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",cardLink:"#example-link"};l.parameters={docs:{description:{story:`
News cards use a single arrow link at the bottom instead of CTA buttons.
The \`cardLink\` prop provides the destination URL.

    <Card
        body="At Arizona State University's Biodesign Institute..."
        cardLink="#example-link"
        image={img1}
        imageAltText="An example image"
        title="ASU researchers discover DNA-based electronic storage system"
        type="news"
      />`}}};const n=a.bind({});n.args={type:"story",horizontal:!1,image:o,imageAltText:"An example image",title:"Story title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"CTA button",href:"https://google.com",target:"_blank"}],linkLabel:"Default link",linkUrl:"https://google.com",tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}]};n.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        image=img1
        imageAltText="An example image"
        linkLabel="Default link"
        linkUrl="http://google.com"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Story title"
        type="story"
      />`}}};const d=P.bind({});d.args={type:"story",horizontal:!0,image:o,imageAltText:"An example image",title:"Horizontal story",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}]};d.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        horizontal
        image=img1
        imageAltText="An example image"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Horizontal story"
        type="story"
      />`}}};const m=a.bind({});m.args={type:"story",horizontal:!1,image:o,imageAltText:"An example image",title:"ASU News Story title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"Read at ASU News"}]};m.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'Read at ASU News',
            size: 'default'
          }
        ]}
        image=img1
        imageAltText="An example image"
        title="ASU News Story title"
        type="story"
      />`}}};var b,y,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,N;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(N=(x=t.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var f,w,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,L,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(C=(L=r.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var S,T,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var D,z,U;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(U=(z=l.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var q,j,H;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(H=(j=n.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var E,R,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-6")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var M,W,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const Q=["Default","DefaultBorderless","Icon","Degree","Event","News","Story","HorizontalStoryCard","AsuNewsStory"];export{m as AsuNewsStory,s as Default,t as DefaultBorderless,r as Degree,i as Event,d as HorizontalStoryCard,c as Icon,l as News,n as Story,Q as __namedExportsOrder,K as default};
