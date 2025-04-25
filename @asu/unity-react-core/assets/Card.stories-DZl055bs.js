import{j as e}from"./jsx-runtime-Dmx1myWC.js";import{c}from"./index-DbSsuYgj.js";import"./index-mEo-t6td.js";import{i as m}from"./hero01-CqHeqhEc.js";import{C as u}from"./Card-C36rHjAz.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./index-Cqy-YfF9.js";import"./html-utils-CCLBBnXX.js";import"./googleAnalytics-bhG-ZSut.js";import"./Button-CLsasMTo.js";import"./shared-prop-types-Bjjqh6Mp.js";import"./GaEventWrapper-D-bs3D7C.js";import"./ButtonTag-CHr1BIPW.js";import"./Image-fgy89lDm.js";import"./styled-components.browser.esm-DabYpdjN.js";const ee={title:"Components/Card",component:u,parameters:{docs:{description:{component:`The Card component can be used to generate UDS-compliant default, degree, story, news and event cards.

## Usage

Most props are valid options for all card types, except for the event-specific props.
Card users are responsible to meet all UDS design guidelines with their Cards,
including rules on the use of Call-to-Action buttons and tags.

View component examples and source code below.
        `}}}},o=p=>e.jsx("div",{className:"container",children:e.jsx("div",{className:c("row","row-spaced","pt-2","pb-2"),children:e.jsx("div",{className:c("col","col-12"),children:e.jsx(u,{...p})})})}),R=p=>e.jsx("div",{className:"container",children:e.jsx("div",{className:c("row","row-spaced","pt-2","pb-2"),children:e.jsx("div",{className:c("col","col-12","col-md-12","col-lg-6"),children:e.jsx(u,{...p})})})}),a=o.bind({});a.args={type:"default",horizontal:!1,image:m,imageAltText:"An example image",title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"CTA button"},{color:"gold",size:"small",label:"Link Button",href:"/",target:"_top"}],tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}],showBorders:!0};const t=o.bind({});t.args={...a.args,title:"Default card - borderless",showBorders:!1};t.storyName="Default (borderless)";const d=o.bind({});d.args={type:"default",horizontal:!1,title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"Button text"}],icon:["fas","newspaper"]};const s=o.bind({});s.args={type:"degree",horizontal:!1,image:m,imageAltText:"An example image",title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."};s.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        image=img1
        imageAltText="An example image"
        title="Default title"
        type="degree"
      />`}}};const i=o.bind({});i.args={type:"event",horizontal:!1,image:m,imageAltText:"An example image",title:"Event title Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem ad voluptatem dolore dolores nulla ipsam quo distinctio expedita doloribus nisi similique obcaecati velit illo autem numquam iusto, rem nesciunt repellendus laborum. Rerum quisquam, soluta aspernatur a harum dolor ducimus nulla. Itaque aliquam cum fugiat error esse ipsam rerum consectetur!",cardLink:"#example-link",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",eventFormat:"stack",eventTime:"Wed, November 21st, 2021<br />11:30 a.m - 12:30 p.m.",eventLocation:"Downtown Phoenix campus",buttons:[{color:"maroon",size:"default",label:"CTA button"}]};i.parameters={docs:{description:{story:`
The event props, \`eventLocation\` and \`eventTime\` are allowed to contain basic HTML formatting, primarily \`<br>\` for line breaks.


    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        eventFormat="stack"
        eventLocation="Downtown Phoenix campus"
        eventTime="Wed, November 21st, 2021<br>11:30 a.m - 12:30 p.m."
        image=img1
        imageAltText="An example image"
        title="Event title"
        type="event"
      />`}}};const r=o.bind({});r.args={type:"story",horizontal:!1,image:m,imageAltText:"An example image",title:"Story title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"CTA button",href:"https://google.com",target:"_blank"}],linkLabel:"Default link",linkUrl:"https://google.com",tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}]};r.parameters={docs:{description:{story:`

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
      />`}}};const l=R.bind({});l.args={type:"story",horizontal:!0,image:m,imageAltText:"An example image",title:"Horizontal story",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}]};l.parameters={docs:{description:{story:`

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
      />`}}};const n=o.bind({});n.args={type:"story",horizontal:!1,image:m,imageAltText:"An example image",title:"ASU News Story title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"Read at ASU News"}]};n.parameters={docs:{description:{story:`

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
      />`}}};var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,f,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,N,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var A,L,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(B=(L=s.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var C,k,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var S,z,q;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(q=(z=r.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var D,j,U;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-6")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(U=(j=l.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var E,H,_;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(_=(H=n.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const oe=["Default","DefaultBorderless","Icon","Degree","Event","Story","HorizontalStoryCard","AsuNewsStory"];export{n as AsuNewsStory,a as Default,t as DefaultBorderless,s as Degree,i as Event,l as HorizontalStoryCard,d as Icon,r as Story,oe as __namedExportsOrder,ee as default};
