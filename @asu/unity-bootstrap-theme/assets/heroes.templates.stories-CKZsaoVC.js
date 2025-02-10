import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{f as z}from"./Layout-Bte-rkYZ.js";import{c as B}from"./cards-image-BPXBy_xd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const L={title:{name:"Title",control:{type:"text"}},titleColors:{name:"Title Colors",options:["Black Text","White Text","Black Background","Gold Background"],mapping:{"Black Text":"","White Text":"text-white","Black Background":"text-white highlight-black","Gold Background":"highlight-gold"},control:{type:"radio"}}},q={subTitle:{name:"Sub Title",control:{type:"text"}},subTitleColors:{name:"Sub Title Colors",options:["Black Text","White Text","Black Background","Gold Background"],mapping:{"Black Text":"","White Text":"text-white","Black Background":"text-white highlight-black","Gold Background":"highlight-gold"},control:{type:"radio"}}},o={size:{name:"Size",options:["Small","Medium","Large"],mapping:{Small:"uds-hero-sm",Medium:"uds-hero-md",Large:"uds-hero-lg"},control:{type:"radio"}},...L,...q},l={title:"Default Title",titleColors:"White Text",subTitle:"",subTitleColors:"White Text"},P={size:{name:"Size",options:["Medium","Large"],mapping:{Medium:"uds-story-hero",Large:"uds-story-hero uds-story-hero-lg entry-header"},control:{type:"radio"}}},W={title:"Molecules/Heroes/Templates",decorators:[z]},c=({size:s,title:d,titleColors:m,subTitle:g,subTitleColors:H})=>a.jsxs("div",{className:`${s} has-btn-row`,children:[a.jsx("div",{className:"hero-overlay"}),a.jsx("img",{className:"hero",src:B,alt:"Sample placeholder image.",width:"2560",height:"512",loading:"lazy",decoding:"async",fetchpriority:"high"}),g?a.jsxs("header",{children:[a.jsx("p",{className:"hero-subtitle",children:a.jsx("span",{className:H,children:g})}),a.jsx("h1",{children:a.jsx("span",{className:m,children:d})})]}):a.jsx("h1",{children:a.jsx("span",{className:m,children:d})}),a.jsx("div",{className:"content",children:a.jsx("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo."})}),a.jsxs("div",{className:"btn-row",children:[a.jsx("a",{href:"#",className:"btn btn-default btn-gold","data-ga":"more quotes","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address",children:"Call to action button"}),a.jsx("a",{href:"#",className:"btn btn-default btn-maroon","data-ga":"more quotes","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address",children:"Second Call to action button"})]})]}),e=c.bind({});e.args={size:"Small",...l};e.argTypes=o;const t=c.bind({});t.args={size:"Medium",...l};t.argTypes=o;const n=c.bind({});n.args={size:"Large",...l};n.argTypes=o;const A=({size:s})=>a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:s,children:[a.jsx("img",{className:"hero",src:B,alt:"Sample placeholder image.",width:"2560",height:"512",loading:"lazy",decoding:"async",fetchpriority:"high"}),a.jsxs("div",{className:"content",children:[a.jsx("nav",{"aria-label":"breadcrumbs",children:a.jsxs("ol",{className:"breadcrumb",children:[a.jsx("li",{className:"breadcrumb-item",children:a.jsx("a",{href:"#",children:"Home"})}),a.jsx("li",{className:"breadcrumb-item",children:a.jsx("a",{href:"#",children:"Second Nav Item"})}),a.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:a.jsx("a",{href:"#",children:"Current Page"})})]})}),a.jsx("h1",{className:"article",children:"The answer to the ultimate question of life, the universe, and everything"})]})]}),a.jsx("div",{className:"container-xl",children:a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-lg-10 offset-lg-1",children:a.jsxs("article",{children:[a.jsx("p",{children:"Cuba Poland worldwide hotel South-America flexibility Amsterdam currency. Expedia Moscow St. Petersburg Tripit. Lonely planet train airBnB on a shoestring Amsterdam South-America. Hotspots flight active lifestyle France activities relaxation car rental New York City discount. Maps Australia Tripit translator St. Petersburg Russia bus Hungary. Package horse riding itinerary foreign flight last minute travel housing euro."}),a.jsx("p",{children:"Lodge tent rural. Transit relaxation Poland Asia airmiles hotel deal things to do Cuba airBnB diary animals package. Rome bunkbeds itinerary Pacific. Hitchhiking ticket Pacific France national bunkbeds St. Petersburg Hungary. Translator recommendations booking discover expedia city trip diary motel chartering guest travel. Unique experiences lonely planet guest nighttrain couchsurfing horse riding flight China Germany last minute overnight."}),a.jsx("p",{children:"Stay Pacific uncharted relaxation transit tourist attractions insurance tent lifestyle booking train hotel. Itinerary exchange rate Budapest last minute hotel translation. Earth Cuba booking spa place to stay adventure group discount unique experiences caravan Moscow gateway package currency kayak. Lonely planet housing Barcelona. Australia private jet city trip taxi translator cab active lifestyle airBnB explore South-America caravan tour operator."})]})})})})]}),i=A.bind({});i.args={size:"Medium"};i.argTypes=P;const r=A.bind({});r.args={size:"Large"};r.argTypes=P;var u,h,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`({
  size,
  title,
  titleColors,
  subTitle,
  subTitleColors
}) => <div className={\`\${size} has-btn-row\`}>
    <div className="hero-overlay"></div>
    <img className="hero" src={cardsImage} alt="Sample placeholder image." width="2560" height="512" loading="lazy" decoding="async" fetchpriority="high" />
    {subTitle ? <header>
      <p className="hero-subtitle">
        <span className={subTitleColors}>
          {subTitle}
        </span>
      </p>
      <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>
    </header> : <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>}
    <div className="content">
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div className="btn-row">
      <a href="#" className="btn btn-default btn-gold" data-ga="more quotes" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address">
        Call to action button
      </a>
      <a href="#" className="btn btn-default btn-maroon" data-ga="more quotes" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address">
        Second Call to action button
      </a>
    </div>
  </div>`,...(p=(h=e.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  size,
  title,
  titleColors,
  subTitle,
  subTitleColors
}) => <div className={\`\${size} has-btn-row\`}>
    <div className="hero-overlay"></div>
    <img className="hero" src={cardsImage} alt="Sample placeholder image." width="2560" height="512" loading="lazy" decoding="async" fetchpriority="high" />
    {subTitle ? <header>
      <p className="hero-subtitle">
        <span className={subTitleColors}>
          {subTitle}
        </span>
      </p>
      <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>
    </header> : <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>}
    <div className="content">
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div className="btn-row">
      <a href="#" className="btn btn-default btn-gold" data-ga="more quotes" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address">
        Call to action button
      </a>
      <a href="#" className="btn btn-default btn-maroon" data-ga="more quotes" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address">
        Second Call to action button
      </a>
    </div>
  </div>`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,k,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  size,
  title,
  titleColors,
  subTitle,
  subTitleColors
}) => <div className={\`\${size} has-btn-row\`}>
    <div className="hero-overlay"></div>
    <img className="hero" src={cardsImage} alt="Sample placeholder image." width="2560" height="512" loading="lazy" decoding="async" fetchpriority="high" />
    {subTitle ? <header>
      <p className="hero-subtitle">
        <span className={subTitleColors}>
          {subTitle}
        </span>
      </p>
      <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>
    </header> : <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>}
    <div className="content">
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div className="btn-row">
      <a href="#" className="btn btn-default btn-gold" data-ga="more quotes" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address">
        Call to action button
      </a>
      <a href="#" className="btn btn-default btn-maroon" data-ga="more quotes" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address">
        Second Call to action button
      </a>
    </div>
  </div>`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var N,T,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`({
  size
}) => <>
  <section className={size}>
    <img className="hero" src={cardsImage} alt="Sample placeholder image." width="2560" height="512" loading="lazy" decoding="async" fetchpriority="high" />
    <div className="content">
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Second Nav Item</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">Current Page</a>
          </li>
        </ol>
      </nav>
      <h1 className="article">
        The answer to the ultimate question of life, the universe, and
        everything
      </h1>
    </div>
  </section>
  <div className="container-xl">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <article>
          <p>
            Cuba Poland worldwide hotel South-America flexibility Amsterdam
            currency. Expedia Moscow St. Petersburg Tripit. Lonely planet
            train airBnB on a shoestring Amsterdam South-America. Hotspots
            flight active lifestyle France activities relaxation car rental
            New York City discount. Maps Australia Tripit translator St.
            Petersburg Russia bus Hungary. Package horse riding itinerary
            foreign flight last minute travel housing euro.
          </p>
          <p>
            Lodge tent rural. Transit relaxation Poland Asia airmiles hotel
            deal things to do Cuba airBnB diary animals package. Rome bunkbeds
            itinerary Pacific. Hitchhiking ticket Pacific France national
            bunkbeds St. Petersburg Hungary. Translator recommendations
            booking discover expedia city trip diary motel chartering guest
            travel. Unique experiences lonely planet guest nighttrain
            couchsurfing horse riding flight China Germany last minute
            overnight.
          </p>
          <p>
            Stay Pacific uncharted relaxation transit tourist attractions
            insurance tent lifestyle booking train hotel. Itinerary exchange
            rate Budapest last minute hotel translation. Earth Cuba booking
            spa place to stay adventure group discount unique experiences
            caravan Moscow gateway package currency kayak. Lonely planet
            housing Barcelona. Australia private jet city trip taxi translator
            cab active lifestyle airBnB explore South-America caravan tour
            operator.
          </p>
        </article>
      </div>
    </div>
  </div>
</>`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,C,j;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`({
  size
}) => <>
  <section className={size}>
    <img className="hero" src={cardsImage} alt="Sample placeholder image." width="2560" height="512" loading="lazy" decoding="async" fetchpriority="high" />
    <div className="content">
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Second Nav Item</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">Current Page</a>
          </li>
        </ol>
      </nav>
      <h1 className="article">
        The answer to the ultimate question of life, the universe, and
        everything
      </h1>
    </div>
  </section>
  <div className="container-xl">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <article>
          <p>
            Cuba Poland worldwide hotel South-America flexibility Amsterdam
            currency. Expedia Moscow St. Petersburg Tripit. Lonely planet
            train airBnB on a shoestring Amsterdam South-America. Hotspots
            flight active lifestyle France activities relaxation car rental
            New York City discount. Maps Australia Tripit translator St.
            Petersburg Russia bus Hungary. Package horse riding itinerary
            foreign flight last minute travel housing euro.
          </p>
          <p>
            Lodge tent rural. Transit relaxation Poland Asia airmiles hotel
            deal things to do Cuba airBnB diary animals package. Rome bunkbeds
            itinerary Pacific. Hitchhiking ticket Pacific France national
            bunkbeds St. Petersburg Hungary. Translator recommendations
            booking discover expedia city trip diary motel chartering guest
            travel. Unique experiences lonely planet guest nighttrain
            couchsurfing horse riding flight China Germany last minute
            overnight.
          </p>
          <p>
            Stay Pacific uncharted relaxation transit tourist attractions
            insurance tent lifestyle booking train hotel. Itinerary exchange
            rate Budapest last minute hotel translation. Earth Cuba booking
            spa place to stay adventure group discount unique experiences
            caravan Moscow gateway package currency kayak. Lonely planet
            housing Barcelona. Australia private jet city trip taxi translator
            cab active lifestyle airBnB explore South-America caravan tour
            operator.
          </p>
        </article>
      </div>
    </div>
  </div>
</>`,...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const _=["HeroSmall","HeroMedium","HeroLarge","StoryHeroMedium","StoryHeroLarge"];export{n as HeroLarge,t as HeroMedium,e as HeroSmall,r as StoryHeroLarge,i as StoryHeroMedium,_ as __namedExportsOrder,W as default};
