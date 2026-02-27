import{A as N,d as C,T as r,K as e,D as i}from"./story.helper-CsE7kW-N.js";import"./index-DqL-iMyr.js";import"./index-B25KqYl3.js";import"./extends-CF3RwP-h.js";const _={title:"UDS/Testing",component:N,parameters:{docs:{description:{component:`TODO Put the AsuRfi docs here. Empower all the people!
        `}}}},t={...C,test:!0},n={render:r.bind({}),args:{...t,areaOfInterestOptional:!0}},s={render:r.bind({}),args:{...t,programOfInterestOptional:!0}},a={render:r.bind({}),args:{...t,campus:e.ONLINE,variant:e.VARIANT2,studentType:e.GRADUATE,programOfInterest:"LWLW-LWLGSMLEGS--CONFLICTLAW"}},o={render:r.bind({}),args:{...t,campus:e.GROUND,studentType:e.GRADUATE,areaOfInterest:"STEM",programOfInterest:"TSSMACSPHD",country:"US",stateProvince:"California"}},c={render:r.bind({}),args:{...t,actualCampus:"POLY",studentType:e.UNDERGRAD,country:"DZ",successMsg:"Success. <strong>You made it.</strong>",dataSourceDegreeSearch:i.DEGREE_SEARCH,dataSourceAsuOnline:i.ASU_ONLINE,dataSourceCountriesStates:i.COUNTRIES_STATES}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    areaOfInterestOptional: true
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,O,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    programOfInterestOptional: true
  }
}`,...(g=(O=s.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var S,A,E;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    campus: KEY.ONLINE,
    variant: KEY.VARIANT2,
    studentType: KEY.GRADUATE,
    programOfInterest: "LWLW-LWLGSMLEGS--CONFLICTLAW"
  }
}`,...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var T,l,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    campus: KEY.GROUND,
    // ONLNE, GROUND, NOPREF
    studentType: KEY.GRADUATE,
    areaOfInterest: "STEM",
    programOfInterest: "TSSMACSPHD",
    country: "US",
    stateProvince: "California" // Only US states or CA provinces
  }
}`,...(D=(l=o.parameters)==null?void 0:l.docs)==null?void 0:D.source}}};var f,R,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    actualCampus: "POLY",
    // TEMPE, DTPHX, POLY, WEST, ONLNE...
    studentType: KEY.UNDERGRAD,
    country: "DZ",
    successMsg: "Success. <strong>You made it.</strong>",
    dataSourceDegreeSearch: DATA_SOURCE.DEGREE_SEARCH,
    dataSourceAsuOnline: DATA_SOURCE.ASU_ONLINE,
    dataSourceCountriesStates: DATA_SOURCE.COUNTRIES_STATES
  }
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const Y=["AreaOfInterestOptional","ProgramOfInterestOptional","OnlineProgramWithConcentration","TestMode","DevTester"];export{n as AreaOfInterestOptional,c as DevTester,a as OnlineProgramWithConcentration,s as ProgramOfInterestOptional,o as TestMode,Y as __namedExportsOrder,_ as default};
