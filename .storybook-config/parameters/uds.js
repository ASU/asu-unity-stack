
export const uds = {
  template: {
    values: [
      {value: "x",title:"Omit Template",right:"No Container"},
      {value: 0, title:"Full Width",right:"Responsive Width"},
      {value: 1, title:"1 Column",right:"Fixed Width"},
      {value: 2, title:"2 Columns",right:"Fixed Width"},
      {value: 3, title:"Content ",right:"With Sidebar"},
      {value: 4, title:"Sidebar",right:"With Content"},
    ],
    include:["x",0,1,2,3,4],
    defaultValue: 1

  }
};
