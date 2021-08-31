import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Alignment');

export const TemporaryStory = createStory(
  <div class="container">
    <div class="row">
      <div class="col"><div class="bg-gray-4" style={{ height:"300px" }}>&nbsp;</div></div>
      <div class="col"><div class="bg-gray-2" style={{ height:"300px" }}>&nbsp;</div></div>
      <div class="col"><div class="bg-gray-4" style={{ height:"300px" }}>&nbsp;</div></div>
      <div class="col"><div class="bg-gray-2" style={{ height:"300px" }}>&nbsp;</div></div>
    </div>
  </div>
);
