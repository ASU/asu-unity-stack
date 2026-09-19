import{j as a,u as y}from"./iframe-C5xvXyGb.js";import{g as k,P as i,t as w}from"./styled-components.browser.esm-CKA1NN0Y.js";const _=""+new URL("anon-CXWQnlvV.png",import.meta.url).href,x=k.div`
  padding: 4px;
  .person-name {
    display: block;
    font-weight: bold;
  }
  ul.person-contact-info [class*="fa-"] {
    display: none;
  }
  &.uds-grid-profile {
    ul.person-contact-info [class*="fa-"] {
      display: inline;
      color: #8c1d40;
      padding-right: 8px;
    }
  }
`,T={id:i.string,imgURL:i.string,anonImgURL:i.string,name:i.string,titles:i.arrayOf(i.string),email:i.string,telephone:i.string,addressLine1:i.string,addressLine2:i.string,description:i.string,facebookLink:i.string,linkedinLink:i.string,twitterLink:i.string,website:i.string,size:i.string,fill:i.bool,anonymized:i.bool,GASource:i.string,profileURL:i.string};i.shape({acres:i.shape({raw:i.number}),date_established:i.shape({raw:i.string}),description:i.shape({raw:i.string}),id:i.shape({raw:i.string}),location:i.shape({raw:i.string}),nps_link:i.shape({raw:i.string}),square_km:i.shape({raw:i.number}),states:i.shape({raw:i.arrayOf(i.string)}),title:i.shape({raw:i.string}),visitors:i.shape({raw:i.number}),world_heritage_site:i.shape({raw:i.string}),_meta:i.shape({raw:i.string})});const u=({...e})=>{var f;const n=e.facebookLink||e.linkedinLink||e.twitterLink||e.website,d=n||e.shortBio,r=e.matchedAffiliationTitle?`${e.matchedAffiliationTitle}`:"",l=e.matchedAffiliationDept&&e.size!=="micro"?e.matchedAffiliationDept:"",c=m=>{e.anonImgURL&&m.target.src!==e.anonImgURL?m.target.src=e.anonImgURL:m.target.style.display="none"};let s=e.telephone;if(s){const m=s.slice(0,3),b=s.slice(3).replace("/","");s=`${m}-${b}`}const t="ASU Knowledge Enterprise",o=()=>{w({event:"link",action:"click",name:"onclick",type:"internal link",section:e.name,text:t,component:e.GASource})};return a.jsxs(x,{className:`uds-person-profile ${e.size} ${e.grid?"uds-grid-profile":""} ${e.fill?"fill":""}`,children:[a.jsx("a",{href:e.profileURL,className:"profile-img-container",children:a.jsx("div",{className:"profile-img-placeholder",children:a.jsx("img",{className:"profile-img",src:e.imgURL||e.anonImgURL,alt:e.name,onError:c})})}),a.jsxs("div",{className:"person",children:[e.profileURL&&a.jsx("a",{className:"person-name",href:e.profileURL,children:e.name}),!e.profileURL&&a.jsx("h3",{className:"person-name",children:e.name}),a.jsxs("div",{className:"person-profession",children:[a.jsx("p",{className:"person-profession-title",children:a.jsx("strong",{children:r})}),l&&a.jsx("span",{className:"dept",children:l})]}),e.size!=="micro"&&a.jsxs("ul",{className:"person-contact-info",children:[e.email&&a.jsxs("li",{children:[a.jsx("span",{className:"fas fa-envelope"}),a.jsx("a",{onClick:()=>o(e.email),href:`mailto:${e.email.toLowerCase()}`,"aria-label":`Mail to :${e.email}`,children:e.email})]}),s&&a.jsxs("li",{children:[a.jsx("span",{className:"fas fa-phone"}),a.jsx("a",{onClick:()=>o(),href:`tel:${s}`,"aria-label":`User phone number: ${s}`,children:s})]}),(e.addressLine1||e.addressLine2)&&a.jsx("li",{children:a.jsx("div",{"aria-label":"See user address",children:a.jsxs("address",{className:"person-address",children:[e.addressLine1&&a.jsx("span",{className:"person-street",children:e.addressLine1}),e.addressLine2&&a.jsx("span",{className:"person-city",children:e.addressLine2})]})})})]}),["default","large"].includes(e.size)&&d&&a.jsxs("div",{className:"description-and-social",children:[a.jsx("p",{className:"person-description",children:(f=e.shortBio)==null?void 0:f.slice(0,250)}),n&&a.jsxs("ul",{className:"person-social-medias",children:[e.facebookLink&&a.jsx("li",{children:a.jsx("a",{onClick:()=>o(),href:e.facebookLink,"aria-label":"Go to user Facebook profile",children:a.jsx("span",{className:"fab fa-facebook-square",title:"Facebook Link"})})}),e.linkedinLink&&a.jsx("li",{children:a.jsx("a",{onClick:()=>o(),href:e.linkedinLink,"aria-label":"Go to user Linkedin profile",children:a.jsx("span",{className:"fab fa-linkedin",title:"LinkedIn Link"})})}),e.twitterLink&&a.jsx("li",{children:a.jsx("a",{onClick:()=>o(),href:e.twitterLink,"aria-label":"Go to user Twitter profile",children:a.jsx("span",{className:"fab fa-square-x-twitter",title:"Twitter Link"})})}),e.website&&a.jsx("li",{children:a.jsx("a",{onClick:()=>o(),href:e.website,"aria-label":"Go to user Website",children:a.jsx("span",{className:"fa fa-globe",title:"User Website Link"})})})]})]}),e.size==="small"&&a.jsx("a",{className:"btn btn-maroon btn-md",href:e.profileURL,role:"button",children:"View Profile"}),e.size==="micro"&&e.matchedAffiliationDept&&a.jsx("div",{children:e.matchedAffiliationDept})]})]})};u.propTypes=T;u.__docgenInfo={description:`React component for displaying a user's profile card.

@param {Object} props - The props for configuring the profile card.
@param {string} props.name - The name of the user.
@param {string} [props.matchedAffiliationTitle] - The matched affiliation title of the user.
@param {string} [props.matchedAffiliationDept] - The matched affiliation department of the user.
@param {string} [props.imgURL] - The URL of the user's profile image.
@param {string} [props.anonImgURL] - Fallback placeholder image URL used when \`imgURL\` is empty or fails to load.
@param {string} [props.profileURL] - The URL of the user's profile page.
@param {string} [props.email] - The email address of the user.
@param {string} [props.telephone] - The telephone number of the user.
@param {string} [props.addressLine1] - The first line of the user's address.
@param {string} [props.addressLine2] - The second line of the user's address.
@param {string} [props.shortBio] - A short biography of the user.
@param {string} [props.facebookLink] - The Facebook profile link of the user.
@param {string} [props.linkedinLink] - The LinkedIn profile link of the user.
@param {string} [props.twitterLink] - The Twitter profile link of the user.
@param {string} [props.website] - The user's website link.
@param {string} [props.size="default"] - The size of the profile card (e.g., "default", "large", "small", "micro").
@param {boolean} [props.fill=false] - Whether to fill in missing data in the card.
@param {function} [props.logClick] - A function to log clicks on profile card elements.
@param {string} [props.GASource] - The Google Analytics source for tracking events.
@returns {JSX.Element} The ProfileCard component.`,methods:[],displayName:"ProfileCard",props:{id:{description:"",type:{name:"string"},required:!1},imgURL:{description:"",type:{name:"string"},required:!1},anonImgURL:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},titles:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},email:{description:"",type:{name:"string"},required:!1},telephone:{description:"",type:{name:"string"},required:!1},addressLine1:{description:"",type:{name:"string"},required:!1},addressLine2:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},facebookLink:{description:"",type:{name:"string"},required:!1},linkedinLink:{description:"",type:{name:"string"},required:!1},twitterLink:{description:"",type:{name:"string"},required:!1},website:{description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"string"},required:!1},fill:{description:"",type:{name:"bool"},required:!1},anonymized:{description:"",type:{name:"bool"},required:!1},GASource:{description:"",type:{name:"string"},required:!1},profileURL:{description:"",type:{name:"string"},required:!1}}};const j=k.div`
  padding: 4px;
  max-width: 700px;
  &.fill {
    background-color: #fafafa;
    border: 1px solid #d0d0d0;
    padding: 32px;
  }
  .cookie-trail {
    color: #747474;
  }
  a {
    margin: 8px 0 16px 0;
    font-size: 24px;
    color: #8c1d40 !important;
    text-decoration: underline !important;
  }
  a:hover {
    cursor: pointer;
  }
`,R={id:i.string,name:i.string,area:i.string,description:i.string,cookieTrail:i.arrayOf(i.string),link:i.string,fill:i.bool,GASource:i.string},h=({...e})=>{const[n,,]=y();function d(){const c=n.get("q"),s=n.get("search-tabs");let t;e.fill?t=["promoted-result","all-asu-search"]:s==="all"&&!n.get("url_host")?t=["all-asu-search"]:s==="web_sites"?t=["local-search",n.get("url_host")]:s==="all"&&n.get("url_host")&&(t=["all-asu-search",n.get("url_host")]),e.localSection===!0?t.push("local-results"):e.localSection===!1&&t.push("all-asu-results");try{e.logClick(c,e.id,e.requestId,t,e)}catch(o){console.error(o)}}function r(){w({event:"link",action:"click",name:"onclick",type:"internal link",section:e.GASource,text:`${e.name} | ${e.area}`})}const l=e.description.length>150?`${e.description.slice(0,150)}...`:e.description;return a.jsx(j,{className:`uds-results-card ${e.fill?"fill":""}`,children:a.jsxs("div",{children:[a.jsx("a",{onClick:()=>{d(),r()},href:e.link,children:`${e.name} | ${e.area}`}),e.cookieTrail.filter(c=>c).length?a.jsx("div",{className:"cookie-trail",children:e.cookieTrail.join(" › ")}):null,a.jsx("div",{className:"description",children:l})]})})};h.propTypes=R;h.__docgenInfo={description:`React component for displaying a search result card.

@param {Object} props - The props for configuring the result card.
@param {string} props.id - The ID of the result.
@param {string} props.name - The name of the result.
@param {string} props.area - The area of the result.
@param {string} props.description - The description of the result.
@param {string[]} props.cookieTrail - An array representing the cookie trail of the result.
@param {string} props.link - The link associated with the result.
@param {boolean} [props.fill=false] - Whether to fill in missing data in the card.
@param {function} props.logClick - A function to log clicks on result card elements.
@param {string} props.GASource - The Google Analytics source for tracking events.
@param {string} props.requestId - The request ID associated with the query.
@param {boolean|null} [props.localSection=null] - The local section information.
@returns {JSX.Element} The ResultCard component.`,methods:[],displayName:"ResultCard",props:{id:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},area:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},cookieTrail:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},link:{description:"",type:{name:"string"},required:!1},fill:{description:"",type:{name:"bool"},required:!1},GASource:{description:"",type:{name:"string"},required:!1}}};let p=_;const g=e=>{const n=e;return e.asurite_id===null&&delete n.asurite_id,e.display_name===null&&delete n.display_name,{...{id:{raw:""},campus_address:{raw:""},city:{raw:""},state:{raw:""},asurite_id:{raw:""},working_title:{raw:[""]},titles:{raw:null},eid:{raw:""},photo_url:{raw:""},display_name:{raw:""},display_last_name:{raw:""},email_address:{raw:""},phone:{raw:""},address_line1:{raw:""},address_line2:{raw:""},bio:{raw:""},short_bio:{raw:""},url_path_dir1:{raw:""},url_path_dir2:{raw:""},facebook:{raw:null},linkedin:{raw:null},twitter:{raw:null},url_host:{raw:""},body_content:{raw:""},url:{raw:""},primary_search_department_affiliation:{raw:[""]},website:{raw:""}},...n}},A=e=>Array.isArray(e.title)&&e.title[0]&&e.dept_name?{matchedAffiliationTitle:e.title[0],matchedAffiliationDept:e.dept_name}:{matchedAffiliationTitle:e.title,matchedAffiliationDept:e.dept_name},L=e=>{if(!e)return"";const n={SIZE:"size",BREAK:"break"},d={MEDIUM:"medium"},r=()=>{const c=Date.now(),s=Math.floor(c/1e3);return(Math.floor(s/100)*100).toString()},l=new URL(e);return l.searchParams.append(n.SIZE,d.MEDIUM),l.searchParams.append(n.BREAK,r()),l.searchParams.append("blankImage2","true"),l.toString()},q=({datum:e,options:n={size:"small",profileURLBase:null,fill:!1,grid:!1},appPathFolder:d})=>{var o,f,m;const r=g(e),l=A(r),c=n.profileURLBase??"",s=(o=r.eid)!=null&&o.raw&&((f=r.eid)==null?void 0:f.raw)!=="0"?r.eid.raw.toString():r.asurite_id.raw.toString();d&&(p=`${d}/img/anon.png`);const t=L(r.photo_url.raw);return a.jsx(a.Fragment,{children:s?a.jsx(u,{isRequired:!1,id:s,profileURL:`${c}/profile/${s}`,imgURL:t,anonImgURL:p,name:r.display_name.raw,matchedAffiliationTitle:l.matchedAffiliationTitle,matchedAffiliationDept:l.matchedAffiliationDept,email:r.email_address.raw,telephone:r.phone.raw,addressLine1:(m=r.campus_address)==null?void 0:m.raw,addressLine2:`${r.city.raw} ${r.state.raw}`,description:r.bio.raw,shortBio:r.short_bio.raw,facebookLink:r.facebook.raw,linkedinLink:r.linkedin.raw,twitterLink:r.twitter.raw,website:r.website.raw,size:n.size,fill:n.fill,grid:n.grid},s):null})},U=({datum:e,options:n={size:"small",fill:!1},appPathFolder:d})=>{const r=g(e);d&&(p=`${d}/img/anon.png`);const l=r.eid.raw&&r.eid.raw!=="0"?r.eid.raw.toString():r.asurite_id.raw.toString(),c=L(r.photo_url.raw);return a.jsx(u,{isRequired:!1,id:l,profileURL:`/profile/${l}`,imgURL:c,anonImgURL:p,name:r.display_name.raw,titles:r.titles.raw,email:r.email_address.raw,telephone:r.phone.raw,addressLine1:r.address_line1.raw,addressLine2:r.address_line2.raw,description:r.bio.raw,facebookLink:r.facebook.raw,linkedinLink:r.linkedin.raw,twitterLink:r.twitter.raw,size:n.size,fill:n.fill},l)},v=({datum:e,options:n={size:"small",fill:!1},appPathFolder:d,logClick:r=()=>{},requestId:l,localSection:c=null,props:s})=>{const t=g(e);let o=null;return t.meta_description?o=t.meta_description.raw:o=t.body_content.raw.replace("Skip to main content ","").replace("Skip to Main Page Content ",""),a.jsx(h,{id:t.id.raw,name:t.title.raw,area:t.url_host.raw,description:o,cookieTrail:[t.url_path_dir1.raw,t.url_path_dir2.raw],link:t.url.raw,size:n.size,fill:n.fill,logClick:r,requestId:l,localSection:c,...s},t.id.raw)};q.__docgenInfo={description:`Converts staff data into ProfileCard components.
@param {SharedProps} props
@returns {JSX.Element} The converted staff data.`,methods:[],displayName:"staffConverter",props:{options:{defaultValue:{value:`{
  size: "small",
  profileURLBase: null,
  fill: false,
  grid: false,
}`,computed:!1},required:!1}}};U.__docgenInfo={description:`Converts student data into ProfileCard components.
@param {SharedProps} props
@returns {JSX.Element} The converted student data.`,methods:[],displayName:"studentsConverter",props:{options:{defaultValue:{value:`{
  size: "small",
  fill: false,
}`,computed:!1},required:!1}}};v.__docgenInfo={description:`Converts subdomain data to a ResultCard component.

@param {Object} options - Options for configuring the conversion.
@param {Object} options.datum - The subdomain data to convert.
@param {string} [options.size="small"] - The size of the ResultCard.
@param {boolean} [options.fill=false] - Whether to fill in missing data.
@param {string} appPathFolder - The application path folder.
@param {function} [logClick=() => {}] - A callback function to log clicks.
@param {string} requestId - The request ID.
@param {string|null} [localSection=null] - The local section information.
@param {Object} props - Additional props to pass to the ResultCard component.
@returns {JSX.Element} The ResultCard component.`,methods:[],displayName:"subdomainConverter",props:{options:{defaultValue:{value:`{
  size: "small",
  fill: false,
}`,computed:!1},required:!1},logClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},localSection:{defaultValue:{value:"null",computed:!1},required:!1}}};export{U as a,v as b,q as s};
