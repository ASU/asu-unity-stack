import{Y as e}from"./iframe-eq-7wow_.js";import{s as r}from"./stock-video-person-drawing-_VQ0zdLC.js";import"./preload-helper-Dp1pzeXC.js";const v={title:"Atoms/Videos/Templates",args:{content:!1},argTypes:{content:{name:"Content",control:{type:"boolean"}}},parameters:{initFunc:{disable:!1}}},t=({content:a})=>e.jsxs("div",{className:`uds-video-container ${a?"uds-video-with-caption":""}`,children:[e.jsxs("div",{className:"uds-video-player",children:[e.jsxs("video",{caption:"Example video",children:[e.jsx("source",{src:r}),e.jsx("track",{src:"path/to/caption.vtt",kind:"captions",srclang:"en",label:"english_captions"})]}),e.jsx("div",{className:"uds-video-overlay",children:e.jsxs("button",{type:"button",className:"btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play","data-ga":"play button","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"Example video",children:[e.jsx("i",{className:"fa fa-play"}),e.jsx("span",{className:"visually-hidden",children:"Play"})]})})]}),a&&e.jsx("figure",{children:e.jsx("figcaption",{children:"Photo by Dent/ASU Now"})})]}),i=({content:a})=>e.jsxs("div",{className:`uds-video-container ${a?"uds-video-with-caption":""}`,children:[e.jsx("div",{className:"uds-video-player youtube-video",children:e.jsx("iframe",{title:"Example video",src:"https://www.youtube.com/embed/YW2p0ctzK9c"})}),a&&e.jsx("figure",{children:e.jsx("figcaption",{children:"Photo by Dent/ASU Now"})})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"YoutubeVideo"};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  content
}) => <div className={\`uds-video-container \${content ? "uds-video-with-caption" : ""}\`}>
    <div className="uds-video-player">
      <video caption="Example video">
        <source src={stockVideo} />
        <track src="path/to/caption.vtt" kind="captions" srclang="en" label="english_captions" />
      </video>
      <div className="uds-video-overlay">
        <button type="button" className="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play" data-ga="play button" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="Example video">
          <i className="fa fa-play"></i>
          <span className="visually-hidden">Play</span>
        </button>
      </div>
    </div>
    {content && <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>}
  </div>`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
  content
}) => <div className={\`uds-video-container \${content ? "uds-video-with-caption" : ""}\`}>
    <div className="uds-video-player youtube-video">
      <iframe title="Example video" src="https://www.youtube.com/embed/YW2p0ctzK9c"></iframe>
    </div>
    {content && <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>}
  </div>`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const g=["Default","YoutubeVideo"];export{t as Default,i as YoutubeVideo,g as __namedExportsOrder,v as default};
