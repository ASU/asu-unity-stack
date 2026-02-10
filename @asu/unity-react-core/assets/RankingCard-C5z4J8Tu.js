import{j as e}from"./jsx-runtime-VU7BY01E.js";import{r as f}from"./index-BebQxa19.js";import{s as h}from"./html-utils-Cf06jDgj.js";import{P as a}from"./Layout-XUDhei8Q.js";import{c as d}from"./index-X6w4Ppxe.js";import{u as q,G as x}from"./GaEventWrapper-C3Yx4ICT.js";import{I as y}from"./Image-DPWP6VF1.js";const k={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},j={OPEN:"open",CLOSE:"close"},v={SMALL:"small"},R=r=>r===v.SMALL,S=({imageSize:r,body:t,heading:n,readMoreLink:o})=>{const[i,c]=f.useState(!1),m=f.useId(),{isReact:s,isBootstrap:u}=q(),p=`info-layer-${m}`,l=R(r),N=g=>{(g.type==="click"||g.key==="Enter"||g.key===" ")&&c(!i)};return e.jsx("div",{className:d("info-layer",{show:i}),"data-testid":"info-layer",id:p,children:e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:d("header",{closed:l&&!i}),children:[l&&e.jsx("p",{dangerouslySetInnerHTML:h(t)}),e.jsx(x,{gaData:{...k,text:"Expand ranking",action:i?j.OPEN:j.CLOSE,section:n},children:e.jsxs("button",{"data-bs-toggle":u&&"collapse","data-bs-target":u&&`#${p}`,onClick:s&&N,className:d("btn-expand",{btn:l}),type:"button","aria-expanded":i,"aria-controls":p,children:[l?e.jsx("span",{className:"visually-hidden",children:n}):e.jsx("h4",{children:n}),e.jsx("i",{className:"fas fa-chevron-up"})]})})]}),!l&&e.jsx("p",{dangerouslySetInnerHTML:h(t)}),o&&e.jsx(x,{gaData:{...k,section:n,text:"read more"},children:e.jsxs("a",{href:o,className:"read-more",children:["Read more ",e.jsx("span",{className:"visually-hidden",children:n}),e.jsx("span",{className:"fas icon-small fa-arrow-right","aria-hidden":"true"})]})})]})})};S.propTypes={imageSize:a.oneOf(["small","large"]),body:a.string.isRequired,heading:a.string.isRequired,readMoreLink:a.string};const L=({imageSize:r="large",image:t,imageAlt:n,heading:o,body:i,readMoreLink:c="",citation:m})=>{const s=R(r);return e.jsxs("div",{className:d("card-ranking",{"large-image":!s,"small-image":s}),children:[s?e.jsx("div",{className:"image-wrapper",children:e.jsx(y,{src:t,alt:n,fetchPriority:"high"})}):e.jsx(y,{src:t,alt:n,fetchPriority:"high"}),s&&e.jsxs("div",{className:"citation",children:[e.jsx("h4",{children:o}),e.jsxs("p",{children:["— ",m]})]}),e.jsx(S,{imageSize:r,body:i,heading:o,readMoreLink:c})]})};L.propTypes={imageSize:a.oneOf(["small","large"]).isRequired,image:a.string.isRequired,imageAlt:a.string.isRequired,heading:a.string.isRequired,body:a.string.isRequired,readMoreLink:a.string,citation:a.string};L.__docgenInfo={description:`A ranking card component that displays an image with an info layer overlay.
Supports both large and small image sizes with different layout configurations.

@param {RankingCardProps} props - The component props
@returns {JSX.Element} The rendered ranking card component

@example
\`\`\`jsx
import { RankingCard } from './RankingCard';

<RankingCard
  imageSize="small"
  image="/path/to/image.jpg"
  imageAlt="Description of image"
  heading="Card Title"
  body="Card description text"
  readMoreLink="/more-info"
  citation="Source Citation"
/>
\`\`\``,methods:[],displayName:"RankingCard",props:{imageSize:{defaultValue:{value:'"large"',computed:!1},description:"Size of ranking card",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"large"',computed:!1}]},required:!1},readMoreLink:{defaultValue:{value:'""',computed:!1},description:"Link for read more",type:{name:"string"},required:!1},image:{description:"Ranking card image",type:{name:"string"},required:!0},imageAlt:{description:"Card header image alt text",type:{name:"string"},required:!0},heading:{description:"Ranking card heading",type:{name:"string"},required:!0},body:{description:"Ranking card body content",type:{name:"string"},required:!0},citation:{description:"Ranking card citation content (Required for small size only)",type:{name:"string"},required:!1}}};export{L as R};
