import React from 'react';
import { _FullContainer, _Container, _Section } from './layout.templates.js';


export default {
  title: "Design/Layout"
}

export const BasicColumnAlignment = ({split}) => {
  let i = 0; // for key
  if(split == "Halves") {
    return <_Container>
    {new Array(2).fill(split).map((txt)=><div key={i++} className="col-md-6">
      <div className="bg-gray-4">
        <h3>{txt}</h3>
      </div>
    </div>)}
  </_Container>
  } else if(split == "Thirds"){
    return <_Container>
    {new Array(3).fill(split).map((txt)=><div key={i++} className="col-md-4">
      <div className="bg-gray-4">
        <h3>{txt}</h3>
      </div>
    </div>)}
  </_Container>
  } else if(split == "Quarters"){

    return <_Container>
      {new Array(4).fill(split).map((txt)=><div key={i++} className="col-md-3">
        <div className="bg-gray-4">
          <h3>{txt}</h3>
        </div>
      </div>)}
    </_Container>
  } else if(split == "Twelves"){
    return <_Container>
      {new Array(12).fill("12").map((txt)=><div key={i++} className="col-md-1">
        <div className="bg-gray-4">
          <h3>{txt}</h3>
        </div>
      </div>)}
    </_Container>
  } else if(split == "Auto"){
    return <_Container>
    {["Auto","Columns","Can","Divide by","Five"].map((txt)=><div key={i++} className="col">
      <div className="bg-gray-7 text-white">
        <h3>{txt}</h3>
      </div>
    </div>)}
  </_Container>
  } else {
    return <_Container> <div className="col-12">
    <div className="bg-gray-2">
      <h3>Full</h3>
    </div>
  </div></_Container>
  }
}
BasicColumnAlignment.argTypes = {
  split: {
    name: "Split",
    options: ["Full","Halves","Thirds","Quarters","Twelves","Auto"],
    control:{type:"inline-radio"}
  }
}
BasicColumnAlignment.args = {
  split: "Full"
}

export const LayoutSections = ({layout}) => {
  if(layout=="Content Left"){
    return <_Container>
      <div className="col-md-8">
        <div className="bg-gray-2" style={{ height: "20rem" }}>
          <h3>Content Left</h3>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-gray-2" style={{ height: "20rem" }}>
          <h3>Sidebar</h3>
        </div>
      </div>
    </_Container>
  } else if(layout=="Content Right"){
    return <_Container>
      <div className="col-md-4">
        <div className="bg-gray-4" style={{ height: "20rem" }}>
          <h3>Sidebar</h3>
        </div>
      </div>
      <div className="col-md-8">
        <div className="bg-gray-4" style={{ height: "20rem" }}>
          <h3>Content Right</h3>
        </div>
      </div>
    </_Container>

  } else if(layout=="No Sidebar"){
    return <_Container>
        <div className="bg-gray-4" style={{ height: "20rem" }}>
          <h3>Content</h3>
        </div>
    </_Container>

  } else {
    return <_FullContainer>
      <div className="bg-gray-4" style={{ height: "20rem" }}>
          <h3>Full Width Content is meant for Heroes, etc.</h3>
        </div>
    </_FullContainer>

  }
}
LayoutSections.argTypes = {
  layout: {
    name: "Layout",
    options: ["Content Left","Content Right","No Sidebar","Full Width"],
    control:{type:"inline-radio"}
  }
}
LayoutSections.args = {
  layout: "Content Left"
}

export const Section = (args={}) => <_Section {...args}>Section</_Section>;

Section.argTypes = {
  className: {
    name: "Class",
    options: ["white-bg","gray-1-bg","gray-2-bg","gray-7-bg text-white"],
    control:{type:"inline-radio"}
  }
}
Section.args = {
  className: "white-bg"
}
