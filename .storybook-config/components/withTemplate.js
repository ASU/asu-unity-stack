// import React from "react";

// const OneTemplate = ({ children }) => {
//   return (
//       <div className="container">
//         <div className="row">
//           <div id="html-root" className="col-12">
//             {children}
//           </div>
//         </div>
//       </div>
//   )
// }

// const sm = 12;
// const md = 5;
// const lg = 4;
// const xl = 4;
// const col1 = `pb-4 col-12 col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`;
// const col2 = `pb-4 col-12 col-sm-${12-sm} col-md-${12-md} col-lg-${12-lg} col-xl-${12-xl}`;
// const ThreeTemplate = ({ children }) => {
//   return (
//     <div className="container my-5">
//         <div className="row mt-4">
//             <div className={col1}>
//             <div className="gray-2-bg" style={{height:'100%'}}><br/></div>
//             </div>
//             <div id="html-root" className={col2}>
//                 {children}
//             </div>
//         </div>
//     </div>
//   )
// }

// const FourTemplate = ({ children }) => {
//   return (
//     <div className="container my-5">
//         <div className="row mt-4">
//             <div id="html-root" className={col1}>
//                 {children}
//             </div>
//             <div className={col2}>
//               <div className="gray-2-bg" style={{height:'max(3rem,100%)'}}>
//                 <br/>
//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// const FullTemplate = ({ children }) => {
//   return (
//     <div>
//       <div className="row g-0">
//         <div id="html-root" className="col uds-full-width">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }

// const OmitTemplate = ({ children }) => {
//   return (
//       <div id="html-root">
//         {children}
//       </div>
//   )
// }


// export const withTemplate = (StoryFn, context, c) => {
//   if (context.viewMode !== 'story') {
//     return <StoryFn/>;
//   }

//   const { globals, parameters, args } = context;
//   const argsTemplate = args.template;
//   const globalTemplate = globals.template;


//   const toolParameters = parameters.uds.template;

// const template = globalTemplate;

//   let Template = OneTemplate;

//   if(template == "0") {
//     Template = FullTemplate;
//   } else if(template == "1") {
//     Template = OneTemplate;
//   } else if(template == "3") {
//     Template = ThreeTemplate;
//   } else if(template == "4") {
//     Template = FourTemplate;
//   } else if(template == "x") {
//     Template = OmitTemplate;
//   }

//   return <Template>
//     <StoryFn />
//   </Template>;
// };
