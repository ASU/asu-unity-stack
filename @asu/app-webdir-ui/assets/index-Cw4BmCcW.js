import{j as e}from"./iframe-KcTMqyry.js";import{q as c,P as s}from"./styled-components.browser.esm-CHwarA3J.js";import{Q as d}from"./index-BiqBGav8.js";const l=c.div`
  padding: 4px;
  display: grid;
  grid-template-columns: 700px 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 126px;

  .message-content {
    max-width: 700px;
    h2 {
      margin-bottom: 32px;
    }
  }
  .assistance-area {
    margin-top: 16px;
    .intro-highlight {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 48px;
  }
`,t=({titleText:r,descText:a,contactText:n,signInLink:i})=>{const o=()=>i?e.jsxs("p",{children:[a,e.jsx("a",{href:i,children:"logging into the site"}),"."]}):e.jsx("p",{children:a});return e.jsxs(l,{children:[e.jsxs("div",{className:"message-content",children:[e.jsx("h2",{children:r}),e.jsxs("div",{children:[o(),e.jsxs("div",{className:"assistance-area",children:[e.jsx("span",{className:"intro-highlight",children:"Need assistance?"})," ",e.jsx("br",{}),e.jsx("a",{href:"https://www.asu.edu/about/contact",children:n})]})]})]}),e.jsx(d,{})]})};t.propTypes={titleText:s.string,descText:s.string,contactText:s.string,signInLink:s.string};t.__docgenInfo={description:"",methods:[],displayName:"PreSearchDynamicMsg",props:{titleText:{description:"",type:{name:"string"},required:!1},descText:{description:"",type:{name:"string"},required:!1},contactText:{description:"",type:{name:"string"},required:!1},signInLink:{description:"",type:{name:"string"},required:!1}}};const x={web_dir_faculty_staff:e.jsx(t,{titleText:"Welcome to the ASU Faculty and Staff Directory",descText:"Our directory is integrated into the ASU Search engine experience. Find current faculty and staff profiles by using the search field above.",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week."}),web_dir_students:e.jsx(t,{titleText:"Welcome to the ASU Student Directory",descText:"Students must opt-in to make their profile publicly available. ASU affiliates with an ASURITE ID can view the remaining student profiles that do not have directory holds on them by ",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week.",signInLink:"https://search.asu.edu/caslogin?returnto=/"}),all:e.jsx(t,{titleText:"Welcome to ASU search",descText:"Find the information you're looking for from anywhere on asu.edu.",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week."}),"web-sites":e.jsx(t,{titleText:"Welcome to ASU search",descText:"Find the information you're looking for from anywhere on asu.edu.",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week."})};export{x as s};
