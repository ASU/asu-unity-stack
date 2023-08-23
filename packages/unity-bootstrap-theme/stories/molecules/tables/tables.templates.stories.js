import { createComponent, createStory } from "../../../helpers/wrapper.js";

const extraOptions = {
  fixed: {
    name: "Fixed",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default createComponent(
  "Tables",
  "Molecules",
  "Templates",
  extraOptions
);
import { initTables as initFunc } from "./tables";

export const DefaultComponent = createStory(
  <div className="uds-table" tabIndex="0">
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
          <th scope="row">
            <p>
              use of <code>&lt;a&gt;</code> in cells{" "}
              <a href="#">example link</a>
            </p>
          </th>
          <td>
            <p>
              Lorem ipsum dolor sit amet <a href="#">consectetur</a> adipisicing
              elit. Officia, vero. Quasi temporibus mollitia, quia doloribus
              quam tenetur a eos iste repellendus distinctio vitae velit aperiam
              esse facere odio qui ipsa.
            </p>
          </td>
          <td>71,946</td>
          <td>71,946</td>
          <td>71,946</td>
          <td>71,946</td>
        </tr>
        <tr>
          <th scope="row" className="indent">
            Tempe
          </th>
          <td>51,869</td>
          <td>51,869</td>
          <td>51,869</td>
          <td>51,869</td>
          <td>51,869</td>
        </tr>
        <tr>
          <th scope="row" className="indent">
            Downtown
          </th>
          <td>11,737</td>
          <td>11,737</td>
          <td>11,737</td>
          <td>11,737</td>
          <td>11,737</td>
        </tr>
        <tr>
          <th scope="row" className="indent">
            Polytechnic
          </th>
          <td>4,380</td>
          <td>4,380</td>
          <td>4,380</td>
          <td>4,380</td>
          <td>4,380</td>
        </tr>
        <tr>
          <th scope="row" className="indent">
            West
          </th>
          <td>3,663</td>
          <td>3,663</td>
          <td>3,663</td>
          <td>3,663</td>
          <td>3,663</td>
        </tr>
        <tr>
          <th scope="row" className="indent">
            Thunderbird
          </th>
          <td>297</td>
          <td>297</td>
          <td>297</td>
          <td>297</td>
          <td>297</td>
        </tr>
        <tr>
          <th scope="row" className="normal">
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
DefaultComponent.parameters = {
  uds: {
    template: {
      include: [1,3]
    }
  }
};
export const FixedComponent = createStory(
  <div className="uds-table-fixed-wrapper">
    <div className="scroll-control previous">
      <button type="button" className="btn btn-circle btn-circle-alt-gray">
        <i className="fas fa-chevron-left"></i>
        <span className="visually-hidden">Previous</span>
      </button>
    </div>

    <div className="scroll-control next">
      <button type="button" className="btn btn-circle btn-circle-alt-gray">
        <i className="fas fa-chevron-right"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="uds-table uds-table-fixed" tabIndex="0">
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
            <th scope="row" className="indent">
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
            <th scope="row" className="indent">
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
            <th scope="row" className="indent">
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
            <th scope="row" className="indent">
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
            <th scope="row" className="indent">
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
            <th scope="row" className="normal">
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
  </div>,
  {
    initFunc,
  }
);

FixedComponent.parameters = {
  uds: {
    template: {
      include: [1,3]
    }
  }
};
