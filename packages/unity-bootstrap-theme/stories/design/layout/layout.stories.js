import React from "react";
import { htmlRootDecorator } from "@asu/shared";
export default {
  title: "Design/Layout",
  decorators: [htmlRootDecorator],
  parameters: { controls: { disable: true } },
};

export const ColumnSizingComponent = () => (
  <div className="container">
    <div className="row mb-6">
      <div className="col-12">
        <h2>Basic Column Alignments</h2>
      </div>
    </div>

    <div className="row row-cols-5">
      <div className="col-6">
        <div className="text-bg-light">
          <h3>Halves</h3>
        </div>
      </div>
      <div className="col-6">
        <div className="text-bg-light">
          <h3>Halves</h3>
        </div>
      </div>

      <div className="col-4">
        <div className="text-bg-dark text-white">
          <h3>Thirds</h3>
        </div>
      </div>
      <div className="col-4">
        <div className="text-bg-dark text-white">
          <h3>Thirds</h3>
        </div>
      </div>
      <div className="col-4">
        <div className="text-bg-dark text-white">
          <h3>Thirds</h3>
        </div>
      </div>

      <div className="col-3">
        <div className="text-bg-light">
          <h3>Quarters</h3>
        </div>
      </div>
      <div className="col-3">
        <div className="text-bg-light">
          <h3>Quarters</h3>
        </div>
      </div>
      <div className="col-3">
        <div className="text-bg-light">
          <h3>Quarters</h3>
        </div>
      </div>
      <div className="col-3">
        <div className="text-bg-light">
          <h3>Quarters</h3>
        </div>
      </div>

      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>
      <div className="col-1">
        <div className="text-bg-dark text-white">
          <h3>Col</h3>
        </div>
      </div>

      <div className="col">
        <div className="text-bg-dark text-white">
          <h3>Auto</h3>
        </div>
      </div>
      <div className="col">
        <div className="text-bg-dark text-white">
          <h3>Columns</h3>
        </div>
      </div>
      <div className="col">
        <div className="text-bg-dark text-white">
          <h3>Can</h3>
        </div>
      </div>
      <div className="col">
        <div className="text-bg-dark text-white">
          <h3>Divide by</h3>
        </div>
      </div>
      <div className="col">
        <div className="text-bg-dark text-white">
          <h3>Five</h3>
        </div>
      </div>
    </div>

    <div className="row my-6">
      <div className="col-12">
        <h2>Layout Sections</h2>
      </div>
    </div>

    <div className="row row-cols-2 mb-6">
      <div className="col-8">
        <div className="text-bg-light" style={{ height: "20rem" }}>
          <h3>Content Left</h3>
        </div>
      </div>
      <div className="col-4">
        <div className="text-bg-light" style={{ height: "20rem" }}>
          <h3>Sidebar</h3>
        </div>
      </div>

      <div className="col-4">
        <div className="text-bg-dark text-white" style={{ height: "20rem" }}>
          <h3>Sidebar</h3>
        </div>
      </div>
      <div className="col-8">
        <div className="text-bg-dark text-white" style={{ height: "20rem" }}>
          <h3>Content Right</h3>
        </div>
      </div>
    </div>
  </div>
);
