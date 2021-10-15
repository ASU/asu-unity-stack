import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Tables', 'Molecules', 'Examples');
import './tables';

export const DefaultComponent = createStory(
  <div class="uds-table" tabindex="0">
    <table>
      <thead>
        <tr>
          <th scope="col">Enrollment</th>
          <th scope="col">Fall 2016</th>
          <th scope="col">Fall 2017</th>
          <th scope="col">Fall 2018</th>
          <th scope="col">Fall 2019</th>
          <th scope="col">Fall 2020</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><p>Metropolitan campus population</p></th>
          <td><p>71,946</p></td>
          <td>71,946</td>
          <td>71,946</td>
          <td>71,946</td>
          <td>71,946</td>
        </tr>
        <tr>
          <th scope="row" class="indent">
            Tempe
          </th>
          <td>51,869</td>
          <td>51,869</td>
          <td>51,869</td>
          <td>51,869</td>
          <td>51,869</td>
        </tr>
        <tr>
          <th scope="row" class="indent">
            Downtown
          </th>
          <td>11,737</td>
          <td>11,737</td>
          <td>11,737</td>
          <td>11,737</td>
          <td>11,737</td>
        </tr>
        <tr>
          <th scope="row" class="indent">
            Polytechnic
          </th>
          <td>4,380</td>
          <td>4,380</td>
          <td>4,380</td>
          <td>4,380</td>
          <td>4,380</td>
        </tr>
        <tr>
          <th scope="row" class="indent">
            West
          </th>
          <td>3,663</td>
          <td>3,663</td>
          <td>3,663</td>
          <td>3,663</td>
          <td>3,663</td>
        </tr>
        <tr>
          <th scope="row" class="indent">
            Thunderbird
          </th>
          <td>297</td>
          <td>297</td>
          <td>297</td>
          <td>297</td>
          <td>297</td>
        </tr>
        <tr>
          <th scope="row" class="normal">
            Skysong Campus
          </th>
          <td>26,200</td>
          <td>26,200</td>
          <td>26,200</td>
          <td>26,200</td>
          <td>26,200</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>98,146</td>
          <td>98,146</td>
          <td>98,146</td>
          <td>98,146</td>
          <td>98,146</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const FixedComponent = createStory(
  <div class="uds-table-fixed-wrapper">
    <div class="scroll-control previous">
      <button type="button" class="btn btn-circle btn-circle-alt-gray">
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </button>
    </div>

    <div class="scroll-control next">
      <button type="button" class="btn btn-circle btn-circle-alt-gray">
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </button>
    </div>

    <div class="uds-table uds-table-fixed" tabindex="0">
      <table>
        <thead>
          <tr>
            <th scope="col">Enrollment</th>
            <th scope="col">Fall 2012</th>
            <th scope="col">Fall 2013</th>
            <th scope="col">Fall 2014</th>
            <th scope="col">Fall 2015</th>
            <th scope="col">Fall 2016</th>
            <th scope="col">Fall 2017</th>
            <th scope="col">Fall 2018</th>
            <th scope="col">Fall 2019</th>
            <th scope="col">Fall 2020</th>
            <th scope="col">Fall 2021</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Metropolitan campus population</th>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
            <td>71,946</td>
          </tr>
          <tr>
            <th scope="row" class="indent">
              Tempe
            </th>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
            <td>51,869</td>
          </tr>
          <tr>
            <th scope="row" class="indent">
              Downtown
            </th>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
            <td>11,737</td>
          </tr>
          <tr>
            <th scope="row" class="indent">
              Polytechnic
            </th>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
            <td>4,380</td>
          </tr>
          <tr>
            <th scope="row" class="indent">
              West
            </th>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
            <td>3,663</td>
          </tr>
          <tr>
            <th scope="row" class="indent">
              Thunderbird
            </th>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
            <td>297</td>
          </tr>
          <tr>
            <th scope="row" class="normal">
              Skysong Campus
            </th>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
            <td>26,200</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
            <td>98,146</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
