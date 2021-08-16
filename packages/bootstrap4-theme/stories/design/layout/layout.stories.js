import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Layout', 'Design');


export const ColumnSizingComponent = createStory(
  <div class="container">

    <div class="row mb-6">
      <div class="col-12"><h2>Basic Column Alignments</h2></div>
    </div>

    <div class="row row-cols-5">

      <div class="col-6"><div class="bg-gray-2"><h3>Halves</h3></div></div>
      <div class="col-6"><div class="bg-gray-2"><h3>Halves</h3></div></div>

      <div class="col-4"><div class="bg-gray-4"><h3>Thirds</h3></div></div>
      <div class="col-4"><div class="bg-gray-4"><h3>Thirds</h3></div></div>
      <div class="col-4"><div class="bg-gray-4"><h3>Thirds</h3></div></div>

      <div class="col-3"><div class="bg-gray-2"><h3>Quarters</h3></div></div>
      <div class="col-3"><div class="bg-gray-2"><h3>Quarters</h3></div></div>
      <div class="col-3"><div class="bg-gray-2"><h3>Quarters</h3></div></div>
      <div class="col-3"><div class="bg-gray-2"><h3>Quarters</h3></div></div>

      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>
      <div class="col-1"><div class="bg-gray-4"><h3>Col</h3></div></div>

      <div class="col"><div class="bg-gray-7 text-white"><h3>Auto</h3></div></div>
      <div class="col"><div class="bg-gray-7 text-white"><h3>Columns</h3></div></div>
      <div class="col"><div class="bg-gray-7 text-white"><h3>Can</h3></div></div>
      <div class="col"><div class="bg-gray-7 text-white"><h3>Divide by</h3></div></div>
      <div class="col"><div class="bg-gray-7 text-white"><h3>Five</h3></div></div>

    </div>

    <div class="row my-6">
      <div class="col-12"><h2>Layout Sections</h2></div>
    </div>

    <div class="row row-cols-2 mb-6">

      <div class="col-8"><div class="bg-gray-2" style={{height: '20rem'}}><h3>Content Left</h3></div></div>
      <div class="col-4"><div class="bg-gray-2" style={{height: '20rem'}}><h3>Sidebar</h3></div></div>

      <div class="col-4"><div class="bg-gray-4" style={{height: '20rem'}}><h3>Sidebar</h3></div></div>
      <div class="col-8"><div class="bg-gray-4" style={{height: '20rem'}}><h3>Content Right</h3></div></div>

    </div>

  </div>
);
